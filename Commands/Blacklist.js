var Discord = require('discord.js')
var rbxbot = require('noblox.js')
var config = require(`../config.json`)
module.exports = {
    name : 'Blacklist', //iTs cAsE sEnSiTiVe
    description : 'Blacklist ......',

    async execute  (message,msg,args){
        const robloxname = args[1]
        const robloxid = await rbxbot.getIdFromUsername(robloxname)
        .then((robloxid) => {
            rbxbot.setRank({ group : config.GroupID, target : robloxid, rank: 2})
            .then(() => {
                message.reply(`Succesfully blacklisted ${robloxname}`)
            })
            .catch((err) => {
                message.reply('User is ranked Premium or higher.')
                console.log(err)
            })
        })
        .catch((err) => {
            message.reply('User is not in group.')
            console.log(err)
        })
    }
}
