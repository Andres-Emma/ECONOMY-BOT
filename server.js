var dbd = require("dbd.js");
var fs = require("fs");

const bot = new dbd.Bot({
  token: process.env.TOKEN,
  prefix: "$getServerVar[prefix]"
});

//bot status
bot.status({
  text: process.env.BOT_ACTIVITY_TEXT,
  type: process.env.BOT_ACTIVITY_TYPE,
  time: 12
});

bot.onMessage();

//variable
bot.variables({
  prefix: process.env.PREFIX,
  bank: "0",
  cash: "0",
  diamond: "0",
  fish: "0",
  fishrod: "0",
  car: "0",
  house: "0",
  laptop: "0",
  fuel: "0",
  health: "100",
  hungry: "100",
  thirsty: "100",
  pizza: "0",
  drink: "0",
  hm: "0",
  daily: process.env.DAILY_SALARY,
  monthly: process.env.MONTHLY_SALARY
});

//commands handler
var reader = fs.readdirSync("./economy/").filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./economy/${file}`);
  bot.command({
    name: command.name,
    aliases: command.aliases,
    code: command.code
  });
}

//help command here
bot.command({
  name: "help",
  code: `$title[$userTag[$clientID] HELP MENU]

$description[**$getServerVar[prefix]Ayuda** - Esta!
**$getServerVar[prefix]balance** - Tu balance.
**$getServerVar[prefix]inven** - Tu Inventario.
**$getServerVar[prefix]dep** - Deposita dinero en el banco.
**$getServerVar[prefix]with** - Retirar del banco a efectivo.
**$getServerVar[prefix]daily** - Salario Diraio.
**$getServerVar[prefix]monthly** - Salario Mensual.
**$getServerVar[prefix]work** - Trabaja por Dinero.
**$getServerVar[prefix]mining** - Mina por Dinero.
**$getServerVar[prefix]fish** - Pesca.
**$getServerVar[prefix]heist** - ¿Atraco al banco internacional?
**$getServerVar[prefix]give** - Dale dinero a alguien.
**$getServerVar[prefix]shop** - Tienda. (¡más comando para comprar, comer, etc. aquí!)]

$color[RANDOM]
$footer[Creado por ANDRES-EMMA]
$addTimestamp`
});
