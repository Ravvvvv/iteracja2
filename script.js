

















let list = document.getElementById('list')

let firstEl= list.firstElementChild;
let lastEl= list.lastElementChild;

firstEl.style.color='red'


console.log(firstEl);
console.log(list);
console.log(firstEl.style.color);
console.log(document.querySelector('h1 > span'));
// console.log(document.querySelector('h1 > span').style.color);
lastEl.style.display='none'




firstEl.setAttribute('class','blueviolet');

firstEl.className= firstEl.className + ' first'
lastEl.classList.add('last');
lastEl.classList.add('special');
lastEl.classList.add('blueviolet');
lastEl.classList.remove('special')
// firstEl.classList.remove('blueviolet')ø

lastEl.classList.toggle('super-special')
lastEl.classList.toggle('super-special')

console.log(firstEl.className);
console.log(lastEl);





list.setAttribute('role','list');


for (let listItem of list.children) {
    listItem.setAttribute('role', 'listitem')
}

console.log(list)
console.log(list.getAttribute('id'));



let h1 = document.querySelector('h1')
console.log(h1.innerText)
console.log(h1.innerHTML);
console.log(h1.outerHTML);


// h1.innerText= '<span>DOM - papapa</span>'
// h1.innerHTML= '<span>DOM - papapa</span>'
h1.outerHTML= 'dom <span>DOM - papapa</span>'




list.removeAttribute('id')
list.removeChild(list.lastElementChild)
list.lastElementChild.remove()
console.log(list);





let liElement = document.createElement('li');

let textNode= document.createTextNode('7s');

let attrNode= document.createAttribute('class');


liElement.appendChild(textNode);
liElement.setAttributeNode(attrNode);
// appenchild

list.appendChild(liElement);

attrNode.value= 'last'

/// document fragment


let documentFragment= new DocuamentFragment();
documentFragment.appendChild(liElement);
list.appendChild(documentFragment);

insertBefore
list.insertBefore(liElement,list.lastElementChild.previousElementSibling)

repalceChidl

list.replaceChild(liElement,list.firstElementChild);
insertADjcentElement

list.lastElementChild.insertAdjacentElement('afterend',liElement)
list.firstElementChild.insertAdjacentHTML('beforebegin', '<li>Zero (0)</li>') /* dodaj
element <li>Zero (0)</li> przed pierwszym dzieckiem elementu list */
 
 
list.lastElementChild.insertAdjacentText('beforeend', ' :)'); /* dodaj ':)' za ostatnim
dzieckiem elementu list */   

console.log(liElement)
console.log(textNode);
console.log(attrNode);
console.log(list);
console.log(documentFragment);







let list4 = document.getElementById('list');
console.log(list.childNodes);

let list2= document.getElementById('post-1')
console.log(list2.children)


console.log(list.childNodes)
console.log(list.children)
console.log(list.firstChild)
console.log(list.firstElementChild)
console.log(list.lastElementChild)
console.log(list.lastChild);


let firstElementChild = list.firstElementChild;
let lastElementChild= list.lastElementChild;

// console.log(firstElementChild.parentNode);
// console.log(firstElementChild.parentElement);

// console.log(firstElementChild.nextSibling);
// console.log(firstElementChild.nextElementSibling);
// console.log(lastElementChild.previousElementSibling);
// console.log(lastElementChild.previousElementSibling.previousElementSibling);
console.log(firstElementChild.childNodes);
console.log((firstElementChild.children.length>0)?true:false);


console.log(firstElementChild.closest('#list'));










let articels= document.getElementById('articles')


let paragraf =document.querySelector('.content')
console.log(paragraf)
let paragraff = document.getElementsByClassName('content')
console.log(paragraff[0])

let pa= document.getElementsByTagName('p')
console.log(pa[3])
window.document.write('<h2> hansd</h2>')
// console.log(`co tam jest na wysokosi ${window.innerHeight}`)
// console.log(`co tam jest na wysokosi ${window.outerHeight}`)

let number = 108

let age= window.prompt('podaj wiek');

console.log(`masz ${age} tyle czasu`)

window.confirm('akceptuje umowe')

let accept= window.confirm('akceptuje')

if(accept) {
    console.log(`BRA umowa`);
} else{
    console.log(`niee`);
}





// Usuwanie duplikatów z tablicy:
// Napisz funkcję, która przyjmuje tablicę liczb i zwraca nową tablicę bez duplikatów.

/////////////////////////////////////////////////////////////////////////////////////////
// zadanie 1
const tablica3 = [1, 2, 3, 1, 1, 2, 2, 3, 3,3,7,8,9,99,];
const rezulta = tablica3.filter((element,index,tablica)=> tablica3.indexOf(element)=== index);

console.log(JSON.stringify(rezulta));



const iloczyn=( num1,num2,num3)=>{
    let lokalna = num1*num2*num3
    return(lokalna) 
    
}

let wynik= iloczyn(2,10,5)

console.log(wynik)


let lista = `{
    "employees": [
        { "firstName": "Hans", "lastName": "Schmidt" },
        { "firstName": "Jan", "lastName": "Nowak" },
        { "firstName": "Marek", "lastName": "Kowalski" }
    ]

}`;
// console.log(lista.employees[0])

// for (let pracownik of lista.employees){
//     console.log(pracownik.lastName)
// }

// console.log(JSON.stringify(lista));
console.log(JSON.parse(lista))






let number1 = 1;
do {
    console.log(number1++);  // wyloguje kolejno 0 pomimo, że warunek jest nieprawdziwy
} while(number1 > 2);


let isLoggedIn= false;

while(!isLoggedIn){
    pass=prompt('podaj haslo');
    if(pass === 'secret') {
        isLoggedIn=true
    }
}

alert('jest zalagowany')


let tablica = [1, 45, 3, 5, "ania3"];

for (let i = 0; i < tablica.length; i++) {
if (tablica[i]===108){
    continue;
}
console.log(tablica[i])
}
console.log("-----")


for ( const element of tablica){
    if (element ===108){
       continue;
    }
    console.log(element);
}

// let pass = null;

while (pass !== "secret") {
    pass = prompt('podaj haslo');

}
alert('zalogowany')



let tablica2 = [ 1,45,3,5,"ania3"]

const  AA =(element,index) =>{
    // console.log(element,index
    console.log('Element z Indexem: ' + index + ' ma wartość ' + element )
}

tablica.forEach(AA)

let arStudents=[ "aa",'bb','ccc','dddd'];

for (let i=0; i<arStudents.length; i++){
  console.log(arStudents[i])

}


let obiket={
    pole1:'szatan',
    pole2: 'Bob',
    pole3:"Pa"
};

for (let klucz in obiket){
    console.log(`nazwa pola:${klucz}, wartosc pola: ${obiket[klucz]} `)
}


let people = [ 'Krystian', 'Ania', 'Kasia', ];

for (let person of people) {
    console.log(person); // Wypisze iterowany element tablicy
}

for (let arStudent of arStudents){
    console.log(arStudent)
}

let name = 'akademia 108';

for (let element of name) {
    console.log(element)
}