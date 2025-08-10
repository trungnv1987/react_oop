import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"], // or **/*.spec.ts
  },
  resolve: {
    alias: {
      // so you can import like: import { foo } from "react_oop/xyz"
      react_oop: path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
});
