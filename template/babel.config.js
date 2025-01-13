module.exports = function (api) {
  const isTest = api.env('test');
  return {
    presets: [
      isTest
        ? ['module:metro-react-native-babel-preset']
        : ['module:@react-native/babel-preset'],
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@restAPI': './src/restAPI',
            '@mocks': './src/mocks',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@config': './src/config',
            '@lib': './src/lib',
            '@navigation': './src/navigation',
            '@contexts': './src/contexts',
            '@redux': './src/redux',
            '@atoms': './src/components/atoms',
            '@molecules': './src/components/molecules',
            '@organisms': './src/components/organisms',
            '@screens': './src/components/screens',
            '@themes': './src/themes',
            '@constants': './src/constants',
            '@templates': './src/components/templates',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: './src/config/.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
    overrides: [
      {
        plugins: [
          [
            '@babel/plugin-transform-private-methods',
            {
              loose: true,
            },
          ],
        ],
      },
    ],
  };
};
