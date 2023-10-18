function numberOneTriangle() {
    let rows = 2;
    let string = "";
    for (let i = 1; i <= rows; ++i) {
        for (let j = 1; j <= i; ++j) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

console.log(numberOneTriangle());


// const research = document.getElementById('output');
// research.innerText = numberOneTriangle();