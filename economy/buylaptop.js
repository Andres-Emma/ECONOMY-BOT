module.exports = {
  
  name: "buy-laptop",
  code: `
$description[**@$username Éxito en la compra de una computadora portátil💻 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];13000]]
$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop];1]]
$onlyIf[$getGlobalUserVar[cash]>=13000;Not enough cash!]`
}
