const config = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.graphql.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts"
    ],
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/jest/jest.relay.transform.js",
        "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|json)$)": "<rootDir>/jest/jest.file.transform.js"
    },
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
      },
    transformIgnorePatterns: [
        "^.+\\.module\\.(css|sass|scss)$"
    ],
    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

module.exports = config;
