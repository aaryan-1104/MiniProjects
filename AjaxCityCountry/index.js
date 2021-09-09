const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const citylist = [];
fetch(endpoint).then((response) => response.json()).then((data) => citylist.push(...data));

function searchCity(userinput, citylist) {
    return citylist.filter((cities) => {
        const reg = new RegExp(userinput, 'gi');
        return cities.city.match(reg) || cities.state.match(reg);
    });
}

function display() {

    const matchedArray = searchCity(this.value, citylist);
    const html = matchedArray.map((place) => {
        const regex = new RegExp(this.value, 'gi');//this is used to highlight the searched text in result
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span>${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
        </li>`;
    }).join('');
    suggestion.innerHTML = html;
}

function displaynothing() {
    if (this.value == "") {
        suggestion.innerHTML = " ";
    }
}

const suggestion = document.querySelector('.suggestions');
const search = document.querySelector('.search');

search.addEventListener('keyup', display);
search.addEventListener('change', display);
search.addEventListener('keyup', displaynothing);

// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities = [];
// fetch(endpoint)
//     .then(blob => blob.json())
//     .then(data => cities.push(...data));

// function findMatches(wordToMatch, cities) {
//     return cities.filter(place => {
//         // here we need to figure out if the city or state matches what was searched
//         const regex = new RegExp(wordToMatch, 'gi');
//         return place.city.match(regex) || place.state.match(regex)
//     });
// }

// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// function displayMatches() {
//     const matchArray = findMatches(this.value, cities);
//     const html = matchArray.map(place => {
//         const regex = new RegExp(this.value, 'gi');
//         const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//         const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
//         return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `;
//     }).join('');
//     suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);
