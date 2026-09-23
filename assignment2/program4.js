let primeArray = [];

for (let i = 1; i <= 100; i++) {

    let isPrime = true;

    if (i <= 1) {
        isPrime = false;
    } else {

        for (let j = 2; j < i; j++) {

            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primeArray.push(i);
    }
}

console.log(primeArray);

