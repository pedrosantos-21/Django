function gritar(){
    alert("AHHHHHHH!!!");
}
function perguntaNome(){
    let nome;
    nome = prompt("Qual é o seu nome?" );
    alert("Olá, " + nome);
}

function mudar_texto(){
    let h1 = document.getElementsByTagName("h1");
    
    if(h1[0].innerText == "Geek Univerity"){
        h1[0].innerText = "Evolua seu Lado geek!";
    }else{      
        h1[0].innerText = "Geek Univerity";
    }
}

function incrementar(){
    let p1 = document.getElementById("p1");
    p1.innerText = parseInt(p1.innerText) + 1; //paseInt -> converte o texto em um inteiro  
    
}