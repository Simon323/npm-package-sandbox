import { __greeter } from "../index";
import { HELLO_MESSAGE } from "./__mocks__/constatnts";

test("My Greeter", () => {
  expect(__greeter("Carl")).toBe(HELLO_MESSAGE);
});
