import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "vitest-dom/matchers";

expect.extend(matchers);
// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
