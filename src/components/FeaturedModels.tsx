import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FeaturedModels() {
  const featuredModels = [
    {
      name: 'Gemini 2.5 Pro',
      provider: 'google',
      icon: 'https://openrouter.ai/images/icons/GoogleGemini.svg',
      tokens: '114.5B',
      latency: '2.6s',
      growth: '+131.79%',
      growthColor: 'text-green-600'
    },
    {
      name: 'GPT-4.1',
      provider: 'openai',
      icon: 'https://openrouter.ai/images/icons/OpenAI.svg',
      tokens: '33.3B',
      latency: '385ms',
      growth: '-11.39%',
      growthColor: 'text-red-600',
      featured: true
    },
    {
      name: 'Claude Sonnet 4',
      provider: 'anthropic',
      icon: 'https://openrouter.ai/images/icons/Anthropic.svg',
      tokens: '291.0B',
      latency: '2.2s',
      growth: '-13.99%',
      growthColor: 'text-red-600'
    }
  ];

  return (
    <>
      {/* Mobile Featured Models */}
      <div className="md:hidden">
        <div className="group/card text-card-foreground transition-all duration-200 hover:text-slate-800 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary md:border-primary">
          <div className="space-y-2">
            <div>
              <a className="hover:underline" href="#">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-foreground font-medium">GPT-4.1</h3>
                  </div>
                  <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                    <div className="overflow-hidden rounded-full dark:invert">
                      <img width="256" height="256" alt="Favicon for openai" className="h-full w-full object-cover" src="https://openrouter.ai/images/icons/OpenAI.svg" />
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex items-center">
                <span className="text-muted-foreground text-xs">by <a className="text-primary hover:underline" href="#">openai</a></span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
              <div>
                <p className="text-green-600 text-sm font-medium">33.3B</p>
                <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
              </div>
              <div>
                <p className="text-sm font-medium">385ms</p>
                <p className="text-muted-foreground text-[10px]">Latency</p>
              </div>
              <div>
                <p className="text-sm font-medium text-red-600">-11.39%</p>
                <p className="text-muted-foreground text-[10px]">Weekly growth</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between px-2 pt-4">
          <h2 className="text-slate-500 text-sm font-medium">Featured Models</h2>
          <a className="text-primary text-xs hover:underline" href="#">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </a>
        </div>
      </div>

      {/* Desktop Featured Models */}
      <div className="hidden space-y-3 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-500 text-sm font-medium">Featured Models</h2>
          <Button className="text-primary gap-0 text-xs hover:underline" variant="link" size="sm">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </Button>
        </div>
        
        {featuredModels.map((model, index) => (
          <div key={model.name} className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-800 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${model.featured ? 'md:border-primary' : 'border-slate-300'}`}>
            <div className="space-y-2">
              <div>
                <a className="hover:underline" href="#">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-foreground font-medium">{model.name}</h3>
                    </div>
                    <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <div className="overflow-hidden rounded-full">
                        <img 
                          width="256" 
                          height="256" 
                          alt={`Favicon for ${model.provider}`} 
                          className={`h-full w-full object-cover ${model.provider === 'openai' ? 'dark:invert' : ''}`} 
                          src={model.icon} 
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex items-center">
                  <span className="text-muted-foreground text-xs">
                    by <a className="text-primary hover:underline" href="#">{model.provider}</a>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
                <div>
                  <p className="text-green-600 text-sm font-medium">{model.tokens}</p>
                  <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{model.latency}</p>
                  <p className="text-muted-foreground text-[10px]">Latency</p>
                </div>
                <div>
                  <p className={`text-sm font-medium ${model.growthColor}`}>{model.growth}</p>
                  <p className="text-muted-foreground text-[10px]">Weekly growth</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}