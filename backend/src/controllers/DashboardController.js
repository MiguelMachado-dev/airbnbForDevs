const Spot = require("../models/Spot");

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    // Procura spots que o campo user no bd eh igual a user_id
    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
};
