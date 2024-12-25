/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import AuthController from '#controllers/auth_controller'

router.get('/', async () => {
  return {
    messages: 'welcome to minkey API',
  }
})

router.group(() => {
  router.post('register', [AuthController, 'register'])
  router.post('login', async () => { }).use(middleware.auth({ guards: ['api'] }))
}).prefix('api/v1')
