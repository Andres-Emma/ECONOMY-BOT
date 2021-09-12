module.exports = {
  
  name: "take-medicine",
  code: `
$description[.....]
$setGlobalUserVar[hm;$sub[$getGlobalUserVar[hm];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];9]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];4]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];4]]
$onlyIf[$getGlobalUserVar[health]<=100;Tu nivel de salud es 100%]
$onlyIf[$getGlobalUserVar[hungry]<=100;Tu nivel de hambre es del 100%]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Tu nivel de sed es 100%]
$onlyIf[$getGlobalUserVar[hm]>=1;¡No hay suficiente medicina!]`
}
