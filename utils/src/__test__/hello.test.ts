import { __greeter } from "../index";

test("My Greeter", () => {
  expect(__greeter("Carl")).toBe("Hello Carl");
});
