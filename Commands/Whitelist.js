var Discord = require('discord.js')
var rbxbot = require('noblox.js')
var config = require(`../config.json`)
module.exports = {
    name : 'Whitelist', //iTs cAsE sEnSiTiVe
    description : 'Whitelist ......',

    async execute  (message,msg,args){
        const robloxname = args[1]
        const robloxid = await rbxbot.getIdFromUsername(robloxname)
        .then((robloxid) => {
            rbxbot.setRank({ group : config.GroupID, target : robloxid, rank: 3})
            .then(() => {
                message.reply(`Succesfully whitelisted ${robloxname}`)
                message.member.roles.add("815359376114188298")
                message.member.roles.remove("817614743761977365")
            })
            .catch((err) => {
                message.reply("User isn't in group or is ranked Premium or higher.")
                console.log(err)
            })
        })
        .catch((err) => {
            message.reply('User is not in group, read #whitelist-instructions for more information. (Keep in mind this is your Roblox username, not your Discord username.)')
            console.log(err)
        })
    }
}
