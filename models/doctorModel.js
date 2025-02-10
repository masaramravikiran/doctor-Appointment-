import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    feePerCunsultation: {
        type: Number,
        required: true
    },
    timings: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    role: {
        type: String,
        default: "doctor"
    },
    slots_booked: {
        type: Object,
        default: {}
    },
    appointments: {
        type: Array,
        default: []
    }
}, {
    minimize: false
});

const doctorModel = mongoose.model.doctor || mongoose.model("doctors", doctorSchema);

export default doctorModel;