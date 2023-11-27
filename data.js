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

function addCard(news) {
    const template = document
        .getElementById("news-template").content
        .cloneNode(true);
    template.querySelector('.card-title').innerText = news.title;
    template.querySelector('.card-text').innerText = news.content;
    document.querySelector('#news-list').appendChild(template);
}

getNews().then((news) => news.forEach(article => addCard(article)))