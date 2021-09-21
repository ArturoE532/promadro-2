const madronosCtrl = {};

const Madrono = require('../models/Madrono');

madronosCtrl.renderMadronoForm = (req, res) => {
    res.render('madronos/tipomadrono');
};

madronosCtrl.renderMadronoFormt1 = (req, res) => {
    res.render('madronos/newmadronot1');
};

madronosCtrl.renderMadronoFormt2 = (req, res) => {
    res.render('madronos/newmadronot2');
};

madronosCtrl.createMadronoFormt1 = async (req, res) => {
    const { especie, 
            estados, 
            habito, 
            corteza_de_la_parte_alta_del_tronco_y_ramas_principales, 
            corteza_de_ramillas,
            peciolos,
            hojas_enves,
            flores} = req.body;
    const newMadrono = new Madrono({    especie, 
                                        estados, 
                                        habito, 
                                        corteza_de_la_parte_alta_del_tronco_y_ramas_principales, 
                                        corteza_de_ramillas,
                                        peciolos,
                                        hojas_enves,
                                        flores });
    newMadrono.user = req.user.id;
    await newMadrono.save();
    req.flash('success_msg', 'Nota creada correctamente');
    res.redirect('/madronos')
};

madronosCtrl.createMadronoFormt2 = async (req, res) => {
    const { especie,
        estados,
        habito,
        peciolos_y_ramillas,
        hojas_duración_y_textura,
        hojas_las_más_anchas,
        hojas_margen,
        hojas_enves,
        inflorescencia,
        flores } = req.body;
    const newMadrono = new Madrono({ especie,
        estados,
        habito,
        peciolos_y_ramillas,
        hojas_duración_y_textura,
        hojas_las_más_anchas,
        hojas_margen,
        hojas_enves,
        inflorescencia,
        flores });
    newMadrono.user = req.user.id;
    await newMadrono.save();
    req.flash('success_msg', 'Nota creada correctamente');
    res.redirect('/madronos')
};

madronosCtrl.renderMadronos = async (req, res) => {
    const madronos = await Madrono.find({});
    res.render('madronos/allmadronos', { madronos });
};

madronosCtrl.renderEditMadronos = async (req, res) => {
    const madrono = await Madrono.findById(req.params.id);
    res.render('madronos/editmadrono', { madrono });
};

madronosCtrl.updateMadronos = async (req, res) => {
    const { especie,
    estados,
    habito,
    corteza_de_la_parte_alta_del_tronco_y_ramas_principales,
    corteza_de_ramillas,
    peciolos,
    hojas_enves,
    flores,
    peciolos_y_ramillas,
    hojas_duración_y_textura,
    hojas_las_más_anchas,
    hojas_margen,
    inflorescencia } = req.body;
    await Madrono.findByIdAndUpdate(req.params.id, { especie,
        estados,
        habito,
        corteza_de_la_parte_alta_del_tronco_y_ramas_principales,
        corteza_de_ramillas,
        peciolos,
        hojas_enves,
        flores,
        peciolos_y_ramillas,
        hojas_duración_y_textura,
        hojas_las_más_anchas,
        hojas_margen,
        inflorescencia });
    req.flash('success_msg', 'Nota actualizada correctamente');
    res.redirect('/madronos')
};

madronosCtrl.deleteMadronos = async (req, res) => {
    await Madrono.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Nota eliminada correctamente');
    res.redirect('/madronos')
};

module.exports = madronosCtrl;