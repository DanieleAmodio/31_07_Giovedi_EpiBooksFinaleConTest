import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "../App.jsx";


describe("Testiamo", () => {
  it("Render Welcome", () => {
    render(<App />);
    expect(
      screen.getByText(
        "Questa è una libreria virtuale per appassionati di lettura!"
      )
    ).toBeInTheDocument();
  });

  it("Render cards", () => {
    render(<App />);
    fireEvent.click(screen.queryByText("EpiBOOKS"));
    expect(screen.getAllByRole("button", { name: "Dettagli" })).toHaveLength(
      12
    );
  });

  it("Render comment area", async () => {
    render(<App />);

    fireEvent.click(screen.queryAllByText("Dettagli")[0]);

    expect(await screen.findByText("Aggiungi un commento")).toBeInTheDocument();
  });

  it("Render nessun SingleComment presente all'avvio della homepage", () => {
    render(<App />);
    expect(screen.queryByTestId("singleComment")).not.toBeInTheDocument();
  });

});
