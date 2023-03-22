const search = document.querySelector('.search')
const li = document.querySelectorAll('li')

const searchEngine = e => {
    const text = e.target.value.toLowerCase()
    li.forEach(list => {
        const task = list.textContent

        if (task.toLowerCase().indexOf(text) !== -1){
            list.style.display = 'block'
        } else{
            list.style.display = 'none'
        }
    });
}

search.addEventListener('keyup', searchEngine)