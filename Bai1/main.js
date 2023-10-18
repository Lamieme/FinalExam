let btn = document.getElementById('sum');
btn.addEventListener('click', () => {
    const a = document.getElementsByClassName('a').value;
    const b = document.getElementsByClassName('b').value;
    const result = document.getElementById('output');

    function checkPrime(prime) {
        let flag = false;
        for (let i = 2; i < prime; i++) {
            if (prime % i == 0) {
                flag = true;
                break;
            }
            if (!flag) {
            }
        }
        return flag;
    }

    function sumPrime(a, b) {
        let total = 0;
        for (let i = a; i <= b; i++) {
            if (checkPrime(i) == false) {
                total += i;
            }
        }
        return total;
    }

    result.innerHTML = sumPrime(a, b);

});


