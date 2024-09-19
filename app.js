
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let resultados = ""

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()

    if (campoPesquisa == ""){
        section.innerHTML = `
                <div class="item-resultado">
                            <h2>
                                <a href="#" target="_blank">Digite algo na pesquisa</a>
                            </h2>
                </div>
                `
        return
    }
    else{
        for (let dado of dados)
        {
            if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa) || dado.tags.toLowerCase().includes(campoPesquisa)) {
                resultados += `
                <div class="item-resultado">
                            <h2>
                                <a href="#" target="_blank">${dado.titulo}</a>
                            </h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <a href=${dado.link} target="_blank">Mais Informações</a>
                </div>
                `
            }
        }
    }
    if (!resultados){
        section.innerHTML = `
            <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">Nada Encontrado</a>
                        </h2>
            </div>
            `
    }
    else{
        section.innerHTML = resultados
    }
}



