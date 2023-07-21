import db from '../lib/database.js'

export async function all(m) {
	let { antiPrivado } = db.data.settings[this.user.jid]
	let uptime = timeString(process.uptime())
	let info_p = `🐱 𝗡𝗲𝗞𝗼𝗧𝗶𝗻𝗮𝗕𝗼𝘁-𝗠𝗗┃💖𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮┃🤖𝗕𝗼𝘁 𝗽𝗮𝗿𝗮 𝘁𝗲𝗿𝗺𝘂𝘅┃⏲️𝗧𝗶𝗲𝗺𝗽𝗼 𝗮𝗰𝘁𝗶𝘃𝗼: ${uptime}${antiPrivado ? "┃ No chats privados" : ""}`
	let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
    	await this.updateProfileStatus(info_p).catch((_) => _)
    settingstatus = new Date() * 1
    }
}
