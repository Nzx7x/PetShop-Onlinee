import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-primary">🐾 PetShop Online</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Tudo para seu pet com amor, qualidade e os melhores preços.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="rounded-full">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Cachorros</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Gatos</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Aves</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Peixes</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Ajuda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Rastreamento</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Trocas e Devoluções</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Política de Privacidade</li>
              <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba cupons e novidades exclusivas
            </p>
            <div className="flex gap-2">
              <Input placeholder="Seu e-mail" className="flex-1" />
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 PetShop Online. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};
