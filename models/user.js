import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {type:String},
  email: { type: String,unique: true},
  password: { type: String },
  tell: { type: String },
  role:{type:String,default:'driver'},
  // phone:{type:Number},
  status: {
    type: String,
    enum: ['pending', 'active'],
    default: 'pending'
  }

},
{timestamps:true});

export default mongoose.model("User", userSchema);
