import db from '../lib/database.js'

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = db.data.chats[m.chat]
    let bot = db.data.settings[this.user.jid] || {}
    let prt = m.key.participant
    let yid = m.key.id
    const isGroupLink = linkRegex.exec(m.text)
    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return m.reply('❐══════❮ 𝗔𝗡𝗧𝗜 - 𝗟𝗜𝗡𝗞 ❯══════❐\n\n@${m.sender.split("@")[0]} Acabas de envial un link lo bueno es que el link es del grupo\n')
        }
        if (!isBotAdmin) return conn.sendButton(m.chat, `❐══════❮ 𝗔𝗡𝗧𝗜 - 𝗟𝗜𝗡𝗞 ❯══════❐\n`, `Por suerte no soy admin, asi que no puedo hacer nada :v`, NombreDelBot, ['[ 🚮 DESACTIVAR ANTILINK ]', usedPrefix+'apagar antilink'], m)
        await  conn.sendMessage(m.chat, { text: `❐══════❮ 𝗔𝗡𝗧𝗜 - 𝗟𝗜𝗡𝗞 ❯══════❐\nAhora si te jodiste @${m.sender.split("@")[0]} Seras eliminado\n`, mentions: [m.sender] }) 
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: yid, participant: prt }})
setTimeout(() => { 
	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
        /**if (isBotAdmin && bot.restrict) {   
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!')**/
    }
    return !0
}
