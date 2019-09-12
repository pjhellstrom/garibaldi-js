module.exports = {
  db:
    process.env.MONGODB_URI ||
    "mongodb://garibaldi:password123@ds019688.mlab.com:19688/heroku_390xcx79"
};
