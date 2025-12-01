import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scissors, Bath, Heart, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    id: 1,
    name: "Banho Completo",
    icon: Bath,
    description: "Banho com produtos premium, secagem e perfume",
    priceFrom: 45,
    duration: "60 min",
    features: ["Shampoo premium", "Condicionador", "Secagem profissional", "Perfume"],
  },
  {
    id: 2,
    name: "Tosa Higiênica",
    icon: Scissors,
    description: "Tosa nas áreas sensíveis para melhor higiene",
    priceFrom: 40,
    duration: "45 min",
    features: ["Tosa patas", "Tosa região íntima", "Limpeza de ouvidos", "Corte de unhas"],
  },
  {
    id: 3,
    name: "Tosa Completa",
    icon: Scissors,
    description: "Tosa por raça ou personalizada",
    priceFrom: 80,
    duration: "90 min",
    features: ["Tosa por raça", "Design personalizado", "Banho incluso", "Hidratação"],
  },
  {
    id: 4,
    name: "Spa Pet",
    icon: Heart,
    description: "Experiência relaxante completa",
    priceFrom: 150,
    duration: "120 min",
    features: ["Banho terapêutico", "Massagem relaxante", "Hidratação profunda", "Aromaterapia"],
    badge: "Premium",
  },
];

const Services = () => {
  const handleSchedule = (serviceName: string) => {
    toast.success(`Agendamento iniciado para ${serviceName}!`, {
      description: "Em breve você será redirecionado para o WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Serviços de Banho & Tosa
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Cuidado profissional e carinho para seu melhor amigo
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-base py-2 px-4">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Profissionais Certificados
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Produtos Premium
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Ambiente Seguro
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {service.badge && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {service.badge}
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="font-bold text-primary text-lg">
                        A partir de R$ {service.priceFrom}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className="w-full"
                      onClick={() => handleSchedule(service.name)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Agora
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Informações Importantes</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">🐾 Segurança em Primeiro Lugar</h3>
                    <p className="text-muted-foreground">
                      Todos os nossos profissionais são treinados e certificados. Ambiente climatizado e 
                      equipamentos esterilizados após cada atendimento.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">📅 Como Funciona o Agendamento</h3>
                    <p className="text-muted-foreground">
                      Clique em "Agendar Agora" e você será direcionado para nosso WhatsApp. 
                      Escolha o melhor dia e horário para seu pet.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">💉 Requisitos</h3>
                    <p className="text-muted-foreground">
                      É necessário que seu pet esteja com a vacinação em dia (V10 ou V8 e antirrábica). 
                      Para filhotes, aguardar no mínimo 15 dias após a última dose da vacina.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
