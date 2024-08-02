import mongoose, { ObjectId } from "mongoose";
const { Schema } = mongoose;

const attendanceSchema = new Schema({
    userId: { type: ObjectId, index: true },
    created: { type: Date, default: Date.now, index: true }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;