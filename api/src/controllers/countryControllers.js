const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const { API_URL } = process.env;

const getAllCountries = async () => {
  //console.log(infoApi)
  const infoDb = await Country.findAll({ 
    include: {
      model: Activity,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  //console.log(infoDb)
  if (!infoDb.length) {
    const infoApi = (await axios.get(`${API_URL}`)).data.map((c) => {
   
      return {
        id: c.cca3 ? c.cca3 : c.cioc,
        name: c.name.common,
        image: c.flags[0],
        continents: c.continents[0],
        capital: c.capital != null ? c.capital[0] : "Not found",
        subregion: c.subregion,
        area: c.area,
        population: c.population,
      };
  

      } );
    await Country.bulkCreate(infoApi); //1 solo llamado crea registros en masa
    return infoApi;
  }
  return infoDb;
};


const dbCountry = async (name) => {
    const search = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + name + "%", //coincidencias
        },
      },
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
      order: [["name", "ASC"]],
    });
  
    const response = !search.length ? "Country not found" : search;
    //console.log(res)
    return response;
  
 
};


const dbCountryById = async (id) => {
  //const id = id.toUpperCase()
  return await Country.findByPk(id.toUpperCase(), {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: { attributes: [] },
    },
  });
};

module.exports = {
  getAllCountries,
  dbCountry,
  dbCountryById,
};
