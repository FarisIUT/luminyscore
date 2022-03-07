import express from 'express';
const router = express.Router();
let users = [{firstName:'Will',
 lastName: 'Alexander',
 email: 'will@will.com',
 diploma: 'License 3 Informatique',
 options: ['web application', 'baby-foot']
}];
router.get('/', function (req, res) {
 res.send(users);
});
router.post('/', function (req, res) {
    const userExist = users.find(user => user.firstName === req.body.firstName);
    if (userExist) {
        res.send({});
    } else {
        users.push(req.body);
        res.send({ firstName : 'ok' });
    }
});

export default router;