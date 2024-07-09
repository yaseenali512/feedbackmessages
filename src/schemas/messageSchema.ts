import {string, z} from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: "content must be atleast 20 characters"})
    .max(300, {message: "content must be no longer than 300 characters"})
    
})