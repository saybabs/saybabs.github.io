
"use strict";


describe("filter", function () {
    it("Filter banned word solution", function () {
            assert.equal("This house is nice!", "This house is not nice!".filter(["not"]));
        });
});



describe("bubbleSort", function () {
    it("Bubble Sort solution", function () {
            //assert.equal(JSON.stringify([-2, 0, 1, 3, 4, 6]), bubbleSort([6,4,0, 3,-2,1]));
            assert.equal([-2, 0, 1, 3, 4, 6].toString(), [6, 4, 0, 3, -2, 1].bubbleSort());
        });
});


describe("question3", function () {
    it("Question 3 test",
        function () {
            assert.equal("Michael is teaching Web Application Programming", question3());
            //assert.equal("John just learned Inheritance", question3());
        });
});