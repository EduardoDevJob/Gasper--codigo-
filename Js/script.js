// Aqui começa o codigo de abrir e fechar os modal

function abrirPreços (){
    var modal = document.querySelector('.preços');
    modal.showModal();
}


window.addEventListener('click', function(event){
    var modal = document.querySelector('.preços');

    if(event.target === modal){
        modal.close()}
})

function abrirBungee (){
    var modal = document.querySelector('.bungeeJump');
    modal.showModal();
}


window.addEventListener('click', function(event){
    var modal = document.querySelector('.bungeeJump');

    if(event.target === modal){
        modal.close()}
})


function abrirPendulo (){
    var modal = document.querySelector('.pendulo');
    modal.showModal();
}


window.addEventListener('click', function(event){
    var modal = document.querySelector('.pendulo');

    if(event.target === modal){
        modal.close()}
})

function abrirArvorismo (){
    var modal = document.querySelector('.arvorismo');
    modal.showModal();
}

window.addEventListener('click', function(event){
    var modal = document.querySelector('.arvorismo');

    if(event.target === modal){
        modal.close()}
})


function abrirEstilingue (){
    var modal = document.querySelector('.estilingue');
    modal.showModal();
}

window.addEventListener('click', function(event){
    var modal = document.querySelector('.estilingue');

    if(event.target === modal){
        modal.close()}
})

function abrirTrilha (){
    var modal = document.querySelector('.trilha');
    modal.showModal();
}

window.addEventListener('click', function(event){
    var modal = document.querySelector('.trilha');

    if(event.target === modal){
        modal.close()}
})


function abrirRapel (){
    var modal = document.querySelector('.rapel');
    modal.showModal();
}

window.addEventListener('click', function(event){
    var modal = document.querySelector('.rapel');

    if(event.target === modal){
        modal.close()}
})

function abrirQuadri (){
    var modal = document.querySelector('.quadri');
    modal.showModal();
}

window.addEventListener('click', function(event){
    var modal = document.querySelector('.quadri');

    if(event.target === modal){
        modal.close()}
})

function abrirSuperman (){
    var modal = document.querySelector('.superman');
    modal.showModal();
}

window.addEventListener('click', function(event){
    var modal = document.querySelector('.superman');

    if(event.target === modal){
        modal.close()}
})

function abrirTirolesa (){
    var modal = document.querySelector('.tirolesa');
    modal.showModal();
}

window.addEventListener('click', function(event){
    var modal = document.querySelector('.tirolesa');

    if(event.target === modal){
        modal.close()}
})

function abrirEscalada (){
    var modal = document.querySelector('.escalada');
    modal.showModal();
}

window.addEventListener('click', function(event){
    var modal = document.querySelector('.escalada');

    if(event.target === modal){
        modal.close()}
})

function abrirMoto (){
    var modal = document.querySelector('.moto');
    modal.showModal();
}

window.addEventListener('click', function(event){
    var modal = document.querySelector('.moto');

    if(event.target === modal){
        modal.close()}
})


// Aqui termina o codigo de abrir e fechar os modal





// Aqui começa o codigo de reprodução de video

document.getElementById('buttonVideo').addEventListener('click', function(){
    var inputVideo = document.getElementById('inputVideo');

    inputVideo.click();
})

document.getElementById('buttonVideo2').addEventListener('click', function(){
    var inputVideo2 = document.getElementById('inputVideo2');

    inputVideo2.click();
})

document.getElementById('buttonVideo3').addEventListener('click', function(){
    var inputVideo3 = document.getElementById('inputVideo3');

    inputVideo3.click();
})

document.getElementById('buttonVideo4').addEventListener('click', function(){
    var inputVideo4 = document.getElementById('inputVideo4');

    inputVideo4.click();
})

document.getElementById('buttonVideo5').addEventListener('click', function(){
    var inputVideo5 = document.getElementById('inputVideo5');

    inputVideo5.click();
})

document.getElementById('buttonVideo6').addEventListener('click', function(){
    var inputVideo6 = document.getElementById('inputVideo6');

    inputVideo6.click();
})

document.getElementById('buttonVideo7').addEventListener('click', function(){
    var inputVideo7 = document.getElementById('inputVideo7');

    inputVideo7.click();
})

document.getElementById('buttonVideo8').addEventListener('click', function(){
    var inputVideo8 = document.getElementById('inputVideo8');

    inputVideo8.click();
})

document.getElementById('buttonVideo9').addEventListener('click', function(){
    var inputVideo9 = document.getElementById('inputVideo9');

    inputVideo9.click();
})

document.getElementById('buttonVideo10').addEventListener('click', function(){
    var inputVideo10 = document.getElementById('inputVideo10');

    inputVideo10.click();
})

document.getElementById('buttonVideo11').addEventListener('click', function(){
    var inputVideo11 = document.getElementById('inputVideo11');

    inputVideo11.click();
})


function reproduzirVideo (input){
    var videoReproduzir = document.getElementById('video');
    var buttonFechar = document.getElementById('butFechar');
    var file = input.files[0];

    if (file){
        var videoURL = URL.createObjectURL(file);
        videoReproduzir.src = videoURL;
        videoReproduzir.load();
        videoReproduzir.style.display = 'block';
        buttonFechar.style.display = 'block';
    }
}

function acabarVideo (){
    var videoReproduzir = document.getElementById('video');
    var buttonFechar = document.getElementById('butFechar');
    var inputVideo = document.getElementById('inputVideo');
    var inputVideo2 = document.getElementById('inputVideo2');
    var inputVideo3 = document.getElementById('inputVideo3');
    var inputVideo4 = document.getElementById('inputVideo4');
    var inputVideo5 = document.getElementById('inputVideo5');
    var inputVideo6 = document.getElementById('inputVideo6');
    var inputVideo7 = document.getElementById('inputVideo7');
    var inputVideo8 = document.getElementById('inputVideo8');
    var inputVideo9 = document.getElementById('inputVideo9');
    var inputVideo10 = document.getElementById('inputVideo10');
    var inputVideo11 = document.getElementById('inputVideo11');

    videoReproduzir.pause();    
    videoReproduzir.style.display = 'none';
    buttonFechar.style.display = 'none';
    inputVideo.value = '';
    inputVideo2.value = '';
    inputVideo3.value = '';
    inputVideo4.value = '';
    inputVideo5.value = '';
    inputVideo6.value = '';
    inputVideo7.value = '';
    inputVideo8.value = '';
    inputVideo9.value = '';
    inputVideo10.value = '';
    inputVideo11.value = '';



}

// Aqui termina o codigo de reprodução de video