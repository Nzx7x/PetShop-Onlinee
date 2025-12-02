import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ShoppingCart, Star, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import racaoCaes from "@/assets/products/racao-caes.jpg";
import racaoGatos from "@/assets/products/racao-gatos.jpg";
import petiscos from "@/assets/products/petiscos.jpg";
import areia from "@/assets/products/areia.jpg";
import comedouros from "@/assets/products/comedouros.jpg";
import coleiras from "@/assets/products/coleiras.jpg";
import camas from "@/assets/products/camas.jpg";
import brinquedos from "@/assets/products/brinquedos.jpg";
import higiene from "@/assets/products/higiene.jpg";

const Products = () => {
  const { addToCart } = useCart();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const imageMap: Record<string, string> = {
    "/racao-caes.jpg": racaoCaes,
    "/racao-gatos.jpg": racaoGatos,
    "/petiscos.jpg": petiscos,
    "/areia.jpg": areia,
    "/comedouros.jpg": comedouros,
    "/coleiras.jpg": coleiras,
    "/camas.jpg": camas,
    "/brinquedos.jpg": brinquedos,
    "/higiene.jpg": higiene,
  };

  const filteredProducts = products
    .filter(p => selectedCategory === "all" || p.category === selectedCategory)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: imageMap[product.image] || product.image,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Todos os Produtos</h1>
            <p className="text-muted-foreground">Encontre tudo que seu pet precisa</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filtros */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-2 font-semibold text-lg">
                    <SlidersHorizontal className="w-5 h-5" />
                    Filtros
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Categoria</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        <SelectItem value="Rações">Rações</SelectItem>
                        <SelectItem value="Petiscos">Petiscos</SelectItem>
                        <SelectItem value="Higiene">Higiene</SelectItem>
                        <SelectItem value="Acessórios">Acessórios</SelectItem>
                        <SelectItem value="Brinquedos">Brinquedos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ordenar por</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Destaque</SelectItem>
                        <SelectItem value="price-asc">Menor Preço</SelectItem>
                        <SelectItem value="price-desc">Maior Preço</SelectItem>
                        <SelectItem value="rating">Melhor Avaliação</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      Faixa de Preço: R$ {priceRange[0]} - R$ {priceRange[1]}
                    </label>
                    <Slider
                      min={0}
                      max={500}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Produtos */}
            <div className="lg:col-span-3">
              <div className="mb-4 text-sm text-muted-foreground">
                {filteredProducts.length} produtos encontrados
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative bg-gradient-to-br from-muted to-muted/50 h-56 overflow-hidden">
                        <img 
                          src={imageMap[product.image] || product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {product.badge && (
                          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                            {product.badge}
                          </Badge>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                            <span className="text-lg font-bold text-destructive">Esgotado</span>
                          </div>
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
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? "Adicionar ao Carrinho" : "Indisponível"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
