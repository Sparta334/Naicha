const { Client, IntentsBitField } = require('discord.js');

const client = new Client({

    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates],


});

client.on('ready', (message) => {
    console.log("online")
})


client.on('messageCreate', (message) => {

    console.log(message)

})

client.on('voiceStateUpdate', (oldState, newState) => {
    const member = newState.member;
    const channel = newState.channel;

    if (channel) {
        console.log(`${member.displayName} 進入了語音頻道 ${channel.name}`);
        // 在此處執行進入語音頻道後的相關操作
    } else {
        console.log(`${member.displayName} 離開了語音頻道`);
        // 在此處執行離開語音頻道後的相關操作
    }
});



client.login("MTExNzQ1MzM1MzA5ODY5NDY3Ng.GJ9KcF.SiXR7fSmExEXMy6kfGjj-W6DeA1S4O56vzjun4")