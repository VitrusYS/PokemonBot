const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('namegen')
        .setDescription('Generates a Name for your Soullink Nuzlocke')
        .addStringOption(option =>
            option
                .setName('pokemon1')
                .setDescription('Name of the First Pokemon')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('pokemon2')
                .setDescription('Name of the Second Pokemon')
                .setRequired(true))
        .addBooleanOption( option =>
        option
            .setName('hidemessage')
            .setDescription('true = message will be only visible to you')),
    async execute(interaction) {
        let tempMessage = ``
        const pokemon1 = interaction.options.getString('pokemon1')
        const pokemon2 = interaction.options.getString('pokemon2')
        tempMessage += combineNames(pokemon1, pokemon2)
        tempMessage += "\n\n"+combineNames(pokemon2, pokemon1)


        await interaction.reply({
            content: tempMessage,
            ephemeral: interaction.options.getBoolean('hidemessage')
        });
    }
}

/**
 * Helper func
 *
 * Iterates over name1 and name2
 * Adds letters to name2 until complete, adds 1 more to name1, then repeat
 *
 * name1 = Hello
 * name2 = World
 *
 * HW - HWo - HWor - HWorl - HWorld
 * HeW - HeWo - HeWor - HeWorl - HeWorld
 * ...
 *
 * @param name1 First Pokemon Name
 * @param name2 Second Pokemon Name
 */
function combineNames(name1, name2) {
    let tempArr = []
    for (let i = 0; i < name1.length; i++) {
        for (let j = 0; j < name2.length; j++) {
            let tempString = name1.slice(0, i + 1) + name2.slice(0, j + 1);
            //Removes spaces
            tempArr.push(tempString.replace(/\s/g, ''));
        }
    }
    let uniqueChars = tempArr.filter((element, index) => {
        return tempArr.indexOf(element) === index;
    });

    let res = ""
    for (let i = 0; i < uniqueChars.length; i++) {
        res += uniqueChars[i] + "\n"
    }

    return res
}



