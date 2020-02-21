var wordBank = [];

function generateRandomWord() {
    var randomWord = load("random-words") // asynchronously load a node module by module name; module was installed with `npm install qs`
        .then((generatedWord) => {
            word = generatedWord;
            return word();
        });
    return randomWord;
}

// console.log(generateRandomWord());

$('.test').on('click', function () {
    var word = "";
    generateRandomWord().then(function (randomWord) {
        word = randomWord;
        console.log(word);
        wordBank = [];
        $.ajax({
            url: 'https://api.datamuse.com/' + '/words?rel_rhy=' + word,
            contentType: 'applications/json',
            dataType: 'json',
            success: function (result) {
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    wordBank.push(result[i].word)
                }
            }
        })
    })
});
