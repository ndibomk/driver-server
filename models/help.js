import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  
  quiz:{type:String},
  answer:{type:String},
  creator:{type:String},
  // status:{
  //   type:String,
  // enum:['pending','success', 'rejected'],
  //    default:'pending'
  // },
 
  id:{type:String},
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
},
{timestamps:true});

const TourModal = mongoose.model("help", tourSchema);

export default TourModal;