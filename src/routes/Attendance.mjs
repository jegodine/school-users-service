import express from "express";
import Attendance from "../model/Attendance.mjs";

const attendanceRouter = express.Router();

attendanceRouter.post('/attendance', async (req, res) => {
    const { userId } = req.body;
    try {
        const attaendance = new Attendance({ userId });
        console.log(attaendance);
        await attaendance.save();
        res.send(attaendance);
    } catch (error) {
        console.error("Error in save attendance", error);
        res.status(500).send(error);
    }
});

attendanceRouter.get('/attendance/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const attaendance = await Attendance.findById(id);
        res.send(attaendance);
    } catch (error) {
        console.error("Error in get attaendance", error);
        res.status(500).send(error);
    }
});

attendanceRouter.delete('/attendance/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const dClass = await Attendance.findByIdAndDelete(id);
        res.send(dClass);
    } catch (error) {
        console.error("Error in delete attendance", error);
        res.status(500).send(error);
    }
});

attendanceRouter.get('/classes/:size?/:page?', async (req, res) => {
    const { size, page } = req.params;
    const query = {}
    try {
        const exam = await Attendance.find(query).skip((page - 1) * size || 0).limit(size || 5).sort({ updated: -1 });
        res.send(exam);
    } catch (error) {
        console.error(`Error in find classes`, error);
        res.status(500).send(error);
    }
});

export default attendanceRouter;