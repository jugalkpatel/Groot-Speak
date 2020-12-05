let btnTrnslate = document.querySelector('#btn-translate');
let inputText = document.querySelector('#input');
let outputText = document.querySelector('#output');
btnTrnslate.addEventListener('click', function(){
    getData(inputText);
})
function constructURL(text){
    return "https://api.funtranslations.com/translate/groot.json?text=" + text;
}
function getData(text) {
    let url = constructURL(text);
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(err => console.log(err))
}