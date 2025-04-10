import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudinar url
      required: true,
    },
    thumbnail: {
      type: String, // cloudinar url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number, // cloudinar url
      default:0
    }, 
    isPublished:{
            type:String, // cloudinar url
            required: true
        },
    owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        },            

    ispublic = 



  },
  { timeseries: true }
);

videoSchema.plugin(mongooseAggregatePaginate)
export const Video= mongoose.model('Video', videoSchema)