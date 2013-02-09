/// <reference path="jquery.d.ts" />


/* starting point
function process(x) {
    x.name = "foo";
    var v = x + x;
    alert(v);
}
*/

/* second part
interface Accumulator {
    clear(): void;
    add(x: number): void;
    result(): number;
}

function makeAccumulator() {
    var sum = 0;
    return {
        clear: function () { sum = 0; },
        add: function (value: number) { sum += value },
        result: function () { return sum; }
    };
}

var a = makeAccumulator();
a.add(5);

interface Accumulator {
    clear(): void;
    add(x: number): void;
    result(): number;
}

*/

var foo = () => {
    alert("hello");
};

foo();

$().ready(() =>
{
    $("body").addClass("blue").append("<b>Hi Mom</b>");
});