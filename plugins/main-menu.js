const handler = async (m, {conn}) => {
  m.reply(global.menu);
};
handler.command = /^(.menu)$/i;
export default handler;
handler.group = true

global.menu= `




import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

const defaultMenu = {
  before: `
*︵‿︵‿︵‿︵ ︵‿︵‿︵‿︵︵‿︵‿*

“ Hola mortal *%name* soy  *⚝Hades⚝*, %greeting ”

     ⋆[ *>INFO DE HADES<* ]
 ↡▰▱▰▱▰▱▰▱▰▱▰▱▰▱
 》* 🪐Estado* :  Hades Público 
 》*🗡️ Baileys* : Hades multi
 》*⌛ Despierto * : %muptime
 》*👥Mortales* : %totalreg
 ↟▰▱▰▱▰▱▰▱▰▱▰▱▰▱

%readmore
╭════ [ *>INFO DE USER <* ]════ 
│⬐ ▰▱▰▱▰▱▰▱▰▱▰▱▰▱
 》 *👥Mortal* : %name
 》 *🌌 Cosmos* : %limit
 》 *🌀Nivel* : %level
 》 *🌠 XP* : %totalexp
 ⬑ ▰▱▰▱▰▱▰▱▰▱▰▱▰▱
╰───────────═┅═──────────
    *★ M E N Ú-HADES ★ *

╭───═[ MENU🔞]═────⋆
│»»————--　★　————-««···
⚔️│.xnxxsearch 
⚔️│.xnxxdl (enlace) 
⚔️│ .pornhubsearch 
│╰»»————--　★　————-««···
╰───────────═┅═──────────
╭───═[🎮VS GAMES🎮]═────⋆
│»»————--　★　————-««···
⚔️│.➺ _.Vs4_ 
⚔️│.➺ _.Vs8_ 
⚔️│.➺ _.Vs6_
⚔️│.➺ _.Vs12_
│╰»»————--　★　————-««···
╰───────────═┅═──────────
