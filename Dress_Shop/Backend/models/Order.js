
const mongoose=require("mongoose")
const OrderSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true,
            }
            , quantity: {
            type: Number,
            required: true
        },
        price:{
            type:Number,
            required:true,
        },

        }
    ],
            totalPrice:{
                type:Number,
            required:true
            }
            ,
            status:
            {
                type:String,
                enum:[
                     "Pending",
                "Confirmed",
                "Shipped",
                "Delivered",
                "Cancelled"
                ],
                required:true,
                  default: "Pending"
            },
            address:{
                name:{
                type:String,
                required:true,
                },
                phone:{
                    type:String,
                    required:true
                },
                street:{
                type:String,
                required:true,
                },
                city:{
                type:String,
                required:true,
                },
                state:{
                type:String,
                required:true,
                },
                pincode:{
                type:String,
                required:true,
                },
            }
        },{timestamps:true}
)
module.exports=mongoose.model('Order',OrderSchema)