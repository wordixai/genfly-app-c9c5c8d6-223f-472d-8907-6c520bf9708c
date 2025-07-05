import { ExternalLink } from 'lucide-react';
export default function FeatureCards() {
  const features = [{
    title: 'One API for Any Model',
    description: 'Access all major models through a single, unified interface. OpenAI SDK works out of the box.',
    link: '/models',
    linkText: 'Browse all',
    visual: 'floating-icons'
  }, {
    title: 'Higher Availability',
    description: 'Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.',
    link: '/docs/features/uptime-optimization',
    linkText: 'Learn more',
    visual: 'routing-diagram'
  }, {
    title: 'Price and Performance',
    description: 'Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.',
    link: '/docs/features/provider-routing#provider-sorting',
    linkText: 'Learn more',
    visual: 'performance-chart'
  }, {
    title: 'Custom Data Policies',
    description: 'Protect your organization with fine-grained data policies. Ensure prompts only go to the models and providers you trust.',
    link: '/docs',
    linkText: 'View docs',
    visual: 'security-diagram'
  }];
  const providerIcons = ['https://openrouter.ai/images/icons/Microsoft.svg', 'https://openrouter.ai/images/icons/Perplexity.svg', 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://minimaxi.com/&size=256', 'https://openrouter.ai/images/icons/Qwen.png', 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://allenai.org/&size=256', 'https://openrouter.ai/images/icons/DeepSeek.png', 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://huggingface.co/&size=256', 'https://openrouter.ai/images/icons/Cohere.png', 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://ai.meta.com/&size=256', 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nvidia.com/&size=256', 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nousresearch.com/&size=256', 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://x.ai/&size=256', 'https://openrouter.ai/images/icons/Anthropic.svg', 'https://openrouter.ai/images/icons/OpenAI.svg', 'https://openrouter.ai/images/icons/GoogleGemini.svg', 'https://openrouter.ai/images/icons/Bedrock.svg'];
  const FloatingIcons = () => <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
      {providerIcons.slice(0, 25).map((icon, index) => <div key={index} className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out" style={{
      animation: `4s ease-in-out ${index * 150}ms infinite normal none running float${index % 25}`,
      opacity: 0.85,
      transform: index > 4 && index < 10 ? 'translateX(36px)' : index >= 15 && index < 20 ? 'translateX(36px)' : 'translateX(0)'
    }}>
          <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
            <div className="overflow-hidden rounded-full">
              <img width="256" height="256" alt={`Provider ${index + 1}`} className={`h-full w-full object-cover ${icon.includes('OpenAI') ? 'dark:invert' : ''}`} src={icon} />
            </div>
          </div>
        </div>)}
    </div>;
  const RoutingDiagram = () => <div className="h-full flex items-center justify-center">
      <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
        <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">anthropic/claude-3.7-sonnet</div>
        <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground/60">
          <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75"></path>
          <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75"></path>
          <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75"></path>
        </svg>
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
            <img src="https://openrouter.ai/images/icons/GoogleGemini.svg" alt="Google" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
            <img src="https://openrouter.ai/images/icons/Anthropic.svg" alt="Anthropic" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
            <img src="https://openrouter.ai/images/icons/Bedrock.svg" alt="Amazon" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>;
  const PerformanceChart = () => <div className="relative flex h-full items-center justify-center">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-slate-50 via-transparent opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-slate-50 via-transparent opacity-20"></div>
      </div>
      <div className="h-full w-full bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg flex items-center justify-center">
        <div className="text-xs text-muted-foreground">Performance Chart</div>
      </div>
    </div>;
  const SecurityDiagram = () => <div className="relative flex h-full items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>;
  return <div className="space-y-4 md:space-y-8">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {features.map((feature, index) => <a key={feature.title} className="h-full" href={feature.link}>
            <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-300 hover:text-slate-800 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
              <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50 opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50 opacity-30"></div>
                  </div>
                  {feature.visual === 'floating-icons' && <FloatingIcons />}
                  {feature.visual === 'routing-diagram' && <RoutingDiagram />}
                  {feature.visual === 'performance-chart' && <PerformanceChart />}
                  {feature.visual === 'security-diagram' && <SecurityDiagram />}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 px-6 py-4 h-full">
                <div className="flex flex-col gap-2 h-full">
                  <h3 className="text-2xl font-semibold group-hover/card:text-slate-800 transition-colors duration-200">Price and Performance{feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.{feature.description}</p>
                </div>
                <span className="text-primary group-hover/card:underline">
                  {feature.linkText}
                  <ExternalLink className="ml-1 inline-block w-4" />
                </span>
              </div>
            </div>
          </a>)}
      </div>
    </div>;
}