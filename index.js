const config = require("./config.json")
const aoidash = require('aoi.js-panel')
const aoijs = require("aoi.js");

const bot = new aoijs.Bot({
    token: process.env.TOKEN, //Discord Bot Token
    prefix: config.PREFIX, //Discord Bot Prefix
    intents: "all" //Discord Intents
    });

const dash = new aoidash.Dash(bot, {
port: 8081,
command: './commands', //your command handler
username: "<dashboard_username_placeholder>", //username to login to dashboard
password: "<dashboard_password_placeholder>" //password to login to dashboard
})
dash.start()

//Handler
/*
See ./handler/ folder for more deailed information.

*/
const handler = require("./handler/mainhandler.js");
handler.handler_main(bot)

//Website/ Dashboard
/*
See ./website/dash.js for more detailed information.
*/


const website = require("./website/dash.js");
website.load_website(3001,bot);//3000 is the port you can change it of you want

