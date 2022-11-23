const url = 'https://api.themoviedb.org/3/discover/movie?api_key=e98cdbd95aeacc65acff04dd02628645&language=he-il&sort_by=popularity.desc&year=2022';
const box = document.querySelector('.box');

fetch(url)
    .then(res => res.json())
    .then(json => {
        json.results.forEach(m => {
            const div = document.createElement('div')
            //  div.innerText = JSON.stringify(m) + '<br>'
            div.innerText = JSON.stringify(m.title)
            div.innerText += JSON.stringify(m.overview)
            div.innerText += JSON.stringify(m.id)
            box.appendChild(div)
            console.log(m);
        })
    })
    .catch(e => { alert(`Failed: ${e}`) })