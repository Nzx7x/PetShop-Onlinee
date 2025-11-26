import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { Cart } from "./Cart";
import { Login } from "./Login";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b backdrop-blur-sm bg-card/95">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-xl md:text-2xl font-bold text-primary">🐾 PetShop</h1>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-lg mx-4">
            <div className="relative w-full">
              <Input 
                placeholder="Buscar produtos, rações, brinquedos..." 
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>
            <Login />
            <Cart />
          </div>
        </div>
        
        <div className="md:hidden mt-3">
          <div className="relative">
            <Input 
              placeholder="Buscar produtos..." 
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};
