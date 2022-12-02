let ulList = document.querySelector("ul");

let li;
let deleteLi;

let buttonAdd = document.querySelector('button#add');
let buttonDeleteAll = document.querySelector("button#deleteAll");
let buttonTriNom = document.querySelector('button#tri-nom');
let buttonTriPrenom = document.querySelector('button#tri-prenom');
let buttonTriAge = document.querySelector('button#tri-age');

let tab = [];
let tabNom = [];
let tabPrenom = [];
let tabAge = [];


buttonAdd.addEventListener('click', function(){
    li = document.createElement('li');
    li.classList.add('liStyle')

    deleteLi = document.createElement('button');
    deleteLi.innerText = "Supp";
    deleteLi.setAttribute('onclick', 'deleteLiFunction(this)')

    let spanNom = document.createElement('span');
    let spanPrenom = document.createElement('span');
    let spanAge = document.createElement('span');

    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let age = document.getElementById('age').value;

    //Ajout des éléments sur notre page
    spanNom.append(nom);
    spanPrenom.append(prenom);
    spanAge.append(age);
    li.append(spanNom,spanPrenom, spanAge)
    li.append(deleteLi);
    ulList.append(li);

    let tabs = [{
        nom: nom,
        prenom: prenom,
        age: age
    }];
    tab.push(tabs);

    //Ajoute les éléments de notre objet dans le tableau correspondant
    for(let i=0; i<tabs.length; i++){
        tabNom.push(tabs[i].nom);
        tabPrenom.push(tabs[i].prenom);
        tabAge.push(tabs[i].age);
    }

    //Tri les éléments des tableaux
    tabNom.sort();
    tabPrenom.sort();
    tabAge.sort((a,b) => {
        return a-b;
    })
})

function deleteLiFunction(e){
    e.parentNode.remove()
}

buttonDeleteAll.addEventListener('click', function(){
    tab = [];
    ulList.innerHTML = "";
    tabNom = [];
    tabPrenom = [];
    tabAge = [];
})


//Boutons tri
buttonTriNom.addEventListener('click', function(){
    ulList.innerHTML = "";

    for(let i=0; i<tabNom.length; i++){
        console.log(tabNom[i]);
        li = document.createElement('li');
        li.classList.add('liStyle')
        deleteLi = document.createElement('button');
        deleteLi.textContent = "supp";
        deleteLi.setAttribute('onclick', 'deleteLiFunction(this)')

        li.textContent = tabNom[i];
        li.append(deleteLi);
        ulList.append(li);
    }
})

buttonTriPrenom.addEventListener('click', function(){
    ulList.innerHTML = "";

    for(let i=0; i<tabPrenom.length; i++){
        console.log(tabPrenom[i]);
        li = document.createElement('li');
        li.classList.add('liStyle')
        deleteLi = document.createElement('button');
        deleteLi.textContent = "supp";
        deleteLi.setAttribute('onclick', 'deleteLiFunction(this)')

        li.textContent = tabPrenom[i];
        li.append(deleteLi);
        ulList.append(li);
    }
})

buttonTriAge.addEventListener('click', function(){
    ulList.innerHTML = "";

    for(let i=0; i<tabAge.length; i++){
        console.log(tabAge[i]);
        li = document.createElement('li');
        li.classList.add('liStyle')
        deleteLi = document.createElement('button');
        deleteLi.textContent = "supp";
        deleteLi.setAttribute('onclick', 'deleteLiFunction(this)')

        li.textContent = tabAge[i];
        li.append(deleteLi);
        ulList.append(li);
    }
})


//Fonction moins répétitve -> e target sur le click et prend en paramètre de la fonction la variable tableau, appeler la fonction pour chaque tableau