let news = [
    {
        id: 1,
        title: 'Election Results',
        content: "Newly elected minister...",
    },
    {
        id: 2,
        title: 'Sporting Success',
        content: "World Cup winners...",
    },
    {
        id: 3,
        title: 'Tornado Warning',
        content: "Residents should prepare..."
    }
]

function cloneNews() {
    let addNews = [...news]
    return addNews
}

function getNews() {
    return new Promise(resolve => {
        let reload = setInterval(function() {
            console.log(cloneNews())
            resolve(cloneNews())
        }, 3000);
        setTimeout(() => clearInterval(reload), 10_000)
    });
    
}

function addCard(news) {
    const template = document
        .getElementById("news-template").content
        .cloneNode(true);
    template.querySelector('.card-title').innerText = news.title;
    template.querySelector('.card-text').innerText = news.content;
    document.querySelector('#news-list').appendChild(template);
}

getNews().then((news) => news.forEach(article => addCard(article)))

