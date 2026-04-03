export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'mechanic';
}


export interface Car {
  id: string;
  title: string;
  price: number;
  year: number;
  make: string;
  model: string;
  mileage: number;
  fuelType: string;
  transmission: string;
  description: string;
  images: string[];
  sellerId: string;
  sellerName: string;
  createdAt: string;
  forSale: boolean;
}

export interface Mechanic {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  image: string;
  contact: string;
  description: string;
}

export interface ModificationService {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

