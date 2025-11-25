import { Card } from "@/components/ui/card";
import { Dog, Cat, Bird, Fish } from "lucide-react";

const categories = [
  { name: "Cachorros", icon: Dog, color: "primary" },
  { name: "Gatos", icon: Cat, color: "secondary" },
  { name: "Aves", icon: Bird, color: "accent" },
  { name: "Peixes", icon: Fish, color: "primary" },
];

export const Categories = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compre por Categoria</h2>
          <p className="text-muted-foreground text-lg">Encontre tudo para seu pet favorito</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="group cursor-pointer p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mx-auto w-16 h-16 mb-4 rounded-full bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 text-${category.color}`} />
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
