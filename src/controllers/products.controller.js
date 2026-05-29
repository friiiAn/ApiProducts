import productsDAO from "../dao/products.dao.js";

const productsControllers = {};

// OBTENER TODOS
productsControllers.getAll = async (req, res) => {

    try {

        const products = await productsDAO.getAll();

        res.json({
            data: products
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

// OBTENER UNO
productsControllers.getOne = async (req, res) => {

    try {

        const product = await productsDAO.getOne(req.params.barcode);

        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);

    } catch (error) {

        console.error("Error fetching product:", error);

        res.status(500).json({
            error: "An error occurred while fetching the product"
        });
    }
};

// INSERTAR
productsControllers.insertOne = async (req, res) => {

    try {

        const product = req.body;

        const response = await productsDAO.insertOne(product);

        res.json({
            message: "Product inserted successfully",
            product: response
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

// ELIMINAR
productsControllers.deleteOne = (req, res) => {
    productsDAO.deleteOne(req.params.barcode)
    .then((result)=>{
        res.json({
            message:"product deleted successfully",
            product:result
        })
    })
    .catch((err)=>{
        console.log("An error has ocurred while deleting the product")
        res.status(500).json({error:err})
    });
};
//Actualizar producto
productsControllers.updateOne= (req, res)=> {
    productsDAO.updateOne(req.params.barcode, req.body)
    .then(() =>{
        res.json({message:"product update  successfully"})
    })
    .catch((err)=>{
        console.error("Error al actualizar: " + err);
        res.json({
            message:"Servidor no disponible",
            error:err
        })
    });
};
export default productsControllers;