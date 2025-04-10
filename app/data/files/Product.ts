export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export class ProductImpl implements Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description: string
  ) {}
}
