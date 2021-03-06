exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  `mongodb://localhost/hangmanatee`;

exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || "pizzapizzabananabanana";
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || `7d`;
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";