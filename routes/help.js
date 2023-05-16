import express from "express";
import auth from "../middleware/auth.js";

import {
  createTour,
  deleteTour,
  getRelatedTours,
  getTour,
  getTours,
  
  getToursByTag,
  getToursByUser,
  likeTour,
  updateTour,
} from "../controllers/help.js";

const router = express.Router();


router.get("/search:key", async (req,res)=>{
  let result=await TourModal.find({
    "$or":[
      {
        houseNo:{$regex:req.params.key},
        
      }
    ]
  })
  res.send(result)
});


router.get("/", getTours);
router.get("/:id", getTour);

router.post("/", auth, createTour);
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.get("/userProjects/:id", auth, getToursByUser);


export default router;