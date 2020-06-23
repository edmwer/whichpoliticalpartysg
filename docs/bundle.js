const loadQuestions = function () {
    fetch('./questions.json')
        .then(function (response) {
            response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}