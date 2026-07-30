import { MapPin, Figma, Linkedin, Dribbble, Twitter } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

export function IntroScreen() {
  const { theme } = useTheme();

  return (
    <div className={`w-full min-h-screen flex flex-col p-4 md:p-6 ${theme === 'dark' ? 'bg-[#18191A] text-white' : 'bg-[#F5F3EC] text-[#2D2D2A]'}`}>
      <div className={`w-full flex-grow rounded-[32px] md:rounded-[40px] flex flex-col ${theme === 'dark' ? 'bg-[#242526]' : 'bg-white'} shadow-sm overflow-hidden p-6 md:p-10 relative`}>
        
        {/* Header */}
        <header className="flex justify-between items-center mb-6 md:mb-8 shrink-0 relative z-50">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Vetor Zero" className="h-8 object-contain" />
            <span className="font-bold text-base md:text-lg tracking-tight hidden sm:block">VETOR ZERO</span>
          </div>
          <div className="flex items-center gap-4">
            <button className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#2D2D2A] text-white hover:bg-black'}`}>
              Agendar Reunião
            </button>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 flex-grow items-center pb-4 min-h-0">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center max-w-xl h-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 text-[10px] md:text-xs font-bold uppercase tracking-wider w-fit mb-4 md:mb-5 border border-teal-200 dark:border-teal-800">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-teal-500 animate-pulse" />
              Disponível para projetos
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter mb-4 md:mb-5 font-sans">
              Olá, sou <br />
              um criador <br />
              digital©
            </h1>
            
            <p className={`text-xs md:text-sm mb-6 max-w-md ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Com 11 anos de experiência trabalhando em produtos úteis e conscientes junto com startups e marcas conhecidas.
            </p>
            
            <button className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full w-fit text-xs md:text-sm font-bold transition-transform hover:scale-105 ${theme === 'dark' ? 'bg-white text-black' : 'bg-[#2D2D2A] text-white'}`}>
              Fale Conosco
            </button>
          </div>

          {/* Right Column - Bento Grid */}
          <div className="grid grid-cols-2 gap-3 auto-rows-fr h-full max-h-[500px]">
            
            {/* Card 1: Info/Location */}
            <div className={`p-4 md:p-5 rounded-[20px] flex flex-col justify-between ${theme === 'dark' ? 'bg-[#18191A]' : 'bg-[#F5F3EC]'}`}>
               <div>
                 <h3 className="text-base md:text-lg font-bold mb-1">Vetor Zero</h3>
                 <p className="text-[10px] md:text-xs text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Luanda, Angola</p>
               </div>
               <div className="mt-3">
                 <div className="w-full h-16 md:h-20 rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden relative mb-2.5">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Map" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white dark:bg-black text-black dark:text-white px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-bold shadow flex items-center gap-1">
                        <Figma className="w-2.5 h-2.5" /> ESPECIALISTA
                      </span>
                    </div>
                 </div>
                 <div className="bg-blue-100 text-blue-700 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full w-fit">
                   $150 - $300/HR
                 </div>
               </div>
            </div>

            {/* Card 2: Photo */}
            <div className="rounded-[20px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 3: Brands */}
            <div className="col-span-2 md:col-span-1 rounded-[20px] bg-gradient-to-br from-[#8799FF] to-[#A9B5FF] p-4 md:p-5 flex flex-col justify-between text-white">
              <p className="text-[10px] md:text-xs font-medium mb-3 opacity-90 leading-tight">
                As marcas mais recentes com as quais trabalhei felizmente {'<3'}
              </p>
              <div className="flex items-center gap-2 flex-wrap opacity-90">
                <span className="font-bold text-sm md:text-base tracking-widest">SQUARESPACE</span>
                <span className="font-bold text-sm md:text-base tracking-widest">asana</span>
              </div>
            </div>

            {/* Card 4: Socials */}
            <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-2 md:gap-3">
              {[
                { icon: Figma, color: 'text-orange-500' },
                { icon: Linkedin, color: 'text-blue-600' },
                { icon: Dribbble, color: 'text-pink-500' },
                { icon: Twitter, color: 'text-black dark:text-white' }
              ].map((social, i) => (
                <div key={i} className={`flex items-center justify-center rounded-[16px] md:rounded-[20px] ${theme === 'dark' ? 'bg-[#18191A]' : 'bg-[#F5F3EC]'}`}>
                  <social.icon className={`w-5 h-5 md:w-6 md:h-6 ${social.color}`} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
