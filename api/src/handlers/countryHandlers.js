require("dotenv").config();
const {getAllCountries, dbCountry, dbCountryById} = require("../controllers/countryControllers.js")



const getCountries = async (req, res)=>{
    try {
        const { name } = req.query;
        const all= await getAllCountries()
        let result = name ? await dbCountry(name) : all 
        result == ""? res.status(400).json({error: `name ${name} not found`}) :
        res.status(200).send(result)

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getById = async (req, res) =>{
    try {
        const {id} = req.params;
        let resultId = await dbCountryById(id)
        resultId === null ? res.status(400).json({error: `id ${id} not found`}) :
        res.status(200).send(resultId) 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports ={
    getCountries,
    getById
}