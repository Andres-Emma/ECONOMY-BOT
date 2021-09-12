module.exports = {
  
  name: "sellfish",
  code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];250]]
$setGlobalUserVar[fish;$sub[$getGlobalUserVar[fish];5]]
$title[__**VENDO PESCADO🐟**__]
$color[00ff59]
$description[
**@$username Vendiendo con éxito 5 KG de pescado por $ 250.**]
$onlyIf[$getGlobalUserVar[fish]>=5;¡No tienes tantos peces!]`
}
