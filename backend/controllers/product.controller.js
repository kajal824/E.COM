import product from '../models/product.model.js';



export const getProducts = async (req, res) => {
    try{
        const products = await product.find({});
        res.status(200).json({success: true, data: product});
    }catch (error){
        console.log("error in fetching products:", error.message);
        res.status(500).json({success:false, message: "sever error"});
    }
    
};

export const creatProduct = async (req,res) => {
    const product = req.body;
    if(!product.name|| !product.price || !product.image){
        return res.status(400).json({sucess:false, message: "please provide all field"});
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({scuess: true,data: newProduct});
    } catch (error) {
        console.error("error in create product:", error.message);
        res.status(500).json({scuess: false,message:"sever error"});
        
    }
};

export const updateProduct = async (req, res)=>{
    const{ id } = req.params;
    const product = req.body;

    if(!mongoose.Types.objectId.isvalid(id)){
        return res.status(404).json({success:false, message:"invalid product Id"});
    }

    try{
        const updatedProduct= await product.findByIdAndUpdate(id, product,{new:true});
        res.status(200).json({success: true, updatedProduct});

    } catch (error){
        res.status(500).json({success: false, message: "sever error"});
    }
};


export const deleteProduct = async (req,res) =>{
    const { id } = req.params;
   try{
    await product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Product delete"});
    
   } catch (error){
    console.log("error in deleting product:",error.message);
    res.status(404).json({success: false, message: "product not found"});
   }
};

