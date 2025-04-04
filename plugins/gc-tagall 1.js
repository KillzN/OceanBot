

const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `*ㅤㅤ⎈ : 𝙊𝘾𝙀𝘼𝙉 𝘾𝙊𝙍𝙋*\n     ┉┅━━━━━━━━━━┅┉ \n ${oi}\n\n`;
  for (const mem of participants) {
    teks += `🪷⋆༘ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└𝑩𝒚 𝑨𝒖𝒓𝒆𝒄𝒊𝒕𝒂 ༊⋆*`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall1|invocar1|invocacion1|todas|invocación1|putas)$/i;
handler.admin = true;
handler.group = true;
export default handler;