module.exports = {
    'transform': {
        '.(ts|tsx)': 'ts-jest',
    },
    'setupFilesAfterEnv': ['jest-extended'],
    'testEnvironment': 'node',
    'testRegex': '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
    ],
    'moduleNameMapper': {
        '^@src/(.*)$': '<rootDir>/src/$1',
    },
    'coveragePathIgnorePatterns': [
        '/node_modules/',
        '/test/',
    ],
    'coverageThreshold': {
        'global': {
            'branches': 100,
            'functions': 100,
            'lines': 100,
            'statements': 100,
        },
    },
    // 检测i覆盖率文件，排除掉index文件
    'collectCoverageFrom': [
        'src/**/*.ts',
        "!src/**/index.ts",
    ],
    'reporters': [
        'default',
        [
            'jest-html-reporters',
            {
                'publicPath': 'coverage/lcov-report/',
                'filename': 'jest-report.html',
                'expand': false,
            }
        ],
    ],
};