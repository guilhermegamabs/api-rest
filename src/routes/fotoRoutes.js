import { Router } from 'express';
import multer from 'multer';
import fotoController from '../controllers/FotoController'
import multer from '../config/multer';

const upload = multer(multer);
const router = new Router();

// single é dizendo que vai receber apenas um arquivo
// foto é o nome que demos para o multipart no insomnia
router.post('/', upload.single('foto'),fotoController.store);

export default router;
