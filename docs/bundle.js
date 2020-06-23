const loadQuestions = function (callback) {
    fetch('./questions.json')
        .then(function (response) {
            response.json().then((function (data) {
                callback(data);
            }));
        });
}