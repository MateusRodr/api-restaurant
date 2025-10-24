import { injectable } from "tsyringe";
import { PrismaClient } from "@prisma/client";
import { Product } from "../domain/entities/product.entity";
import { ProductMapper } from "../prisma/mappers/product.mapper";

@injectable()
export class ProductRepository {
    constructor(private prisma: PrismaClient) {}

    async create(product: Product): Promise<Product> {
        const data = ProductMapper.toPrisma(product);
        const created = await this.prisma.product.create({ data });
        return ProductMapper.toDomain(created);
    }

    async findAll(): Promise<Product[]> {
        const categories = await this.prisma.product.findMany();
        return categories.map(ProductMapper.toDomain);
    }

    async findById(id: string): Promise<Product | null> {
        const category = await this.prisma.product.findUnique({ where: { id } });
        return category ? ProductMapper.toDomain(category) : null;
    }

    async update(id: string, category: Product): Promise<Product> {
        const data = ProductMapper.toPrisma(category);
        const updated = await this.prisma.product.update({
            where: { id },
            data,
        });
        return ProductMapper.toDomain(updated);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.product.delete({ where: { id } });
    }
}
