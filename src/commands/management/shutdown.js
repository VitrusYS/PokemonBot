const {SlashCommandBuilder} = require('discord.js');
const {adminId, devRoleId} = process.env
const {createLogString, logToConsole} = require('../../misc/log.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shutdown')
        .setDescription('Shutdowns bot (if permitted).'),
    async execute(interaction, client) {

        if (interaction.user.id === adminId || interaction.member.roles.cache.find(r => r.id === devRoleId)) {
            const newMessage = createLogString(interaction.createdAt, 'Shutting down...');

            await interaction.reply({
                content: newMessage
            });

            logToConsole(interaction.createdAt, `${interaction.user.username} stopped the bot`)
            client.destroy();

        } else {
            logToConsole(interaction.createdAt, `${interaction.user.username} tried to stop the bot`)
            const newMessage = `You have no permission to use that Command.`

            await interaction.reply({
                content: newMessage,
                ephemeral: true
            });
        }
    }
}
