var Discord = require('discord.js')

module.exports = {
    name : 'UserInfo', //iTs cAsE sEnSiTiVe
    description : 'UserInfo ......',

    execute  (message,msg){
        const user = message.mentions.users.first() || message.author ;
        const embed = new Discord.MessageEmbed()
        .setTitle('User Information')
        .setDescription('Displays User Information')
        .addField('Username' , user.username)
        .addField('Account Created at' , user.createdAt.toLocaleDateString())
        .setThumbnail(user.displayAvatarURL())
        .setFooter(message.author.username)
        .setTimestamp()
        message.channel.send(embed)
    }
}