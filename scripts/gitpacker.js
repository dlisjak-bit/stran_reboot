
var razlaga;
quizActive = true;


const fs = require('fs')


let input = document.getElementById("razlaga");
    input.addEventListener("keyup", function(event) {
        if((event.keyCode === 13) && quizActive) {
            event.preventDefault();
                razlaga = input.textContent;
                input.textContent = "";
                console.log("pushed razlaga")
                Read(razlaga);
        }
    });

function Read(razlaga){
    var filename = razlaga.substr(26, razlaga.indexOf('}'))
    fs.writeFile(filename + '.txt', razlaga, (err) => {
        if (err) throw err;
    })
}