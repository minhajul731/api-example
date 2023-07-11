const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const quoteContainer = document.getElementById('quotes');
    quoteContainer.innerText = quote.quote;
}