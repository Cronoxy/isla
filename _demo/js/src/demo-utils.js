;
(function(exports) {
    var _, EnvStore, Isla;
    if (typeof module !== 'undefined' && module.exports) { // node
        _ = require("Underscore");
        EnvStore = require('./env-store.js').EnvStore;
        Isla = require('../node_modules/isla/src/isla.js').Isla;
    } else { // browser
        _ = window._;
        EnvStore = window.EnvStore;
        Isla = window.Isla;
    }

    demoUtils = {};

    demoUtils.random = function(guide) {
        if (Isla.Utils.type(guide) === "Object") {
            var keys = _.keys(guide);
            return keys[Math.floor(Math.random() * keys.length)];
        } else {
            return Math.floor(Math.random() * guide); // random under max
        }
    };

    // min param is always pos
    // makes min work with pos and neg nums
    demoUtils.absMax = function(x, max) {
        if (x < 0) {
            return x < -max ? x : -max;
        } else {
            return Math.max(x, max);
        }
    };

    demoUtils.isIslaType = function(obj, type) {
        return obj._meta !== undefined && obj._meta.type === type;
    };

    demoUtils.translateNumberWord = function(word, words) {
        var lowerWord = word.toLowerCase();
        if (words[lowerWord] !== undefined) {
            return words[lowerWord];
        } else if (!isNaN(parseFloat(word))) {
            return parseFloat(word);
        } else {
            throw "I do not understand this number: " + word;
        }
    };

    demoUtils.edit = function(obj, removals) {
        var ret = Isla.Library.clone(obj);
        for (var i = 0; i < removals.length; i++) {
            delete ret[removals[i]];
        }
        return ret;
    };

    demoUtils.plusMinus = function(x) {
        return Math.random() > 0.5 ? x : -x;
    };

    demoUtils.COLORS = {
        red: "#FF0000",
        yellow: "#FFF700",
        green: "#4DFA51",
        blue: "#009DFE",
        indigo: "#5669FF",
        violet: "#8A6CFF",
        gray: '#CCC'
    };

    demoUtils.color = function(raw) {
        if (demoUtils.COLORS[raw] !== undefined) {
            return demoUtils.COLORS[raw];
        } else {
            return raw;
        }
    };

    exports.demoUtils = demoUtils;
})(typeof exports === 'undefined' ? this : exports)
