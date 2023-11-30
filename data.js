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

let addNews = [...news]
// let newArticle

const reload = setInterval(log, 5000)

function log() {
    console.log(addNews)
}

// function getNews() {
//     return new Promise(resolve => {
//         // let reload = setInterval(function() {
//         //     console.log(cloneNews())
//         //     resolve(cloneNews())
//         // }, 3000);
//         // setTimeout(() => clearInterval(reload), 10_000)
//         reload;
//         resolve(addNews)
//     });
// }

function stopReload() {
    clearInterval(reload)
}

function addCard(news) {
    const template = document.getElementById("news-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = news.title;
    template.querySelector('.card-text').innerText = news.content;
    document.querySelector('#news-list').appendChild(template);
}

// getNews().then((news) => news.forEach(article => addCard(article)))

function post() {
    // const template = document.getElementById("news-template").content.cloneNode(true);
    const newTitle = document.getElementById("newsTitle").value;
    const newBody = document.getElementById("newsContent").value;
    let newArticle = {
        title: newTitle,
        content: newBody
    };
    addNews.push(newArticle);
    addCard(newArticle);
    document.getElementById("newsTitle").value = ''
    document.getElementById("newsContent").value = ''
}

function getNews() {
    return new Promise(resolve => {
        reload;
        resolve(addNews)
    });
}

getNews().then((news) => news.forEach(article => addCard(article)))
