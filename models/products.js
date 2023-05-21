import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  name: {type:String},
  
  phone:{type:String},
  address:{type:String},
 
  userId: {
    type: String,
    // required: true,
  },
  picture: {type:String},
  
  status: {
    type: String,
    enum: ['pending', 'success', 'rejected'],
    default: 'pending',
  },
  isComplete: {type:Boolean , default:false},
rating:[
  {
    star:Number,
    postedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},

  },
],
comment:{type:String},
totalRating:{
type:String,
default:0
},
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
},
{timestamps:true});

const TourModal = mongoose.model("customer", tourSchema);

export default TourModal;