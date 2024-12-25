import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { registerValidator } from '#validators/auth';

export default class AuthController {
        async register({ request, response }: HttpContext) {
            // Register the user
            const payload = await request.validateUsing(registerValidator);
            const user = await User.create(payload);
            return response.created(user);
        }
}