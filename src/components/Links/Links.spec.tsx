import { render } from "@testing-library/react";
import Link from "./";

describe("Links component", () => {
  it("link component renders correctly", () => {
    const { getByText } = render(<Link active="Início" />);

    expect(getByText("Início")).toBeInTheDocument();
  });

  it("link component changes className when active", () => {
    const { getByText } = render(<Link active="Planos" />);

    expect(getByText("Planos")).toHaveClass(
      "border-b border-blue-default h-8 px-2"
    );
  });

  it("link component changes className when active", () => {
    const { getByText } = render(<Link active="Sobre" />);

    expect(getByText("Sobre")).toHaveClass(
      "border-b border-blue-default h-8 px-2"
    );
  });

  it("link component changes className when active", () => {
    const { getByText } = render(<Link active="Contato" />);

    expect(getByText("Contato")).toHaveClass(
      "border-b border-blue-default h-8 px-2"
    );
  });
});
