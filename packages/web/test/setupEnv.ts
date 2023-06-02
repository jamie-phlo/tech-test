import { afterAll, afterEach, beforeAll } from "vitest";
import { mockServer } from "./mockServer";
import "whatwg-fetch";

// Mock server hooks
beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());
