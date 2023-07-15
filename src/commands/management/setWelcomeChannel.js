const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config({ path: '../../.env' });
const dotenv = require('dotenv');

//TODO: https://github.com/VitrusYS/PokemonBot/issues/1
module.exports = {
    data: new SlashCommandBuilder()
        .setName('setwelcomechannel')
        .setDescription('Sets the Channel where a bootup message should be displayed').
        addChannelOption(option =>
        option
            .setName('channel')
            .setDescription('Channel where bootup message should be displayed')),
    async execute(interaction) {
        const channelId = { welcomeChannelId: `${interaction.options.getChannel('channel').id}` }
        try {
            //DEBUG WELCOME
            dotenv.populate(process.env, channelId, { override: true, debug: true })
            console.log(`ChannelId: ${ interaction.options.getChannel('channel').id } logged.\nchannelId: ${process.env.welcomeChannelId}`)
        } catch (error) {
            console.log(`Problem with setting a new welcome Channel: ${error}`)
        }

        const newMessage = `Welcome channel is set to: ${interaction.options.getChannel('channel')}`
        await interaction.reply({
            content: newMessage
        });
    }
}
