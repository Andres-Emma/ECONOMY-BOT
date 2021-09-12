module.exports = {
  
  name: "daily",
  code: `
$title[Salario Diario.]
$thumbnail[$userAvatar[$authorID]]
$description[Has recibido**$getServerVar[daily]** de tu mesada diaria! ¡El dinero ya está en efectivo!]
$color[$random[0;999999]]
$addTimestamp

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getServerVar[daily]]]
$globalCooldown[1d;**⏰ Espera %time% para reclamar el salario diario de nuevo!**]`
}
