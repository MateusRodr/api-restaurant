import { container } from "tsyringe";
import { ProductRepository } from "../repositories/product.repository";
import { ProductService } from "../services/product.service";
import { PrismaClient } from "@prisma/client";

container.registerInstance(PrismaClient, new PrismaClient)
container.registerSingleton(ProductRepository)
container.registerSingleton(ProductService)