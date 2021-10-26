
let computerList = [];
let form = document.getElementById('formProduct')



function showInfo(){
    var items = localStorage.getItem('item');
    var datos = JSON.parse(items);

    let mostrar = document.querySelector(".show")
    mostrar.innerHTML = "";
    let show = datos.map((item) => {
    mostrar.innerHTML += 
        `
        <img src ="${item.imagen}">
        <p class="mb-2">${item.marca}</p>
        <p class="mb-2">${item.modelo}</p>
        <p class="mb-2">${item.ram}</p>
        <p class="mb-2">${item.almacenamiento}</p>
        <p class="mb-2">${item.procesador}</p>
        <p class="mb-2">${item.tipoProcesador}</p>
        `
    });
}

form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let computer = new Computer;
    e.preventDefault();
    computer.computer(formData.get('marca'),formData.get('modelo'),formData.get('color')
    ,formData.get('procesador'),formData.get('cpuType'),formData.get('ram'),formData.get('almacenamiento')
    ,formData.get('url'));
    
    computerList = JSON.parse(localStorage.getItem('item'));
    computerList.unshift(computer);
    localStorage.setItem('item',JSON.stringify(computerList));

/*     var items = localStorage.getItem('item');
    var datos = JSON.parse(items);

    let mostrar = document.querySelector(".show")
    mostrar.innerHTML = "";
    let show = datos.map((item) => {
    mostrar.innerHTML += 
    `
    <img src ="${item.imagen}">
    <p class="mb-2">${item.marca}</p>
    <p class="mb-2">${item.modelo}</p>
    <p class="mb-2">${item.ram}</p>
    <p class="mb-2">${item.almacenamiento}</p>
    <p class="mb-2">${item.procesador}</p>
    <p class="mb-2">${item.tipoProcesador}</p>
    `
}); */

   showInfo();
})
showInfo();
console.log(computerList)










