const config = require("./config.json")
const aoidash = require('aoi.js-panel')
const aoijs = require("aoi.js");

const bot = new aoijs.Bot({
    token: config.TOKEN, //Discord Bot Token
    prefix: config.PREFIX, //Discord Bot Prefix
    intents: "all" //Discord Intents
    });

const dash = new aoidash.Dash(bot, {
port: 8461,
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
See ./website/dash.js  for more detailed information.
*/


const website = require("./website/dash.js");
website.load_website(3027,bot);//3000 is the port you can change it of you want

bot.onMessage({respondToBots: false})
bot.onInteractionCreate() 

 bot.onMessage() //Allows to execute Commands

 const express = require('express') 
const Topgg = require('@top-gg/sdk')
const app = express()
const event = new aoijs.CustomEvent(bot)

event.command({
listen: "votes",
code: `$sendDM[Thanks for voting!\nYou earned:\n**$getVar[Coi]100\n$getVar[DiamondEmoji]1**;$eventData[[0]];no]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$eventData[[0]]];100];$eventData[[0]]]
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$eventData[[0]]];1];$eventData[[0]]]`
})
event.listen("votes")

const webhook = new Topgg.Webhook(config.topgg)
app.post('/', webhook.listener(vote => {
event.emit('votes', vote.user)
}))
 
app.listen(6937) // It is best to change this port and keep it private. It is also recommended to only open the port you select (using something like ufw).
////////////////////////////////////////////////////////////////////////////

// custom funcs

bot.functionManager.createCustomFunction({
    name : '$say', 
    params : ['authorid','message'],
    type : 'aoi.js', 
    code : ` 
    **$userTag[{authorid}]** says: **{message}**
    `
    })