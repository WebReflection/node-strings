'use strict';

var
    colors = require('util').inspect.colors,
    defineProperty = Object.defineProperty || function (t, k, d) {
        t[k] = d.value;
    },
    extras = {
        blink: [5, 25],
        hidden: [8, 28],
        strike: [9, 29]
    },
    transform = {}
;

Object.keys(colors).forEach(function (key) {
    extras[key] = colors[key];
});

Object.keys(extras).forEach(function (key) {
    var
        prefix = '\x1B[' + extras[key][0] + 'm',
        suffix = '\x1B[' + extras[key][1] + 'm',
        method = String.prototype[key]
    ;
    function override() {
        return transformer(this);
    }
    function transformer(value) {
        return prefix + String(value) + suffix;
    }
    transformer.boundaries = [prefix, suffix];
    transform[key] = transformer;
    override.original = method;
    if (method && method.original) return;
    defineProperty(String.prototype, key, {
        configurable: true,
        writable: true,
        value: override
    });
});

transform.clean = function (value) {
    return String(value).replace(
        /\x1B\[\d+m([\s\S]*?)\x1B\[\d+m/g,
        '$1'
    );
};

module.exports = transform;