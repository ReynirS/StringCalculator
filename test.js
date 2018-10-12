const add = require("./calculator");

it("Should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("Should return number when only one number is in the string", () => {
	expect(add("5")).toBe(5);
});

it("Should return sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
});

it("Should return sum of multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});

it("Should return negative not allowed with -4 and -9", () => {
	expect(() => {
		add("1\n-4\n-9")
	}).toThrow();
});

it("Should return sum of numbers with delimiter :", () => {
	expect(add("//:\n2:3")).toBe(5);
});

it("Should return sum of numbers with delimiter ---", () => {
	expect(add("//---\n2---3")).toBe(5);
});

it("Should return sum of 3 and 4 and ignore 1500", () => {
	expect(add("3,4,1500")).toBe(7);
});

it("Should ignore 5000 and return 0", () => {
	expect(add("5000")).toBe(0);
});

it("Should ignore 1001 and return sum of 300, 1000 and 888", () => {
	expect(add("1001,300,1000,888")).toBe(2188);
});