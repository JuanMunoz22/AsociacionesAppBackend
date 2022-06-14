const {response} = require('express');

const usuariosGet = (req, res = response) => {
    const body = req.body;

    res.json({
        body
    });
}


module.exports = {
    usuariosGet
}