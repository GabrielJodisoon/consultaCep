const buttonSearch = document.querySelector('.buttonSearch');
const inputValue = document.querySelector('.inputValue');
const tableTitle = document.querySelector('#trTitle');
const tableContent = document.querySelector('#trNew');
const info = document.querySelector('.table-container');



buttonSearch.addEventListener('click', (e) => {
    e.preventDefault();


    let inputValueResponse = inputValue.value;


    inputValueResponse = inputValueResponse.replace(" ", "");
    inputValueResponse = inputValueResponse.replace(".", "");
    inputValueResponse = inputValueResponse.trim();


    axios
        .get(`https://viacep.com.br/ws/${inputValueResponse}/json/`)
        .then(function(response){

            tableContent.innerHTML = "";
            tableTitle.innerHTML = "";
            createTextTd(response.data.logradouro);
            createTextTd(response.data.bairro );
            createTextTd(response.data.localidade + '/' + response.data.uf);
            createTextTd(response.data.cep );


            createTitle('Rua');
            createTitle('Bairro');
            createTitle('Cidade');
            createTitle('CEP');
    })
    .catch(function (){
        alert('Ops! Algo deu errado')

    })

})

function createTitle(responseCep){
    let createTitleElement = document.createElement('td');
    let createTextTitle = document.createTextNode(responseCep);

    createTitleElement.appendChild(createTextTitle);
    tableTitle.appendChild(createTitleElement);


}


function createTextTd(responseCep){
    let createElementTd = document.createElement('td');
    let createTextTd = document.createTextNode(responseCep);


    createElementTd.appendChild(createTextTd);
    tableContent.appendChild(createElementTd)


}










































// let inputCep = document.getElementById('cep');
// let rua = document.getElementById('rua');
// let bairro = document.getElementById('bairro');
// let cidade = document.getElementById('cidade');

// // cep.value = '07175570';

// inputCep.addEventListener('blur', function(){
//     let cep = inputCep.value;

//     if(cep.length !== 8){
//         return;
//     }

//     fetch(`viacep.com.br/ws/${cep}/json/`)
//     .then(response => response.json())
//     .then(json => {

//         rua.value = json.rua;
//         bairro.value = json.bairro;
//         cidade.value = json.cidade;
//     });

  
// })

