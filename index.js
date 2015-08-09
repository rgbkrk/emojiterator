"use strict";

function *evil() {
    var monkeyBase = 128584;

    while(true) {
        yield "🙈";
        yield "🙉";
        yield "🙊";
    }

}

module.exports.evil = evil;
