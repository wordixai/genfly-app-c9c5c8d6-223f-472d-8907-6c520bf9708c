import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
export default function Header() {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <div className="text-foreground mx-[20px] text-xl font-bold">OpenRouter<div className="flex items-center gap-2">
            <div className="text-foreground mx-[20px] text-xl font-bold">OpenRouter</div>
          </div>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search" className="w-64 pl-10 bg-muted/50" />
          </div>
        </div>
        
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Models</Button>
          <Button variant="ghost" size="sm">Chat</Button>
          <Button variant="ghost" size="sm">Rankings</Button>
          <Button variant="ghost" size="sm">Enterprise</Button>
          <Button variant="ghost" size="sm">Docs</Button>
          <Button variant="outline" size="sm">Sign in</Button>
        </nav>
      </div>
    </header>;
}