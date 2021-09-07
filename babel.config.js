module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            '@screens': './src/screens',
            '@constants': './src/constants',
            '@contexts': './src/contexts/',
            '@graphql': './src/graphql',
            '@reducers': './src/reducers',
          },
        },
      ],
    ],
  }
}
