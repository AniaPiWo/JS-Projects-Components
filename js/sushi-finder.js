const search = document.querySelector('.sushi-search');
const list = document.querySelectorAll('.sushi-list-item')

const searchEngine = e => {

    const text = e.target.value.toLowerCase();
    /* console.log(text); */

    list.forEach(e => {
        /* console.log(e.textContent); */

        if (e.textContent.toLowerCase().indexOf(text) !== -1) {
            e.style.display = "block";
        } else {
            e.style.display = "none";
        }
    })

}

search.addEventListener('keyup', searchEngine)