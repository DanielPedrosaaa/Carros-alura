function pesquisar() {
    // Função principal para realizar a pesquisa e exibir os resultados

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   // console.log(section); // Loga o elemento no console para fins de depuração
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

   if (campoPesquisa == "") {
       section.innerHTML = "<p style='color:#a00011; font-size: 30px;'>Campo vazio.</p>"
    return;
   }
   
 //  console.log(campoPesquisa);
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre os dados da pesquisa (array 'dados')
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
       // console.log(dado.titulo.includes(campoPesquisa)
        if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML para cada item da pesquisa, formatando os dados
            resultados += `
              <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a target="_blank" href=${dado.link}>Mais Informações</a>
              </div>
            `;
            
        }
    }
    if(!resultados ){
        resultados = "<p style='color:#a00011; font-size: 30px;'>Nada a Respeito.</p>"
    }
      // Atribui o HTML gerado para a seção de resultados
      section.innerHTML = resultados;
  }