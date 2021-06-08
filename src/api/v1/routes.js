const express = require('express');
const UserController = require ('./controller/UserController');
const PokemonController = require ('./controller/PokemonController');

const router = express.Router();

// Usuarios
// router.post('/login', UserController.efetuarLogin);

router.get('/usuarios/', UserController.listarUsuario);
router.post('/usuarios/', UserController.cadastrarUsuario);
router.put('/usuarios/:id', UserController.editarUsuario);
router.delete('/usuarios/:id', UserController.deletarUsuario);


// Pokemons
// router.get('/pokemons', PokemonController.listarPokemon);
// router.post('/pokemons', PokemonController.cadastrarPokemon);
// router.put('/pokemons/:id', PokemonController.atualizarPokemon);
// router.delete('/pokemons/:id', PokemonController.deletarPokemon);



module.exports = router;
