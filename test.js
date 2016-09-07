var module = require('./index.js');

console.log('Testing all keys'.bold().green().underline());

console.log('');

Object.keys(module).forEach(function (key) {
    if (!module[key].boundaries) return;
    var randomString = Math.random().toString();
    console.assert(
        module[key](randomString) ===
        (
            module[key].boundaries[0] +
            randomString +
            module[key].boundaries[1]
        )
    );
    console.log('OK'[key]() + ': ' + key);
});

console.assert(module.clean('test'.bold().red().underline()) === 'test');
console.log('OK: clean');

console.log('');
