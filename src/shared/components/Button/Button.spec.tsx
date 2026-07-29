import Button from "./Button";
import { renderWithProviders } from "@/shared/lib/renderWithProviders";

const mockData = {
  text: "mock-label",
}

describe("Button", () => {
  it("renders correctly", () => {
    renderWithProviders(<Button {...mockData}/>);
  })
})