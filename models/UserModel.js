import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
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
    image:{type:String, default:"data:image/png"},
    address:{type:String, default:"Not Selected"},
    gender: {
      type: String,
      default:"Not Selected"
    },
    dob: {
      type: String,
      default:"Not Selected"
    },
    phone: {
      type: String,
      default:"000000000"
    },
}, {
  timestamps: true
});

const userModel = mongoose.model.doctor || mongoose.model('user', userSchema);

export default userModel;