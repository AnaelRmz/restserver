const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = "no name", apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - Constrolador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}


const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post API - Constrolador',
        body
    });
  }


const usuariosPut = (req, res = response) => {
    
    const { id } = req.params;


    res.json({
        msg: 'put API - Controlador',
        id
    });
  }


const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Constrolador'
    })
  };


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    })
  };  



  



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete

}