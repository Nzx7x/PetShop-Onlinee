import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso!", {
      description: "Retornaremos em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
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
                Entre em Contato
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos aqui para ajudar você e seu pet
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações de Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Endereço</p>
                        <p className="text-sm text-muted-foreground">
                          Rua dos Pets, 123<br />
                          Centro, São Paulo - SP<br />
                          CEP: 01234-567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Telefone</p>
                        <p className="text-sm text-muted-foreground">
                          (11) 98765-4321
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">E-mail</p>
                        <p className="text-sm text-muted-foreground">
                          contato@petshop.com.br
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Horário de Atendimento</p>
                        <p className="text-sm text-muted-foreground">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 8h às 14h<br />
                          Domingo: Fechado
                        </p>
                      </div>
                    </div>

                    <Button className="w-full" variant="default">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Envie sua Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input
                            id="name"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          placeholder="(11) 98765-4321"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                          id="message"
                          placeholder="Como podemos ajudar?"
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Vocês fazem entrega?</h3>
                    <p className="text-muted-foreground">
                      Sim! Entregamos em toda a região metropolitana. Frete grátis para compras acima de R$ 150.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Como agendar banho e tosa?</h3>
                    <p className="text-muted-foreground">
                      Você pode agendar pelo WhatsApp, telefone ou diretamente na nossa loja. Recomendamos agendar com antecedência.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Vocês aceitam todos os animais?</h3>
                    <p className="text-muted-foreground">
                      Sim! Atendemos cães, gatos, aves, roedores e outros pets. Entre em contato para serviços específicos.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Quais formas de pagamento aceitam?</h3>
                    <p className="text-muted-foreground">
                      Aceitamos dinheiro, cartões de crédito e débito, PIX e parcelamento em até 3x sem juros.
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

export default Contact;
