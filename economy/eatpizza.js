module.exports = {
  
  name: "eat-pizza",
  code: `
$description[Ummm ... ¡Esto es tan bueno!]
$setGlobalUserVar[pizza;$sub[$getGlobalUserVar[pizza];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];2]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];6]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];4]]
$onlyIf[$getGlobalUserVar[health]<=100;Tu nivel de salud es 100%]
$onlyIf[$getGlobalUserVar[hungry]<=100;Tu nivel de hambre es del 100%]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Tu nivel de sed es 100%]
$onlyIf[$getGlobalUserVar[pizza]>=1;¡No hay suficiente pizza!]`
}
