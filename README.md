# Pokemon Nuzlocke Discord Bot

Welcome to the Pokémon Nuzlocke Discord Bot! This bot is designed to assist you and your friends in running a Nuzlocke challenge on supported Games.

## TO-DOs

- [ ] Format /namegen properly 
- [ ] Adjust this freaking readme properly, so it's easy to read
- [ ] Make bot executeable on pi
- [ ] [Fix setWelcomeChannel.js // dotenv populate](https://github.com/VitrusYS/PokemonBot/issues/1#issue-1806148335)
- [ ] Simple example Pokémon data embeds
- [ ] Build a proper Pokémon embed (bonus points if it looks good)
- [ ] Use [PokéAPI](https://github.com/PokeAPI/pokedex-promise-v2) for some data
- [ ] Parse common rom hack documents to extract data
  - [ ] Black 2 Redux
  - [ ] Renegade Platinum

 
## Getting Started

To use the Pokémon Nuzlocke Discord Bot, you'll need to have a few things set up first:

1. A Discord server where you have the necessary permissions to add a bot
2. A bot token for the bot you want to add to your server
3. [Node.js](https://nodejs.org/) installed on your computer

Once you have these things set up, you can follow these steps to get the bot up and running:

1. Clone this repository to your local machine
2. Open the repository in your preferred code editor
3. Create a `.env` file in the root directory of the project
4. In the `.env` file, add your bot token, bot client ID (clientId) and server ID (guildId) like this:
   <br>`token=your-bot-token-here`
   <br>`clientId=your-bot-id-here`
   <br>`guildId=your-server-id-here`
5. In your terminal, navigate to the repository and run `npm install`
6. Run `npm start` to start the bot

And that's it! Your bot should now be up and running on your Discord server.

## How to Use the Bot

The Pokémon Nuzlocke Discord Bot has a few commands that you can use to assist with running your Nuzlocke challenge. Here are the available commands:


> Nothing much yet, hopefully more soon <br>

> [] - required<br>
> {} - optional<br>

<details>
<summary>/namegen</summary>

### - `namegen [pokemon1] [pokemon2] {hidemessage}` 
- pokemon1      - Name of the first Pokémon
- pokemon2      - Name of the second Pokémon
- hidemessage   - If message is shown just to you

</details>


## Contributing

If you'd like to contribute to the Pokémon Nuzlocke Discord Bot, please feel free to contact me on [Discord](https://discordapp.com/users/137223780937236480).
<br><br>I'm currently learning how to properly setup discord bots, so any kind of advice is welcome ^^.


## Acknowledgments

- Thanks to [Discord.js](https://discord.js.org/) for making it easy to create Discord bots
- Thanks to the Nuzlocke community for inspiring this project!
