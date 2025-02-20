import { studentValidationSchema } from './../stuedent/student.validation';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.controller';

import express from 'express';

const router= express.Router();


router.post("/create-student", validateRequest(studentValidationSchema), UserController.createStudent)




    export const UserRoutes = router;