const {SlashCommandBuilder} = require('discord.js');
const {commandLogToConsole} = require("../../misc/log");

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
        .addBooleanOption(option =>
            option
                .setName('showmessage')
                .setDescription('true = message will be visible to everyone')),
    async execute(interaction) {
        let tempMessage = ``
        const pokemon1 = interaction.options.getString('pokemon1')
        const pokemon2 = interaction.options.getString('pokemon2')

        tempMessage += '```' + combineNames(pokemon1, pokemon2) + '\n' + combineNames(pokemon2, pokemon1) + '```'

        commandLogToConsole(interaction.createdAt, "/namegen", interaction.user.username)
        await interaction.reply({
            content: tempMessage,
            ephemeral: !interaction.options.getBoolean('showmessage')
        });
    }
}

/**
 * Helper func
 *
 * Iterates over name1 and name2+
 * Adds letters to name2 until complete, adds 1 more to name1, then repeat
 *
 * name1 = Hello
 * name2 = World
 *
 * HWorld - Horld - Hrld - Hld - Hd
 * HeWorld - Heorld - Herld - Held - Hed
 * ...
 *
 * @param name1 First Pokémon Name
 * @param name2 Second Pokémon Name
 */
function combineNames(name1, name2) {
    let tempArr = []
    tempArr.push("╔════════" + name1 + " + " + name2 + "════════")
    for (let i = 1; i < name1.length; i++) {
        for (let j = 0; j < name2.length; j++) {
            let tempString = name1.slice(0, i) + name2.slice(j, name2.length)
            //Removes spaces
            tempArr.push("╟" + tempString.replace(/\s/g, ''))
        }
    }

    let bottomText = "╚"
    for (let i = 0; i < tempArr[0].length - 1; i++) {
        bottomText += "═"
    }
    tempArr.push(bottomText)

    let uniqueChars = tempArr.filter((element, index) => {
        return tempArr.indexOf(element) === index
    });


    let res = ""
    for (let i = 0; i < uniqueChars.length; i++) {
        res += uniqueChars[i] + "\n"
    }

    return res
}

