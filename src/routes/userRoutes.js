import { Router } from 'express';
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Não deveria existir:
//router.get('/:id', userController.show); // Lista usuário
//router.get('/', loginRequired, userController.index); // Lista usuários

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
// normalmente chama de create ou store quando se cria algo
export default router;


