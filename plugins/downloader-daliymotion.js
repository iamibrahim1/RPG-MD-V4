import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!text) throw '*Enter links*\n Example: https://www.dailymotion.com/video/....'
let res = await axios('https://violetics.pw/api/downloader/dailymotion?apikey=${global.violetics}&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 Quality: ' + v.quality,
		description: '\n⌚ ID: ' + json.result.id + '\n⏲️ Title: ' + json.result.meta.title + '\n📎 URL: ' + v.url + '\n📌 Source: ' + json.result.meta.source + '\n👁️ Views: ' + json.result.meta.duration + '\n📌 SD: ' + json.result.sd.url + '\n\n📌 HD: ' + json.result.hd.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Here☂️`,
		description: `⚡ Hai ${name}, Please select ${command} Search in the button below...\n*Text to send:* ${text}\n\nRetype *${usedPrefix + command}* your text to change text again`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}
handler.help = ['dailymotion'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(dm|dailymotion)?$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler
