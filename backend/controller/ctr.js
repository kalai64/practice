import userSchema from '../model/schema.js'

const getDetails = async(req,res)=>{
    try {
        const users = await userSchema.find({})
        res.status(200).send({
            success:true,
            message:"Fetched data's successfully",
            users
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Falied to fetch data's"
        })
    }
}

const addUser = async(req,res)=>{
    try {
        const users = await userSchema.create(req.body)
        res.status(200).send({
            success:true,
            message:"Adding data successfully",
            users
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Falied to adding data"
        })
    }
}

const getbyId = async(req,res)=>{
    try {
        const id = req.params.id
        const data = await userSchema.findById(id)
        res.status(200).send({
             success:true,
             message:"Fetched by id successfully",
             data
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Falied to Fetched by id data"
        })
        
    }
}

const updateData = async(req,res)=>{
    try {
        const id = req.params.id
        const data = await userSchema.findByIdAndUpdate(id, 
            {name:req.body.name, email:req.body.email},
            {new:true}
            
        )
        res.status(200).send({
             success:true,
             message:"updated successfully",
             data
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Falied to update"
        })
    }
}

const deleteData = async(req,res)=>{
    try {
        const id = req.params.id
        const data = await userSchema.findByIdAndDelete(id)
        res.status(200).send({
             success:true,
             message:"Deleted successfully",
             data
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Falied to delete"
        })
    }
}

export default {
    getDetails,
    addUser,
    getbyId,
    updateData,
    deleteData
}