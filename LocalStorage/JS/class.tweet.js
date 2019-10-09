class Tweet {

    content = '';

    constructor() {

    }

    addTweet(contentTweet) {

        if (contentTweet != "") {
            this.content = contentTweet;
            this.createTweet(this.content);
            this, this.addTweetLS(this.content);

        } else {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Debes de escribir algo',
                footer: 'De preferencia algo bueno, no seas Toxico   :D'
            })
        }
    }


    createTweet(tweet) {
        const li = document.createElement('li');
        li.classList = 'list-group-item rounded-pill text-break';

        const btnClose = document.createElement('button');
        btnClose.classList = 'close';

        const spanClose = document.createElement('span');
        spanClose.classList = 'badge badge-pill badge-danger text-light';
        spanClose.setAttribute('aria-hidden', 'true');
        spanClose.textContent = 'X';

        btnClose.appendChild(spanClose);
        li.innerText = tweet;
        listaTweets.appendChild(li);
        li.appendChild(btnClose);
    }

    addTweetLS(tweet) {
        let tweets;
        tweets = this.getLocalStorage();
        tweets.push();

    }

    getLocalStorage() {
        let tweets;

        if (localStorage.getItem('tweets') == null) {
            tweets = [];
        } else {
            tweets = JSON.parse(localStorage.getItem('tweets'));
        }

        return tweets;

    }



}