document.addEventListener("DOMContentLoaded", () => {

    function displayTheDogs(url) {
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            return collectDogs(json)
        })
        .then(function(dogs) {
            displayDogs(dogs)
        })
    }

    displayTheDogs("https://dog.ceo/api/breeds/image/random/4")

    function displayTheBreeds(url) {
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            displayBreeds(json)
        })

    }

    function displayBreeds(breeds) {
        displayLocation = document.getElementById("dog-breeds")
        for (const key in breeds['message']) {
            displayLocation.innerHTML += `<li class="breed"> ${key} </li>`
            colorChange = document.getElementById(key);
        }
        const listings = document.getElementsByClassName("breed")
        for (const listing of listings) {
            listing.addEventListener("click", function() {listing.style.color = 'blue'})
        }
    }

    displayTheBreeds('https://dog.ceo/api/breeds/list/all')

    dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener("change", function() {
        let val = dropdown.value

        for (const listing of document.getElementsByClassName("breed")) {
            listing.style.display = "block";
            if (listing.textContent[1] != val) {
                listing.style.display = "none";
            }
        }
    })

    function collectDogs(json) {
        let dogs = []
        for (const dog of json['message']) {
            dogs.push(dog);
        }
        return dogs;
    }

    function displayDogs(doggies) {
        displayLocation = document.getElementById('dog-image-container')
        for (const dog of doggies) {
            displayLocation.innerHTML += `<img src="${dog}">`
        }
    }

});
