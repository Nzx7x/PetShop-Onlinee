import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Truck } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Frete Grátis Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary py-3">
        <div className="container px-4">
          <div className="flex items-center justify-center gap-2 text-primary-foreground">
            <Truck className="w-5 h-5" />
            <span className="font-semibold">Frete Grátis acima de R$ 150,00</span>
            <Badge variant="secondary" className="ml-2">Aproveite!</Badge>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
