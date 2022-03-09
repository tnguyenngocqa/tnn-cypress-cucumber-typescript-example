// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

const nonGlobalStepBaseDirPath = path.resolve(process.cwd(), "cypress/support/step_definitions")
const outputFolderPath = path.resolve(process.cwd(), "cyreport/cucumber-json")

module.exports = {
  nonGlobalStepBaseDir: nonGlobalStepBaseDirPath,
  nonGlobalStepDefinitions: false,
  cucumberJson: {
    generate: true,
    outputFolder: outputFolderPath,
    filePrefix: "",
    fileSuffix: ".cucumber",
  }
}