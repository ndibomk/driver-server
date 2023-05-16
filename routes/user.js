import express from "express";
import { signup, signin, AllUsers, getUser, updateStatusTour } from "../controllers/user.js";
import UserModal from "../models/user.js";

const router = express.Router();


router.post("/signup", signup);
router.post("/signin", signin);
router.get("/", AllUsers);
router.get("/:id", getUser);
router.patch("/:id",  updateStatusTour);


// router.get('/update-status/:id' ,async(req,res)=>{
//     const { id } = req.params;
//     try {
//       const {status}=req.body;
//       await UserModal.findByIdAndUpdate(id,(status));
//       res.send({
//         success:true,
//         message:'updtated successfully'
//       });

//     } catch (error) {
//         res.status(500).json({ message: "Something went wrong" });
//         console.log(error);
//     }
//   })

export default router;