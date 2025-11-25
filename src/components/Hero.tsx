import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroImage})` 
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="inline-block px-4 py-2 bg-primary rounded-full text-sm font-semibold shadow-lg">
            🎉 Frete Grátis em Compras Acima de R$ 150
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Tudo Para Seu Pet
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Com Muito Amor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Produtos premium, entrega rápida e os melhores preços para deixar seu melhor amigo ainda mais feliz
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-2xl">
              Ver Produtos <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white text-lg px-8 py-6"
            >
              Promoções da Semana
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
