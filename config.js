import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

global.owner = [['8801853262586', '🍀 Sleeping Venox', true] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['8801853262586']
global.prems = ['8801853262586']
global.allowed = ['8801853262586']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
}

// Sticker WM
global.botname = 'ⁱʳⁱˢ ᵇᵃⁱˡᵉʸˢ ᵐᵈ'
global.premium = 'true'
global.packname = 'Sticker By'
global.author = '🍀 VenoxSenpai\n\n💬 Contact: +8801853262586'
global.menuvid = 'https://i.imgur.com/AjDzGgG.mp4'
global.igfg = 'https://gg.gg/irisbotz'
global.dygp = 'https://gg.gg/irisbotz'
global.fgsc = 'https://github.com/V-E-N-O-X/IRIS-MD'
global.fgyt = 'https://gg.gg/irisbotz'
global.fgpyp = 'https://gg.gg/irisbotz'
global.fglog = 'https://i.ibb.co/G35jn3J/bot2p.jpg'
global.thumb = 'https://i.ibb.co/G35jn3J/bot2p.jpg'

global.wait = '```Loading please wait```'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '5'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
