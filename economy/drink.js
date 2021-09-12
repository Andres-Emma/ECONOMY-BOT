module.exports = {
  name: "drink",
  code: `
$description[Uhh ... ¡Esto es tan refrescante!]
$setGlobalUserVar[drink;$sub[$getGlobalUserVar[dink];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];3]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];2]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];5]]
$onlyIf[$getGlobalUserVar[health]<=100;Tu nivel de salud es 100%]
$onlyIf[$getGlobalUserVar[hungry]<=100;Tu nivel de hambre es del 100%]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Tu nivel de sed es 100%]
$onlyIf[$getGlobalUserVar[drink]>=1;¡No hay suficiente bebida!]`
};
