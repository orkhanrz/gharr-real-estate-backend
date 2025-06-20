module.exports = {
  development: {
    protocol: process.env.DEV_PROTOCOL,
    hostname: process.env.DEV_HOSTNAME,
    port: process.env.DEV_PORT,
    db_uri: process.env.DEV_DB_URI,
    db_collection_name: process.env.DEV_DB_COLLECTION_NAME
  },
  production: {
    protocol: process.env.PROD_PROTOCOL,
    hostname: process.env.PROD_HOSTNAME,
    port: process.env.PROD_PORT,
    db_uri: process.env.PROD_DB_URI,
    db_collection_name: process.env.PROD_DB_COLLECTION_NAME
  }
};
