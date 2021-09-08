module.exports = server =>{
    const { responseError } = require('../utils/responseError');
    const { ProdutosSchema } = require('../connection');
 
    server.get('/', (_, response)=>{
        response.redirect('/cadastrar');
    });

    server.get('/cadastrar', (_, response)=>{
        response.render('cadastrarProduto');
    })

    server.post('/cadastrar', (request, response)=>{
        const produto = new ProdutosSchema();

        produto.nome = request.body.nome;
        produto.vlUnit = request.body.vlUnit;
        produto.codProduto = request.body.codProduto;

        produto.save(error =>{
            responseError(error, response, 'Erro de cadastro');

            response.render('cadastrarProduto');
        })
    });

    server.get('/listar', (_, response)=>{
        ProdutosSchema.find({}, (error, produtos) => {
            responseError(error, response, "Erro ao consultar produto");
            
            response.render('listarProdutos', { produtos });
        });
    })

    server.get('/deletar:id', (request, response)=>{
        ProdutosSchema.deleteOne({_id: request.params.id}, (error, response)=>{
            responseError(error, response, 'Erro ao deletar produto');
        });
        response.redirect('/listar');
    });

    server.get('/atualizar:id', (request, response)=>{
        ProdutosSchema.findById(request.params.id, (error, produto)=> {
            responseError(error, response, "Erro ao consultar produto");
    
            response.render('editarProduto', { produto });
        });
    });

    server.post('/atualizar', (request, response)=>{
        ProdutosSchema.findById(request.body.id, (error, produto)=>{
            responseError(error, response, "Erro ao atualizar produto");

            produto.nome = request.body.nome;
            produto.vlUnit = request.body.vlUnit;
            produto.codProduto = request.body.codProduto;

            produto.save(error =>{
                responseError(error, response, "Erro ao atualizar produto");
        
                response.redirect('/listar');
            });

        });
    });
}