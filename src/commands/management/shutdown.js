const { SlashCommandBuilder } = require('discord.js');
const { adminId, devRoleId } = process.env
module.exports = {
    data: new SlashCommandBuilder()
        .setName('shutdown')
        .setDescription('Shutdowns bot (if permitted).'),
    async execute(interaction, client) {

        if (interaction.user.id === adminId || interaction.member.roles.cache.find(r => r.id === devRoleId)) {
            let tempDate = interaction.createdAt
            const newMessage = `[${tempDate.getHours()}:${tempDate.getMinutes()}:${tempDate.getSeconds()}]: Shutting down...`
            await interaction.reply({
                content: newMessage
            });
            client.destroy();
        } else {
            const newMessage = `You have no permission to use that Command.`
            await interaction.reply({
                content: newMessage,
                ephemeral: true
            });
        }
    }
}
