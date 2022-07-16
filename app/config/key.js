require ('dotenv').config();

module.exports = {
Port: process.env.PORT,
TEST_DB: process.env.TEST_DB,
DATA_DB: process.env.DATABASE_URI,
JWT_SEC: process.env.JWT_SEC
}