export interface OrderItemEntity {
    id: string;
    orderID: string;
    productID: number;
    quantity: number;
}

export class OrderItem {
    private props :  OrderItemEntity;
    public readonly id:string

    constructor (props: OrderItemEntity, id?: string) {
        this.props = props
        this.id = id ?? '';
    }

    get orderID(){
        return this.props.orderID
    }

    get productID(){
        return this.props.productID
    }

    get quantity(){
        return this.props.quantity
    }

    set quantity(quantity: number){
        this.props.quantity = quantity
    }

    toJSON() {
        return {
            id: this.id,
            orderID: this.orderID,
            productID: this.productID,
            quantity: this.quantity,
        };
    }
}