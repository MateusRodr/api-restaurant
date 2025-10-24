import { injectable, inject } from "tsyringe";
import { Product } from "../domain/entities/product.entity";
import { ProductSchema } from "../validantions/product.validation";
import { ProductRepository } from "../repositories/product.repository";

@injectable()
export class ProductService {
    constructor(
        @inject(ProductRepository)
        private productRepository: ProductRepository
    ) { }

    async create(data: any) {
        const parsedData = ProductSchema.parse(data);
        const product = new Product({ 
            name: parsedData.name,
            description: parsedData.description ?? null,
            category: parsedData.category
        });
        return await this.productRepository.create(product);
    }

    async findAll() {
        return await this.productRepository.findAll();
    }

    async findById(id: string) {
        const product = await this.productRepository.findById(id);
        if (!product) throw new Error("Product not found");
        return product;
    }

    async update(id: string, data: any) {
        const parsedData = ProductSchema.parse(data);
        const existing = await this.productRepository.findById(id);
        if (!existing) throw new Error("Product not found");

        const product = new Product({ 
            name: parsedData.name,
            category: parsedData.category
        }, id);
        return await this.productRepository.update(id, product);
    }

    async delete(id: string) {
        const existing = await this.productRepository.findById(id);
        if (!existing) throw new Error("Product not found");

        await this.productRepository.delete(id);
    }
}
