// Prepare folder structure
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

const dir = path.join(process.cwd(), 'cyreport/cucumber-report');

if (fs.existsSync(dir)) {
  fs.removeSync(dir);
}

fs.mkdirSync(dir);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const reporter = require('multiple-cucumber-html-reporter');
const options = {
  pageTitle: 'Cucumber Automation',
  jsonDir: path.join(process.cwd(), 'cyreport/cucumber-json'),
  reportPath: 'cyreport/cucumber-report/html',
  hideMetadata: false,
  metadata: {
    browser: { name: 'chrome', version: '99' },
    device: 'Virtual Machine',
    platform: { name: 'linux', version: '18.04' },
  },
  customData: {
    title: 'CUCUMBER AUTOMATION TESTING',
    data: [
      { label: 'Project', value: 'PROJECT NAME' },
    ],
  },
  displayDuration: true,
  durationInMS: false,
  displayReportTime: true,
};

// Generate report
try {
  reporter.generate(options);
} catch (e) {
  console.log(chalk.red(`Could not generate cypress reports`));
  console.log(chalk.red(`${e}`));
}
