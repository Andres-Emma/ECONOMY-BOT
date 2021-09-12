module.exports = {
  
  name: "heist",
  code: `
  $description[$randomText[Tú y 5 de tus amigos lograron robar dinero en International Bank pirateando el sistema de seguridad;Usted mismo ha logrado irrumpir en el sistema de seguridad y robar el dinero que contiene.] **Y tu Obtienes $$random[1200;8000]**]
$color[$random[0;999999]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1200;8000]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;2]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;3]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;3]]]
$globalCooldown[12h;**⏰ Wait for %time% to heist again!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Tienes 10% de Hambre Primero Debes Comer,Puedes Comprar Comida]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Tu nivel de sed es del 20%, ¡y debes beber primero! Puedes comprar la bebida.]
$onlyIf[$getGlobalUserVar[health]>=30;Su índice de salud es del 30%, ¡y primero debe tomar y tomar medicamentos! Puedes comprarlo.]
$onlyIf[$getGlobalUserVar[laptop]>=1;¡No hay computadora portátil!]`
}
