const Model = require('../models/log.model')


const saveALog = async ( req,res ) =>{
    const data  = req.body
    const newLog = new Model(data)

    try {
      const err =   await newLog.save()
      console.log(err)
        return res.json({
            success:true,
            message:"Saved log"
        })
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            success:false,
            message:"Unable to save log"
        })
    }
}


const getLogs = async ( req,res ) =>{
    
    //get the size of what i need and also the pagination
    const {size,pagination = 0,type} = req.params
    const skip = pagination * size
     
    try {
      const data =   await Model.find({}).skip(parseInt(skip)).limit(parseInt(size));
      return res.json({
            success:true,
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            success:false,
            message:"Unable to get logs"
        })
    }
}



module.exports = {saveALog,getLogs}