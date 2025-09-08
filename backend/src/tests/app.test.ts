import { describe, it, test, expect } from "vitest";

import launchServer from "../index.js";

describe("Main app test suite", () => {

    it("should run", async () => {
        const app = await launchServer()


    });
});