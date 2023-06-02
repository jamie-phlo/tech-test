import { rest } from "msw";
import { setupServer } from "msw/node";

import { mockServerHandlers } from "./mockServerHandlers";

const mockServer = setupServer(...mockServerHandlers);

export { mockServer, rest };
