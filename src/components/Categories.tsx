import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Package, Bone, Droplet, ShoppingBag, Gamepad2 } from "lucide-react";

const categories = [
  { name: "Rações", icon: Package, color: "primary", slug: "racoes" },
  { name: "Petiscos", icon: Bone, color: "secondary", slug: "petiscos" },
  { name: "Higiene", icon: Droplet, color: "accent", slug: "higiene" },
  { name: "Acessórios", icon: ShoppingBag, color: "primary", slug: "acessorios" },
  { name: "Brinquedos", icon: Gamepad2, color: "secondary", slug: "brinquedos" },
];

export const Categories = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CATEGORIAS</h2>
          <p className="text-muted-foreground text-lg">Navegue por nossos produtos</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                onClick={() => navigate(`/categoria/${category.slug}`)}
                className="group cursor-pointer p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
