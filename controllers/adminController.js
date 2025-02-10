import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary} from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from 'jsonwebtoken'

//API for adding doctor
const addDoctor  =async(req, res)=>{
  try{
      const { name, email, password, phone, department, gender, age, experience, qualification } = req.body;
      const imageFile = req.file;
      // Use the destructured elements here, for example:
      console.log(name, email, password, phone, department, gender, age, experience, qualification);

      // checking for all data to add doctor
      if(!name || !email || !password || !phone || !department || !gender || !age || !experience || !qualification || !imageFile){
        return res.status(400).json({message:"Please fill all the fields"})
      }

      // validating email format
      if(!validator.isEmail(email)){
        return res.status(400).json({message:"Invalid email format"})
      }

      // validating strong password
      if(password.length < 8){
        return res.status(400).json({message:"Password must be at least 8 characters long"})
      }

      //hashing doctor password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password,salt)

      // upload image to cloudinary
      const image = await cloudinary.uploader.upload(imageFile.path, {
        folder: "doctor",
        resource_type: "image",
      });
      const imageUrl = image.secure_url;

      const doctor = new doctorModel({
        name,
        email,
        password: hashedPassword,
        phone,
        department,
        gender,
        age,
        experience,
        qualification,
        imageUrl,
        date:Date.now()
        
      });

      const newDoctor = await doctor.save();

      res.json({success:true,message:"Doctor Added"})
  }catch(error){
    console.log(error)
    res.status(500).json({message: "Server Error"});
  }
  }


  // API for admin Login

const loginAdmin = async (req,res) => {
  try{
    const {email, password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      res.json({success:true,message:"Admin Login Successful"})
    }else{
      res.json({success:false, message:"Invalid Credentials"})
    } 
  }catch(error){
    console.log(error)
    res.json({success:false, message:"Error in admin login"})
  }
}

export { addDoctor, loginAdmin }