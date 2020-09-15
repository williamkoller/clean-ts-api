export default {
  mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWTSECRET || 'TJ670==5H'
}
