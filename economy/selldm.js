module.exports = {
  
  name: "selldiamond",
  code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];1000]]
$setGlobalUserVar[diamond;$sub[$getGlobalUserVar[diamond];1]]
$title[__**VENDO DIAMANTE💎**__]
$color[00ff59]
$description[
**@$username Vendiendo con éxito 1 diamante por $ 1000.**]
$onlyIf[$getGlobalUserVar[diamond]>=1;¡No tienes tantos diamantes !.]`
}
