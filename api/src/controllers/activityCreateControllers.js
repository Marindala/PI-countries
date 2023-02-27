const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const createActivity = async (name, difficulty, duration, season, countries) => {
  //paso por parametro lo que requiero//opción pasar (req)

  
  //console.log(name, difficulty, duration, season, countries);
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  //console.log(newActivity);
  countries.map(async (id) => {
    const idCountry = id.toUpperCase(); 
    const country = await Country.findOne({
      where: {
        id: idCountry,
      },
    });
    newActivity.addCountry(country);
  });
};

module.exports = {
  createActivity,
};

