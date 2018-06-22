'use strict';

import Passport from 'passport';
import { userList, createUser, userLogin, userStatus } from '../controllers/UserCtrl';

import express from 'express';
const router = express.Router(); // eslint-disable-line new-cap

router.route('/').post(createUser);
router.route('/').get(userList);
router.route('/login').post(userLogin);
router.route('/status/:id').post(userStatus);

export default router;

