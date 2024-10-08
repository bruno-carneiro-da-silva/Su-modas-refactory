import { Product, salesProps, salesTransactionsProps } from "@/types/sales";

export const sellsMock: salesProps[] = [
  {
    id: 1,
    product: "Camiseta",
    customer: "João",
    tag: "feminino",
    price: "R$ 50,00",
    rating: 4.5,
    totalSells: 1000,
    interestings: "100%",
    progressBar: 25,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product: "Camiseta",
    customer: "Maria",
    tag: "feminino",
    price: "R$ 100,00",
    rating: 4.8,
    totalSells: 1000,
    interestings: "100%",
    progressBar: 50,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    product: "Camiseta",
    customer: "João",
    tag: "feminino",
    price: "R$ 50,00",
    rating: 4.5,
    totalSells: 1000,
    interestings: "100%",
    progressBar: 40,
    image: "https://via.placeholder.com/150",
  },
];

export const sellsTransactionsMock: salesTransactionsProps[] = [
  {
    id: "1",
    uId: "#123456789",

    date: "2023-01-01T08:30:00Z",
    value: 1000,
    status: "Completo",
  },
  {
    id: "2",
    uId: "#123456789",
    date: "2023-01-01T10:45:00Z",
    value: 100,
    status: "Pendente",
  },
  {
    id: "3",
    uId: "#123456789",
    date: "2023-01-01T12:00:00Z",
    value: 1000,
    status: "Cancelado",
  },
  {
    id: "4",
    uId: "#123456789",
    date: "2023-01-01T14:15:00Z",
    value: 500,
    status: "Completo",
  },
  {
    id: "5",
    uId: "#123456789",
    date: "2023-01-01T16:30:00Z",
    value: 10000,
    status: "Completo",
  },
];

const productMock: Product[] = [
  {
    id: "5",
    uId: "89c8a85fa1640699e101",
    photo: "https://placeholder.com/150",
    name: "Skinny Fit",
    price: 5000,
    quantity: 6,
    tag: "feminino",
    total: 30000,
    rating: 4.9,
    interesting: 25,
    circlePercentage: 50,
    material: [
      "Jeans",
      "48",
      "Cotton Blend",
      "Denim",
      "Elastane",
      "Regular",
      "Regular",
    ],
    caracteristic:
      "Kit 3 Calça Jeans Masculina, direto da fabrica, pronta entrega! O kit é enviado com 3 cores de calça diferentes, conforme imagem. Forma das calças pequena, na dúvida sempre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    uId: "89c8a85fa1640699e102",
    photo: "https://placeholder.com/150",
    name: "Skinny Fit",
    price: 4000,
    quantity: 5,
    tag: "feminino",
    total: 20000,
    rating: 4.9,
    interesting: 25,
    circlePercentage: 50,
    material: [
      "Jeans",
      "48",
      "Cotton Blend",
      "Denim",
      "Elastane",
      "Regular",
      "Regular",
    ],
    caracteristic:
      "Kit 3 Calça Jeans Masculina, direto da fabrica, pronta entrega! O kit é enviado com 3 cores de calça diferentes, conforme imagem. Forma das calças pequena, na dúvida sempre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    uId: "89c8a85fa1640699e103",
    photo: "https://placeholder.com/150",
    name: "Jeans Elastano Premium ",
    price: 3000,
    quantity: 4,
    tag: "Masculino",
    total: 12000,
    rating: 4.9,
    interesting: 65,
    circlePercentage: 50,
    material: [
      "Jeans",
      "48",
      "Cotton Blend",
      "Denim",
      "Elastane",
      "Regular",
      "Regular",
    ],
    caracteristic:
      "Kit 3 Calça Jeans Masculina, direto da fabrica, pronta entrega! O kit é enviado com 3 cores de calça diferentes, conforme imagem. Forma das calças pequena, na dúvida sempre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    uId: "89c8a85fa1640699e104",
    photo: "https://placeholder.com/150",
    name: "Jeans Com Lycra ",
    price: 2000,
    quantity: 3,
    tag: "feminino",
    total: 6000,
    rating: 4.9,
    interesting: 78,
    circlePercentage: 50,
    material: [
      "Jeans",
      "48",
      "Cotton Blend",
      "Denim",
      "Elastane",
      "Regular",
      "Regular",
    ],
    caracteristic:
      "Kit 3 Calça Jeans Masculina, direto da fabrica, pronta entrega! O kit é enviado com 3 cores de calça diferentes, conforme imagem. Forma das calças pequena, na dúvida sempre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "1",
    uId: "89c8a85fa1640699e105",
    photo: "https://placeholder.com/150",
    name: "Justas Jeans Biker Generic",
    price: 1000,
    quantity: 2,
    tag: "Jeans",
    total: 2000,
    rating: 4.9,
    interesting: 45,
    circlePercentage: 50,
    material: [
      "Jeans",
      "48",
      "Cotton Blend",
      "Denim",
      "Elastane",
      "Regular",
      "Regular",
    ],
    caracteristic:
      "Kit 3 Calça Jeans Masculina, direto da fabrica, pronta entrega! O kit é enviado com 3 cores de calça diferentes, conforme imagem. Forma das calças pequena, na dúvida sempre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default productMock;
