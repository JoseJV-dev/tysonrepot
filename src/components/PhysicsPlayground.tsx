import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import * as d3 from 'd3';
import { useTheme } from './ThemeProvider';
import { Target, MoveRight } from 'lucide-react';

export function PhysicsPlayground() {
  const { theme } = useTheme();
  const d3Container = useRef<HTMLDivElement>(null);
  
  const [velocity, setVelocity] = useState(50);
  const [angle, setAngle] = useState(45); // degrees
  const [gravity] = useState(9.8);
  
  useEffect(() => {
    if (!d3Container.current) return;
    
    // Clear previous drawing
    d3.select(d3Container.current).selectAll('*').remove();
    
    // Dimensions
    const width = d3Container.current.clientWidth;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };
    
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Calculate trajectory data
    const angleRad = angle * (Math.PI / 180);
    const v0x = velocity * Math.cos(angleRad);
    const v0y = velocity * Math.sin(angleRad);
    
    // Time of flight: t = 2 * v0y / g
    const tFlight = (2 * v0y) / gravity;
    
    const numPoints = 100;
    const data: { x: number; y: number }[] = [];
    
    for (let i = 0; i <= numPoints; i++) {
      const t = (tFlight * i) / numPoints;
      const x = v0x * t;
      const y = v0y * t - 0.5 * gravity * t * t;
      data.push({ x, y: Math.max(0, y) }); // Prevent negative Y
    }
    
    const maxX = Math.max(v0x * tFlight, 100); // Scale X
    const maxY = Math.max((v0y * v0y) / (2 * gravity), 50); // Scale Y
    
    // Create SVG
    const svg = d3.select(d3Container.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
      
    // Scales
    const xScale = d3.scaleLinear()
      .domain([0, maxX * 1.1])
      .range([0, innerWidth]);
      
    const yScale = d3.scaleLinear()
      .domain([0, maxY * 1.2])
      .range([innerHeight, 0]);
      
    // Axes
    const xAxis = d3.axisBottom(xScale).ticks(10);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    
    // Style axes based on theme
    const axisColor = theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
    
    svg.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis)
      .selectAll('text').style('fill', axisColor);
      
    svg.append('g')
      .call(yAxis)
      .selectAll('text').style('fill', axisColor);
      
    svg.selectAll('.domain, .tick line').style('stroke', axisColor);
    
    // Axis labels
    svg.append('text')
      .attr('x', innerWidth / 2)
      .attr('y', innerHeight + 35)
      .style('text-anchor', 'middle')
      .style('fill', axisColor)
      .style('font-size', '12px')
      .text('Distância (m)');
      
    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -innerHeight / 2)
      .attr('y', -35)
      .style('text-anchor', 'middle')
      .style('fill', axisColor)
      .style('font-size', '12px')
      .text('Altura (m)');
    
    // Line generator
    const line = d3.line<{ x: number; y: number }>()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveBasis);
      
    // Draw trajectory line
    const path = svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', theme === 'dark' ? '#ccff00' : '#0055ff') // Neon or Azul
      .attr('stroke-width', 3)
      .attr('d', line);
      
    // Animate path
    const totalLength = path.node()?.getTotalLength() || 0;
    
    path
      .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr('stroke-dashoffset', 0);
      
    // Add a moving ball
    const ball = svg.append('circle')
      .attr('r', 6)
      .attr('fill', theme === 'dark' ? '#ccff00' : '#0055ff')
      .attr('transform', `translate(${xScale(data[0].x)},${yScale(data[0].y)})`);
      
    ball.transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attrTween('transform', function() {
        return function(t) {
          const idx = Math.floor(t * (data.length - 1));
          if (idx >= data.length) return `translate(${xScale(data[data.length-1].x)},${yScale(data[data.length-1].y)})`;
          const p = data[idx];
          return `translate(${xScale(p.x)},${yScale(p.y)})`;
        };
      });

  }, [velocity, angle, gravity, theme]);

  return (
    <section id="physics-playground" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-azul/30 bg-azul/10 text-xs font-bold tracking-widest text-neon mb-6 uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(0,85,255,0.2)]">
            Laboratório Interativo
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-center">
            Playground de Física
          </h2>
          <p className={`max-w-2xl text-center ${theme === 'dark' ? 'text-branco/60' : 'text-slate-600'}`}>
            Explore a cinemática e as leis de movimento. Ajuste os parâmetros abaixo para simular a trajetória de um projétil utilizando D3.js.
          </p>
        </div>

        <div className={`rounded-2xl border ${theme === 'dark' ? 'border-white/10 bg-[#0d1520]' : 'border-black/5 bg-white'} shadow-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8`}>
          
          {/* Controls Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className={theme === 'dark' ? 'text-neon' : 'text-azul'} /> Parâmetros
              </h3>
              
              {/* Velocity Control */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-sm font-bold tracking-widest uppercase ${theme === 'dark' ? 'text-branco/70' : 'text-slate-600'}`}>
                    Velocidade (v₀)
                  </label>
                  <span className={`text-sm font-mono font-bold ${theme === 'dark' ? 'text-neon' : 'text-azul'}`}>
                    {velocity} m/s
                  </span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={velocity}
                  onChange={(e) => setVelocity(Number(e.target.value))}
                  className="w-full accent-azul h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                />
              </div>

              {/* Angle Control */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-sm font-bold tracking-widest uppercase ${theme === 'dark' ? 'text-branco/70' : 'text-slate-600'}`}>
                    Ângulo (θ)
                  </label>
                  <span className={`text-sm font-mono font-bold ${theme === 'dark' ? 'text-neon' : 'text-azul'}`}>
                    {angle}°
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="90" 
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="w-full accent-azul h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                />
              </div>
            </div>

            <div className={`p-5 rounded-xl border ${theme === 'dark' ? 'bg-branco/5 border-branco/10' : 'bg-black/5 border-black/10'}`}>
               <h4 className="text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                 <MoveRight className={`w-4 h-4 ${theme === 'dark' ? 'text-neon' : 'text-azul'}`} /> Equações
               </h4>
               <div className={`font-mono text-xs space-y-2 ${theme === 'dark' ? 'text-branco/60' : 'text-slate-600'}`}>
                 <p>x(t) = v₀ · cos(θ) · t</p>
                 <p>y(t) = v₀ · sin(θ) · t - ½gt²</p>
               </div>
            </div>
          </div>

          {/* D3 Visualization Area */}
          <div className="lg:w-2/3 flex flex-col min-h-[400px]">
            <div 
              ref={d3Container} 
              className="w-full h-full flex-grow relative"
            >
              {/* D3 will inject the SVG here */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
