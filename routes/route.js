import express from 'express';
import {homeControlller,homeAboutControlller, ContactUserController} from '../controller/homeController.js';

const route = express.Router();

route.get('/', homeControlller);
route.get('/', homeAboutControlller);
// route.get('/', ContactUserController)
route.post('/', ContactUserController);

export default route;