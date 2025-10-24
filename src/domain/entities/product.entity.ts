import { v4 as uuidv4 } from "uuid";

export interface ProductProps {
  name: string;
  description?: string | null;
  category: string;
}

export class Product {
  private props: ProductProps;
  public readonly id: string;

  constructor(props: ProductProps, id?: string) {
    this.props = props;
    this.id = id ?? uuidv4();
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get category() {
    return this.props.category;
  }

  set name(name: string) {
    this.props.name = name;
  }

  set description(description: string | null | undefined) {
    this.props.description = description;
  }

  set category(category: string) {
    this.props.category = category;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      category: this.category,
    };
  }
}
