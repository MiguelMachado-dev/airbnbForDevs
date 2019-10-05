// index, show, store, update, destroy
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    // Busca email dentro do banco
    let user = await User.findOne({ email });

    // Se o e-mail nao existir, crie-o
    if (!user) {
      user = await User.create({ email }); // Cria user apenas com info de e-mail
    }

    return res.json(user);
  }
};
