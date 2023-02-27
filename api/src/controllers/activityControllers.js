const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getAllActivities = async () => {
  return await Activity.findAll({ 
    include: {
      model: Country, 
      attributes: ["name"], 
      through: { attributes: [] },
    },
  });
};

module.exports = {
  getAllActivities,
};