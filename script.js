function rolldicePlayer() {
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    var dadoNumber = "assets/numberdice/dado"+randomNumber+".png"

    var randomColor = Math.floor((Math.random() * 6) + 1);
    var dadoColor = "assets/colordice/dado"+randomColor+".png"

    document.getElementById('player.resultadoDadonumber').setAttribute('src', dadoNumber);

    document.getElementById('player.resultadoDadocolor').setAttribute('src', dadoColor);

    document.getElementById(`${randomNumber}x${randomColor}`).setAttribute('style', "border-radius:100%;  border:10px solid black;  width:50px; height:50px; ");
    

    console.log(randomNumber, randomColor);
}

function rolldiceObjective() {
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    var dadoNumber = "assets/numberdice/dado"+randomNumber+".png"

    var randomColor = Math.floor((Math.random() * 6) + 1);
    var dadoColor = "assets/colordice/dado"+randomColor+".png"

    document.getElementById('objective.resultadoDadonumber').setAttribute('src', dadoNumber);

    document.getElementById('objective.resultadoDadocolor').setAttribute('src', dadoColor);

    document.getElementById(`${randomNumber}x${randomColor}`).setAttribute('style', "border-radius:100%;  border:2px solid black;  width:50px; height:50px; ");
    

    console.log(randomNumber, randomColor);
}

function aumenta(obj) {
    obj.height=obj.height*1.25;
    obj.width=obj.width*1.25;
}

function diminui(obj) {
    obj.height=obj.height/1.25;
    obj.width=obj.width/1.25;
}


/* PARA MARCAR A POSIÇÃO DO TABULEIRO
 var pinoPrinc = document.getElementById('tabuleiro');
pinoPrinc.addEventListener('click', function pinoPrinc (e) {
    var pos = (e.target.id);
    console.log(pos);
});
 */