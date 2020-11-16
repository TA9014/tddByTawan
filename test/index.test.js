const { greet } = require("../app/index");

test('Test requirement 1', () => {
    expect(greet("Tawan")).toBe("Hello, Tawan");
});

test('Test requirement 2', () => {
    expect(greet(null)).toBe("Hello, my friend")
});

test('Test requirement 3', () => {
    expect(greet("TAWAN")).toBe("HELLO, TAWAN")
});

test('Test requirement 4', () => {
    expect(greet(["Tawan", "Yupa"])).toBe("Hello, Tawan and Yupa.")
});

test('Test requirement 5', () => {
    expect(greet(["Tawan", "Yupa", "Fah"])).toBe("Hello, Tawan, Yupa and Fah.")
})

test('Test requirement 6', () => {
    expect(greet(["Tawan", "Yupa", "FAH"])).toBe("Hello, Tawan and Yupa. AND HELLO FAH!")
})


test('Test requirement 7', () => {
    expect(greet(["Tawan", "Yupa, Fah"])).toBe("Hello, Tawan, Yupa and Fah.")
})

test('Test requirement 8', () => {
    expect(greet(["Tawan", "\"Yupa, Fah\""])).toBe("Hello, Tawan and Yupa, Fah.")
})
