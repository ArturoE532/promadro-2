const indexCtrl = {};

const Madrono = require('../models/Madrono');

indexCtrl.renderIndex = (req, res) => {
    res.render ('index')
};

indexCtrl.renderAbout = (req, res) => {
    res.render ('about')
};

indexCtrl.renderDatos = async (req, res) => {
    const madronos = await Madrono.find({});
    res.render('datos', { madronos });
};

indexCtrl.renderInfoMadronos = async (req, res) => {
    const madrono = await Madrono.findById(req.params.id);
    res.render('info', { madrono });
};

module.exports = indexCtrl;