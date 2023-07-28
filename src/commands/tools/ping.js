const {SlashCommandBuilder} = require('discord.js');
const {commandLogToConsole} = require("../../misc/log");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Return my ping!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `API Latency: ${client.ws.ping}\n Client Ping ${message.createdTimestamp - interaction.createdTimestamp}`

        commandLogToConsole(interaction.createdAt, "/ping", interaction.user.username)
        await interaction.editReply({
            content: newMessage
        });
    }
}
