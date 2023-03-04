require("dotenv").config();
const {getAllActivities} = require("../controllers/activityControllers.js")
const {createActivity} = require ("../controllers/activityCreateControllers.js")



const getActivities = async (req, res) =>{
    try {
        const activity = await getAllActivities()
        res.status(200).send(activity)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

const postActivity = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body;
        const newActivity = await createActivity(name, difficulty, duration, season, countries)
        console.log(newActivity)
        res.status(200).json({ success: "Activity created" }) 

    } catch (error) {
       // console.log(error)
        res.status(400).send({error:error.message})
    }
}

const changeActivity = async( req, res) =>{
    const id = req.params.id
    const activity = req.body

    try {
         await Activity.update(activity,{
            where:{
                id: id
            }
        })
        return res.json({ Changed: true})
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteActivity = async (req,res)=>{
    const id = req.params.id

    try {
         await Activity.destroy({
            where:{
                id:id
            }
        })
        return res.json( {Delete:true} )
    } catch (error) {
        res.status(400).send(error)
    }
}


module.exports = {
    getActivities,
    postActivity,
    changeActivity,
    deleteActivity
}
