import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { Chip } from "..";
import toBeInTheDocument from "@testing-library/jest-dom/extend-expect";

describe("Chip component render", () => {
  it("renders headline", () => {
    const { getByText } = render(<Chip label="React" />);
    expect(getByText(/React/i)).toBeInTheDocument();
    //screen.debug();
  });
});
