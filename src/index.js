const { Client, IntentsBitField } = require('discord.js');
const { EmbedBuilder  } = require('discord.js');
require('dotenv').config();
const client = new Client({

    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates],


});


const channelID = '811818451873562636';

//#region 啟動訊息

client.on('ready', (message) => {
    console.log("online")
})

//#endregion

//#region 偵測訊息

client.on('messageCreate', (message) => {

    console.log(message)

})

//#endregion

//#region 偵測語音


client.on('voiceStateUpdate', (oldState, newState) => {
    
    const member = newState.member;
    const channel = newState.channel;
    const textChannel = member.guild.channels.cache.get(channelID); // 獲取指定 ID 的文本頻道






    if (channel) { 
      
      const embed = new EmbedBuilder()
      .setColor(0x99FF00)
      .setAuthor({ name: member.displayName, iconURL: member.user.displayAvatarURL()})
      .setDescription('加入語音房間')
      .addFields({ name: '**頻道**', value: `**${channel.name}**`, inline: true })
      .setFooter( { text: `加入時間：${member.joinedAt.toLocaleString()}`});

      // 在此處執行進入語音頻道後的其他相關操作
      textChannel.send({ embeds: [embed] });
    }
    else
    {
        
        const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: member.displayName, iconURL: member.user.displayAvatarURL()})
        .setDescription('離開語音房間')
        .setFooter( { text: `離開時間：${member.joinedAt.toLocaleString()}`});

        const textChannel = member.guild.channels.cache.get(channelID); // 獲取指定 ID 的文本頻道

        if (textChannel) {
            textChannel.send({ embeds: [embed] });
        // 在此處執行離開語音頻道後的其他相關操作
        }
    }   
});





//#endregion

client.login(process.env.TOKEN )  