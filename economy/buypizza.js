module.exports = {
  
  name: "buy-medic",
  code: `
$description[**@$username Éxito en la compra de un medicamento💊 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];125]]
$setGlobalUserVar[hm;$sum[$getGlobalUserVar[hm];1]]
$onlyIf[$getGlobalUserVar[cash]>=125;Not enough cash!]`
}
