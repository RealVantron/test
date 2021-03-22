var Discord = require('discord.js')

module.exports = {
    name : 'Reactions1', //iTs cAsE sEnSiTiVe
    description : 'Reactions1 ......',

    async execute  (message,msg,args,client){
        const channel = '816103616254836736'
        const role = message.guild.roles.cache.find(role => role.name === "Game Logs")
        const emoji = '⚪'
        let embed = new Discord.MessageEmbed()
            .setColor('#099900')
            .setTitle('React to this message to see game logs')
            .setDescription('You get new games live, and current games player count.\n\nHowever, game logs could get spammed, so you could get mass pinged.')
        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(emoji);
    }
}