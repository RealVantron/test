//Refering to the Packages

var Discord = require('discord.js');
var rbxbot = require('noblox.js');
const bot = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');
var config = require('./config.json')


bot.commands = new Discord.Collection();
const commandfiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));

for (const file of commandfiles){
    const command = require(`./Commands/${file}`);
    bot.commands.set(command.name,command);
}



bot.on ('message' , (message) => {
// Variables

var msg = message.content.toLowerCase()
var prefix = ';'
var args = message.content.split(/ +/)

 if(message.author.bot) return ; // If message.author is a bot it ignores it
 if (message.channel.type === 'dm') return ; // Ignotes Dm's To Prefent Errors From the Bot
 
 if (msg.startsWith(prefix + 'userinfo')){
     bot.commands.get('UserInfo').execute(message,msg);
 }
 if (msg.startsWith(prefix + 'whitelist')){
     if (message.member.roles.cache.has('815359376114188298')){
    message.reply("You're already whitelisted!");}
    else bot.commands.get('Whitelist').execute(message,msg,args);
 }
 if (msg.startsWith(prefix + 'wl')){
    message.reply
 }
 if (msg.startsWith(prefix + 'blacklist')){
    if (message.member.roles.cache.has('815359369965076490')){
        bot.commands.get('Blacklist').execute(message,msg,args);}
   else message.reply("You dont have permission to use this");
 }
 if (msg.startsWith(prefix + 'kick')){
    if (message.member.roles.cache.has('815359369965076490')){
        bot.commands.get('Kick').execute(message,msg,args);}
   else message.reply("You dont have permission to use this");
 }
 if (msg.startsWith(prefix + 'ban')){
    if (message.member.roles.cache.has('815359369965076490')){
        bot.commands.get('Ban').execute(message,msg,args);}
   else message.reply("You dont have permission to use this");
 }
 if (msg.startsWith(prefix + 'reactions1')){
    if (message.member.roles.cache.has('815359369965076490')){
        bot.commands.get('Reactions1').execute(message,msg,args,bot);}
   else message.reply("You dont have permission to use this");
 }
 if (msg.startsWith(prefix + 'avatar')){
    const user = message.mentions.users.first() || message.author ;
        const embed = new Discord.MessageEmbed()
        .setThumbnail(user.displayAvatarURL())
        message.channel.send(embed)
 }
})



bot.on ('ready' , async() => {
    bot.user.setActivity(";whitelist", {type : "LISTENING"})
    await rbxbot.setCookie(config.Cookie);
    console.log("The Bot is Running")
    //Code to Run when the Bot Logs in
});









bot.login(config.Token)
