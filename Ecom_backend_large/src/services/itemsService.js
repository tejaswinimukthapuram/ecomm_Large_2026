//this service is to explore sequelize crud methods

import itemsModel from "../models/itemsModel.js"


const createItem = (data)=>{
    return itemsModel.create(data)
}

const getItems = ()=>{
    return itemsModel.findAll();
}


const getItemById = (id)=>{
    return itemsModel.findByPk(id);
}


const updateItem = (id, data)=>{
    return itemsModel.update(data,{
        where : {id}
    })
}

export default {
    createItem,
    getItems,
    getItemById,
    updateItem

}