const Discord = require('discord.js')
const botsettings = require('./botsettings.json')

const bot = new Discord.Client({disableEvryone: true});

bot.login(botsettings.token);
