import type { Options } from '@wdio/types'
import chromeModheader from 'chrome-modheader'
import path from 'path'
const __dirname = path.dirname(new URL(import.meta.url).pathname);
global.downloadDir = path.join(__dirname, 'downloads')
export const config: Options.Testrunner = {
    runner: 'local', // This can be changed based on where we run our tests or left out.
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        '../specs/*.ts' // Path to spec files (test files)
    ],
    exclude: [
        // 'Path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome', // or "firefox", "microsoftedge", "safari"
        'goog:chromeOptions': {
            extensions: [chromeModheader.getEncodedExtension()],
            // Added path for downloading easily files and using them in testing specs
            prefs: {
                'prompt_for_download': false,
                'download.default_directory': path.join(__dirname, '../data/files/downloads')
            },
            // We can add additional arguments here for our browsers such as '--headless'
            args: [
                '--start-maximized', 
                '--window-size=2560,1440'],
        },
        acceptInsecureCerts: true
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec', // Set up allure as initial reporter in additional to default spec
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverScreenshotsReporting: false
        }]
    ],  
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    // afterSession: async function () {
    //     // Enter something if needed for after the whole session
    // },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot()
        }
    },
}
