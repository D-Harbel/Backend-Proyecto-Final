require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI,
    sessionSecret: process.env.SESSION_SECRET,
    githubClientID: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    nodemailerService: process.env.NODEMAILER_SERVICE,
    nodemailerUser: process.env.NODEMAILER_USER,
    nodemailerPass: process.env.NODEMAILER_PASS,
    MODE:process.env.MODE
};

module.exports = config;