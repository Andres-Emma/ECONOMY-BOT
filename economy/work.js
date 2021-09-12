module.exports = {
  name: "work",
  code: `
$author[WORK!]
$thumbnail[$userAvatar[$authorID]]
$description[Tu trabajas como $randomText[Desarrollador de juegos;YouTuber;Doctor;Músico;Editor;Ingeniero;Pro Gamer;Farmer;Streamer], y obtienes**$$random[45;350]** Dinero]
$color[RANDOM]
$footer[Creado por ANDRES-EMMA]
$addTimestamp

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[45;350]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;2]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;4]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;3]]]
$globalCooldown[30s;**⏰ Espera por %time% a trabajar de nuevo!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Tu tasa de hambre es del 10%, ¡y debes comer primero! Puedes comprar la comida.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Tu nivel de sed es del 20%, ¡y debes beber primero! Puedes comprar la bebida.]
$onlyIf[$getGlobalUserVar[health]>=30;Su índice de salud es del 30%, ¡y primero debe tomar y tomar medicamentos! Puedes comprarlo.]`
};
