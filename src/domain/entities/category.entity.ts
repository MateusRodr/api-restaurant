export interface CategoryEntity {
    name:string;
}

export class Category {
    private props: CategoryEntity;
    public readonly id:string

    constructor(props: CategoryEntity, id?: string) {
        this.props = props;
        this.id = id ?? '' 
    }

    get name(){
        return this.props.name;
    }

    set name(name: string){
        this.props.name = name;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
        };
    }
}