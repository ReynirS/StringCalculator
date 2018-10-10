const add = require("./calculator");
/*
it("Should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("Should return number when only one number is in the string", () => {
	expect(add("5")).toBe(5);
});

it("Should return sum of two given numbers", () => {
	expect(add("1\n2")).toBe(3);
});

it("Should return sum of multiple numbers", () => {
	expect(add("1\n2\n3")).toBe(6);
});
*/

it("Should return negative not allowed with -4 and 99", () => {
	expect(() => {
		add("1\n-4\n-9")
	}).toThrow();
});
