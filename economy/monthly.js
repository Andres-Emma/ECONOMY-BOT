module.exports = {
  
  name: "monthly",
  code: `
$title[Salario Mensual.]
$thumbnail[$userAvatar[$authorID]]
$description[Has recibido**$getServerVar[monthly]** de tu mesada diaria! ¡El dinero ya está en efectivo!]
$color[RANDOM]
$footer[Creado por ANDRES-EMMA]
$addTimestamp

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getServerVar[monthly]]]
$globalCooldown[30d;**⏰ Espera por %time% para reclamar el salario mensual nuevamente!**]`
}
