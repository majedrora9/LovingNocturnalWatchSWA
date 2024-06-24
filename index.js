const { Client, Intents } = require('discord.js');

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

const { Probot } = require("discord-probot-transfer");

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.probot = Probot(client, {
  fetchGuilds: true,
  data: [
    {
      fetchMembers: true,
      guildId: "1254567153449828442",
      probotId: "282859044593598464",
      owners: ["772171110086475808"],
    },
  ],
});

client.probot.on("transfered", (guild, data, err) => {
  if (err) return console.log(err);
  var { member, price, receiver, isOwner, fullPrice, channel } = data;
  
  guild.channel.send({ content: `> ${member.user}, شــكــراً عــلــى الــتــبــرع
> \`$${price}\` الـمـبـلـغ الـمـتـبـرع بـه`, files: [`https://media.discordapp.net/attachments/1026895178788773900/1190608769932079124/7ZAJPBy.png?ex=6679f913&is=6678a793&hm=feafad079b6886c5b60313dbf22cfabb897a76d032716948578cff70727f86fb&`] })

  if (price >= 100000 && price <= 1000000) {
    member.roles.add("1191439471137280020");
  } else if(price >= 1000000 && price <= 10000000) {
    member.roles.add("1190622825904607272");
  } else if(price >= 10000000 && price <= 30000000) {
    member.roles.add("1190622817952210954");
  } else if(price >= 30000000 && price <= 70000000) {
    member.roles.add("1190622813019705396")
  } else if (price >= 70000000) {
      member.roles.add("1190622807395160114");
    }

  
})

client.login(process.env.token);