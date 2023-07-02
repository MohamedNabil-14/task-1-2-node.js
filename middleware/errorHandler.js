const logger= require("../services/logger")
const path = require("path")

const routeHandler={
    get: async (req,res)=>{
        try {
            res.sendFile(path.join(__dirname,"..","/views","/index.html"))
        } catch (error) {
            logger.error(error.message)
            res.status(400).send({message:error.message})
        }
    }
}
module.exports = routeHandler