const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8090
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/exam-api'
  }
};

module.exports = config;
