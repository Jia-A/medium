import zod from 'zod';

export const createBlogSchema = zod.object({
    title: zod.string().min(1, 'Title is required'),
    content: zod.string().min(1, 'Content is required'),
})

export const updateBlogSchema = zod.object({
    title: zod.string().min(1, 'Title is required'),
    content: zod.string().min(1, 'Content is required'),
})

export type CreateBlogInput = zod.infer<typeof createBlogSchema>;
export type UpdateBlogInput = zod.infer<typeof updateBlogSchema>;