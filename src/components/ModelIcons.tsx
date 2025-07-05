import { Button } from '@/components/ui/button';

export function ModelIcons() {
  const modelIcons = [
    { name: 'google', src: 'https://openrouter.ai/images/icons/GoogleGemini.svg' },
    { name: 'openai', src: 'https://openrouter.ai/images/icons/OpenAI.svg' },
    { name: 'anthropic', src: 'https://openrouter.ai/images/icons/Anthropic.svg' },
  ];

  return (
    <>
      {/* Mobile routing curves */}
      <div className="block md:hidden">
        <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <title>Routing Curves</title>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M155 2C160 15 60 5 60 18" className="origin-center transition-all duration-300 text-slate-400" />
            <path d="M160 2C160 12 160 15 160 18" className="origin-center transition-all duration-300 text-primary" />
            <path d="M165 2C160 15 260 5 260 18" className="origin-center transition-all duration-300 text-slate-400" />
          </g>
          <g className="text-slate-400">
            <circle cy="24" cx="60" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-400" />
            <circle cy="24" cx="160" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
            <circle cy="24" cx="260" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-400" />
          </g>
        </svg>
        
        <div className="grid grid-cols-3 gap-4 pb-3">
          {modelIcons.map((model, index) => (
            <Button
              key={model.name}
              className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4"
              type="button"
            >
              <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className="overflow-hidden rounded-full">
                  <img 
                    width="256" 
                    height="256" 
                    alt={`Favicon for ${model.name}`} 
                    className={`h-full w-full object-cover ${model.name === 'openai' ? 'dark:invert' : ''}`} 
                    src={model.src} 
                  />
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}