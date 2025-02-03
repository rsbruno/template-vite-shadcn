import perfectionist from "eslint-plugin-perfectionist";
import reactRefresh from "eslint-plugin-react-refresh";
import { fixupConfigRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import globals from "globals";
import path from "node:path";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/dist", "**/.eslintrc.cjs"],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended"
    )
  ),
  {
    plugins: {
      "react-refresh": reactRefresh,
      perfectionist,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
    },

    rules: {
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": ["error", { destructuredArrayIgnorePattern: "^_" }],
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-param-reassign": "error",
      "no-console": [
        "error",
        {
          allow: ["error"],
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          type: "line-length",
          order: "desc",
          ignoreCase: true,
          specialCharacters: "keep",
          internalPattern: ["^~/.+"],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: "always",
          maxLineLength: undefined,
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
          specialCharacters: "keep",
          ignorePattern: [],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: "ignore",
          groupKind: "mixed",
          groups: [],
          customGroups: [],
        },
      ],
    },
  },
];
