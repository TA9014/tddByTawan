const greet = (name) => {

    if (name === null) {
        return "Hello, my friend"
    }


    if (typeof (name) === "object") {

        // const moInput = name.map(item => item.includes('"') ? 
        // item.replaceAll('"', '') : item);  

        // console.log(moInput);

        // if (name.includes('\"')) {
        if (name.join().includes('"')){

            for (let i = 0; i < name.length; i++) {
                let result = "";
                for (let char of String(name[i])) {
                    if (char === '"' || char === '\\') {
                        continue;
                    } else {
                        result += char;
                    }
                    name[i] = result;
                }
            }
        } else {
            name = name.join().trim().split(",")
            name = name.map(item => item.trim())

        }
            

    let say = [];
    let shout = [];
    for (let x = 0; x <= name.length - 1; x++) {
        if (name[x] !== name[x].toUpperCase()) {
            say.push(name[x]);
        } else {
            shout.push(name[x])
        }
    }


    if (say.length >= 3) {
        let message = "Hello, ";
        let message2 = "AND HELLO "
        for (let i = 0; i < say.length - 1; i++) {
            if (i < say.length - 2) {
                message += `${say[i]}, `
            }
            if (i === say.length - 2) {
                message += `${say[i]} `
            }
        }
        if (shout.length === 0) {
            message2 = ""
        } else if (shout.length === 1) {
            message2 = ` AND HELLO ${shout[0]}`
        } else if (shout.length === 2) {
            message2 = ` AND HELLO ${shout[0]} AND ${shout[1]}`
        } else {
            for (let y = 0; y < shout.length - 1; i++) {
                if (y < shout.length - 2) {
                    message2 += `${shout[y]}, `
                }
                if (y === say.length - 2) {
                    message2 += `${shout[y]} `
                }
            }
            message2 += `AND ${shout[shout.length - 1]}.`
        }
        return message += `and ${say[say.length - 1]}.` + message2;



    } else {
        message = `Hello, ${say[0]} and ${say[1]}.`
        if (shout.length === 0) {
            message2 = ""
        } else if (shout.length === 1) {
            message2 = ` AND HELLO ${shout[0]}!`
        } else if (shout.length === 2) {
            message2 = ` AND HELLO ${shout[0]} AND ${shout[1]}!`
        } else {
            for (let y = 0; y < shout.length - 1; i++) {
                if (y < shout.length - 2) {
                    message2 += `${shout[y]}, `
                }
                if (y === say.length - 2) {
                    message2 += `${shout[y]} `
                }
            }
            message2 += `AND ${shout[shout.length - 1]}!`
        }
    }
    return message + message2
}

if (name === name.toUpperCase()) {
    return `HELLO, ${name}`
}

return `Hello, ${name}`;
}

module.exports = { greet }