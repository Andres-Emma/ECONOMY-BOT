module.exports = {
  
  name: "with",
  code: `
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$message]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$message]]
$description[**¡Exito retiro $ $message Banco a efectivo!**]
$color[d28108]
$onlyIf[$message<=$getGlobalUserVar[bank];**¡El retiro no debe exceder el dinero que tienes! **]
$onlyIf[$message>=1;**Solo puede retirar más de $ 1. **]
$argsCheck[>1;Use: \`$getServerVar[prefix]with <Ammount>\`]`
}
