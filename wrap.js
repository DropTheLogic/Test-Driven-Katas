function wrap(string, columnWidth) {
    let wrappedString = '';

    // for (let i = 0, count = 0; i < string.length; i++, count++) {
    //         wrappedString += string[i];
    //         if (count === columnWidth) {
    //             if (string[i] + 1 !== ' ') {
    //                 count = 0;
    //                 wrappedString += '/n';
    //             }
    //         }
    //     //  else if (string.length - 1 - i < columnWidth) {
    //     // }
    // }

    // let words = string.split(' ');

    // let line = '';
    // words.forEach(word => {
    //     if (line.length + word.length <= columnWidth) {
    //         line += `${word} `;
    //     }
    //     else {
    //         line += '/n';
    //         wrappedString += line;
    //         line = '';
    //     }
    // });


    return wrappedString;
}

module.exports = wrap;
