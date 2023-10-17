const path=require("path")

// console.log(path.sep);

// console.log(path.basename);

const currpath=__filename;

console.log(currpath);
console.log(path.extname(currpath));
console.log(path.delimiter);

const user=path.format({
    dir: 'home/user/config',
    base: 'friendly/.js'
})
console.log(user);

const user2=path.join('home','js','homelander','atankwadi','muslim')
console.log(user2);
