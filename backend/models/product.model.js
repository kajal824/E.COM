import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
       type: String,
       rquired: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

const Product = mongoose.model('Product',productSchema);

export default Product;