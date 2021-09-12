module.exports = {
  name: "inv",
  code: `$title[Your Inventory $username]
$thumbnail[$userAvatar[$authorID]]
$description[**❤VIDA**
**Salud**: $getGlobalUserVar[health]% 
**Nivel de Hambre**: $getGlobalUserVar[hungry]%
**Nivel de sed**: $getGlobalUserVar[thirsty]%

**🗃Inventario:**
**Pizza**: $getGlobalUserVar[pizza] 🍕
**Bebida**: $getGlobalUserVar[drink] 🥛
**Salud y Medicina**: $getGlobalUserVar[hm]
**Pescado**: $getGlobalUserVar[fish] Kg
**Equipamiento de Pescar**: $getGlobalUserVar[fishrod] 🎣
**Diamante**: $getGlobalUserVar[diamond] 💎
**Laptop**: $getGlobalUserVar[laptop] 💻
**Carro**: $getGlobalUserVar[car] 🚗
**Casa**: $getGlobalUserVar[house] 🏡

**⛽Gasolina:**
**Gasolina de Carro**: $getGlobalUserVar[fuel]L]
$color[RANDOM]
$footer[Creado por ANDRES-EMMA]
$addTimestamp`
};
