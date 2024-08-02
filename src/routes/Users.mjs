import express from "express";
import User from "../model/User.mjs";

const usersRouter = express.Router();

usersRouter.post('/user', async (req, res) => {
    const { userName, details, role } = req.body;
    try {
        const user = new User({ userName, details, role });
        console.log(user);
        await user.save();
        res.send(user);
    } catch (error) {
        console.error("Error in save user", error);
        res.status(500).send(error);
    }
});

usersRouter.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { userName, details, role } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { userName, details, role }, { new: true });
        console.log(user);
        await user.save();
        res.send(user);
    } catch (error) {
        console.error("Error in update user", error);
        res.status(500).send(error);
    }
});

usersRouter.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.send(user);
    } catch (error) {
        console.error("Error in get user", error);
        res.status(500).send(error);
    }
});

usersRouter.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        res.send(user);
    } catch (error) {
        console.error("Error in delete user", error);
        res.status(500).send(error);
    }
});

usersRouter.get('/users/:size?/:page?', async (req, res) => {
    const { size, page } = req.params;
    const query = {}
    try {
        const exam = await User.find(query).skip((page - 1) * size || 0).limit(size || 5).sort({ updated: -1 });
        res.send(exam);
    } catch (error) {
        console.error(`Error in find users`, error);
        res.status(500).send(error);
    }
});

export default usersRouter;