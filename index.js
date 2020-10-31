const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
// const {token,prefix} = require('./config.json');


client.on('ready',()=>{
    console.log(`Logged on as ${client.user.tag}`)
  
})


client.on('messageReactionAdd',async (reaction,user)=>{
    if(reaction.message.channel.id !== '771318669112246283')return;
    if(reaction.message.id === '771588558372732938'){
        let emot = reaction.emoji.name
        let role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === emot.toLowerCase());
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        

    //    console.log('add');
        
        member.roles.add(role.id);
    }
})

client.on('messageReactionRemove',async (reaction,user)=>{
    if(reaction.message.channel.id !== '771318669112246283')return;
    if(reaction.message.id === '771588558372732938'){
        let emot = reaction.emoji.name
        let role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === emot.toLowerCase());
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        

    //    console.log('remove');
        
        member.roles.remove(role.id);
    }
})




client.login(process.env.TOKEN);