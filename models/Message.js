import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  name: { type: String },
  message: { type: String},
  date:{type:Date},
  phone:{type:Number},
  location:{type:String},
 

},
{timestamps:true});

export default mongoose.model("message", messageSchema);
