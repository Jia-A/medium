import zod from 'zod';

export const userSignupSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6, 'Password must be at least 6 characters long'),
    name: zod.string().min(1, 'Name is required'),
})

export const userSigninSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6, 'Password must be at least 6 characters long'),
})

export type SignupInput = zod.infer<typeof userSignupSchema>;

export type SigninInput = zod.infer<typeof userSigninSchema>;