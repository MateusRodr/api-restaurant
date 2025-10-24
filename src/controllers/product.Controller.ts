import { container } from "tsyringe";
import {  RequestHandler } from "express"
import { ProductService } from "../services/category.service";
import z from "zod"

const productService = container.resolve(ProductService)

export const getAllProduct: RequestHandler = async(req, res) => {
    try {
    const product = await productService.findAll()
    res.json(product)
    } catch (e:any) {
        res.status(500).json({error: e.message})
    }
}
    export const createProduct: RequestHandler = async (req, res) => {
        try {
            const newProduct = await productService.create(req.body)
            res.status(201).json(newProduct)
        } catch (e: any) {
            if(e instanceof z.ZodError){
                res.status(400).json({error: "validation error", details: e.issues})
            } else {
                res.status(500).json({ error: e.message })
            }
        }
}

export const getProductById: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productService.findById(String(id))
        res.json(product)
    } catch (e: any) {
        res.status(500).json({error: e.message})
    }
}


export const updateProduct: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params
        const updateProduct = await productService.update(String(id), req.body)
    } catch (e:any) {
        res.status(500).json({ error: e.message || "Failed to update product" });
    }
}

export const deleteProduct: RequestHandler = async (req, res) => {
    try{
        const { id } = req.params
        await productService.delete(String(id))
        res.status(204).send()
    } catch(e:any){
        res.status(500).json({ error: e.message })
    }
}
