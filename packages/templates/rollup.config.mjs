import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
  input: "src/index.ts", // Your entry file
  output: {
    file: "dist/bundle.js", // Output file
    format: "es", // Output format
  },
  plugins: [
    alias({
      entries: [
        { find: "#", replacement: path.resolve(__dirname, "src/") }, // Adjust the alias as needed
      ],
    }),
    typescript(), // Compile TypeScript
  ],
};
