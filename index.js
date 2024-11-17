function getPolishReverseRes(str) {
    const dataArray = str.split(' ');
    const resArray = [];
    let res;
    for (let i = 0; i < dataArray.length; i++) {
        if (!isNaN(+dataArray[i])) {
            resArray.push(+dataArray[i])
        } else {
            let a = resArray[resArray.length - 2];
            let b = resArray[resArray.length - 1];
            let res;
            switch (dataArray[i]) {
                case '+':
                    res = a + b;
                    break
                case '-':
                    res = a - b;
                    break
                case '/':
                    res = a / b;
                    break
                case '*':
                    res = a * b;
            }
            resArray.splice(-2,2);
            resArray.push(res);
        }
    }
    return resArray[0]
}

module.exports = {getPolishReverseRes}