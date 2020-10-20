module.exports = {
  compact: true,
  comments: false,
  presets: [
    [
      '@babel/env', {
        useBuiltIns: 'usage',
        targets: {
          node: '12.9.0'
        },
        corejs: 3
      }
    ]
  ],
  plugins: [
    '@babel/proposal-export-default-from',
    '@babel/proposal-export-namespace-from'
  ]
}
