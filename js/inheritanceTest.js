
"use strict";


describe("bubbleSort", function () {
    it("Bubble Sort solution", function () {
            assert.equal(JSON.stringify([-2, 0, 1, 3, 4, 6]), bubbleSort([6,4,0, 3,-2,1]));
        });
});


describe("question3", function () {
    it("Question 3 test",
        function () {
            assert.equal("Michael is teaching Web Application Programming", question3());
            //assert.equal("John just learned Inheritance", question3());
        });
});