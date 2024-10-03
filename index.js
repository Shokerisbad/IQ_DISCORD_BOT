// Extract the required classes from the discord.js module
const { Client, MessageAttachment } = require('discord.js');
const google = require('google');

// Create an instance of a Discord client
const client = new Client();


function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // If the message is '!rip'
  if (message.content === '!rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/1016708323573243936/1016727311191646218/unknown.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});

const iq_Images = ['https://i.imgur.com/Xe9fU3O.jpg', 'https://i.imgur.com/FmdegrD.png', 'https://i.pinimg.com/736x/49/76/9b/49769b3e5321a99ea3fc58edcff43d63.jpg',
  'https://www.vhv.rs/dpng/d/296-2966382_fanart-rainbow-six-siege-iq-hd-png-download.png', 'https://www.seekpng.com/png/full/869-8695189_if-rainbow-six-siege-iq-fanart.png'
  , 'https://pm1.narvii.com/6813/d7da1185dd9df42713e051c92b822b872d14f3b9v2_hq.jpg', 'https://cdn.discordapp.com/attachments/659411754367057922/802143572262518834/tumblr_p121n5C37H1t61mh5o2_1280.png'
  , 'https://cdn.discordapp.com/attachments/659411754367057922/802144596095139860/wzz6uwxl6c201.png', 'https://i.pinimg.com/originals/1d/68/23/1d68238320535f4922136319d98398c2.jpg', 'https://static.wikia.nocookie.net/rainbowsix/images/8/8c/IQ_-_Full_Body.png/revision/latest?cb=20180110054100', 'https://i.ytimg.com/vi/jlhR_gaTsHw/maxresdefault.jpg',
  'https://steamuserimages-a.akamaihd.net/ugc/487892961324230053/70496F6C77D5B3F1E0A62FC2339423AD0ED4319C/', 'https://cs1.gtaall.com/screenshots/4dc09/2019-05/original/90b7f7bcf68fa7e11464b8820b91fa166489301c/722315-gta-sa-2019-05-01-15-33-57-06-result.jpg',
  'https://static.invenglobal.com/upload/image/2019/01/20/i1548033840798385.jpeg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW88po39HoiAw0Xr7dpumS_xZGs9zDFPaNgQ&usqp=CAU1', 'https://cdn.discordapp.com/attachments/659411754367057922/811209837257162752/dd8wylk-6b38192d-0e8b-4610-8cf4-4e4326bf9f77.png',
  'https://cdn.discordapp.com/attachments/659411754367057922/811209900835078195/1284041-1549122454.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811210044879273995/EMgdRNTX0AIFrVH.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811210325772075029/rainbow_six_siege_iq_and_ela_training_by_stanislawww_dcr9wg1-fullview.png'
  , 'https://cdn.discordapp.com/attachments/659411754367057922/811211470536048660/images.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811212102072270888/apps.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811212468629143564/dmitry-kozlov-iq-3-by-angryrabbitgmod-d9s6014-1.png'
  , 'https://cdn.discordapp.com/attachments/659411754367057922/811212600079155200/images.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811212630592061510/images.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811212723400343612/cx1uzfu5rvgz.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811212882989154314/maxresdefault.png'];

const horror_Images = ['https://cdn.discordapp.com/attachments/659411754367057922/811211718889046036/1450021750_gm_paranormal0010.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811211786116005888/1450021599_gm_paranormal0009.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811211827349815306/1450021785_gm_paranormal0007.png'
];

client.on('message', message => {
  if (message.content === '!IQ') {
    var result = getRandomItem(iq_Images);
    const attachment = new MessageAttachment(result)

    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!fish") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/802147271540998174/IMG-20201127-WA0035.jpg")

    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!secret") {
    const attachment = new MessageAttachment("https://thumbs.gfycat.com/WillingWindyCoelacanth-mobile.mp4")

    message.channel.send(attachment);
  }
})
const oof_img = ['https://cdn.discordapp.com/attachments/659411754367057922/803197358924890162/ubCFWmq.png', 'https://cdn.discordapp.com/attachments/659411754367057922/803196544476119100/tblgHiB.png',
  'https://cdn.discordapp.com/attachments/659411754367057922/803197406060740658/fegy19ahu8qy.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811212950630301706/a2d9c9f335087ac9930c9108ab2c00221bc2ae3cr1-1920-1080v2_hq.png'];

client.on('message', message => {
  if (message.content === "!oof") {
    var result_oof = getRandomItem(oof_img);
    const attachment = new MessageAttachment(result_oof);


    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!fek") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/803198399439699968/d9s5l6a-845076ba-2297-4306-ac5a-15e96de38e17.png");

    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!diamonds") {
    const attachment = new MessageAttachment("https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131074582/original/f23a90037ffb2c688729341921c7168497392483/mine-diamonds-for-you-in-minecraft.jpg");

    message.channel.send(attachment);
  }
})


client.on('message', message => {
  if (message.content === "!how?") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/804276426681090058/unknown.png");

    message.channel.send(attachment);
  }
})
client.on('message', message => {
  if (message.content === "!sabike") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/804612504604246036/unknown.png");

    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!sakiller") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/804612583776190464/unknown.png");

    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!noo") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/808225048967381002/unknown.png");

    message.channel.send(attachment);
  }
})



client.on('message', message => {
  if (message.content === "!creator") {
    const fetchUser = async id => client.users.fetch(id)
    message.channel.send({
      embed: {
        color: 3447003,
        description: 'Hehehe' + " IT LIVES"
      }
    })

  }
})

client.on('message', message => {
  if (message.content === '!horror') {
    var result = getRandomItem(horror_Images);
    const attachment = new MessageAttachment(result)

    message.channel.send(attachment);
  }
})


client.on('message', message => {
  if (message.content === "!GSG9") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/811212151011672094/thumb-1920-685314.png");

    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!GIGN") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/811212212865728513/thumb-1920-685311.png");

    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!FBI") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/811212318339760158/eexa5oxatk261.png");

    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!SPETNAZ") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/811212372818657300/thumb-1920-685312.png");

    message.channel.send(attachment);
  }
})



client.on('message', message => {
  if (message.content === "!summer") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/811213677260439552/0nxz1p1gomz11.png");

    message.channel.send(attachment);
  }
})

const uwu_Images = ['https://cdn.discordapp.com/attachments/659411754367057922/811213954704867348/summer_s_officially_over__sunny_iq_by_rookie425_dcsc3n6-fullview.png', 'https://cdn.discordapp.com/attachments/659411754367057922/811214021842829332/tactical_summer_by_roguepolice_dbvrdka-fullview.png'];

client.on('message', message => {
  if (message.content === '!uwu') {
    var result = getRandomItem(uwu_Images);
    const attachment = new MessageAttachment(result)

    message.channel.send(attachment);
  }
})

client.on('message', message => {
  if (message.content === "!surprise") {
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/659411754367057922/811213564789391370/037DF42F84C6C6F9A8549B973B3C053C01A421F6.png");

    message.channel.send(attachment);
  }
})
client.on("message", msg => {
  if (msg.content == "I am your creator")
    msg.react("❤️")

})

client.on("message", message => {
  if (message.author.id == "209082777495273473") {
    var result = getRandomItem(emoji);
    const reaction = result;
    message.react(reaction);
  }
})
const emoji = ["❗", "🔥", "👍", "🙈", "🍌", "❤️"];



// Log our bot in using the token from https://discord.com/developers/applications
client.login('${token}');
