import{generateWAMessageFromContent as t}from"@adiwajshing/baileys";import e from"../lib/database.js";let handler=async(a,{conn:i,participants:o,groupMetadata:n,isBotAdmin:s})=>{let{isBanned:c,welcome:d,detect:r,antiLink:A,antiLink2:l,delete:v,estranjerosnot:I,antifake1:u,antifake2:h,antiTraba:p,simi:X}=e.data.chats[a.chat],{restrict:m,antiPrivado:g,nkNspm:D}=e.data.settings[i.user.jid],O=i.user.id.split(":")[0]+"@s.whatsapp.net",b="@"+i.user.id.split(":")[0];"‎".repeat(850);let f=t(a.chat,{liveLocationMessage:{degreesLatitude:-4.4764769,degreesLongitude:142.4871568,caption:`
╭════❮ 𝗘𝗦𝗧𝗔𝗗𝗢 - 𝗕𝗢𝗧 ❯════❍
*❐🍂 Grupo:* ${n.subject} 
*❐❄ ️Grupo baneado:* ${c?"Si ✅":"No ❎"}
*❐🤖 Bot del grupo:* ${b}
*❐👑 Bot admin:* ${s?"Si ✅":"No ❎"}
*❐🌾 Bot:* ${opts.self?"MODO-PRIVADO 🪫":"MODO-PUBLICO 🔋"}
*❐🌊 Modo restringido:* ${m?"ACTIVADO ✅":"DESACTIVADO ❎"}
*❐💬 Anti-Privado:* ${g?"ACTIVADO ✅":"DESACTIVADO ❎"}
*❐💻 Ser Sub-Bot:* ${D?"ACTIVADO ✅":"DESACTIVADO ❎"}
*❐👤 Bienvenida:* ${d?"Activado ✅":"Desactivado ❎"}
*❐🔗 Antilink:* ${A?"Activado ✅":"Desactivado ❎"}
*❐⛓️ Antilink 2:* ${l?"Activado ✅":"Desactivado ❎"}
*❐🇱🇷 Anti extranjeros:* ${I?"Activado ✅":"Desactivado ❎"}
*❐Ⓜ️ No falsos:* ${u?"Activado ✅":"Desactivado ❎"}
*❐🚾 No falsos 2:* ${h?"Activado ✅":"Desactivado ❎"}
*❐👁️‍🗨️ Detecci\xf3n:* ${r?"Activado ✅":"Desactivado ❎"}
*❐🗯️ Anti eliminar:* ${v?"Desactivado ❎":"Activado ✅"}
*❐☣️ Antitraba:* ${p?"Activado ✅":"Desactivado ❎"}
*❐💠 Chat bot:* ${X?"Activado ✅":"Desactivado ❎"}
╰════════════════════❍
`,sequenceNumber:0x5e2b9e7ffcf11,timeOffset:8600,jpegThumbnail:null,contextInfo:{mentionedJid:[O]}}},{quoted:a});await i.relayMessage(a.chat,f.message,{messageId:f.key.id}),reacMoji(a.chat,i,"\uD83E\uDE80",a)};handler.help=["estadobot"],handler.tags=["casual"],handler.command=/^(estadobot|estado)$/i;export default handler;
