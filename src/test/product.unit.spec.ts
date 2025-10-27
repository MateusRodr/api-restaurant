import 'reflect-metadata'
import { ProductService } from '../services/product.service'
import { ProductRepository } from '../repositories/product.repository'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const repository = new ProductRepository(prisma)
const service = new ProductService(repository)

describe('ProductService Unit Tests', () => {

  let createdProductId: string

  it('should create a product', async () => {
    const productData = { name: 'Test Product', category: 'food' }
    const createdProduct = await service.create(productData)
    createdProductId = createdProduct.id
    expect(createdProduct).toEqual(expect.objectContaining(productData))
  })

  it('should get all products', async () => {
    const product = await service.findAll()
    expect(product).toBeInstanceOf(Array)
    expect(product.length).toBeGreaterThan(0)
  })

  it('should get a product by id ', async () => {
    const product = await service.findById(createdProductId)
    expect(product).toBeInstanceOf(Object)
    expect(product.id).toBe(createdProductId)
  })

  it('should update a product', async () => {
    const updateProduct = await service.update(createdProductId, {
        name: "Updated Product",
        category: "food"
    })
    expect(updateProduct.id).toBe(createdProductId)
    expect(updateProduct.name).toBe("Updated Product")
  })

  it('should delete a product', async () => {
    await service.delete(createdProductId)
    await expect(service.findById(createdProductId)).rejects.toThrow("Product not found")
  })
})