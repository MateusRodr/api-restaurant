export interface ProductProps {
  name: string;
  description?: string | null;
  price: number;
  categoryId: string;
}

export class Product {
  private props: ProductProps;
  public readonly id: number;

  constructor(props: ProductProps, id?: number) {
    this.props = props;
    this.id = id ?? 0;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get price() {
    return this.props.price;
  }

  get categoryId() {
    return this.props.categoryId;
  }

  set name(name: string) {
    this.props.name = name;
  }

  set description(description: string | null | undefined) {
    this.props.description = description;
  }

  set price(price: number) {
    this.props.price = price;
  }

  set categoryId(categoryId: string) {
    this.props.categoryId = categoryId;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      categoryId: this.categoryId,
    };
  }
}
