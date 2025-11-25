import { Card } from "@/components/ui/card";
import { Truck, Gift, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Frete grátis acima de R$ 150",
    gradient: "from-primary to-primary/70"
  },
  {
    icon: Gift,
    title: "Programa de Pontos",
    description: "Ganhe em cada compra",
    gradient: "from-secondary to-secondary/70"
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Marcas verificadas",
    gradient: "from-accent to-accent/70"
  },
  {
    icon: Heart,
    title: "Suporte Dedicado",
    description: "Atendimento 24/7",
    gradient: "from-primary to-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 border-none bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mx-auto w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
