import { version } from "../package.json"

// Add console log to check version in live docs
console && console.log && console.log(`loading components - version ${version}`);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
