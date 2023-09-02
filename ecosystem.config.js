module.exports = {
    apps: [
      {
        name: 'ourclass',
        exec_mode: 'cluster',
        instances: 'max',
        script: './server/index.mjs'
      }
    ]
  }
  