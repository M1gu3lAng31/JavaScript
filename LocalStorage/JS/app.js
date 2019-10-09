const listaTweets = document.getElementById('lista-tweets');
let tweetClass = new Tweet();

let tweetToDelete = '';


eventListener();
// localStorageReady();

function eventListener() {
    document.addEventListener('DOMContentLoaded', localStorageReady);
    document.querySelector('#formulario').addEventListener('submit', addTweet);
    listaTweets.addEventListener('click', removeTweet);
}

function addTweet() {
    let contentTweet = document.getElementById('tweet').value.trim();
    tweetClass.addTweet(contentTweet);

    document.getElementById('tweet').value = '';
}

function removeTweet(event) {

    event.preventDefault();

    if (event.target.tagName === 'SPAN') {
        tweetToDelete = event.target.parentElement.parentElement.textContent.slice(0, -1);
        // console.log(tweetToDelete);

        Swal.fire({
            title: '¿Estas seguro de la acción a realizar?',
            text: "No habra vuelta atras",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(248, 0, 0)',
            cancelButtonColor: 'rgb(0, 255, 0)',
            confirmButtonText: '¡Elimnar!'
        }).then((result) => {
            if (result.value) {

                event.target.parentElement.parentElement.remove();
                tweetClass.removeTweetLocalStorage(tweetToDelete);

                Swal.fire({
                    type: 'success',
                    title: 'Se ha eliminado',
                    text: 'Lo extrañaremos',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }
}

function localStorageReady() {
    let tweets = tweetClass.getLocalStorage();

    tweets.forEach(function(tweet) {
        tweetClass.createTweet(tweet)
    });

}