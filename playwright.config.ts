import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 30 * 1000,
    expect: {
        timeout: 5000
    },
    retries: 1,
    workers: undefined,
    reporter: [
        ['line'],
    ],

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
};
export default config;