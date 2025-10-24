import { Product } from "../../domain/entities/product.entity";
import { Product as PrismaProduct } from "@prisma/client";

export class ProductMapper {
    static toDomain(raw: PrismaProduct): Product {
        return new Product(
            {
                name: raw.name,
                description: raw.description ?? null, 
                category: raw.category
            },
            raw.id
        );
    }

    static toPrisma(product: Product): PrismaProduct {
        return {
            id: product.id,
            name: product.name,
            description: product.description ?? null, 
            category: product.category
        };
    }
}
