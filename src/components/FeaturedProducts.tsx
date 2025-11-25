import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import racaoCaesImg from "@/assets/products/racao-caes.jpg";
import areiaImg from "@/assets/products/areia.jpg";
import brinquedosImg from "@/assets/products/brinquedos.jpg";
import higieneImg from "@/assets/products/higiene.jpg";

const products = [
  {
    id: 1,
    name: "Ração Premium Cães Adultos",
    price: 149.90,
    originalPrice: 189.90,
    rating: 4.8,
    reviews: 234,
    badge: "Mais Vendido",
    image: racaoCaesImg
  },
  {
    id: 2,
    name: "Areia Higiênica Gatos",
    price: 32.90,
    originalPrice: 45.90,
    rating: 4.9,
    reviews: 412,
    badge: "Promoção",
    image: areiaImg
  },
  {
    id: 3,
    name: "Brinquedo Interativo",
    price: 79.90,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    badge: "Novo",
    image: brinquedosImg
  },
  {
    id: 4,
    name: "Kit Banho & Tosa Premium",
    price: 129.90,
    originalPrice: 179.90,
    rating: 5.0,
    reviews: 89,
    badge: "Destaque",
    image: higieneImg
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Produtos em Destaque</h2>
          <p className="text-muted-foreground text-lg">Os favoritos dos nossos clientes</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-muted to-muted/50 h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews} avaliações)</span>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      R$ {product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
