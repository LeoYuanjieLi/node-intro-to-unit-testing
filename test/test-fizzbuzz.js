// import chai, declare expect variable
const expect = require("chai").expect;

// import fizzbuzz
const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzz', ()=>{
	// test the fizz cases
	it("should return fizz", ()=>{
		const fizzCases = [
			{num:3, expected: "fizz"},
			{num:9, expected: "fizz"},
			{num:66, expected: "fizz"}
		]
	    fizzCases.forEach(function(input) {
	      const answer = fizzBuzz(input.num);
	      expect(answer).to.equal(input.expected);
	    });		
	});

	it("should return buzz", ()=>{
		const buzzCases = [
			{num:5, expected: "buzz"},
			{num:10, expected: "buzz"},
			{num:80, expected: "buzz"}
		]


	});

	it("should return fizzBuzz", ()=>{
		const fizzBuzz = [
			{num:15, expected: "fizzBuzz"},
			{num:30, expected: "fizzBuzz"},
			{num:90, expected: "fizzBuzz"}
		]
	});

	it("should not return", ()=>{
		const notReturning = [
			{num:17, expected: undefined},
			{num:28, expected: undefined},
			{num:64, expected: undefined}
		]
	});

	it("should throw error because input is NaN", ()=>{
	    const badInputs = [
	      'a',
	      '1',
	      false
	    ];

	    badInputs.forEach(function(input) {
	      expect(function() {
	        fizzBuzz(input);
	      }).to.throw(Error);
	    });

	})


})