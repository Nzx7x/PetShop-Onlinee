import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { CreditCard, Barcode, Smartphone, MapPin, Package, CheckCircle } from "lucide-react";

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [orderComplete, setOrderComplete] = useState(false);

  const shipping = 15.00;
  const finalTotal = total + shipping;

  const handleFinalizePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular processamento
    toast.loading("Processando pedido...");
    
    setTimeout(() => {
      toast.dismiss();
      setOrderComplete(true);
      clearCart();
      
      // Redirecionar após 3 segundos
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 2000);
  };

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Carrinho Vazio</h2>
            <p className="text-muted-foreground mb-6">Adicione produtos ao carrinho para continuar</p>
            <Button onClick={() => navigate("/produtos")}>Ver Produtos</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center max-w-md">
            <CheckCircle className="w-24 h-24 mx-auto mb-6 text-green-500" />
            <h2 className="text-3xl font-bold mb-4">Pedido Confirmado! 🎉</h2>
            <p className="text-muted-foreground mb-2">
              Seu pedido foi realizado com sucesso!
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Você receberá um e-mail de confirmação em breve.
            </p>
            <Button onClick={() => navigate("/")}>Voltar para Início</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container px-4 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">Finalizar Compra</h1>
          
          <form onSubmit={handleFinalizePurchase}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Formulário */}
              <div className="lg:col-span-2 space-y-6">
                {/* Dados de Entrega */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Endereço de Entrega
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input id="name" placeholder="Seu nome" required />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input id="phone" placeholder="(00) 00000-0000" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="cep">CEP *</Label>
                        <Input id="cep" placeholder="00000-000" required />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Endereço *</Label>
                        <Input id="address" placeholder="Rua, número" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="neighborhood">Bairro *</Label>
                        <Input id="neighborhood" placeholder="Bairro" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="city">Cidade *</Label>
                        <Input id="city" placeholder="Cidade" required />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Forma de Pagamento */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Forma de Pagamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                            <CreditCard className="w-5 h-5" />
                            Cartão de Crédito
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                          <RadioGroupItem value="pix" id="pix" />
                          <Label htmlFor="pix" className="flex items-center gap-2 cursor-pointer flex-1">
                            <Smartphone className="w-5 h-5" />
                            PIX (5% de desconto)
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                          <RadioGroupItem value="boleto" id="boleto" />
                          <Label htmlFor="boleto" className="flex items-center gap-2 cursor-pointer flex-1">
                            <Barcode className="w-5 h-5" />
                            Boleto Bancário
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "credit-card" && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <Label htmlFor="card-number">Número do Cartão *</Label>
                          <Input id="card-number" placeholder="0000 0000 0000 0000" required />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="card-expiry">Validade *</Label>
                            <Input id="card-expiry" placeholder="MM/AA" required />
                          </div>
                          <div>
                            <Label htmlFor="card-cvv">CVV *</Label>
                            <Input id="card-cvv" placeholder="000" required />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="card-name">Nome no Cartão *</Label>
                          <Input id="card-name" placeholder="Nome impresso no cartão" required />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Resumo do Pedido */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Resumo do Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex gap-3">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.quantity}x R$ {item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>R$ {total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frete</span>
                        <span>R$ {shipping.toFixed(2)}</span>
                      </div>
                      {paymentMethod === "pix" && (
                        <div className="flex justify-between text-green-600">
                          <span>Desconto PIX (5%)</span>
                          <span>-R$ {(finalTotal * 0.05).toFixed(2)}</span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">
                        R$ {paymentMethod === "pix" 
                          ? (finalTotal * 0.95).toFixed(2)
                          : finalTotal.toFixed(2)
                        }
                      </span>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Confirmar Pedido
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Ao confirmar, você concorda com nossos termos de uso
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
