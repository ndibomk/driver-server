import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  name: {type:String},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  phone:{type:String},
  address:{type:String},
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
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
 
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
},
{timestamps:true});

const TourModal = mongoose.model("customer", tourSchema);

export default TourModal;