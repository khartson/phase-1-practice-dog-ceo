console.log('%c HI', 'color: firebrick')

// Challenge 1: Loading dog images
const loadImage = () => {
    let container = document.querySelector("#dog-image-container");
    const URL     = "https://dog.ceo/api/breeds/image/random/4";

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        let imgLinks = data.message; 
        imgLinks.forEach((pic) => {
            let dog    = document.createElement('img');
            dog.src    = pic;
            dog.height = 150;
            dog.width  = 150;  
            container.append(dog); 
        })
    })

}

// Challenge 2
const listBreed = () => {
    let breedList = document.querySelector('#dog-breeds');
    const URL     = "https://dog.ceo/api/breeds/list/all";

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        let breeds = data.message;
        for (dog in breeds) {
            if (breeds[dog].length === 0) {
                li = document.createElement('li'); 
                li.innerText = dog;
                breedList.append(li); 
                li.addEventListener('click', handleClick) 
            } else {
                for (type in breeds[dog]) {
                    li = document.createElement('li'); 
                    li.innerText = breeds[dog][type] + ' ' + dog; 
                    breedList.append(li);
                    li.addEventListener('click', handleClick) 
                }
            }
        }
    })
}

function handleClick(e) {
    let text = e.target;
    text.style.color = 'green';
}

function filterBreed() {
    document.querySelector('#breed-dropdown').addEventListener('change', handleMenu);

}
function handleMenu(e) {
    let letter = e.target.value;
    for (node of document.querySelectorAll('li')) {
        if (letter == 'all') {
            node.style.display = 'list-item';
        } else if (node.innerText[0] !== letter) {
            // console.log(node.innerText); 
            node.style.display = 'none'; 
        } else if (node.innerText[0] == letter) {
            node.style.display = 'list-item'; 
    }
    }
}
function domFunctions() {
    listBreed(); 
    loadImage();
    filterBreed(); 
}
document.addEventListener("DOMContentLoaded", domFunctions);
