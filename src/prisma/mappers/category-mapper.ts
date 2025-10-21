import { Category } from "../../domain/entities/category.entity";
import { Category as PrismaCategory } from "@prisma/client";

export class CategoryMapper {
    static toDomain(raw: PrismaCategory): Category {
        return new Category(
            {
                name: raw.name,
            },
            raw.id
        );
    }

    static toPrisma(category: Category): PrismaCategory {
        return {
            id: category.id,
            name: category.name,
        };
    }
}
