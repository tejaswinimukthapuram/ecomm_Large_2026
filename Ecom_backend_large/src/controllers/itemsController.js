import itemsService from "../services/itemsService.js";
import itemsModel from "../models/itemsModel.js"




const getItems = async (req, res) => {
   

    try{
       const items = await itemsService.getItems();
       res.json(items);
    }catch(err){
      console.error(err);
    res.status(500).json({ message: "Server error" });
    }
};
 


const createItem = async (req, res) => {

  try {
    const data = req.body;
    const product = await itemsModel.create(data);

    res.status(201).json({
      message: "Product created successfully",
      data: product
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


const updateItem = async (req, res) => {
    await itemsService.updateItem(req.params.id, req.body);
    res.json({ message: "Product updated" });
};


const getItemById = async(id)=>{

    const result = await itemsService.getItemById(id)
    return res.json(result);
}


export default {
  getItems,
  createItem,
  updateItem,
};
