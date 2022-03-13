import express from "express";
import asyncHandler from "express-async-handler";
import usersHandler from "./users-handler";

const usersRouter = express.Router();
// let users = [{firstName:'Will',
//     lastName: 'Alexander',
//     email: 'will@will.com',
//     diploma: 'License 3 Informatique',
//     options: ['web application', 'baby-foot']
// }];
// usersRouter.get('/', function (req, res) {
//     res.send(users);
// });
// usersRouter.post('/', function (req, res) {
//     const userExist = users.find(user => user.firstName === req.body.firstName);
//     if (userExist) {
//         res.send({});
//     } else {
//         users.push(req.body);
//         res.send({ firstName : 'ok' });
//     }
// });

usersRouter.post("/edit", asyncHandler(usersHandler.editUser));
usersRouter.post("/signin", asyncHandler(usersHandler.signIn));
usersRouter.get("/", asyncHandler(usersHandler.getUsers));
usersRouter.post("/", asyncHandler(usersHandler.create));
usersRouter.delete("/:id", asyncHandler(usersHandler.userDelete));

export default usersRouter;
