const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {

        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onClick="loadCountryName('${country.name.common}')">Details</button>
        `
        /* const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(h3);
        div.appendChild(p); */

        countriesDiv.appendChild(div);
    })
}


const loadCountryName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetails(data[0]))
}

const countryDetails = details => {
    console.log(details);
    const countryDiv = document.getElementById('country-details');
    countryDiv.classList.add('country-details');
    countryDiv.innerHTML = `
    <h3>Country Name: ${details.name.common}</h3>
    <h4>Capital: ${details.capital}</h4>
    <h5>Region: ${details.region}</h5>
    <p>Time Zone: ${details.timezones}</p>
    <p>Population: ${details.population}</p>
    <img width='30%' src='${details.flags.png}'>
`
}