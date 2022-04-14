module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@types': './src/@types'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
