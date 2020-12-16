let ui_mode = (function ()
{
    
    //automatização do código
    let DOMStrings = 
    {
        inputMovimento: '#tipoMovimento',
        inputDescricao: '#descricao',
        inputValor: '#valor',
        btnSave: '#btnSave',
        tblRenda: '#tabelaRenda',
        tblDespesa: '#tabelaDispesa',
        lblTotal: '#total',
        lblTotalRenda: '#totalRenda',
        lblTotalDespesa: '#totalDespesa',
        lblPorDespesa: '#porDespesa',
        secTables: '#tableSection',
    }
    
    //objeto return tem um funçao que pega os valores desses atributos do objeto dentro do objeto.
    return {
        getValues: function()
        {
            return {
                tipoMovimento: document.querySelector(DOMStrings.inputMovimento).value,
                descricao: document.querySelector(DOMStrings.inputDescricao).value,
                valor: parseFloat(document.querySelector(DOMStrings.inputValor).value)
            }
        },
            adicionarItemTabela: function(item,tMovimento) 
            {
                //1.criar html da linha
                let linha = document.createElement("tr");
                let colunaDescricao = document.createElement("td");
                let colunaValor = document.createElement("td");
                let colunaExcluir = document.createElement("td");
                let btnExcluir = document.createElement("button");

                //2.0 atribuir os valores
                //2.1 criar os valores nas colunas
                colunaDescricao.textContent = item.descricao;
                colunaValor.textContent = item.valor;

                //2.2 atribuir os valores de classe e x no botão
                btnExcluir.classList.add("btn");
                btnExcluir.classList.add("btn-sm");
                btnExcluir.classList.add("btn-danger");
                btnExcluir.textContent = "x";

                //3.incluir as colunas na linha no DOM Principal (tabela)
                //appendchild vai incluir dentro do dom ou seja (<td><tr></tr></td>)
                linha.appendChild(colunaDescricao);
                linha.appendChild(colunaValor);
                linha.appendChild(colunaExcluir);
                colunaExcluir.appendChild(btnExcluir);

                //4.qual é tabela que vamos usar.
                let tabela;
                if(tMovimento === "renda")
                {
                    tabela = document.querySelector(DOMStrings.tblRenda);
                } else 
                {
                    tabela = document.querySelector(DOMStrings.tblDespesa);
                }
                //5.Incluir a linha na tabela.
                tabela.appendChild(linha);

            },

            limpaDados: function()
            {
                let campos = document.querySelectorAll(DOMStrings.inputDescricao + ',' + DOMStrings.inputValor);
                //funcionalidades do js slice mostra as valores das posiçoes dependendo do intervalo que inserir
                //funcionalidade call chama um objeto que exerce outra finalidade.
                let camposArray = Array.prototype.slice.call(campos);
                camposArray.forEach(function(current, index, array){
                current.value = "";
                });
                this.descricaoFocus();
            },

            atualizaTotais: function(dados)
            {
                document.querySelector(DOMStrings.lblTotal).textContent = dados.total;
                document.querySelector(DOMStrings.lblTotalRenda).textContent = dados.totalRenda;
                document.querySelector(DOMStrings.lblTotalDespesa).textContent = dados.totalDespesa;
                document.querySelector(DOMStrings.lblPorDespesa).textContent = dados.porDespesa;
            },

            descricaoFocus: function()
            {
                document.querySelectorAll(DOMStrings.inputDescricao).focus();
            },
            //função que acessa o DOMStrings
            getDOMStrings: function() 
            {
                return DOMStrings;
            }
    };
//Os dois ultimos parentes sao para executar a função (IIFE - Immediately Invoked Function Expression).
})();

data_mode = (function ()
{
    let Despesa = function (id, descricao, valor)
    {
        //this ponto id sera igual ao parametro que será passado para a função.
        this.id = id;
        //this ponto descricao sera igual ao parametro que será passado para a função.
        this.descricao = descricao;
        //this ponto valor sera igual ao parametro que será passado para a função.
        this.valor = valor;
    };
    //função generica para calcula o tipo de movimento que passar (despesas ou renda).
    let calculaTotal =  function(tMovimento) 
    {
        let soma = 0;
        dados.item[tMovimento].forEach(function(current){
            soma += current.valor
        });
        dados.totais[tMovimento] = soma;
    }
    let Renda = function (id, descricao, valor)
    {
        //this ponto id sera igual ao parametro que será passado para a função.
        this.id = id;
        //this ponto descricao sera igual ao parametro que será passado para a função.
        this.descricao = descricao;
        //this ponto valor sera igual ao parametro que será passado para a função.
        this.valor = valor;
    };
    //objeto para finalidade de retorno de alguma propriedade do objeto facilitando o acesso aos seus atributos. 
    let dados = 
    {
        //listas de despesas e renda(array). Acessando os dados o item dele e o tipo de lista que desejada.
        itens: {
            despesa: [], 
            renda: [],
        },
        //valor total para calculo para despesas e renda. Acessando os dados e o valor total e tipo dele.
        totais: {
            despesa: 0,
            renda: 0,
        },
        total: 0,
        porDespesa: 0,
    };
    return {
        //movimento (despesas ou renda)
        adicionarItem: function(tmovimento, descricao, valor){
            let item;
            //regra do id: pegar o utlimo elemento e adicionar.
            let id = 0;
            let tamanhoArray =  dados.itens[tmovimento].length;
            if (tamanhoArray > 0) {
                //retorna ultimo id do array somando a 1
                id = dados.itens[tmovimento][tamanhoArray -1].id +1;
            }
            switch(tmovimento){ 
                case 'renda':
                    item = new Renda(id, descricao, valor);
                    break;
                
                case 'despesa' :
                    item = new Dispesa(id, descricao, valor);
                    break;
            };
           dados.itens[tmovimento].push(novoItem);
           return novoItem;
        },
        calculaTotais: function()
        {
            //1.calcula os totais de despesas de desepesas e renda.
            calculaTotal('despesa');
            calculaTotal('renda');
            //2. Calcula o total geral (renda - despesa).
            dados.total =  dados.totais['renda'] - dados.totais['despesa'];
            //3. calcula a % do total de despesas.
            if (dados.totais['renda']>0)
            {
                dados.porDespesa = Math.round(dados.totais['despesa']/dados.totais['renda']*100);
            } else 
            {
                dados.porDespesa = -1;
            }
        }, 
        
        getTotais: function()
        {
            return {
                total: dados.total,
                totalDespesa: dados.totais['despesa'],
                porDespesa: dados.porDespesa,  
                totalRenda: dados.totais['renda']
                
            };
        },
        funcaoParaTestar: function() 
        {
            //funcao para testar os dados estao ok
            console.log(dados);
        }
    }
})();
controller = function (ui, data)
{
    let addItem = function() 
    {
        //1. pegar os valores dos input.
        let input = ui.getValues();
        if (input.descricao !== "" && !isNaN(input.valor ) && input.valor > 0){
            //2. Adicionar o item na nossa estrutura de dados.
            let novoItem = data.adicionarItem(input.tipoMovimento, input.descricao, input.valor);
            //3. Adicionar na nossa UI (tabela) a entrada.
            ui.adicionarItemTabela(novoItem, input.tipoMovimento)
            //3.1 Limpar os campos
            ui.limpaDados();
            //4. atualiza os totais.
            atualizaTotais();
            
            
        } else {
            alert("Deve-se preencher os campos de descrição e valor (valor númerico e positivo)");
        }
    };

    let atualizaTotais = function()
    {
        //4.Calcular o novo budget total
        data.calculaTotais();
        //4.1 pega os valores
        let dadostotais = data.getTotais();
        //5.Atualizar a Ui (totais)
        ui.atualizaTotais(dadostotais);
    }

    let configListerners = function()
    {

        // Com Acessa o ui_mode atraves do DOMStrings.
        let DOMStrings = ui.getDOMStrings();


        document.querySelector(DOMStrings.btnSave).addEventListener('click', function ()
        {
            //chamada da função adicionar item
            addItem();
            //console.log('clicou no botão!');
        });
        /*evento de teclado. keydown foi apertado o botao, keypress é precionar qualquer tecla do teclado, 
        se vc segurar aparece varias vezes no console, keyup foi solto o botao precionado.*/
        document.addEventListener('keyup', function(event)
        {
            if (event.key === 'Enter'){
                //chamada da funcção adicionar item
                addItem();
                //console.log('o enter foi clicado');
            }
        });
        document.querySelector(DOMStrings.secTables).addEventListener('click', function(event){
            if (event.target.nodename == "BUTTON"){
                let idCompleto = event.target.parentNode.id;
                let splitId = idCompleto.split("-");
                let tMovimento = splitId[0];
                let id = splitId[1];
                // 1. apagar o item da estrutura de dados.
                
                apagarItem: function (id, tMovimento){
                    let indexNum;
                    dados.itens[tMovimento == id].forEach(function(current, index){
                        if(current.id == id){
                        indexNum = index;
                        }
                    });
                    dados.itens[tMovimento].splice(indexNum, 1);
                }

                // 2.deletar o elemento do ui.
                apagarItem();
                // 3 atualizar os totais.
                atualizaTotais();

            }
        });
    }

    //função anonima
    return {
        init: function ()
        {
            console.log('Inicia a aplicação!!');
            //chamada do eventos dos Listerners
            configListerners();
        }
    }

};
//init é um atributo do objeto return, aqui é chamada de funcionamento do controller
controller(ui_mode, data_mode).init();



/*IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.
vai manter  os dados ativos no sistema. e deve-se guarda ela numa varivável */