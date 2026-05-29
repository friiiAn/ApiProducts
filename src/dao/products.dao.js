const productsDAO = {};

import Product from "../models/Product.js";

// OBTENER TODOS
productsDAO.getAll = async () => {

    return await Product.find();
};

//Buscar producto por codigo de barras
productsDAO.getOne = async (barcode) => {

    console.log("Solicitud recibida");
    console.log("Codigo de barras:", barcode);

    return await Product.findOne({ barcode });
};

// INSERTAR
productsDAO.insertOne = async (product) => {

    const newProduct = await Product.create(product);

    return newProduct;
};


// ELIMINAR
productsDAO.deleteOne = async (barcode) => {
    const deleteProduct= await Product.findOneAndDelete ({barcode:barcode});
    return deleteProduct;
};

//Actualizar producto
productsDAO.updateOne=async(barcode, product)=>{
    const updateProduct=await Product.findOneAndUpdate({barcode:barcode},product);
    return updateProduct;
};



export default productsDAO;