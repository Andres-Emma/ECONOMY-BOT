module.exports = {
  name: "dep",
  code: `
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$message]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$message]]
$description[**Depósito exitoso $$message Efectivo al banco!**]
$color[d28108]
$onlyIf[$message<=$getGlobalUserVar[cash];**¡El depósito no debe exceder el dinero que tienes!**]
$onlyIf[$message>=1;**Solo puede depositar más de$1.**]
$argsCheck[>1;Usa: \`$getServerVar[prefix]dep <Ammount>\`]`
};
