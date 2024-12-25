import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
    vine.object({
        full_name: vine.string().optional(),
        email: vine.string().email().unique({ table: 'users', column: 'email' }),
        password: vine.string(),
    })
)