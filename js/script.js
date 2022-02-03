const button = document.querySelector("button");
const span = document.querySelector(".count");

button.onclick = function () {
    button.disabled = true;

    counter = 0;

    const countInterval = setInterval(function () {
        counter++;
        span.innerHTML = counter;
        if (counter === 7) {
            clearInterval(countInterval);
            button.disabled = false;
        }

    }, 500);


};