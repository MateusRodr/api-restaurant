export interface OrderItemProps {
  orderId: string;
  productId: number;
  quantity: number;
}

export class OrderItem {
  private props: OrderItemProps;
  public readonly id: string;

  constructor(props: OrderItemProps, id?: string) {
    this.props = props;
    this.id = id ?? crypto.randomUUID();
  }

  get orderId() { return this.props.orderId; }
  get productId() { return this.props.productId; }
  get quantity() { return this.props.quantity; }

  set quantity(q: number) { this.props.quantity = q; }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
