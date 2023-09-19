var fala_texto=window.webkitSpeechRecognition;
var reconhecimento=new fala_texto();
var conteudo;
var img;

function save() {
    reconhecimento.start();
}

reconhecimento.onresult=function(evento){
    console.log(evento);
    conteudo=evento.results[0][0].transcript.toLowerCase();
    console.log(conteudo);
    if (conteudo=="tire minha selfie"){
        falar();
    }
}

function falar() {
    var texto_fala=window.speechSynthesis;
    Webcam.attach("#camera");

    setTimeout(function()  {
        img="foto1";
        var dado_fala="tirando sua selfie em 5 segundos";
        var fala_covertida=new SpeechSynthesisUtterance(dado_fala);
        texto_fala.speak(fala_covertida);
        tira_foto();       
    }, 5000);
    setTimeout(function()  {
        img="foto2";
        var dado_fala="tirando sua selfie em 10 segundos";
        var fala_covertida=new SpeechSynthesisUtterance(dado_fala);
        texto_fala.speak(fala_covertida);
        tira_foto();       
    }, 10000);
    setTimeout(function()  {
        img="foto3";
        var dado_fala="tirando sua selfie em 15 segundos";
        var fala_covertida=new SpeechSynthesisUtterance(dado_fala);
        texto_fala.speak(fala_covertida);
        tira_foto();       
    }, 15000);
}

Webcam.set({
    width:500,
    height:400,
    image_format:"png",
    png_quality:90
});

function tira_foto() {
    Webcam.snap(function(foto){
        if(img=="foto1") {
            document.getElementById("img1").src=foto;
        }
        if(img=="foto2") {
            document.getElementById("img2").src=foto;
        }
        if(img=="foto3") {
            document.getElementById("img3").src=foto;
        }
    });
}

