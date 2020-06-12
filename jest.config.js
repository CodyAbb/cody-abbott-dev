module.exports = {
  // This just means that all js and jsx files need transformed here
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  //Tells jest how to handle imports
  // Basically here we are creating mock files that jest will refer to instead of our actual files
  // which are static, Jest can't test them
  moduleNameMapper: {
    // for stylesheets it refers to the package identity-obj-proxy
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    // for all the other files we create a fake one
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  // Gatsby includes un-transpiled es6 code
  // we need to allow this to happen in the gatsby-config first
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
