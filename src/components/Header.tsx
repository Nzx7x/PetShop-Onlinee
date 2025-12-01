import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b backdrop-blur-sm bg-card/95">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <Link to="/">
              <h1 className="text-xl md:text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">
                🐾 PetShop
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 flex-1">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/produtos" className="text-sm font-medium hover:text-primary transition-colors">
              Produtos
            </Link>
            <Link to="/servicos" className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>
          
          <div className="hidden md:flex flex-1 max-w-lg mx-4 justify-end">
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
