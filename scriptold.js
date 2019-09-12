function rollnumberDice() {
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    var dadoImage = "assets/numberdice/dado"+randomNumber+".png"
    console.log(randomNumber);


    document.getElementById('resultadoDadonumber').setAttribute('src', dadoImage);
}

function rollcolorDice() {
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    var dadoImage = "assets/colordice/dado"+randomNumber+".png"

    document.getElementById('resultadoDadocolor').setAttribute('src', dadoImage);
}

function aumenta(obj) {
    obj.height=obj.height*1.25;
    obj.width=obj.width*1.25;
}

function diminui(obj) {
    obj.height=obj.height/1.25;
    obj.width=obj.width/1.25;
}

var pinoPrinc = document.getElementById('tabuleiro');
pinoPrinc.addEventListener('click', function pinoPrinc (e) {
    var pos = (e.target.id);
    console.log(pos);
    document.getElementById(pos).setAttribute('style', "border-radius:100%;  border:10px solid black;  width:50px; height:50px; ");
});




