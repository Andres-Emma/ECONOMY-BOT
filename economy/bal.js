module.exports = {
  name: "balance",
  aliases: ["bal", "ball"],
  code: `$title[Tu Balance $username]
$thumbnail[$userAvatar[$authorID]]
$description[💵 **| Dinero**
$$getGlobalUserVar[cash]

💳 **| Bank**
$$getGlobalUserVar[bank]]
$color[$random[0;999999]]
$footer[@$username Balance Creado por Andres-Emma]
$addTimestamp`
};
