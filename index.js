const express = require('express')
const { postgraphile } = require('postgraphile')

require('./lib/common')

const app = express()

app.use(postgraphile(process.env.DATABASE_URL, 'app_public', {
  watchPg: true,
  graphiql: true,
  extendedErrors: [
    'hint', 'detail', 'errcode',
  ],
  pgDefaultRole: 'anonymous_user',
  ignoreRBAC: false,
  showErrorStack: true,
  disableQueryLog: true,
}))

app.listen(process.env.PORT || 3000)
