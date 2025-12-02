import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "5 Dicas para Escolher a Ração Ideal",
    excerpt: "Saiba como selecionar a melhor alimentação para seu pet baseado em idade, porte e necessidades especiais.",
    category: "Alimentação",
    readTime: "3 min",
    image: "/src/assets/products/racao-caes.jpg",
  },
  {
    id: 2,
    title: "Como Ensinar Comandos Básicos",
    excerpt: "Técnicas comprovadas para treinar seu cão com comandos essenciais como sentar, ficar e vir.",
    category: "Treinamento",
    readTime: "5 min",
    image: "/src/assets/products/brinquedos.jpg",
  },
  {
    id: 3,
    title: "Higiene Bucal: Prevenção é Essencial",
    excerpt: "Descubra a importância da escovação dentária e produtos que ajudam na saúde bucal do seu pet.",
    category: "Saúde",
    readTime: "4 min",
    image: "/src/assets/products/higiene.jpg",
  },
  {
    id: 4,
    title: "Brinquedos Interativos: Diversão Inteligente",
    excerpt: "Conheça brinquedos que estimulam a mente do seu pet e evitam o tédio.",
    category: "Comportamento",
    readTime: "3 min",
    image: "/src/assets/products/brinquedos.jpg",
  },
  {
    id: 5,
    title: "Cuidados no Verão: Proteja seu Pet",
    excerpt: "Dicas importantes para manter seu amigo seguro e confortável nos dias quentes.",
    category: "Cuidados",
    readTime: "4 min",
    image: "/src/assets/hero-pets.jpg",
  },
  {
    id: 6,
    title: "Gatos: Como Escolher a Areia Perfeita",
    excerpt: "Entenda os tipos de areia sanitária e qual é melhor para seu gato.",
    category: "Higiene",
    readTime: "3 min",
    image: "/src/assets/products/areia.jpg",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Blog PetShop
              </h1>
              <p className="text-xl text-muted-foreground">
                Dicas, curiosidades e tudo sobre o universo pet
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} de leitura</span>
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Button variant="ghost" className="group-hover:text-primary p-0">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="container">
            <Testimonials />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-3xl font-bold">Receba Nossas Dicas</h2>
                <p className="text-muted-foreground">
                  Inscreva-se para receber dicas exclusivas e novidades do mundo pet
                </p>
                <div className="flex gap-2 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail"
                    className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                  />
                  <Button>Inscrever</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
