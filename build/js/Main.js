
let computerList = [];
let form = document.getElementById('formProduct')

if(!(localStorage.getItem('item'))){
    localStorage.setItem('item',JSON.stringify(computerList));
}
let dataStorageInfoParsed = JSON.parse(localStorage.getItem('item'));

function showInfo(datos){
    //var items = localStorage.getItem('item');
    //var datos = JSON.parse(items);

    let mostrar = document.querySelector(".show")
    mostrar.innerHTML = "";
    let show = datos.map((item) => {
    mostrar.innerHTML += 
        `
        <center>
        <section class="w-full pr-4  ">
        <div class="py-6 w-full  ">
<div class=" md:flex sm:w-64 md:w-96 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="w-1/3 lg:w-2/3 bg-cover"  style="background-image: url('${item.imagen}')">
    </div> 
    <div class="w-2/3 p-4">
    <p class=" md:invisible  w-32 "><img class="md:h-2" src="${item.imagen}" alt="img"></p>
    <h1 class="text-gray-900 font-bold text-2xl">${item.marca} ${item.modelo}</h1>
    <p class="mt-2 text-gray-600 text-sm">-Color: ${item.color}</p>
    <p class="mt-2 text-gray-600 text-sm">-Memoria Ram: ${item.ram}</p>
    <p class="mt-2 text-gray-600 text-sm">-Almacenamiento: ${item.almacenamiento}</p>
    <p class="mt-2 text-gray-600 text-sm">-Procesador: ${item.tipoProcesador} ${item.procesador}</p>
    <div class="flex item-center mt-2">
        
    </div>
    <div class="flex item-center justify-between mt-3">
        <h1 class="text-gray-700 font-bold text-xl">$${item.precio}</h1>
        <button class="ml-2 px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">comprar</button>
    </div>
    </div>
</div>
</section>
</center>

        `
    });
}

form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let computer = new Computer;
    e.preventDefault();
    computer.computer(formData.get('marca'),formData.get('modelo'),formData.get('color')
    ,formData.get('procesador'),formData.get('cpuType'),formData.get('ram'),formData.get('almacenamiento')
    ,formData.get('url'),formData.get('precio'));
    
    computerList = JSON.parse(localStorage.getItem('item'));
    computerList.unshift(computer);
    localStorage.setItem('item',JSON.stringify(computerList));
    showInfo(computerList);
})
showInfo(dataStorageInfoParsed);
console.log(computerList)

    










