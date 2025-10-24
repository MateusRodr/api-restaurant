import { z } from "zod"

export const ProductSchema = z.object({
    name: z.string().min(1, "name must be at least 1 character long "),
    description: z.string().min(1, "description must be at least 1 character long ").optional(),
    category: z.string().min(1, "category must be at least 1 character long ")
})