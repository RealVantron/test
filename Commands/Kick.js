var Discord = require('discord.js')

module.exports = {
    name : 'Kick', //iTs cAsE sEnSiTiVe
    description : 'Kick ......',

    async execute  (message,msg,args){
        const member = message.mentions.users.first()
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            const it = args[1]
            memberTarget.kick('Kick Command');
            message.channel.send(`${it} has been kicked.`)
        }
        else{
            message.reply('No member specified.')
        }
    }
}

//const member = message.mentions.users.first()
//if(member){
//    const memberTarget = message.guild.members.cache.get(member.id);
//    const it = args[1]
//    memberTarget.kick("test reason");
//    message.channel.send(`${it} has been kicked.`)
//}
//else{
//    message.reply('No member specified.')
//}