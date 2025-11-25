import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    pet: "Tutora de Max (Labrador)",
    rating: 5,
    comment: "Melhor petshop online! A ração chega super rápido e meu cachorro ama os produtos.",
    avatar: "👩"
  },
  {
    name: "João Santos",
    pet: "Tutor de Nina (Gata Persa)",
    rating: 5,
    comment: "Atendimento impecável e preços justos. A areia higiênica é excelente!",
    avatar: "👨"
  },
  {
    name: "Ana Costa",
    pet: "Tutora de Bob (Vira-lata)",
    rating: 5,
    comment: "Programa de pontos é ótimo! Já comprei várias vezes e sempre fico satisfeita.",
    avatar: "👩‍🦰"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-muted-foreground text-lg">Mais de 10.000 tutores satisfeitos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
