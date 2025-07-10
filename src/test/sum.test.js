//import { jest } from "globals"
import sum from "../sum"

test("demo", () => {
  expect(true).toBe(true)
})


test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})