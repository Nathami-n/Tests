const {getLanguage} = require("../src/index");

test("Returns English for En_US", ()=> {
    expect(getLanguage("En_US")).toBe("English");
});
