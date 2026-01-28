export interface Contact {
  name: string;
  lastname: string;
  company: string;
  location: string;
  phone: string;
  email: string;
  message: string;
}

export interface Quote {
  origin: string;
  destination: string;
  type_cargo: string;
  quantity: number;
  weight: string;
  height: string;
  value: string;
}
