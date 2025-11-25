export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  inStock: boolean;
}

export const products: Product[] = [
  // RAÇÕES
  { id: 1, name: "Ração para Filhotes Cães", category: "Rações", subcategory: "Cães", price: 159.90, originalPrice: 189.90, rating: 4.9, reviews: 342, badge: "Mais Vendido", image: "/racao-caes.jpg", inStock: true },
  { id: 2, name: "Ração para Filhotes Gatos", category: "Rações", subcategory: "Gatos", price: 129.90, rating: 4.8, reviews: 256, image: "/racao-gatos.jpg", inStock: true },
  { id: 3, name: "Ração Light para Cães", category: "Rações", subcategory: "Cães", price: 149.90, rating: 4.7, reviews: 189, image: "/racao-caes.jpg", inStock: true },
  { id: 4, name: "Ração Sênior para Cães", category: "Rações", subcategory: "Cães", price: 169.90, rating: 4.9, reviews: 423, image: "/racao-caes.jpg", inStock: true },
  { id: 5, name: "Ração Sênior para Gatos", category: "Rações", subcategory: "Gatos", price: 139.90, rating: 4.8, reviews: 298, image: "/racao-gatos.jpg", inStock: true },
  { id: 6, name: "Ração Úmida para Cães", category: "Rações", subcategory: "Cães", price: 89.90, originalPrice: 109.90, rating: 4.7, reviews: 512, badge: "Promoção", image: "/racao-caes.jpg", inStock: true },
  { id: 7, name: "Ração Úmida para Gatos", category: "Rações", subcategory: "Gatos", price: 79.90, rating: 4.9, reviews: 634, image: "/racao-gatos.jpg", inStock: true },
  
  // PETISCOS
  { id: 8, name: "Petiscos Naturais", category: "Petiscos", price: 24.90, rating: 4.8, reviews: 445, image: "/petiscos.jpg", inStock: true },
  { id: 9, name: "Bifinhos para Cães", category: "Petiscos", price: 19.90, originalPrice: 29.90, rating: 4.9, reviews: 789, badge: "Promoção", image: "/petiscos.jpg", inStock: true },
  { id: 10, name: "Sachês para Gatos", category: "Petiscos", price: 34.90, rating: 4.8, reviews: 567, image: "/petiscos.jpg", inStock: true },
  { id: 11, name: "Ossos Naturais", category: "Petiscos", price: 29.90, rating: 4.7, reviews: 234, image: "/petiscos.jpg", inStock: true },
  { id: 12, name: "Ossos Artificiais", category: "Petiscos", price: 22.90, rating: 4.6, reviews: 178, image: "/petiscos.jpg", inStock: true },
  { id: 13, name: "Biscuits para Treinamento", category: "Petiscos", price: 27.90, rating: 4.9, reviews: 412, image: "/petiscos.jpg", inStock: true },
  { id: 14, name: "Snacks Dentais para Cães", category: "Petiscos", price: 39.90, rating: 4.8, reviews: 356, image: "/petiscos.jpg", inStock: true },
  { id: 15, name: "Catnip", category: "Petiscos", price: 15.90, rating: 4.9, reviews: 523, badge: "Novo", image: "/petiscos.jpg", inStock: true },
  { id: 16, name: "Grama para Gatos", category: "Petiscos", price: 18.90, rating: 4.7, reviews: 298, image: "/petiscos.jpg", inStock: true },
  
  // HIGIENE - AREIA
  { id: 17, name: "Areia Sanitária Comum", category: "Higiene", subcategory: "Areia", price: 32.90, originalPrice: 45.90, rating: 4.6, reviews: 678, badge: "Mais Vendido", image: "/areia.jpg", inStock: true },
  { id: 18, name: "Areia Biodegradável", category: "Higiene", subcategory: "Areia", price: 49.90, rating: 4.8, reviews: 345, image: "/areia.jpg", inStock: true },
  { id: 19, name: "Areia de Sílica", category: "Higiene", subcategory: "Areia", price: 59.90, rating: 4.9, reviews: 456, badge: "Premium", image: "/areia.jpg", inStock: true },
  
  // COMEDOUROS E BEBEDOUROS
  { id: 20, name: "Comedouro Grande", category: "Acessórios", subcategory: "Alimentação", price: 45.90, rating: 4.7, reviews: 234, image: "/comedouros.jpg", inStock: true },
  { id: 21, name: "Comedouro Pequeno", category: "Acessórios", subcategory: "Alimentação", price: 29.90, rating: 4.8, reviews: 312, image: "/comedouros.jpg", inStock: true },
  { id: 22, name: "Bebedouro Automático", category: "Acessórios", subcategory: "Alimentação", price: 149.90, originalPrice: 189.90, rating: 4.9, reviews: 567, badge: "Destaque", image: "/comedouros.jpg", inStock: true },
  { id: 23, name: "Fonte de Água para Gatos", category: "Acessórios", subcategory: "Alimentação", price: 179.90, rating: 4.9, reviews: 423, image: "/comedouros.jpg", inStock: true },
  { id: 24, name: "Comedouro Antiderrapante", category: "Acessórios", subcategory: "Alimentação", price: 39.90, rating: 4.7, reviews: 267, image: "/comedouros.jpg", inStock: true },
  { id: 25, name: "Comedouro Lento (Slow Feeder)", category: "Acessórios", subcategory: "Alimentação", price: 69.90, rating: 4.8, reviews: 198, image: "/comedouros.jpg", inStock: true },
  
  // COLEIRAS E GUIAS
  { id: 26, name: "Coleira Simples", category: "Acessórios", subcategory: "Passeio", price: 24.90, rating: 4.6, reviews: 456, image: "/coleiras.jpg", inStock: true },
  { id: 27, name: "Coleira Personalizada", category: "Acessórios", subcategory: "Passeio", price: 49.90, rating: 4.9, reviews: 334, badge: "Popular", image: "/coleiras.jpg", inStock: true },
  { id: 28, name: "Peitoral", category: "Acessórios", subcategory: "Passeio", price: 59.90, rating: 4.8, reviews: 523, image: "/coleiras.jpg", inStock: true },
  { id: 29, name: "Guia Retrátil", category: "Acessórios", subcategory: "Passeio", price: 89.90, originalPrice: 119.90, rating: 4.7, reviews: 412, badge: "Promoção", image: "/coleiras.jpg", inStock: true },
  { id: 30, name: "Guia de Nylon", category: "Acessórios", subcategory: "Passeio", price: 34.90, rating: 4.7, reviews: 298, image: "/coleiras.jpg", inStock: true },
  { id: 31, name: "Guia de Couro", category: "Acessórios", subcategory: "Passeio", price: 79.90, rating: 4.9, reviews: 176, image: "/coleiras.jpg", inStock: true },
  { id: 32, name: "Placa de Identificação", category: "Acessórios", subcategory: "Passeio", price: 19.90, rating: 4.8, reviews: 567, image: "/coleiras.jpg", inStock: true },
  
  // CAMAS E CASINHAS
  { id: 33, name: "Casinha de Madeira", category: "Acessórios", subcategory: "Descanso", price: 349.90, rating: 4.8, reviews: 123, image: "/camas.jpg", inStock: true },
  { id: 34, name: "Casinha de Plástico", category: "Acessórios", subcategory: "Descanso", price: 249.90, originalPrice: 299.90, rating: 4.7, reviews: 156, badge: "Promoção", image: "/camas.jpg", inStock: true },
  { id: 35, name: "Cama Acolchoada", category: "Acessórios", subcategory: "Descanso", price: 129.90, rating: 4.9, reviews: 678, badge: "Mais Vendido", image: "/camas.jpg", inStock: true },
  { id: 36, name: "Caminha Tipo Sofá", category: "Acessórios", subcategory: "Descanso", price: 189.90, rating: 4.8, reviews: 445, image: "/camas.jpg", inStock: true },
  { id: 37, name: "Almofada para Pets", category: "Acessórios", subcategory: "Descanso", price: 79.90, rating: 4.7, reviews: 334, image: "/camas.jpg", inStock: true },
  
  // ARRANHADORES
  { id: 38, name: "Arranhador Pequeno", category: "Acessórios", subcategory: "Gatos", price: 89.90, rating: 4.7, reviews: 267, image: "/camas.jpg", inStock: true },
  { id: 39, name: "Arranhador Grande", category: "Acessórios", subcategory: "Gatos", price: 189.90, rating: 4.8, reviews: 398, image: "/camas.jpg", inStock: true },
  { id: 40, name: "Torre para Gatos", category: "Acessórios", subcategory: "Gatos", price: 449.90, originalPrice: 549.90, rating: 4.9, reviews: 234, badge: "Premium", image: "/camas.jpg", inStock: true },
  
  // BRINQUEDOS
  { id: 41, name: "Brinquedo de Corda", category: "Brinquedos", price: 24.90, rating: 4.7, reviews: 445, image: "/brinquedos.jpg", inStock: true },
  { id: 42, name: "Brinquedo de Pelúcia", category: "Brinquedos", price: 34.90, rating: 4.8, reviews: 567, image: "/brinquedos.jpg", inStock: true },
  { id: 43, name: "Bolinhas para Cães", category: "Brinquedos", price: 19.90, originalPrice: 29.90, rating: 4.6, reviews: 789, badge: "Promoção", image: "/brinquedos.jpg", inStock: true },
  { id: 44, name: "Bolinhas para Gatos", category: "Brinquedos", price: 15.90, rating: 4.7, reviews: 623, image: "/brinquedos.jpg", inStock: true },
  { id: 45, name: "Varinha para Gatos", category: "Brinquedos", price: 22.90, rating: 4.9, reviews: 512, image: "/brinquedos.jpg", inStock: true },
  { id: 46, name: "Frisbee", category: "Brinquedos", price: 29.90, rating: 4.8, reviews: 356, image: "/brinquedos.jpg", inStock: true },
  { id: 47, name: "Brinquedo Interativo", category: "Brinquedos", price: 79.90, rating: 4.9, reviews: 423, badge: "Novo", image: "/brinquedos.jpg", inStock: true },
  { id: 48, name: "Brinquedo Dispenser de Ração", category: "Brinquedos", price: 89.90, rating: 4.8, reviews: 289, image: "/brinquedos.jpg", inStock: true },
  
  // ROUPAS
  { id: 49, name: "Roupinha para Cães", category: "Acessórios", subcategory: "Vestuário", price: 49.90, rating: 4.6, reviews: 234, image: "/coleiras.jpg", inStock: true },
  { id: 50, name: "Roupinha para Gatos", category: "Acessórios", subcategory: "Vestuário", price: 45.90, rating: 4.5, reviews: 156, image: "/coleiras.jpg", inStock: true },
  { id: 51, name: "Fantasia", category: "Acessórios", subcategory: "Vestuário", price: 59.90, rating: 4.7, reviews: 198, image: "/coleiras.jpg", inStock: true },
  { id: 52, name: "Colete de Frio", category: "Acessórios", subcategory: "Vestuário", price: 79.90, originalPrice: 99.90, rating: 4.8, reviews: 312, badge: "Promoção", image: "/coleiras.jpg", inStock: true },
  { id: 53, name: "Capa de Chuva", category: "Acessórios", subcategory: "Vestuário", price: 54.90, rating: 4.7, reviews: 267, image: "/coleiras.jpg", inStock: true },
  
  // TRANSPORTE
  { id: 54, name: "Focinheira", category: "Acessórios", subcategory: "Transporte", price: 34.90, rating: 4.5, reviews: 178, image: "/coleiras.jpg", inStock: true },
  { id: 55, name: "Caixa de Transporte", category: "Acessórios", subcategory: "Transporte", price: 149.90, rating: 4.8, reviews: 445, image: "/coleiras.jpg", inStock: true },
  { id: 56, name: "Mochila para Pets", category: "Acessórios", subcategory: "Transporte", price: 189.90, rating: 4.7, reviews: 234, image: "/coleiras.jpg", inStock: true },
  { id: 57, name: "Bolsa de Transporte", category: "Acessórios", subcategory: "Transporte", price: 129.90, originalPrice: 159.90, rating: 4.8, reviews: 356, badge: "Promoção", image: "/coleiras.jpg", inStock: true },
  
  // HIGIENE - SANITÁRIO
  { id: 58, name: "Caixa Sanitária", category: "Higiene", subcategory: "Sanitário", price: 79.90, rating: 4.7, reviews: 523, image: "/areia.jpg", inStock: true },
  { id: 59, name: "Tapete Higiênico", category: "Higiene", subcategory: "Sanitário", price: 49.90, rating: 4.6, reviews: 412, image: "/areia.jpg", inStock: true },
  { id: 60, name: "Fraldas para Cães", category: "Higiene", subcategory: "Sanitário", price: 39.90, rating: 4.7, reviews: 298, image: "/areia.jpg", inStock: true },
  
  // BANHO E TOSA
  { id: 61, name: "Kit de Higiene", category: "Higiene", subcategory: "Banho", price: 89.90, originalPrice: 119.90, rating: 4.8, reviews: 445, badge: "Kit", image: "/higiene.jpg", inStock: true },
  { id: 62, name: "Shampoo Neutro", category: "Higiene", subcategory: "Banho", price: 29.90, rating: 4.7, reviews: 567, image: "/higiene.jpg", inStock: true },
  { id: 63, name: "Shampoo Antialérgico", category: "Higiene", subcategory: "Banho", price: 39.90, rating: 4.8, reviews: 423, image: "/higiene.jpg", inStock: true },
  { id: 64, name: "Shampoo Antipulgas", category: "Higiene", subcategory: "Banho", price: 44.90, rating: 4.9, reviews: 634, image: "/higiene.jpg", inStock: true },
  { id: 65, name: "Condicionador para Pets", category: "Higiene", subcategory: "Banho", price: 34.90, rating: 4.7, reviews: 345, image: "/higiene.jpg", inStock: true },
  { id: 66, name: "Perfume para Pets", category: "Higiene", subcategory: "Banho", price: 27.90, rating: 4.6, reviews: 289, image: "/higiene.jpg", inStock: true },
  { id: 67, name: "Escova de Pelos", category: "Higiene", subcategory: "Tosa", price: 39.90, rating: 4.8, reviews: 512, image: "/higiene.jpg", inStock: true },
  { id: 68, name: "Rasqueadeira", category: "Higiene", subcategory: "Tosa", price: 49.90, rating: 4.7, reviews: 398, image: "/higiene.jpg", inStock: true },
  { id: 69, name: "Cortador de Unhas", category: "Higiene", subcategory: "Tosa", price: 34.90, rating: 4.8, reviews: 445, image: "/higiene.jpg", inStock: true },
  { id: 70, name: "Lima de Unha", category: "Higiene", subcategory: "Tosa", price: 29.90, rating: 4.6, reviews: 267, image: "/higiene.jpg", inStock: true },
  { id: 71, name: "Pente Anti-Pulgas", category: "Higiene", subcategory: "Tosa", price: 24.90, rating: 4.7, reviews: 334, image: "/higiene.jpg", inStock: true },
  { id: 72, name: "Kit de Tosa Básico", category: "Higiene", subcategory: "Tosa", price: 149.90, originalPrice: 189.90, rating: 4.8, reviews: 234, badge: "Kit", image: "/higiene.jpg", inStock: true },
  { id: 73, name: "Máquina de Tosa", category: "Higiene", subcategory: "Tosa", price: 249.90, rating: 4.9, reviews: 198, image: "/higiene.jpg", inStock: true },
  { id: 74, name: "Tesoura para Tosa", category: "Higiene", subcategory: "Tosa", price: 79.90, rating: 4.7, reviews: 312, image: "/higiene.jpg", inStock: true },
  { id: 75, name: "Secador para Pets", category: "Higiene", subcategory: "Tosa", price: 199.90, rating: 4.8, reviews: 267, image: "/higiene.jpg", inStock: true },
  
  // SAÚDE
  { id: 76, name: "Coleira Antipulgas", category: "Higiene", subcategory: "Saúde", price: 49.90, rating: 4.8, reviews: 523, image: "/higiene.jpg", inStock: true },
  { id: 77, name: "Pipeta Antipulgas", category: "Higiene", subcategory: "Saúde", price: 59.90, originalPrice: 79.90, rating: 4.9, reviews: 678, badge: "Promoção", image: "/higiene.jpg", inStock: true },
  { id: 78, name: "Spray Antipulgas", category: "Higiene", subcategory: "Saúde", price: 44.90, rating: 4.7, reviews: 412, image: "/higiene.jpg", inStock: true },
  { id: 79, name: "Vermífugo", category: "Higiene", subcategory: "Saúde", price: 39.90, rating: 4.8, reviews: 567, image: "/higiene.jpg", inStock: true },
  { id: 80, name: "Vitaminas para Cães", category: "Higiene", subcategory: "Saúde", price: 69.90, rating: 4.8, reviews: 445, image: "/higiene.jpg", inStock: true },
  { id: 81, name: "Vitaminas para Gatos", category: "Higiene", subcategory: "Saúde", price: 64.90, rating: 4.7, reviews: 398, image: "/higiene.jpg", inStock: true },
  { id: 82, name: "Suplemento para Articulações", category: "Higiene", subcategory: "Saúde", price: 89.90, rating: 4.9, reviews: 312, image: "/higiene.jpg", inStock: true },
  { id: 83, name: "Suplemento para Pelagem", category: "Higiene", subcategory: "Saúde", price: 79.90, rating: 4.8, reviews: 356, image: "/higiene.jpg", inStock: true },
  { id: 84, name: "Pasta de Dente para Pets", category: "Higiene", subcategory: "Saúde", price: 24.90, rating: 4.7, reviews: 289, image: "/higiene.jpg", inStock: true },
  { id: 85, name: "Escova Dental Pet", category: "Higiene", subcategory: "Saúde", price: 19.90, rating: 4.6, reviews: 234, image: "/higiene.jpg", inStock: true },
  
  // CONFORTO
  { id: 86, name: "Tapete Refrescante", category: "Acessórios", subcategory: "Conforto", price: 89.90, rating: 4.8, reviews: 412, image: "/camas.jpg", inStock: true },
  { id: 87, name: "Tapete Térmico", category: "Acessórios", subcategory: "Conforto", price: 99.90, originalPrice: 129.90, rating: 4.7, reviews: 298, badge: "Promoção", image: "/camas.jpg", inStock: true },
  { id: 88, name: "Bebedouro Portátil", category: "Acessórios", subcategory: "Conforto", price: 34.90, rating: 4.7, reviews: 356, image: "/comedouros.jpg", inStock: true },
  { id: 89, name: "Comedouro Portátil", category: "Acessórios", subcategory: "Conforto", price: 29.90, rating: 4.6, reviews: 267, image: "/comedouros.jpg", inStock: true },
  { id: 90, name: "Coleira com LED", category: "Acessórios", subcategory: "Conforto", price: 54.90, rating: 4.8, reviews: 445, image: "/coleiras.jpg", inStock: true },
  { id: 91, name: "Brinquedo Sonoro", category: "Brinquedos", price: 39.90, rating: 4.7, reviews: 334, image: "/brinquedos.jpg", inStock: true },
  
  // CARRO
  { id: 92, name: "Cadeira de Carro para Pet", category: "Acessórios", subcategory: "Carro", price: 149.90, rating: 4.8, reviews: 234, image: "/coleiras.jpg", inStock: true },
  { id: 93, name: "Cinto de Segurança para Pets", category: "Acessórios", subcategory: "Carro", price: 59.90, rating: 4.7, reviews: 312, image: "/coleiras.jpg", inStock: true },
  { id: 94, name: "Protetor de Banco para Carro", category: "Acessórios", subcategory: "Carro", price: 89.90, originalPrice: 119.90, rating: 4.8, reviews: 398, badge: "Promoção", image: "/coleiras.jpg", inStock: true },
  
  // AVES E PEIXES
  { id: 95, name: "Ração para Pássaros", category: "Rações", subcategory: "Aves", price: 29.90, rating: 4.6, reviews: 156, image: "/racao-caes.jpg", inStock: true },
  { id: 96, name: "Ração para Peixes", category: "Rações", subcategory: "Peixes", price: 24.90, rating: 4.7, reviews: 198, image: "/racao-caes.jpg", inStock: true },
  { id: 97, name: "Aquário Pequeno", category: "Acessórios", subcategory: "Peixes", price: 149.90, rating: 4.8, reviews: 123, image: "/comedouros.jpg", inStock: true },
  { id: 98, name: "Acessórios para Aquário", category: "Acessórios", subcategory: "Peixes", price: 79.90, rating: 4.7, reviews: 178, image: "/comedouros.jpg", inStock: true },
];

export const categories = [
  { id: "racoes", name: "Rações", slug: "racoes" },
  { id: "petiscos", name: "Petiscos", slug: "petiscos" },
  { id: "higiene", name: "Higiene", slug: "higiene" },
  { id: "acessorios", name: "Acessórios", slug: "acessorios" },
  { id: "brinquedos", name: "Brinquedos", slug: "brinquedos" },
];
