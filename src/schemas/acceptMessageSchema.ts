import {string, z} from "zod"

export const AcceptMessagesSchema = z.object({
    acceptMessages: z.boolean(),
    
})