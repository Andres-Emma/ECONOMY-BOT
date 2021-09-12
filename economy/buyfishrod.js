module.exports = {
  
  name: "buy-fishrod",
  code: `
$description[**@$username Éxito en la compra de un equipo de pesca🎣 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];75]]
$setGlobalUserVar[fishrod;$sum[$getGlobalUserVar[fishrod];1]]
$onlyIf[$getGlobalUserVar[cash]>=75;Not enough cash!]`
}
