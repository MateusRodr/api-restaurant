import { container } from "tsyringe";
import { ProductRepository } from "../repositories/product.repository";
import { CategoryService } from "../services/category.service";
import { PrismaClient } from "@prisma/client";

container.registerInstance(PrismaClient, new PrismaClient)
container.registerSingleton(ProductRepository)
container.registerSingleton(CategoryService)