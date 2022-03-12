import usersRep from './users-repository';


async function create(req, res) {
res.set("Content-Type", "application/json");
    try {
        const userBool = await matchExist(req.body.firstName);
        if (userBool) {
        res.send({});
        } else {
        await usersRep.store(req.body);
        res.send({ firstName: "ok" });
        }
    } catch (e) {
        console.log("error creating user", e);
        res.status(400).end();
    }
}


async function getUsers(req, res) {
    try {
        const result = await usersRep.getAll();
        const finalArray = [];
        for (let obj of result.body.hits.hits) {
            finalArray.push(obj. source);
        }
        res.send(finalArray);
    } catch (e) {
        res.status(400).end();
    }
}



async function matchExist (firstName) {
    try {
        const result = await usersRep.getUser(firstName);
        return result.body.hits.total.value > 0 ? true : false;
    } catch (e) {
        console.log('error getting user', e);
        return false;
    }
}

async function userDelete(req, res) {
    try {
        const userBool = await userExist(req.params.id);
        if(!userBool) {
            res.status(404).end();
        } else {
            const result = await usersRep.remove(req.params.id);
            res.send(result);
        }
    } catch (e) {
        res.status(error.status || 400).end();
    }
}


export default {
    getUsers,
    create,
    userExist,
    userDelete
};

