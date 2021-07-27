
"use strict";

describe("sum", function () {
    it("Sum all elements in array",
        function () {
            assert.equal(10, sum([1, 2, 3, 4]));
        });
});

describe("multiply", function () {
    it("Multiply all elements in array",
        function () {
            assert.equal(24, multiply([1, 2, 3, 4]));
        });
});

describe("reverse", function () {
    it("Reverse the characters in a word",
        function () {
            assert.equal("dcba", reverse("abcd"));
        });
});

describe("filterLongWords", function () {
    it("Print words that has length more than the integer specified",
        function () {
            assert.equal(JSON.stringify(["Johnny", "Johnson"]), filterLongWords(["John", "Johnny", "Johnson"], 4));
        });
});
