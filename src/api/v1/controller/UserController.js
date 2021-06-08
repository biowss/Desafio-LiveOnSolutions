const moment = require('moment')
const Usuarios = require('../model/UserModel')

// GET: Usuario
exports.listarUsuario = async(req, res) => {
  try {
    let usuarios = await Usuarios.findAll()

    res.status(200).json(usuarios)
  } 
  catch (error) {    
    res.status(400).json(error.message)
  }
}

// POST: Usuario
exports.cadastrarUsuario = async(req, res) => {
  try {
    const usuario = {
      ...req.body,
      data_cadastro : moment().format("YYYY-MM-DD HH:MM:SS").split(' ')[0],
      hora_cadastro : moment().format("HH:MM:SS")
    }
    let novoUsuario = await Usuarios.create(usuario);
    res.status(201).json(novoUsuario)
    
  } 
  catch (error) {
    res.status(400).json({erro: error})
  }
}

// PUT: Usuario
exports.editarUsuario = async(req, res) => {
  try {
    const { id } = req.params
    const dados = req.body
    
    let usuario = await Usuarios.findByPk(id)
    
    usuario.nome = dados.nome || usuario.nome,
    usuario.sobrenome = dados.sobrenome || usuario.sobrenome,
    usuario.email = dados.email || usuario.email,
    usuario.senha = dados.senha || usuario.senha,
    usuario.telefone = dados.telefone || usuario.telefone,
    usuario.celular = dados.celular || usuario.celular,
    usuario.cpf = dados.cpf || usuario.cpf,
    usuario.rg = dados.rg || usuario.rg
        
    await usuario.save()

    res.status(200).json(usuario)    
  } 
  catch (error) {
    res.status(400).json({erro: error})
  }
}

// DELETE: Usuario
exports.deletarUsuario = async(req, res) => {
  try {
    const { id } = req.params
    
    let usuario = await Usuarios.findByPk(id)
    
    usuario.destroy()

    res.status(200).json(usuario)    
  } 
  catch (error) {
    res.status(400).json({erro: error})
  }
}