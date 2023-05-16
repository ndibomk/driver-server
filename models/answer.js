import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  

  answer:{type:String},
  creator:{type:String},
  // status:{
  //   type:String,
  // enum:['pending','success', 'rejected'],
  //    default:'pending'
  // },
 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
},
{timestamps:true});

const TourModal = mongoose.model("answer", tourSchema);

export default TourModal;