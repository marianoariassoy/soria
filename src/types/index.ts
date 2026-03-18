export interface Contact {
  to: string;
  from: string;
  from_name: string;
  subject: string;
  name: string;
  lastname: string;
  company: string;
  location: string;
  email: string;
  phone: string;
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
  name: string;
  email: string;
  phone: string;
}
