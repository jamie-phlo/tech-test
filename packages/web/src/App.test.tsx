import { describe, expect, it, vi } from "vitest";

import { render, screen } from "@testing-library/react";

import { App } from "./App";

import React from "react";

import { mockServer, rest } from "../test/mockServer";

describe("App", () => {
  it("renders base app", () => {
    mockServer.use(
      rest.get("http://localhost:3000/gps", (req, res, ctx) => {
        return res(ctx.status(200));
      })
    );

    render(<App />);
    expect(screen.getByText("GP Search")).toBeTruthy();
  });
});
