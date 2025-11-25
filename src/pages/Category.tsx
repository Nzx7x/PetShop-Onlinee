import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import racaoCaesImg from "@/assets/products/racao-caes.jpg";
import racaoGatosImg from "@/assets/products/racao-gatos.jpg";
import petiscosImg from "@/assets/products/petiscos.jpg";
import areiaImg from "@/assets/products/areia.jpg";
import comedourosImg from "@/assets/products/comedouros.jpg";
import coleirasImg from "@/assets/products/coleiras.jpg";
import camasImg from "@/assets/products/camas.jpg";
import brinquedosImg from "@/assets/products/brinquedos.jpg";
import higieneImg from "@/assets/products/higiene.jpg";

const imageMap: Record<string, string> = {
  "/racao-caes.jpg": racaoCaesImg,
  "/racao-gatos.jpg": racaoGatosImg,
  "/petiscos.jpg": petiscosImg,
  "/areia.jpg": areiaImg,
  "/comedouros.jpg": comedourosImg,
  "/coleiras.jpg": coleirasImg,
  "/camas.jpg": camasImg,
  "/brinquedos.jpg": brinquedosImg,
  "/higiene.jpg": higieneImg,
};

const categoryTitles: Record<string, string> = {
  racoes: "Rações",
  petiscos: "Petiscos e Snacks",
  higiene: "Higiene e Saúde",
  acessorios: "Acessórios",
  brinquedos: "Brinquedos",
};

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === (categoryTitles[category || ""] || "").toLowerCase()
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{categoryTitles[category || ""]}</h1>
            <p className="text-muted-foreground text-lg">
              {categoryProducts.length} produtos encontrados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-muted to-muted/50 h-56 overflow-hidden">
                    <img
                      src={imageMap[product.image]}
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
                    <h3 className="font-semibold text-lg line-clamp-2 min-h-[3.5rem]">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews} avaliações)
                      </span>
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
      </main>
      <Footer />
    </div>
  );
};

export default Category;
