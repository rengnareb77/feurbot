import dotenv from 'dotenv';
import { Client,IntentsBitField, Message } from 'discord.js';


dotenv.config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ]
})

client.login(process.env.TOKEN)

client.once('clientReady', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content.includes('quoi')) {
        handleReplies(message);
        
    }
});


const handleReplies = (message: Message<boolean>) => {
    // Random number between 0 and 70
    let random = Math.floor(Math.random() * 71);

    if (random < 10) {
        message.reply('feur');
    } else if (random < 20) {
        message.reply('https://cdn.discordapp.com/attachments/1139204938258448514/1177186433740570754/feur.gif?ex=6924d50c&is=6923838c&hm=564fad48ee9ec4684bc9cb96a5ce66c6c43903603e0c5accda6d6d3acf686beb&');
    } else if (random < 30) {
        const reply = {
            files: [{
                attachment: 'assets/feur.wav',
                name: 'feur.wav'
            }],

        }
        message.reply(reply);
    } else if (random < 40) {
        Promise.all([
            message.react('🔥'),
            message.react('🇷')
        ]);
    } else if (random < 50) {
        // React with feur emoji
        Promise.all([
            message.react('🇫'),
            message.react('🇪'),
            message.react('🇺'),
            message.react('🇷')
        ]);
    } else if (random < 60) {
        message.reply('https://fr.m.wikipedia.org/wiki/Feur');
    } else if (random < 70) {
        message.reply('https://www.youtube.com/watch?v=-aDmpj5hbYw');
    } else {
        message.reply('coubeh');
    }

}