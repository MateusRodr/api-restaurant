export interface ClientEntity {
    name:string;
    email:string;
    phone:string;
}

export class Client{
    private props: ClientEntity;
    public readonly id:string

    constructor (props: ClientEntity, id?: string) {
        this.props = props
        this.id = id ?? '';
    }

    get name(){
        return this.props.name;
    }

    get email(){
        return this.props.email;
    }
    
    get phone(){
        return this.props.phone;
    }

    set name(name: string){
        this.props.name = name;
    }

    set email(email:string){
        this.props.email = email
    }
    set phone(phone:string){
        this.props.phone = phone
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
        };
    }
}