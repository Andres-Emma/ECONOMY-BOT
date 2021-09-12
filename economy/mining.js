module.exports = {
  
  name: "mining",
  code: `$setGlobalUserVar[diamond;$sum[$getGlobalUserVar[diamond];$random[0;5]]]
  $setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;4]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;4]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;5]]]
$title[**$username** Obtener:]
$color[$random[10000;999999]]
$description[$random[0;5] Diamante💎!, \`$getServerVar[prefix]selldiamond\` to sell 1 diamond for $1000]
$globalCooldown[2s;**⏰ Espera por %time% para volver a la minería de nuevo!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Tu tasa de hambre es del 10%, ¡y debes comer primero! Puedes comprar la comida.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Tu nivel de sed es del 20%, ¡y debes beber primero! Puedes comprar la bebida.]
$onlyIf[$getGlobalUserVar[health]>=30;Su índice de salud es del 30%, ¡y primero debe tomar y tomar medicamentos! Puedes comprarlo.]`
}
