const data = require('./package.json');
const version = data.version;
console.log(`Hi glad to see u here! Current version is ${version}`);
function getPolishReverseRes(str, type) {
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
    switch (type) {
    case 'number':
        return resArray[0];
    case 'string':
        return resArray[0].toString();
    case 'array':
        return resArray;
    default:
        console.log('Only number and string types could be selected')
        }
}


module.exports = {getPolishReverseRes}