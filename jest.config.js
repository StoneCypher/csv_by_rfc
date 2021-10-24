
module.exports = {

  testEnvironment            : 'node',

  moduleFileExtensions       : ['js', 'ts'],
  coveragePathIgnorePatterns : ["/node_modules/", "/src/ts/tests/"],
  testMatch                  : ['**/*.spec.ts'],

  transform                  : { '^.+\\.ts$': 'ts-jest' },

  verbose                    : false,
  collectCoverage            : true,
  coverageDirectory          : "coverage/spec/",

  coverageThreshold : {
    global : {
      branches   : 50,
      functions  : 50,
      lines      : 50,
      statements : 50,
    },
  },

  collectCoverageFrom: ["src/ts/**/*.{js,ts}"]

};
