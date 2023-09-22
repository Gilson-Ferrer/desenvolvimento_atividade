let titulo = document.getElementById("titulo");
titulo.innerText = "Ítens simples e links de sites Úteis";

const siteProz = document.querySelector("a");
siteProz.innerText = "Proz educação"

let items = document.querySelector("#lista-n-ordenada");
items.innerHTML = `<li>Engenharia de Software</li>
<li>Linguagens de programação</li>
<li>Sistemas Operacionais</li>
`

let itemComLinks = document.querySelector("#lista-ordenada");
itemComLinks.innerHTML = `<a href="https://github.com/Gilson-Ferrer">GitHub</a><br>
<a href="https://stackoverflow.com/">Tire suas dúvidas no Stack Overflow</a><br>
<a href="https://www.debian.org/">Melhor sistema operacional linux!</a>
`
