var word = "";
var wordBank = [];

var randomWord = load("random-words") // asynchronously load a node module by module name; module was installed with `npm install qs`
        .then((generatedWord) => {
            word = generatedWord;
            return word();
        });

console.log(randomWord.randomWord());
// console.log(randomWord.then(function() {
//     console.log(word())
// }))

// function wordGame(randomWord) {
//     console.log(randomWord);
// }

    $('.test').on('click', function () {
        wordBank = [];
        $.ajax({
            url: 'https://api.datamuse.com/' + '/words?rel_rhy=resentful',
            contentType: 'applications/json',
            dataType: 'json',
            success: function (result) {
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    wordBank.push(result[i].word)
                }
            }
        })
    });



// setTimeout(function() {
//     console.log(wordBank); 
// }, 3000);