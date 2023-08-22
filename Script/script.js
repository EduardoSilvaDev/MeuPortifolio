const menu = document.getElementById("menu")
const options = document.getElementById("menu-options")

menu.addEventListener("click", function () {
    if (options.style.display === "none" || options.style.display === "") {
        options.style.display = "block"


        setTimeout(hid, 5000)
    }
    else
        options.style.display = "none"

})
function hid() { options.style.display = "none" }


// ------------------------------------------------------------------------
// ADIOCIONAR O NOME E URL DE CADA PROJETO NO GITHUB


function Adicionar(nomeProjeto,url) {
    let ul = document.getElementById('lista')
    let li = document.createElement('li')
    let h2 = document.createElement('h2')
    let a = document.createElement('a')
    let img = document.createElement('img')
    let p = document.createElement('p')

    h2.innerHTML = nomeProjeto
    img.src = "img/projeto.svg"
    a.href = url
    a.appendChild(img)
    p.className = 'projeto-descricao'
    p.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    li.appendChild(h2)
    li.appendChild(a)
    li.appendChild(p)

    ul.appendChild(li)

}

async function listUserRepositories() {
    let listanomee = []
    try {
        const response = await fetch(`https://api.github.com/users/EduardoSilvaDev/repos`);

        if (response.ok) {
            const data = await response.json();
            data.forEach((repo) => {
                // listanomee.push(repo.name);
                Adicionar(repo.name,repo.html_url)
            });
        }
        // else {
        //     console.error('Falha ao obter repositórios do GitHub');
        // }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
    listanomee.forEach(function (elemento) {
        console.log(elemento);
    });
}
listUserRepositories()
// listUserRepositories();