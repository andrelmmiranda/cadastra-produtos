const mongoose = require('mongoose');
const { access } = require('./utils/access');
const { readFileSync } = require('fs');

mongoose.connect(access(readFileSync('../access-mongodb.txt', { encoding:'utf8', flag:'r' }), 'vendas'), { useNewUrlParser: true, useUnifiedTopology: true });

const ProdutosSchema = mongoose.model('produtos', {
    nome: String,
    codProduto: String,
    vlUnit: Number,
});

module.exports = {
    ProdutosSchema,
};