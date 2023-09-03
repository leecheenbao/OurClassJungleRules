module.exports = {
    apps: [
      {
        name: 'ourclass',
        exec_mode: 'cluster',
        instances: '2',
        script: './server/index.mjs'
      }
    ]
  }
  