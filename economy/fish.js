module.exports = {
  name: "fish",
  code: `$description[Pescas en$randomText[Baño;Río;Estanque;Piscina;Mar], y obtienes **$random[0;8] Kg de pescado.** \`$getServerVar[prefix]sellfish\` vender 5 kg de pescado por $ 250]
$color[$random[0;999999]]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];$random[0;8]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;2]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;4]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;3]]]
$globalCooldown[2m;**⏰ Espera %time% a pescar de nuevo!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Tu tasa de hambre es del 10%, ¡y debes comer primero! Puedes comprar la comida.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Tu nivel de sed es del 20%, ¡y debes beber primero! Puedes comprar la bebida.]
$onlyIf[$getGlobalUserVar[health]>=30;Su índice de salud es del 30%, ¡y primero debe tomar y tomar medicamentos! Puedes comprarlo.]
$onlyIf[$getGlobalUserVar[fishrod]>=1;¡No hay caña de pescar!]`
};
