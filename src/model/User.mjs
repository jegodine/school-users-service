import mongoose from "mongoose";
const { Schema } = mongoose;

export const personSchema = new Schema({
    names: { type: String, index: true },
    lastNames: { type: String, index: true },
    birthDate: Date,
    email: { type: String, index: true },
    motherName: { type: String, index: true },
    fatherName: { type: String, index: true },
    tutor: { type: String, index: true },
    phone: { type: String, index: true },
});

const userSchema = new Schema({
    userName: { type: String, index: true },
    details: { type: personSchema },
    role: { type: String, enum: ["ADMIN", "PRINCIPAL", "PROFESSOR", "STUDENT"] },
    updated: { type: Date, default: Date.now, index: true },
    created: { type: Date, default: Date.now, index: true }
});

const User = mongoose.model('Users', userSchema);

export default User;