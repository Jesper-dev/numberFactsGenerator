const form = document.querySelector("form");
const output = document.querySelector(".result-output");
const text = document.querySelector("p");

form.addEventListener("submit", e => {
    e.preventDefault();

    const num = form.numInput.value.trim();

    fetch(`https://rapidapi.p.rapidapi.com/${num}/trivia?fragment=true&notfound=floor&json=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key": "9e8ddf2821msh4c4f74e49206ee9p1302d4jsn143cd2ada6f1"
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        output.innerHTML = `
            <div class="num-fact">
                ${data.text}
            </div>
        `;
    }).catch(err => {
        console.error(err);
    });

    text.textContent = `Current number fact is: ${num}`;

    form.reset();
})



