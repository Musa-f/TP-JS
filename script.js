let ulList = document.querySelector("ul");
let li;
let buttonAdd = document.querySelector('button#add');
let buttonDeleteAll = document.querySelector("button#deleteAll");
let tab = new Array;

buttonAdd.addEventListener('click', function(){
    li = document.createElement('li');

    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let age = document.getElementById('age').value;

    li.textContent = nom + ", " + prenom + ", " + age;
    ulList.append(li);

    let tabs = new Array;
    tabs.push("Nom: " + nom, "Prenom: " + prenom, "Age: " + age);
    tab.push(tabs);
})

buttonDeleteAll.addEventListener('click', function(){
    tab = [];
    ulList.innerHTML = "";
})

console.log(tab);