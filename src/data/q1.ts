import type { AgendaEntry } from '../types/agenda';

export const Q1_ENTRIES: AgendaEntry[] = [
  // GENNAIO (31 giorni)
  {
    id: '01-01', month: 1, day: 1, dayOfYear: 1, jpDate: '一月一日',
    season: 'Inverno', sekki: 'Tōji', category: 'Festa Nazionale',
    titleIt: 'Capodanno e Prima Preghiera dell’Anno', titleJp: '元日・初詣 (Ganjitsu · Hatsumōde)',
    observanceDesc: 'Il primo giorno dell’anno segna l’accoglienza di Toshigami, la divinità dell’anno nuovo. Famiglie e visitatori compiono l’hatsumōde ai santuari shintō, gustano l’osechi ryōri e si scambiano le cartoline nengajō.',
    kanji: '初', meaningIt: 'inizio, prima volta', strokes: 7, radical: '刀 (spada)',
    on: [{ kana: 'ショ', romaji: 'sho' }],
    kun: [{ kana: 'はじ(め)', romaji: 'haji(me)' }, { kana: 'はつ', romaji: 'hatsu' }, { kana: 'うい', romaji: 'ui' }],
    originStory: 'Unisce i pittogrammi di un abito (衤) e di una lama (刀): tagliare la stoffa nuova con le forbici o il coltello era l’atto inaugurale per confezionare un vestito, divenuto simbolo di ogni inizio.',
    examples: [
      { word: '初詣', kana: 'はつもうで', romaji: 'hatsumōde', meaning: 'prima visita al santuario dell’anno' },
      { word: '初日', kana: 'しょにち', romaji: 'shonichi', meaning: 'primo giorno di apertura' },
      { word: '最初', kana: 'さいしょ', romaji: 'saisho', meaning: 'all’inizio, primissimo' }
    ]
  },
  {
    id: '01-02', month: 1, day: 2, dayOfYear: 2, jpDate: '一月二日',
    season: 'Inverno', sekki: 'Tōji', category: 'Rito Shintō',
    titleIt: 'Prima Calligrafia dell’Anno', titleJp: '書き初め (Kakizome)',
    observanceDesc: 'Tradizionalmente il 2 gennaio si traccia con il pennello un verso propizio o un kanji d’auspicio, inaugurando le attività creative, il primo sogno (hatsuyume) e i primi acquisti (hatsuuri).',
    kanji: '夢', meaningIt: 'sogno, visione', strokes: 13, radical: '夕 (sera)',
    on: [{ kana: 'ム', romaji: 'mu' }],
    kun: [{ kana: 'ゆめ', romaji: 'yume' }],
    originStory: 'In origine raffigurava una figura con sopracciglia accentuate e un letto sotto il segno della sera (夕): evocava le immagini che attraversano lo sguardo chiuso durante il riposo notturno.',
    examples: [
      { word: '初夢', kana: 'はつゆめ', romaji: 'hatsuyume', meaning: 'primo sogno dell’anno' },
      { word: '夢中', kana: 'むちゅう', romaji: 'muchū', meaning: 'immerso, appassionato' },
      { word: '夢見る', kana: 'ゆめみる', romaji: 'yumemiru', meaning: 'sognare' }
    ]
  },
  {
    id: '01-03', month: 1, day: 3, dayOfYear: 3, jpDate: '一月三日',
    season: 'Inverno', sekki: 'Tōji', category: 'Rito Shintō',
    titleIt: 'Rito di Genshisai e Chiusura dei Tre Giorni', titleJp: '元始祭 (Genshisai)',
    observanceDesc: 'Ultimo dei tre giorni solenni di Capodanno (Sanganichi), dedicato all’origine della linea imperiale e dei riti purificatori presso il Santuario di Ise e i santuari del Paese.',
    kanji: '元', meaningIt: 'origine, principio', strokes: 4, radical: '儿 (gambe)',
    on: [{ kana: 'ゲン', romaji: 'gen' }, { kana: 'ガン', romaji: 'gan' }],
    kun: [{ kana: 'もと', romaji: 'moto' }],
    originStory: 'Rappresenta una figura umana di profilo con due tratti orizzontali sopra la testa, a indicare il capo supremo e dunque il punto di partenza di ogni cosa.',
    examples: [
      { word: '元日', kana: 'がんじつ', romaji: 'ganjitsu', meaning: 'giorno di Capodanno' },
      { word: '元気', kana: 'げんき', romaji: 'genki', meaning: 'energia, buona salute' },
      { word: '地元', kana: 'じもと', romaji: 'jimoto', meaning: 'luogo d’origine, zona locale' }
    ]
  },
  {
    id: '01-04', month: 1, day: 4, dayOfYear: 4, jpDate: '一月四日',
    season: 'Inverno', sekki: 'Tōji', category: 'Giornata Curiosa',
    titleIt: 'Ripresa del Lavoro e Prima Pietra', titleJp: '仕事始め・石の日 (Shigoto Hajime · Ishi no Hi)',
    observanceDesc: 'In Giappone uffici e botteghe riaprono per il primo giorno lavorativo dell’anno. Per gioco fonetico (1-4 = i-shi), è anche la giornata dedicata alle pietre sacre, ai Jizō e ai giardini zen.',
    kanji: '石', meaningIt: 'pietra, roccia', strokes: 5, radical: '石 (pietra)',
    on: [{ kana: 'セキ', romaji: 'seki' }, { kana: 'シャク', romaji: 'shaku' }, { kana: 'コク', romaji: 'koku' }],
    kun: [{ kana: 'いし', romaji: 'ishi' }],
    originStory: 'Disegno diretto di un masso roccioso (口) adagiato sotto la sporgenza di una scarpata (厂): la forma arcaica mostrava proprio una pietra ai piedi di un dirupo.',
    examples: [
      { word: '庭石', kana: 'にわいし', romaji: 'niwaishi', meaning: 'pietra ornamentale da giardino' },
      { word: '宝石', kana: 'ほうせき', romaji: 'hōseki', meaning: 'pietra preziosa' },
      { word: '磁石', kana: 'じしゃく', romaji: 'jishaku', meaning: 'calamita, magnete' }
    ]
  },
  {
    id: '01-05', month: 1, day: 5, dayOfYear: 5, jpDate: '一月五日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Natura e Stagioni',
    titleIt: 'Piccolo Freddo e Giornata della Fragola', titleJp: '小寒・いちごの日 (Shōkan · Ichigo no Hi)',
    observanceDesc: 'Intorno al 5 gennaio inizia Shōkan, il "Piccolo Freddo", che apre il cuore dell’inverno. Per goroawase (1-5 = i-chi-go), si celebrano anche le fragole invernali e gli studenti agli esami.',
    kanji: '寒', meaningIt: 'freddo, gelido', strokes: 12, radical: '宀 (tetto)',
    on: [{ kana: 'カン', romaji: 'kan' }],
    kun: [{ kana: 'さむ(い)', romaji: 'samu(i)' }],
    originStory: 'Sotto un tetto (宀) una figura si copre tra fasci d’erba essiccata mentre sotto compaiono due cristalli di ghiaccio (冫): l’immagine antica del ripararsi dal gelo invernale.',
    examples: [
      { word: '小寒', kana: 'しょうかん', romaji: 'shōkan', meaning: 'Piccolo Freddo (sekki)' },
      { word: '寒気', kana: 'さむけ', romaji: 'samuke', meaning: 'brivido di freddo' },
      { word: '防寒', kana: 'ぼうかん', romaji: 'bōkan', meaning: 'protezione dal freddo' }
    ]
  },
  {
    id: '01-06', month: 1, day: 6, dayOfYear: 6, jpDate: '一月六日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Anniversario Storico',
    titleIt: 'Parata Storica dei Pompieri di Edo', titleJp: '出初式 (Dezomeshiki)',
    observanceDesc: 'Ogni 6 gennaio i vigili del fuoco giapponesi rievocano le squadre di epoca Edo (hikeshi) esibendosi in acrobazie su scale di bambù, memoria delle antiche città costruite in legno.',
    kanji: '火', meaningIt: 'fuoco, fiamma', strokes: 4, radical: '火 (fuoco)',
    on: [{ kana: 'カ', romaji: 'ka' }],
    kun: [{ kana: 'ひ', romaji: 'hi' }, { kana: 'ほ', romaji: 'ho' }],
    originStory: 'Pittogramma puro di una fiamma guizzante con scintille che salgono dai lati. Le forme su ossa oracolari ricordano tre lingue di fuoco attorno a una brace.',
    examples: [
      { word: '防火', kana: 'ぼうか', romaji: 'bōka', meaning: 'prevenzione incendi' },
      { word: '花火', kana: 'はなび', romaji: 'hanabi', meaning: 'fuochi d’artificio' },
      { word: '火山', kana: 'かざん', romaji: 'kazan', meaning: 'vulcano' }
    ]
  },
  {
    id: '01-07', month: 1, day: 7, dayOfYear: 7, jpDate: '一月七日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Rito Shintō',
    titleIt: 'Festa delle Sette Erbe', titleJp: '七草の節句 (Nanakusa no Sekku)',
    observanceDesc: 'Prima delle cinque grandi feste stagionali (Gosekku): al mattino si mangia il nanakusa-gayu, zuppa di riso con sette erbe selvatiche d’inverno per augurare salute e dare tregua allo stomaco dopo le feste.',
    kanji: '草', meaningIt: 'erba, pianta erbacea', strokes: 9, radical: '艹 (erba)',
    on: [{ kana: 'ソウ', romaji: 'sō' }],
    kun: [{ kana: 'くさ', romaji: 'kusa' }],
    originStory: 'Composto dal radicale dei germogli (艹) sopra 早 (presto, mattino): indicava in origine le piante spontanee che spuntano rapide e coprono i campi alle prime luci.',
    examples: [
      { word: '七草', kana: 'ななくさ', romaji: 'nanakusa', meaning: 'le sette erbe primaverili' },
      { word: '草原', kana: 'そうげん', romaji: 'sōgen', meaning: 'prateria' },
      { word: '雑草', kana: 'ざっそう', romaji: 'zassō', meaning: 'erbaccia' }
    ]
  },
  {
    id: '01-08', month: 1, day: 8, dayOfYear: 8, jpDate: '一月八日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Rito Buddhista',
    titleIt: 'Primo Giorno di Yakushi Nyorai', titleJp: '初薬師 (Hatsu Yakushi)',
    observanceDesc: 'L’8 di ogni mese è sacro al Buddha della Guarigione, Yakushi Nyorai. A gennaio i fedeli visitano i templi per chiedere salute, vista limpida e protezione dalle malattie invernali.',
    kanji: '薬', meaningIt: 'medicina, rimedio', strokes: 16, radical: '艹 (erba)',
    on: [{ kana: 'ヤク', romaji: 'yaku' }],
    kun: [{ kana: 'くすり', romaji: 'kusuri' }],
    originStory: 'Unisce le erbe (艹) al carattere 楽 (musica, piacere, benessere): le erbe officinali che riportano armonia e sollievo nel corpo.',
    examples: [
      { word: '薬局', kana: 'やっきょく', romaji: 'yakkyoku', meaning: 'farmacia' },
      { word: '漢方薬', kana: 'かんぽうやく', romaji: 'kanpōyaku', meaning: 'medicina tradizionale erboristica' },
      { word: '目薬', kana: 'めぐすり', romaji: 'megusuri', meaning: 'collirio' }
    ]
  },
  {
    id: '01-09', month: 1, day: 9, dayOfYear: 9, jpDate: '一月九日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Rito Shintō',
    titleIt: 'Vigilia di Tōka Ebisu', titleJp: '宵えびす (Yoi Ebisu)',
    observanceDesc: 'Nel Kansai inizia il festival di Ebisu, divinità della pesca e dei commerci onesti. I mercanti acquistano rami di bambù fortunati (fukuzasa) adornati con talismani.',
    kanji: '福', meaningIt: 'fortuna, benedizione', strokes: 13, radical: '礻 (altare)',
    on: [{ kana: 'フク', romaji: 'fuku' }],
    kun: [],
    originStory: 'Accanto all’altare sacrificale (礻) si trova un’anfora colma di vino sacro (畐): offrire abbondanza agli dèi invocava prosperità e benevolenza sulla casa.',
    examples: [
      { word: '幸福', kana: 'こうふく', romaji: 'kōfuku', meaning: 'felicità, beatitudine' },
      { word: '福袋', kana: 'ふくぶくろ', romaji: 'fukubukuro', meaning: 'sacchetto portafortuna di Capodanno' },
      { word: '祝福', kana: 'しゅくふく', romaji: 'shukufuku', meaning: 'benedizione' }
    ]
  },
  {
    id: '01-10', month: 1, day: 10, dayOfYear: 10, jpDate: '一月十日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Rito Shintō',
    titleIt: 'Festa di Ebisu e Primo Konpira', titleJp: '十日えびす・初金比羅 (Tōka Ebisu)',
    observanceDesc: 'Giorno principale delle celebrazioni di Ebisu, patrono dei marinai e dei commercianti, al Santuario Imamiya di Osaka e al Nishinomiya-jinja con la celebre corsa dell’uomo fortunato.',
    kanji: '商', meaningIt: 'commercio, scambio', strokes: 11, radical: '口 (bocca)',
    on: [{ kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'あきな(う)', romaji: 'akina(u)' }],
    originStory: 'Deriva dal nome dell’antica dinastia Shang, i cui mercanti viaggiavano per tutto il continente scambiando merci con parole misurate e accordi verbali.',
    examples: [
      { word: '商店', kana: 'しょうてん', romaji: 'shōten', meaning: 'negozio, bottega' },
      { word: '商売', kana: 'しょうばい', romaji: 'shōbai', meaning: 'commercio, attività' },
      { word: '商社', kana: 'しょうしゃ', romaji: 'shōsha', meaning: 'casa commerciale' }
    ]
  },
  {
    id: '01-11', month: 1, day: 11, dayOfYear: 11, jpDate: '一月十一日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Rito Shintō',
    titleIt: 'Apertura dello Specchio di Riso', titleJp: '鏡開き (Kagami Biraki)',
    observanceDesc: 'I kagami-mochi, le doppie focacce di riso offerte agli dèi per Capodanno, vengono spezzati con un martelletto di legno (mai con un coltello, per evitare l’idea di recidere i legami) e gustati in zuppa dolce zenzai.',
    kanji: '鏡', meaningIt: 'specchio', strokes: 19, radical: '金 (metallo)',
    on: [{ kana: 'キョウ', romaji: 'kyō' }],
    kun: [{ kana: 'かがみ', romaji: 'kagami' }],
    originStory: 'Metallo (金) unito a 竟 (confine, lucentezza completa): un disco di bronzo lucidato fino a riflettere fedelmente il volto, oggetto sacro nei riti shintō.',
    examples: [
      { word: '鏡餅', kana: 'かがみもち', romaji: 'kagamimochi', meaning: 'mochi rituali di Capodanno' },
      { word: '眼鏡', kana: 'めがね', romaji: 'megane', meaning: 'occhiali' },
      { word: '望遠鏡', kana: 'ぼうえんきょう', romaji: 'bōenkyō', meaning: 'telescopio' }
    ]
  },
  {
    id: '01-12', month: 1, day: 12, dayOfYear: 12, jpDate: '一月十二日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Anniversario Storico',
    titleIt: 'Giornata dello Sci in Giappone', titleJp: 'スキーの日 (Sukī no Hi)',
    observanceDesc: 'Il 12 gennaio 1911 il maggiore austriaco Theodor Edler von Lerch tenne la prima lezione ufficiale di sci nella prefettura di Niigata, dando inizio alla cultura alpina moderna giapponese.',
    kanji: '雪', meaningIt: 'neve', strokes: 11, radical: '雨 (pioggia)',
    on: [{ kana: 'セツ', romaji: 'setsu' }],
    kun: [{ kana: 'ゆき', romaji: 'yuki' }],
    originStory: 'Sotto la nube di pioggia (雨) compare la forma di una mano che raccoglie o spazza (ヨ): precipitazione così leggera e asciutta da poter essere presa o spazzata con le dita.',
    examples: [
      { word: '新雪', kana: 'しんせつ', romaji: 'shinsetsu', meaning: 'neve fresca' },
      { word: '雪国', kana: 'ゆきぐに', romaji: 'yukiguni', meaning: 'paese delle nevi' },
      { word: '吹雪', kana: 'ふぶき', romaji: 'fubuki', meaning: 'bufera di neve' }
    ]
  },
  {
    id: '01-13', month: 1, day: 13, dayOfYear: 13, jpDate: '一月十三日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Festa Nazionale',
    titleIt: 'Festa della Maggiore Età (tradizionale)', titleJp: '成人の日 (Seijin no Hi)',
    observanceDesc: 'Fino al 1999 si celebrava il 15 gennaio, oggi cade il secondo lunedì del mese. I ventenni (o diciottenni dopo la riforma) indossano furisode e hakama per entrare ufficialmente nella vita adulta.',
    kanji: '成', meaningIt: 'diventare, compiere', strokes: 6, radical: '戈 (alabarda)',
    on: [{ kana: 'セイ', romaji: 'sei' }, { kana: 'ジョウ', romaji: 'jō' }],
    kun: [{ kana: 'な(る)', romaji: 'na(ru)' }, { kana: 'な(す)', romaji: 'na(su)' }],
    originStory: 'Un’alabarda rituale (戈) affilata e compiuta nella sua tempra (丁): rappresentava l’opera portata a compimento e la maturità raggiunta.',
    examples: [
      { word: '成人', kana: 'せいじん', romaji: 'seijin', meaning: 'persona adulta' },
      { word: '成長', kana: 'せいちょう', romaji: 'seichō', meaning: 'crescita, maturazione' },
      { word: '成功', kana: 'せいこう', romaji: 'seikō', meaning: 'successo' }
    ]
  },
  {
    id: '01-14', month: 1, day: 14, dayOfYear: 14, jpDate: '一月十四日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Rito Shintō',
    titleIt: 'Falo di Dondoyaki', titleJp: 'どんど焼き (Dondoyaki)',
    observanceDesc: 'Tra il 14 e il 15 gennaio le decorazioni di Capodanno (kadomatsu, shimenawa) vengono bruciate in alti falò purificatori nei cortili dei santuari affinché il fumo accompagni Toshigami al cielo.',
    kanji: '煙', meaningIt: 'fumo, vapore', strokes: 13, radical: '火 (fuoco)',
    on: [{ kana: 'エン', romaji: 'en' }],
    kun: [{ kana: 'けむ(る)', romaji: 'kemu(ru)' }, { kana: 'けむり', romaji: 'kemuri' }],
    originStory: 'Fuoco (火) unito a 垔, immagine della terra che copre una fossa di brace: la colonna di fumo che sale lenta dai fuochi protetti.',
    examples: [
      { word: '煙突', kana: 'えんとつ', romaji: 'entotsu', meaning: 'camino, ciminiera' },
      { word: '禁煙', kana: 'きんえん', romaji: 'kinen', meaning: 'divieto di fumare' },
      { word: '湯煙', kana: 'ゆけむり', romaji: 'yukemuri', meaning: 'vapore delle sorgenti termali' }
    ]
  },
  {
    id: '01-15', month: 1, day: 15, dayOfYear: 15, jpDate: '一月十五日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Rito Shintō',
    titleIt: 'Piccolo Capodanno e Zuppa di Azuki', titleJp: '小正月 (Koshōgatsu)',
    observanceDesc: 'Legato al ciclo lunare della prima luna piena dell’anno, un tempo era il Capodanno agricolo. Si prepara il porridge di riso con fagioli rossi azuki per scacciare gli spiriti maligni.',
    kanji: '豆', meaningIt: 'fagiolo, legume', strokes: 7, radical: '豆 (fagiolo)',
    on: [{ kana: 'トウ', romaji: 'tō' }, { kana: 'ズ', romaji: 'zu' }],
    kun: [{ kana: 'まめ', romaji: 'mame' }],
    originStory: 'Originariamente era il pittogramma di un calice cerimoniale con coperchio e piedistallo usato nei banchetti; per estensione passò a designare i legumi offerti al suo interno.',
    examples: [
      { word: '小豆', kana: 'あずき', romaji: 'azuki', meaning: 'fagioli rossi dolci' },
      { word: '豆腐', kana: 'とうふ', romaji: 'tōfu', meaning: 'tofu' },
      { word: '大豆', kana: 'だいず', romaji: 'daizu', meaning: 'soia' }
    ]
  },
  {
    id: '01-16', month: 1, day: 16, dayOfYear: 16, jpDate: '一月十六日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Rito Buddhista',
    titleIt: 'Giorno di Enma e Riposo dei Garzoni', titleJp: '薮入り・閻魔賽日 (Yabuiri · Enma Saijitsu)',
    observanceDesc: 'Nell’antico Giappone era uno dei due soli giorni di congedo concessi agli apprendisti (yabuiri), nonché il giorno in cui i templi aprono le porte davanti a Enma-ō, giudice dell’aldilà.',
    kanji: '休', meaningIt: 'riposare, pausa', strokes: 6, radical: '亻 (persona)',
    on: [{ kana: 'キュウ', romaji: 'kyū' }],
    kun: [{ kana: 'やす(む)', romaji: 'yasu(mu)' }],
    originStory: 'Una persona (亻) appoggiata al tronco di un albero (木): l’immagine immediata e universale del fermarsi all’ombra per riprendere fiato.',
    examples: [
      { word: '休日', kana: 'きゅうじつ', romaji: 'kyūjitsu', meaning: 'giorno festivo, di riposo' },
      { word: '昼休み', kana: 'ひるやすみ', romaji: 'hiruyasumi', meaning: 'pausa pranzo' },
      { word: '定休', kana: 'ていきゅう', romaji: 'teikyū', meaning: 'chiusura settimanale' }
    ]
  },
  {
    id: '01-17', month: 1, day: 17, dayOfYear: 17, jpDate: '一月十七日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Anniversario Storico',
    titleIt: 'Giornata della Prevenzione e Memoria di Kobe', titleJp: '防災とボランティアの日 (Bōsai to Borantia no Hi)',
    observanceDesc: 'Commemora il grande terremoto di Hanshin-Awaji del 1995 a Kōbe, evento che fece nascere in tutto il Giappone la cultura moderna del volontariato civico e della preparazione ai disastri.',
    kanji: '守', meaningIt: 'proteggere, custodire', strokes: 6, radical: '宀 (tetto)',
    on: [{ kana: 'シュ', romaji: 'shu' }, { kana: 'ス', romaji: 'su' }],
    kun: [{ kana: 'まも(る)', romaji: 'mamo(ru)' }, { kana: 'もり', romaji: 'mori' }],
    originStory: 'Sotto un tetto (宀) una mano regola e sorveglia (寸): chi custodisce la casa, le leggi o le persone affidate alle proprie cure.',
    examples: [
      { word: 'お守り', kana: 'おまもり', romaji: 'omamori', meaning: 'amuleto protettivo shintō o buddhista' },
      { word: '留守', kana: 'るす', romaji: 'rusu', meaning: 'assenza da casa' },
      { word: '保守', kana: 'ほしゅ', romaji: 'hoshu', meaning: 'conservazione, manutenzione' }
    ]
  },
  {
    id: '01-18', month: 1, day: 18, dayOfYear: 18, jpDate: '一月十八日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Rito Buddhista',
    titleIt: 'Prima Preghiera a Kannon', titleJp: '初観音 (Hatsu Kannon)',
    observanceDesc: 'Il 18 di ogni mese è dedicato a Kannon Bosatsu, bodhisattva della compassione. A gennaio i pellegrini affollano i templi Sensō-ji di Tokyo e Kiyomizu-dera di Kyoto.',
    kanji: '慈', meaningIt: 'compassione, affetto', strokes: 13, radical: '心 (cuore)',
    on: [{ kana: 'ジ', romaji: 'ji' }],
    kun: [{ kana: 'いつく(しむ)', romaji: 'itsuku(shimu)' }],
    originStory: 'Sopra il cuore (心) stanno fili intrecciati che crescono (茲): un sentimento che si propaga con tenerezza e pazienza verso ogni creatura.',
    examples: [
      { word: '慈悲', kana: 'じひ', romaji: 'jihi', meaning: 'misericordia, compassione buddhista' },
      { word: '慈愛', kana: 'じあい', romaji: 'jiai', meaning: 'affetto paterno o materno' },
      { word: '慈しむ', kana: 'いつくしむ', romaji: 'itsukushimu', meaning: 'amare teneramente, avere cura' }
    ]
  },
  {
    id: '01-19', month: 1, day: 19, dayOfYear: 19, jpDate: '一月十九日',
    season: 'Inverno', sekki: 'Shōkan', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Canto Popolare “Nodo Jiman”', titleJp: 'のど自慢の日 (Nodo Jiman no Hi)',
    observanceDesc: 'Nel 1946 la radio NHK trasmise la prima puntata di “Nodo Jiman” (“orgoglio della propria voce”), lo storico concorso canoro dilettantistico divenuto un appuntamento amato da intere generazioni.',
    kanji: '声', meaningIt: 'voce, suono', strokes: 7, radical: '士 (erudito)',
    on: [{ kana: 'セイ', romaji: 'sei' }, { kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'こえ', romaji: 'koe' }, { kana: 'こわ', romaji: 'kowa' }],
    originStory: 'La forma antica 聲 mostrava una mano che percuote campane di pietra sopra un orecchio (耳); il carattere moderno ne conserva la parte superiore, richiamando il suono della voce che risuona chiara.',
    examples: [
      { word: '歌声', kana: 'うたごえ', romaji: 'utagoe', meaning: 'voce che canta' },
      { word: '音声', kana: 'おんせい', romaji: 'onsei', meaning: 'suono vocale, audio' },
      { word: '大声', kana: 'おおごえ', romaji: 'ōgoe', meaning: 'voce alta' }
    ]
  },
  {
    id: '01-20', month: 1, day: 20, dayOfYear: 20, jpDate: '一月二十日',
    season: 'Inverno', sekki: 'Daikan', category: 'Natura e Stagioni',
    titleIt: 'Grande Freddo', titleJp: '大寒 (Daikan)',
    observanceDesc: 'Inizia Daikan, il 24° e ultimo periodo solare: il culmine del gelo invernale. È il momento prediletto per produrre sakè, miso e shōyu grazie all’acqua purissima e fredda.',
    kanji: '氷', meaningIt: 'ghiaccio', strokes: 5, radical: '水 (acqua)',
    on: [{ kana: 'ヒョウ', romaji: 'hyō' }],
    kun: [{ kana: 'こおり', romaji: 'kōri' }, { kana: 'ひ', romaji: 'hi' }],
    originStory: 'Al carattere dell’acqua (水) viene aggiunto un trattino a sinistra: rappresenta una fenditura o un cristallo che solidifica la superficie del fiume.',
    examples: [
      { word: '氷山', kana: 'ひょうざん', romaji: 'hyōzan', meaning: 'iceberg' },
      { word: 'かき氷', kana: 'かきごおり', romaji: 'kakigōri', meaning: 'granita giapponese' },
      { word: '薄氷', kana: 'はくひょう', romaji: 'hakuhyō', meaning: 'ghiaccio sottile' }
    ]
  },
  {
    id: '01-21', month: 1, day: 21, dayOfYear: 21, jpDate: '一月二十一日',
    season: 'Inverno', sekki: 'Daikan', category: 'Rito Buddhista',
    titleIt: 'Primo Daishi (Kōbō Daishi)', titleJp: '初大師 (Hatsu Daishi)',
    observanceDesc: 'Il 21 gennaio ricorda Kūkai (Kōbō Daishi), fondatore del buddhismo Shingon e maestro calligrafo. I templi come Kawasaki Daishi e Tō-ji ospitano grandi mercatini dell’antiquariato.',
    kanji: '筆', meaningIt: 'pennello da calligrafia', strokes: 12, radical: '竹 (bambù)',
    on: [{ kana: 'ヒツ', romaji: 'hitsu' }],
    kun: [{ kana: 'ふで', romaji: 'fude' }],
    originStory: 'Una mano che impugna uno stilo verticale (聿) fatto con una canna di bambù (竹): lo strumento cardine della scrittura e della pittura d’Oriente.',
    examples: [
      { word: '毛筆', kana: 'もうひつ', romaji: 'mōhitsu', meaning: 'pennello di setole' },
      { word: '鉛筆', kana: 'えんぴつ', romaji: 'enpitsu', meaning: 'matita' },
      { word: '筆記', kana: 'ひっき', romaji: 'hikki', meaning: 'annotazione scritta' }
    ]
  },
  {
    id: '01-22', month: 1, day: 22, dayOfYear: 22, jpDate: '一月二十二日',
    season: 'Inverno', sekki: 'Daikan', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Riso al Curry', titleJp: 'カレーライスの日 (Karē Raisu no Hi)',
    observanceDesc: 'Il 22 gennaio 1982 l’associazione dei nutrizionisti scolastici servì curry con riso simultaneamente nelle mense di tutto il Giappone, sancendone il ruolo di piatto nazionale.',
    kanji: '辛', meaningIt: 'piccante, arduo', strokes: 7, radical: '辛 (piccante)',
    on: [{ kana: 'シン', romaji: 'shin' }],
    kun: [{ kana: 'から(い)', romaji: 'kara(i)' }, { kana: 'つら(い)', romaji: 'tsura(i)' }],
    originStory: 'Raffigurava in origine uno scalpello affilato usato per incidere segni: dalla sensazione pungente derivarono i significati di "piccante" al palato e "duro" nell’animo.',
    examples: [
      { word: '辛口', kana: 'からくち', romaji: 'karakuchi', meaning: 'piccante o sakè secco' },
      { word: '香辛料', kana: 'こうしんりょう', romaji: 'kōshinryō', meaning: 'spezie' },
      { word: '辛抱', kana: 'しんぼう', romaji: 'shinbō', meaning: 'pazienza, perseveranza' }
    ]
  },
  {
    id: '01-23', month: 1, day: 23, dayOfYear: 23, jpDate: '一月二十三日',
    season: 'Inverno', sekki: 'Daikan', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Scrittura a Mano e delle Lettere', titleJp: '電子メールの日・ふみの日 (Fumi no Hi)',
    observanceDesc: 'Il 23 di ogni mese si legge fu-mi ("lettera"), celebrando l’arte di scrivere messaggi curati su carta washi. A gennaio si unisce all’invio degli ultimi ringraziamenti per le cartoline nengajō.',
    kanji: '文', meaningIt: 'testo, scrittura, cultura', strokes: 4, radical: '文 (scrittura)',
    on: [{ kana: 'ブン', romaji: 'bun' }, { kana: 'モン', romaji: 'mon' }],
    kun: [{ kana: 'ふみ', romaji: 'fumi' }],
    originStory: 'Disegno di un tatuaggio o disegno geometrico inciso sul petto di una figura umana: dall’ornamento rituale nacque il concetto di segno, parola scritta e civiltà.',
    examples: [
      { word: '文字', kana: 'もじ', romaji: 'moji', meaning: 'carattere, lettera' },
      { word: '文化', kana: 'ぶんか', romaji: 'bunka', meaning: 'cultura' },
      { word: '作文', kana: 'さくぶん', romaji: 'sakubun', meaning: 'componimento scritto' }
    ]
  },
  {
    id: '01-24', month: 1, day: 24, dayOfYear: 24, jpDate: '一月二十四日',
    season: 'Inverno', sekki: 'Daikan', category: 'Rito Buddhista',
    titleIt: 'Primo Jizō dell’Anno', titleJp: '初地蔵 (Hatsu Jizō)',
    observanceDesc: 'Il 24 è il giorno sacro a Jizō Bosatsu, protettore dei viaggiatori e dei bambini. Le sue statue lungo le strade ricevono bavaglini e berretti rossi cuciti a mano.',
    kanji: '道', meaningIt: 'via, cammino, disciplina', strokes: 12, radical: '辶 (cammino)',
    on: [{ kana: 'ドウ', romaji: 'dō' }, { kana: 'トウ', romaji: 'tō' }],
    kun: [{ kana: 'みち', romaji: 'michi' }],
    originStory: 'Una testa (首) che avanza lungo un sentiero (辶): indicava la strada da seguire fisicamente e, nelle arti tradizionali giapponesi, la via spirituale di perfezionamento.',
    examples: [
      { word: '書道', kana: 'しょどう', romaji: 'shodō', meaning: 'arte della calligrafia' },
      { word: '茶道', kana: 'さどう', romaji: 'sadō', meaning: 'via del tè' },
      { word: '街道', kana: 'かいどう', romaji: 'kaidō', meaning: 'antica strada maestra' }
    ]
  },
  {
    id: '01-25', month: 1, day: 25, dayOfYear: 25, jpDate: '一月二十五日',
    season: 'Inverno', sekki: 'Daikan', category: 'Rito Shintō',
    titleIt: 'Primo Tenjin e Rito Usokae', titleJp: '初天神・鷽替え (Hatsu Tenjin · Usokae)',
    observanceDesc: 'Nel primo giorno di Sugawara no Michizane, kami della sapienza e degli studenti, i santuari Tenmangū celebrano l’Usokae: si scambiano ciuffolotti intagliati in legno per trasformare in bene le sventure.',
    kanji: '学', meaningIt: 'studio, sapere', strokes: 8, radical: '子 (bambino)',
    on: [{ kana: 'ガク', romaji: 'gaku' }],
    kun: [{ kana: 'まな(ぶ)', romaji: 'mana(bu)' }],
    originStory: 'Raffigurava due mani che trasmettono segni di calcolo sopra il tetto di una scuola (冖) sotto cui siede un allievo (子): l’immagine viva di chi apprende sotto la guida di un maestro.',
    examples: [
      { word: '文学', kana: 'ぶんがく', romaji: 'bungaku', meaning: 'letteratura' },
      { word: '学生', kana: 'がくせい', romaji: 'gakusei', meaning: 'studente' },
      { word: '漢字学', kana: 'かんじがく', romaji: 'kanjigaku', meaning: 'studio dei kanji' }
    ]
  },
  {
    id: '01-26', month: 1, day: 26, dayOfYear: 26, jpDate: '一月二十六日',
    season: 'Inverno', sekki: 'Daikan', category: 'Anniversario Storico',
    titleIt: 'Giornata dei Beni Culturali Antincendio', titleJp: '文化財防火デー (Bunkazai Bōka Dē)',
    observanceDesc: 'Istituita dopo l’incendio del 1949 che danneggiò gli affreschi della Sala d’Oro dell’Hōryū-ji di Nara, vede esercitazioni con getti d’acqua nei templi storici di tutto il Giappone.',
    kanji: '宝', meaningIt: 'tesoro, bene prezioso', strokes: 8, radical: '宀 (tetto)',
    on: [{ kana: 'ホウ', romaji: 'hō' }],
    kun: [{ kana: 'たから', romaji: 'takara' }],
    originStory: 'Sotto un tetto protettivo (宀) è custodita una pietra di giada (玉): ciò che è raro e merita cura devota dentro lo scrigno domestico o sacro.',
    examples: [
      { word: '国宝', kana: 'こくほう', romaji: 'kokuhō', meaning: 'Tesoro Nazionale' },
      { word: '宝物', kana: 'ほうもつ', romaji: 'hōmotsu', meaning: 'oggetto prezioso, reliquia' },
      { word: '宝くじ', kana: 'たからくじ', romaji: 'takarakuji', meaning: 'lotteria' }
    ]
  },
  {
    id: '01-27', month: 1, day: 27, dayOfYear: 27, jpDate: '一月二十七日',
    season: 'Inverno', sekki: 'Daikan', category: 'Anniversario Storico',
    titleIt: 'Adozione della Bandiera Hinomaru sulle Navi', titleJp: '国旗制定記念日 (Kokki Seitei Kinenbi)',
    observanceDesc: 'Il 27 gennaio 1870 (calendario lunare, commemorato in questa data) il governo Meiji stabilì il disco solare rosso su fondo bianco come insegna ufficiale della marina mercantile giapponese.',
    kanji: '旗', meaningIt: 'bandiera, stendardo', strokes: 14, radical: '方 (direzione)',
    on: [{ kana: 'キ', romaji: 'ki' }],
    kun: [{ kana: 'はた', romaji: 'hata' }],
    originStory: 'Un drappo che sventola al vento da un’asta (方 + 人) unito a 其 (tessuto quadrato): il vessillo che orientava viaggiatori e schiere.',
    examples: [
      { word: '国旗', kana: 'こっき', romaji: 'kokki', meaning: 'bandiera nazionale' },
      { word: '手旗', kana: 'てばた', romaji: 'tebata', meaning: 'bandierina da segnalazione' },
      { word: '旗揚げ', kana: 'はたあげ', romaji: 'hataage', meaning: 'fondazione di un’impresa' }
    ]
  },
  {
    id: '01-28', month: 1, day: 28, dayOfYear: 28, jpDate: '一月二十八日',
    season: 'Inverno', sekki: 'Daikan', category: 'Rito Buddhista',
    titleIt: 'Primo Fudō Myōō', titleJp: '初不動 (Hatsu Fudō)',
    observanceDesc: 'Primo giorno dell’anno dedicato a Fudō Myōō, divinità tutelare dal volto fiero che recide le illusioni con la spada. I fedeli assistono ai riti del fuoco sacro goma.',
    kanji: '剣', meaningIt: 'spada dritta a due tagli', strokes: 10, radical: '刂 (lama)',
    on: [{ kana: 'ケン', romaji: 'ken' }],
    kun: [{ kana: 'つるぎ', romaji: 'tsurugi' }],
    originStory: 'Accanto al coltello (刂) sta 僉, immagine di più persone raccolte attorno a una lama rituale: l’arma cerimoniale simbolo di risolutezza morale.',
    examples: [
      { word: '剣道', kana: 'けんどう', romaji: 'kendō', meaning: 'arte marziale della spada' },
      { word: '真剣', kana: 'しんけん', romaji: 'shinken', meaning: 'serio, spada vera' },
      { word: '木剣', kana: 'ぼっけん', romaji: 'bokken', meaning: 'spada di legno' }
    ]
  },
  {
    id: '01-29', month: 1, day: 29, dayOfYear: 29, jpDate: '一月二十九日',
    season: 'Inverno', sekki: 'Daikan', category: 'Anniversario Storico',
    titleIt: 'Spedizione Antartica e Base Shōwa', titleJp: '昭和基地開設記念日 (Shōwa Kichi Kaisetsu Kinenbi)',
    observanceDesc: 'Il 29 gennaio 1957 la spedizione scientifica giapponese sulla nave Sōya inaugurò la base Shōwa in Antartide, lasciando nell’immaginario collettivo la fedeltà dei cani da slitta Tarō e Jirō.',
    kanji: '南', meaningIt: 'sud, meridione', strokes: 9, radical: '十 (dieci)',
    on: [{ kana: 'ナン', romaji: 'nan' }, { kana: 'ナ', romaji: 'na' }],
    kun: [{ kana: 'みなみ', romaji: 'minami' }],
    originStory: 'In origine raffigurava uno strumento musicale a campana sospeso a un telaio o una capanna aperta verso il sole caldo: passò presto a indicare il punto cardinale meridionale.',
    examples: [
      { word: '南極', kana: 'なんきょく', romaji: 'nankyoku', meaning: 'Polo Sud, Antartide' },
      { word: '東南', kana: 'とうなん', romaji: 'tōnan', meaning: 'sud-est' },
      { word: '南風', kana: 'みなみかぜ', romaji: 'minamikaze', meaning: 'vento del sud' }
    ]
  },
  {
    id: '01-30', month: 1, day: 30, dayOfYear: 30, jpDate: '一月三十日',
    season: 'Inverno', sekki: 'Daikan', category: 'Anniversario Storico',
    titleIt: 'Commemorazione dell’Imperatore Kōmei', titleJp: '孝明天皇祭 (Kōmei Tennō-sai)',
    observanceDesc: 'Ricorrenza commemorativa dell’imperatore Kōmei (1867), padre dell’imperatore Meiji, alla vigilia della grande trasformazione moderna dell’arcipelago.',
    kanji: '変', meaningIt: 'cambiamento, mutare', strokes: 9, radical: '夂 (passo lento)',
    on: [{ kana: 'ヘン', romaji: 'hen' }],
    kun: [{ kana: 'か(わる)', romaji: 'ka(waru)' }, { kana: 'か(える)', romaji: 'ka(eru)' }],
    originStory: 'Sotto fili e parole intrecciate nella parte alta sta un passo che cambia direzione (夂): il movimento che trasforma ciò che era fisso.',
    examples: [
      { word: '変化', kana: 'へんか', romaji: 'henka', meaning: 'cambiamento, trasformazione' },
      { word: '四季の変化', kana: 'しきのへんか', romaji: 'shiki no henka', meaning: 'il mutare delle stagioni' },
      { word: '大変', kana: 'たいへん', romaji: 'taihen', meaning: 'molto, arduo, grave' }
    ]
  },
  {
    id: '01-31', month: 1, day: 31, dayOfYear: 31, jpDate: '一月三十一日',
    season: 'Inverno', sekki: 'Daikan', category: 'Giornata Curiosa',
    titleIt: 'Giornata dei Fiori alle Persone Care', titleJp: '愛妻の日 (Aisai no Hi)',
    observanceDesc: 'Per gioco numerico (1 = I / ai, 31 = sai), il 31 gennaio in Giappone invita a tornare a casa presto portando un fiore al proprio partner come gesto di gratitudine silenziosa.',
    kanji: '愛', meaningIt: 'amore, affetto profondo', strokes: 13, radical: '心 (cuore)',
    on: [{ kana: 'アイ', romaji: 'ai' }],
    kun: [{ kana: 'いと(しい)', romaji: 'ito(shii)' }],
    originStory: 'Al centro sta il cuore (心), sormontato da una figura che apre le braccia e accompagnato in basso dal passo che indugia (夂): fermarsi guardandosi indietro per premura.',
    examples: [
      { word: '愛妻', kana: 'あいさい', romaji: 'aisai', meaning: 'moglie amata' },
      { word: '愛情', kana: 'あいじょう', romaji: 'aijō', meaning: 'affetto, amorevolezza' },
      { word: '愛用', kana: 'あいよう', romaji: 'aiyō', meaning: 'uso prediletto, affezionato' }
    ]
  },

  // FEBBRAIO (29 giorni, incluso il 29 febbraio)
  {
    id: '02-01', month: 2, day: 1, dayOfYear: 32, jpDate: '二月一日',
    season: 'Inverno', sekki: 'Daikan', category: 'Natura e Stagioni',
    titleIt: 'Cambio del Mese e Preparazione a Risshun', titleJp: '如月・テレビ放送記念日 (Kisaragi)',
    observanceDesc: 'Febbraio nell’antico calendario si chiama Kisaragi ("mese in cui si aggiungono vestiti" per il freddo pungente), mentre gli alberi di prugno iniziano a schiudere le prime gemme.',
    kanji: '梅', meaningIt: 'prugno giapponese (ume)', strokes: 10, radical: '木 (albero)',
    on: [{ kana: 'バイ', romaji: 'bai' }],
    kun: [{ kana: 'うめ', romaji: 'ume' }],
    originStory: 'Albero (木) unito a 毎 (madre/ogni): il primo albero a fiorire ogni anno tra la neve, annuncio instancabile della primavera che ritorna.',
    examples: [
      { word: '梅干', kana: 'うめぼし', romaji: 'umeboshi', meaning: 'prugna secca salata' },
      { word: '梅雨', kana: 'つゆ・ばいう', romaji: 'tsuyu / baiu', meaning: 'stagione delle piogge' },
      { word: '梅見', kana: 'うめみ', romaji: 'umemi', meaning: 'contemplazione dei prugni in fiore' }
    ]
  },
  {
    id: '02-02', month: 2, day: 2, dayOfYear: 33, jpDate: '二月二日',
    season: 'Inverno', sekki: 'Daikan', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’Incontro e della Coppia', titleJp: '夫婦の日 (Fūfu no Hi)',
    observanceDesc: 'Il 2 febbraio (2-2 = fū-fu) ricorre una delle giornate dedicate all’armonia coniugale e alle feste delle città gemellate, prima dell’arrivo dell’anno nuovo lunare.',
    kanji: '和', meaningIt: 'armonia, pace, Giappone', strokes: 8, radical: '口 (bocca)',
    on: [{ kana: 'ワ', romaji: 'wa' }, { kana: 'オ', romaji: 'o' }],
    kun: [{ kana: 'やわ(らぐ)', romaji: 'yawa(ragu)' }, { kana: 'なご(む)', romaji: 'nago(mu)' }],
    originStory: 'La spiga di riso (禾) accanto alla bocca (口): avere cibo sufficiente per tutti genera quiete sociale e armonia, valore fondante della cultura Yamato.',
    examples: [
      { word: '平和', kana: 'へいわ', romaji: 'heiwa', meaning: 'pace' },
      { word: '和食', kana: 'わしょく', romaji: 'washoku', meaning: 'cucina tradizionale giapponese' },
      { word: '和紙', kana: 'わし', romaji: 'washi', meaning: 'carta tradizionale giapponese' }
    ]
  },
  {
    id: '02-03', month: 2, day: 3, dayOfYear: 34, jpDate: '二月三日',
    season: 'Inverno', sekki: 'Daikan', category: 'Rito Shintō',
    titleIt: 'Setsubun — Lancio dei Fagioli', titleJp: '節分 (Setsubun)',
    observanceDesc: 'Vigilia dell’inizio della primavera tradizionale: si lanciano fagioli di soia tostati gridando "Oni wa soto, fuku wa uchi!" (fuori i demoni, dentro la fortuna) e si mangia l’ehōmaki rivolti verso la direzione propizia.',
    kanji: '鬼', meaningIt: 'demone, spirito oni', strokes: 10, radical: '鬼 (demone)',
    on: [{ kana: 'キ', romaji: 'ki' }],
    kun: [{ kana: 'おに', romaji: 'oni' }],
    originStory: 'Pittogramma di una figura umana mascherata con grande testa rituale (田) e coda o spirale (ム), usata negli antichi esorcismi di passaggio stagionale.',
    examples: [
      { word: '鬼ごっこ', kana: 'おにごっこ', romaji: 'onigokko', meaning: 'gioco di acchiapparello' },
      { word: '赤鬼', kana: 'あかおに', romaji: 'akaoni', meaning: 'oni rosso del folclore' },
      { word: '鬼才', kana: 'きさい', romaji: 'kisai', meaning: 'genio fuori dal comune' }
    ]
  },
  {
    id: '02-04', month: 2, day: 4, dayOfYear: 35, jpDate: '二月四日',
    season: 'Primavera', sekki: 'Risshun', category: 'Natura e Stagioni',
    titleIt: 'Risshun — Inizio della Primavera', titleJp: '立春 (Risshun)',
    observanceDesc: 'Primo dei 24 termini solari del calendario tradizionale: pur nel freddo di febbraio, per la poesia haiku e i riti shintō oggi nasce la primavera e si appende il talismano Risshun Daikichi.',
    kanji: '春', meaningIt: 'primavera', strokes: 9, radical: '日 (sole)',
    on: [{ kana: 'シュン', romaji: 'shun' }],
    kun: [{ kana: 'はる', romaji: 'haru' }],
    originStory: 'Sotto tre fili d’erba che germogliano e si distendono (屯/艹) splende il sole (日): la forza della luce che risveglia le radici dormienti.',
    examples: [
      { word: '立春', kana: 'りっしゅん', romaji: 'risshun', meaning: 'primo giorno di primavera tradizionale' },
      { word: '春風', kana: 'はるかぜ', romaji: 'harukaze', meaning: 'brezza di primavera' },
      { word: '青春', kana: 'せいしゅん', romaji: 'seishun', meaning: 'giovinezza' }
    ]
  },
  {
    id: '02-05', month: 2, day: 5, dayOfYear: 36, jpDate: '二月五日',
    season: 'Primavera', sekki: 'Risshun', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Sorriso e dei Due Gemelli', titleJp: '笑顔の日・ふたごの日 (Egao no Hi)',
    observanceDesc: 'Il 5 febbraio sfrutta il gioco fonetico tra 2 (ni) e 5 (go/ko) per formare “niko-niko” (“sorridente”), invitando alla gentilezza del volto aperto. A Sapporo in questi giorni si accende anche il celebre Festival della Neve.',
    kanji: '笑', meaningIt: 'sorridere, ridere', strokes: 10, radical: '竹 (bambù)',
    on: [{ kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'わら(う)', romaji: 'wara(u)' }, { kana: 'え(む)', romaji: 'e(mu)' }],
    originStory: 'Le fronde di bambù (竹) piegate dal vento che ricordano gli occhi socchiusi e incurvati di chi sorride con gioia spontanea.',
    examples: [
      { word: '笑顔', kana: 'えがお', romaji: 'egao', meaning: 'volto sorridente' },
      { word: '微笑む', kana: 'ほほえむ', romaji: 'hohoemu', meaning: 'sorridere dolcemente' },
      { word: '談笑', kana: 'だんしょう', romaji: 'danshō', meaning: 'chiacchierata allegra' }
    ]
  },
  {
    id: '02-06', month: 2, day: 6, dayOfYear: 37, jpDate: '二月六日',
    season: 'Primavera', sekki: 'Risshun', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’Alga Nori e del Matcha', titleJp: '海苔の日・抹茶の日 (Nori no Hi · Matcha no Hi)',
    observanceDesc: 'Nel codice Taihō (701 d.C.) l’alga nori fu riconosciuta tra i tributi ufficiali; inoltre a Nishio si celebra il matcha ricordando i fūro (bracieri da tè: 2-6 = fu-ro).',
    kanji: '茶', meaningIt: 'tè, pianta del tè', strokes: 9, radical: '艹 (erba)',
    on: [{ kana: 'チャ', romaji: 'cha' }, { kana: 'サ', romaji: 'sa' }],
    kun: [],
    originStory: 'Foglie d’erba (艹) raccolte da mani sotto un riparo e lavorate sul legno (木/ホ): un’antica variante di 余 indicava le erbe amare e aromatiche dell’infusione.',
    examples: [
      { word: '抹茶', kana: 'まっちゃ', romaji: 'matcha', meaning: 'tè verde in polvere' },
      { word: '茶室', kana: 'ちゃしつ', romaji: 'chashitsu', meaning: 'stanza per la cerimonia del tè' },
      { word: '茶色', kana: 'ちゃいろ', romaji: 'chairo', meaning: 'colore marrone' }
    ]
  },
  {
    id: '02-07', month: 2, day: 7, dayOfYear: 38, jpDate: '二月七日',
    season: 'Primavera', sekki: 'Risshun', category: 'Anniversario Storico',
    titleIt: 'Giornata dei Territori del Nord e del Pesce Funa', titleJp: '北方領土の日・フナの日',
    observanceDesc: 'Ricorrenza istituita nel 1981 in memoria del Trattato di Shimoda del 1855 sulle isole Curili meridionali, accanto alla giornata dedicata ai pesci d’acqua dolce funa.',
    kanji: '島', meaningIt: 'isola', strokes: 10, radical: '山 (montagna)',
    on: [{ kana: 'トウ', romaji: 'tō' }],
    kun: [{ kana: 'しま', romaji: 'shima' }],
    originStory: 'Un uccello marino (鳥) che si posa su una cima montuosa (山) che affiora dal mare aperto: l’immagine stessa dell’isola come rifugio tra le onde.',
    examples: [
      { word: '列島', kana: 'れっとう', romaji: 'rettō', meaning: 'arcipelago' },
      { word: '半島', kana: 'はんとう', romaji: 'hantō', meaning: 'penisola' },
      { word: '無人島', kana: 'むじんとう', romaji: 'mujintō', meaning: 'isola disabitata' }
    ]
  },
  {
    id: '02-08', month: 2, day: 8, dayOfYear: 39, jpDate: '二月八日',
    season: 'Primavera', sekki: 'Risshun', category: 'Rito Buddhista',
    titleIt: 'Hari Kuyō — Funerale degli Aghi Spezzati', titleJp: '針供養 (Hari Kuyō)',
    observanceDesc: 'Sarti e ricamatrici portano nei templi e santuari gli aghi piegati o spezzati durante l’anno e li conficcano in un morbido blocco di tofu o konnyaku per ringraziarli del servizio reso.',
    kanji: '針', meaningIt: 'ago, spillo, lancetta', strokes: 10, radical: '金 (metallo)',
    on: [{ kana: 'シン', romaji: 'shin' }],
    kun: [{ kana: 'はり', romaji: 'hari' }],
    originStory: 'Metallo (金) affilato fino a diventare sottile come un filo o un segno verticale (十): strumento essenziale di precisione nella sartoria e nell’agopuntura.',
    examples: [
      { word: '針仕事', kana: 'はりしごと', romaji: 'harishigoto', meaning: 'lavoro di cucito' },
      { word: '指針', kana: 'ししん', romaji: 'shishin', meaning: 'linea guida, ago della bussola' },
      { word: '秒針', kana: 'びょうしん', romaji: 'byōshin', meaning: 'lancetta dei secondi' }
    ]
  },
  {
    id: '02-09', month: 2, day: 9, dayOfYear: 40, jpDate: '二月九日',
    season: 'Primavera', sekki: 'Risshun', category: 'Giornata Curiosa',
    titleIt: 'Giornata dei Fumetti e del Pesce Palla Fugu', titleJp: '漫画の日・ふぐの日 (Manga no Hi · Fugu no Hi)',
    observanceDesc: 'Il 9 febbraio ricorda Osamu Tezuka (scomparso nel 1989) ed è anche il giorno di 2-9 (fu-ku / fugu) a Shimonoseki, capitale del pregiato pesce palla.',
    kanji: '描', meaningIt: 'disegnare, dipingere, descrivere', strokes: 11, radical: '扌 (mano)',
    on: [{ kana: 'ビョウ', romaji: 'byō' }],
    kun: [{ kana: 'えが(く)', romaji: 'ega(ku)' }, { kana: 'か(く)', romaji: 'ka(ku)' }],
    originStory: 'La mano (扌) che traccia con cura i contorni sottili di una piantina nel campo (苗): riprodurre con delicatezza le forme vive del mondo.',
    examples: [
      { word: '描写', kana: 'びょうしゃ', romaji: 'byōsha', meaning: 'descrizione, ritratto' },
      { word: '素描', kana: 'そびょう', romaji: 'sobyō', meaning: 'schizzo a matita' },
      { word: '夢を描く', kana: 'ゆめをえがく', romaji: 'yume o egaku', meaning: 'coltivare un sogno' }
    ]
  },
  {
    id: '02-10', month: 2, day: 10, dayOfYear: 41, jpDate: '二月十日',
    season: 'Primavera', sekki: 'Risshun', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Cotone e del Futon', titleJp: 'ふとんの日・ニットの日 (Futon no Hi)',
    observanceDesc: 'Per suono (2-10 = fu-ton), è il giorno dedicato al tradizionale materasso di cotone steso sul tatami, che si arieggia al sole d’inverno per mantenerlo soffice.',
    kanji: '綿', meaningIt: 'cotone, morbidezza continua', strokes: 14, radical: '糸 (filo)',
    on: [{ kana: 'メン', romaji: 'men' }],
    kun: [{ kana: 'わた', romaji: 'wata' }],
    originStory: 'Filo (糸) unito al panno bianco (帛): le fibre candide che si cardano e si filano in lunghe trame morbide e continue.',
    examples: [
      { word: '木綿', kana: 'もめん', romaji: 'momen', meaning: 'tessuto di cotone' },
      { word: '綿密', kana: 'めんみつ', romaji: 'menmitsu', meaning: 'minuzioso, dettagliato' },
      { word: '真綿', kana: 'まわた', romaji: 'mawata', meaning: 'ovatta di seta' }
    ]
  },
  {
    id: '02-11', month: 2, day: 11, dayOfYear: 42, jpDate: '二月十一日',
    season: 'Primavera', sekki: 'Risshun', category: 'Festa Nazionale',
    titleIt: 'Giornata della Fondazione Nazionale', titleJp: '建国記念の日 (Kenkoku Kinen no Hi)',
    observanceDesc: 'Festa nazionale che rievoca la leggendaria ascesa al trono del primo imperatore Jinmu nel 660 a.C. (secondo la cronologia del Nihon Shoki), celebrata al Santuario di Kashihara a Nara.',
    kanji: '国', meaningIt: 'paese, nazione', strokes: 8, radical: '囗 (recinto)',
    on: [{ kana: 'コク', romaji: 'koku' }],
    kun: [{ kana: 'くに', romaji: 'kuni' }],
    originStory: 'Dentro i confini di un territorio murato (囗) brilla una gemma di giada (玉), simbolo dell’autorità e della comunità custodita.',
    examples: [
      { word: '建国', kana: 'けんこく', romaji: 'kenkoku', meaning: 'fondazione di una nazione' },
      { word: '外国', kana: 'がいこく', romaji: 'gaikoku', meaning: 'paese straniero' },
      { word: '雪国', kana: 'ゆきぐに', romaji: 'yukiguni', meaning: 'terra di neve' }
    ]
  },
  {
    id: '02-12', month: 2, day: 12, dayOfYear: 43, jpDate: '二月十二日',
    season: 'Primavera', sekki: 'Risshun', category: 'Anniversario Storico',
    titleIt: 'Nascita della Stampa Moderna a Caratteri Mobili', titleJp: '活版印刷記念日 (Kappan Insatsu Kinenbi)',
    observanceDesc: 'Nel 1872 a Yokohama e Tokyo si diffusero i primi caratteri mobili moderni in piombo per la stampa quotidiana giapponese, rivoluzionando giornali e riviste.',
    kanji: '印', meaningIt: 'sigillo, stampa, impronta', strokes: 6, radical: '卩 (sigillo)',
    on: [{ kana: 'イン', romaji: 'in' }],
    kun: [{ kana: 'しるし', romaji: 'shirushi' }],
    originStory: 'Una mano (爪/ヨ) che preme un sigillo ufficiale (卩) su argilla o carta: lasciare un’impronta autentica e riconoscibile, come l’hanko personale.',
    examples: [
      { word: '印鑑', kana: 'いんかん', romaji: 'inkan', meaning: 'sigillo personale (hanko)' },
      { word: '印刷', kana: 'いんさつ', romaji: 'insatsu', meaning: 'stampa tipografica' },
      { word: '印象', kana: 'いんしょう', romaji: 'inshō', meaning: 'impressione' }
    ]
  },
  {
    id: '02-13', month: 2, day: 13, dayOfYear: 44, jpDate: '二月十三日',
    season: 'Primavera', sekki: 'Risshun', category: 'Anniversario Storico',
    titleIt: 'Obbligo del Cognome per Tutti i Cittadini', titleJp: '苗字制定記念日 (Myōji Seitei Kinenbi)',
    observanceDesc: 'Il 13 febbraio 1875 il governo Meiji rese obbligatorio per tutti i cittadini giapponesi adottare un cognome di famiglia (myōji), ponendo fine al privilegio riservato prima a samurai e nobili.',
    kanji: '姓', meaningIt: 'cognome, stirpe', strokes: 8, radical: '女 (donna)',
    on: [{ kana: 'セイ', romaji: 'sei' }, { kana: 'ショウ', romaji: 'shō' }],
    kun: [],
    originStory: 'Donna (女) e nascita (生): nella più antica società matrilineare il nome del clan veniva tramandato per linea materna.',
    examples: [
      { word: '姓名', kana: 'せいめい', romaji: 'seimei', meaning: 'nome e cognome' },
      { word: '旧姓', kana: 'きゅうせい', romaji: 'kyūsei', meaning: 'cognome da nubile' },
      { word: '同姓', kana: 'どうせい', romaji: 'dōsei', meaning: 'stesso cognome' }
    ]
  },
  {
    id: '02-14', month: 2, day: 14, dayOfYear: 45, jpDate: '二月十四日',
    season: 'Primavera', sekki: 'Risshun', category: 'Giornata Curiosa',
    titleIt: 'San Valentino alla Giapponese', titleJp: 'バレンタインデー (Barentain Dē)',
    observanceDesc: 'Introdotto in Giappone negli anni ’50 dalle cioccolaterie, segue una ritualità peculiare: sono le donne a donare cioccolato — honmei per amore, giri per cortesia lavorativa, tomo tra amiche.',
    kanji: '恋', meaningIt: 'innamoramento, nostalgia amorosa', strokes: 10, radical: '心 (cuore)',
    on: [{ kana: 'レン', romaji: 'ren' }],
    kun: [{ kana: 'こ(う)', romaji: 'ko(u)' }, { kana: 'こい', romaji: 'koi' }],
    originStory: 'Nella forma classica 戀, il cuore (心) era sormontato da parole (言) intrecciate fra due matasse di seta: un legame intimo di parole e sentimenti che avvolgono l’animo.',
    examples: [
      { word: '恋愛', kana: 'れんあい', romaji: 'ren’ai', meaning: 'amore romantico' },
      { word: '初恋', kana: 'はつこい', romaji: 'hatsukoi', meaning: 'primo amore' },
      { word: '恋人', kana: 'こいびと', romaji: 'koibito', meaning: 'persona amata' }
    ]
  },
  {
    id: '02-15', month: 2, day: 15, dayOfYear: 46, jpDate: '二月十五日',
    season: 'Primavera', sekki: 'Risshun', category: 'Rito Buddhista',
    titleIt: 'Nehan-e — Commemorazione del Parinirvāṇa', titleJp: '涅槃会 (Nehan-e)',
    observanceDesc: 'Giorno sacro in cui i templi buddhisti espongono i grandi rotoli dipinti (nehan-zu) raffiguranti l’ingresso del Buddha storico nel Nirvāṇa circondato da discepoli e animali.',
    kanji: '悟', meaningIt: 'risveglio spirituale, satori', strokes: 10, radical: '心 (cuore)',
    on: [{ kana: 'ゴ', romaji: 'go' }],
    kun: [{ kana: 'さと(る)', romaji: 'sato(ru)' }],
    originStory: 'Il cuore (忄) unito a 吾 (l’io profondo): comprendere con chiarezza limpida la natura della propria mente e della realtà.',
    examples: [
      { word: '悟り', kana: 'さとり', romaji: 'satori', meaning: 'illuminazione, comprensione' },
      { word: '覚悟', kana: 'かくご', romaji: 'kakugo', meaning: 'risoluzione, preparazione interiore' },
      { word: '迷悟', kana: 'めいご', romaji: 'meigo', meaning: 'illusione e risveglio' }
    ]
  },
  {
    id: '02-16', month: 2, day: 16, dayOfYear: 47, jpDate: '二月十六日',
    season: 'Primavera', sekki: 'Risshun', category: 'Anniversario Storico',
    titleIt: 'Giornata della Carta Meteorologica', titleJp: '天気図記念日 (Tenkizu Kinenbi)',
    observanceDesc: 'Il 16 febbraio 1883 fu disegnata la prima carta meteorologica giapponese su ideazione del cartografo tedesco Erwin Knipping, segnando la nascita delle previsioni del tempo nazionali.',
    kanji: '晴', meaningIt: 'cielo sereno, schiarita', strokes: 12, radical: '日 (sole)',
    on: [{ kana: 'セイ', romaji: 'sei' }],
    kun: [{ kana: 'は(れる)', romaji: 'ha(reru)' }, { kana: 'は(らす)', romaji: 'ha(rasu)' }],
    originStory: 'Sole (日) unito a 青 (azzurro terso): il momento in cui le nubi si aprono restituendo la luce nitida del cielo azzurro.',
    examples: [
      { word: '晴れ', kana: 'はれ', romaji: 'hare', meaning: 'bel tempo, cielo sereno' },
      { word: '快晴', kana: 'かいせい', romaji: 'kaisei', meaning: 'cielo completamente limpido' },
      { word: '素晴らしい', kana: 'すばらしい', romaji: 'subarashii', meaning: 'meraviglioso' }
    ]
  },
  {
    id: '02-17', month: 2, day: 17, dayOfYear: 48, jpDate: '二月十七日',
    season: 'Primavera', sekki: 'Risshun', category: 'Rito Shintō',
    titleIt: 'Rito Shintō di Preghiera per il Raccolto', titleJp: '祈年祭 (Kinensai)',
    observanceDesc: 'Antichissimo rito nei santuari shintō (un tempo tenuto il quarto giorno del secondo mese) in cui si chiede ai kami abbondanza di raccolti di riso e pace per il popolo.',
    kanji: '祈', meaningIt: 'pregare, invocare', strokes: 8, radical: '礻 (altare)',
    on: [{ kana: 'キ', romaji: 'ki' }],
    kun: [{ kana: 'いの(る)', romaji: 'ino(ru)' }],
    originStory: 'Accanto all’altare sacro (礻) sta un’ascia cerimoniale (斤): in origine simboleggiava le offerte e la supplica solenne rivolta ai kami davanti al santuario.',
    examples: [
      { word: '祈り', kana: 'いのり', romaji: 'inori', meaning: 'preghiera' },
      { word: '祈願', kana: 'きがん', romaji: 'kigan', meaning: 'supplica votiva' },
      { word: '祈念', kana: 'きねん', romaji: 'kinen', meaning: 'preghiera devota' }
    ]
  },
  {
    id: '02-18', month: 2, day: 18, dayOfYear: 49, jpDate: '二月十八日',
    season: 'Primavera', sekki: 'Risshun', category: 'Giornata Curiosa',
    titleIt: 'Giornata delle Lingue dei Fiori e del Dialetto Amami', titleJp: '方言の日（奄美）・冥王星の日',
    observanceDesc: 'Nella prefettura di Kagoshima si celebrano i canti e le parlate insulari di Amami Ōshima; nello stesso giorno del 1930 fu scoperto Plutone.',
    kanji: '星', meaningIt: 'stella, astro', strokes: 9, radical: '日 (sole)',
    on: [{ kana: 'セイ', romaji: 'sei' }, { kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'ほし', romaji: 'hoshi' }],
    originStory: 'Tre piccoli astri luminosi (晶, poi riassunti in 日) sopra la spinta vitale (生): i punti di luce che nascono e scintillano nel cielo notturno.',
    examples: [
      { word: '星空', kana: 'ほしぞら', romaji: 'hoshizora', meaning: 'cielo stellato' },
      { word: '惑星', kana: 'わくせい', romaji: 'wakusei', meaning: 'pianeta' },
      { word: '流れ星', kana: 'ながれぼし', romaji: 'nagareboshi', meaning: 'stella cadente' }
    ]
  },
  {
    id: '02-19', month: 2, day: 19, dayOfYear: 50, jpDate: '二月十九日',
    season: 'Primavera', sekki: 'Usui', category: 'Natura e Stagioni',
    titleIt: 'Usui — Acqua di Pioggia', titleJp: '雨水 (Usui)',
    observanceDesc: 'Secondo termine solare: la neve si scioglie in pioggia mite e ammorbidisce la terra. Secondo la tradizione popolare, esporre le bambole Hina proprio in questo giorno porta matrimoni felici.',
    kanji: '雨', meaningIt: 'pioggia', strokes: 8, radical: '雨 (pioggia)',
    on: [{ kana: 'ウ', romaji: 'u' }],
    kun: [{ kana: 'あめ', romaji: 'ame' }, { kana: 'あま', romaji: 'ama' }],
    originStory: 'Pittogramma trasparente: la linea del cielo in alto, una nube ad arco e quattro gocce che scendono ordinate verso il suolo.',
    examples: [
      { word: '雨水', kana: 'うすい・あまみず', romaji: 'usui / amamizu', meaning: 'acqua piovana / termine solare' },
      { word: '小雨', kana: 'こさめ', romaji: 'kosame', meaning: 'pioggerella' },
      { word: '雨宿り', kana: 'あまやどり', romaji: 'amayadori', meaning: 'ripararsi dalla pioggia' }
    ]
  },
  {
    id: '02-20', month: 2, day: 20, dayOfYear: 51, jpDate: '二月二十日',
    season: 'Primavera', sekki: 'Usui', category: 'Anniversario Storico',
    titleIt: 'Giornata del Passaporto Giapponese', titleJp: '旅券の日 (Ryoken no Hi)',
    observanceDesc: 'Il 20 febbraio 1878 il termine ryoken ("documento di viaggio") comparve per la prima volta nel regolamento ufficiale giapponese per i viaggiatori diretti all’estero.',
    kanji: '旅', meaningIt: 'viaggio, itinerario', strokes: 10, radical: '方 (direzione)',
    on: [{ kana: 'リョ', romaji: 'ryo' }],
    kun: [{ kana: 'たび', romaji: 'tabi' }],
    originStory: 'Raffigura uno stendardo che sventola al vento (方) con sotto persone in cammino: in origine erano compagnie in marcia sotto una guida, divenute l’emblema del viaggiare.',
    examples: [
      { word: '旅行', kana: 'りょこう', romaji: 'ryokō', meaning: 'viaggio' },
      { word: '旅館', kana: 'りょかん', romaji: 'ryokan', meaning: 'locanda tradizionale giapponese' },
      { word: '一人旅', kana: 'ひとりたび', romaji: 'hitoritabi', meaning: 'viaggio in solitaria' }
    ]
  },
  {
    id: '02-21', month: 2, day: 21, dayOfYear: 52, jpDate: '二月二十一日',
    season: 'Primavera', sekki: 'Usui', category: 'Anniversario Storico',
    titleIt: 'Giornata di Sōseki', titleJp: '漱石の日 (Sōseki no Hi)',
    observanceDesc: 'Nel 1911 il grande scrittore Natsume Sōseki rifiutò cortese ma fermo il titolo onorifico di dottore in lettere offertogli dal Ministero, rivendicando l’indipendenza dello scrittore.',
    kanji: '書', meaningIt: 'scrivere, libro, calligrafia', strokes: 10, radical: '曰 (dire)',
    on: [{ kana: 'ショ', romaji: 'sho' }],
    kun: [{ kana: 'か(く)', romaji: 'ka(ku)' }],
    originStory: 'Una mano con il pennello (聿) sopra il segno della bocca o parola (曰): fissare sulla carta ciò che si pensa e si pronuncia.',
    examples: [
      { word: '読書', kana: 'どくしょ', romaji: 'dokusho', meaning: 'lettura di libri' },
      { word: '書斎', kana: 'しょさい', romaji: 'shosai', meaning: 'studio, stanza da lavoro' },
      { word: '手書き', kana: 'てがき', romaji: 'tegaki', meaning: 'scritto a mano' }
    ]
  },
  {
    id: '02-22', month: 2, day: 22, dayOfYear: 53, jpDate: '二月二十二日',
    season: 'Primavera', sekki: 'Usui', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Gatto', titleJp: '猫の日 (Neko no Hi)',
    observanceDesc: 'Una delle ricorrenze più amate del calendario giapponese: 2-2-2 si pronuncia nyan-nyan-nyan, il miagolio del gatto. Librerie, pasticcerie e templi celebrano i felini.',
    kanji: '猫', meaningIt: 'gatto', strokes: 11, radical: '犭 (animale)',
    on: [{ kana: 'ビョウ', romaji: 'byō' }],
    kun: [{ kana: 'ねこ', romaji: 'neko' }],
    originStory: 'Al radicale degli animali agili (犭) si unisce 苗 (germoglio): riferimento al verso simile al miagolio o al ruolo del gatto nel proteggere dai topi i campi nascenti.',
    examples: [
      { word: '招き猫', kana: 'まねきねこ', romaji: 'manekineko', meaning: 'gatto portafortuna che chiama con la zampa' },
      { word: '子猫', kana: 'こねこ', romaji: 'koneko', meaning: 'gattino' },
      { word: '愛猫', kana: 'あいびょう', romaji: 'aibyō', meaning: 'amato gatto' }
    ]
  },
  {
    id: '02-23', month: 2, day: 23, dayOfYear: 54, jpDate: '二月二十三日',
    season: 'Primavera', sekki: 'Usui', category: 'Festa Nazionale',
    titleIt: 'Compleanno dell’Imperatore e Giornata del Monte Fuji', titleJp: '天皇誕生日・富士山の日 (Tennō Tanjōbi · Fujisan no Hi)',
    observanceDesc: 'Festa nazionale per il compleanno dell’imperatore Naruhito; inoltre, per goroawase (2-2-3 = fu-ji-san), Shizuoka e Yamanashi celebrano la maestosa montagna sacra del Giappone.',
    kanji: '山', meaningIt: 'montagna, monte', strokes: 3, radical: '山 (montagna)',
    on: [{ kana: 'サン', romaji: 'san' }, { kana: 'セン', romaji: 'sen' }],
    kun: [{ kana: 'やま', romaji: 'yama' }],
    originStory: 'Pittogramma diretto di tre vette che si innalzano dall’orizzonte, con la cima centrale più alta e solenne.',
    examples: [
      { word: '富士山', kana: 'ふじさん', romaji: 'Fujisan', meaning: 'Monte Fuji' },
      { word: '山道', kana: 'やまみち', romaji: 'yamamichi', meaning: 'sentiero di montagna' },
      { word: '登山', kana: 'とざん', romaji: 'tozan', meaning: 'scalata, escursionismo' }
    ]
  },
  {
    id: '02-24', month: 2, day: 24, dayOfYear: 55, jpDate: '二月二十四日',
    season: 'Primavera', sekki: 'Usui', category: 'Anniversario Storico',
    titleIt: 'Debutto di Gekkō Kamen (Primo Eroe TV)', titleJp: '月光仮面登場の日 (Gekkō Kamen Tōjō no Hi)',
    observanceDesc: 'Il 24 febbraio 1958 apparve sugli schermi giapponesi Gekkō Kamen ("La Maschera al Chiaro di Luna"), il primo supereroe televisivo della storia del Giappone.',
    kanji: '月', meaningIt: 'luna, mese', strokes: 4, radical: '月 (luna)',
    on: [{ kana: 'ゲツ', romaji: 'getsu' }, { kana: 'ガツ', romaji: 'gatsu' }],
    kun: [{ kana: 'つき', romaji: 'tsuki' }],
    originStory: 'Disegno di una falce di luna crescente vista nel cielo notturno; dal suo ciclo nacque anche il significato di mese.',
    examples: [
      { word: '月光', kana: 'げっこう', romaji: 'gekkō', meaning: 'chiaro di luna' },
      { word: '満月', kana: 'まんげつ', romaji: 'mangetsu', meaning: 'luna piena' },
      { word: '今月', kana: 'こんげつ', romaji: 'kongetsu', meaning: 'questo mese' }
    ]
  },
  {
    id: '02-25', month: 2, day: 25, dayOfYear: 56, jpDate: '二月二十五日',
    season: 'Primavera', sekki: 'Usui', category: 'Rito Shintō',
    titleIt: 'Festa dei Prugni al Kitano Tenmangū', titleJp: '梅花祭 (Baikasai)',
    observanceDesc: 'Anniversario della scomparsa di Sugawara no Michizane (903), celebrato a Kyoto tra oltre 1.500 alberi di prugno in fiore e cerimonie del tè all’aperto offerte dalle geiko di Kamishichiken.',
    kanji: '詩', meaningIt: 'poesia, versi classici', strokes: 13, radical: '言 (parola)',
    on: [{ kana: 'シ', romaji: 'shi' }],
    kun: [{ kana: 'うた', romaji: 'uta' }],
    originStory: 'Parole (言) guidate con ordine e cadenza rituale (寺, che in antico significava corte o ufficio misurato): il linguaggio elevato in ritmo e misura.',
    examples: [
      { word: '漢詩', kana: 'かんし', romaji: 'kanshi', meaning: 'poesia classica in cinese' },
      { word: '詩人', kana: 'しじん', romaji: 'shijin', meaning: 'poeta' },
      { word: '詩集', kana: 'ししゅう', romaji: 'shishū', meaning: 'raccolta di poesie' }
    ]
  },
  {
    id: '02-26', month: 2, day: 26, dayOfYear: 57, jpDate: '二月二十六日',
    season: 'Primavera', sekki: 'Usui', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’Arte di Avvolgere i Doni (Tsutsumu)', titleJp: '包む日 (Tsutsumu no Hi)',
    observanceDesc: 'Per gioco di lettura numerica — 2 (tsu), 2 (tsu), 6 (mu) = tsutsumu (“avvolgere”) — si celebra l’arte giapponese di confezionare doni e oggetti in carta washi o tessuti furoshiki con cura e rispetto.',
    kanji: '包', meaningIt: 'avvolgere, racchiudere', strokes: 5, radical: '勹 (avvolgere)',
    on: [{ kana: 'ホウ', romaji: 'hō' }],
    kun: [{ kana: 'つつ(む)', romaji: 'tsutsu(mu)' }],
    originStory: 'Un tratto avvolgente (勹) attorno a un embrione rannicchiato (巳): l’immagine originaria del grembo che protegge e custodisce con delicatezza.',
    examples: [
      { word: '小包', kana: 'こづつみ', romaji: 'kozutsumi', meaning: 'pacco postale' },
      { word: '包装', kana: 'ほうそう', romaji: 'hōsō', meaning: 'confezionamento, imballo' },
      { word: '包み紙', kana: 'つつみがみ', romaji: 'tsutsumigami', meaning: 'carta da regalo' }
    ]
  },
  {
    id: '02-27', month: 2, day: 27, dayOfYear: 58, jpDate: '二月二十七日',
    season: 'Primavera', sekki: 'Usui', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’Avventura d’Inverno e della Condivisione', titleJp: '冬の恋人の日・絆の日 (Kizuna no Hi)',
    observanceDesc: 'Ricorrenza dedicata ai legami profondi tra persone (kizuna), celebrata prima che febbraio lasci spazio alla piena fioritura di marzo.',
    kanji: '絆', meaningIt: 'legame, vincolo affettivo', strokes: 11, radical: '糸 (filo)',
    on: [{ kana: 'ハン', romaji: 'han' }],
    kun: [{ kana: 'きずな', romaji: 'kizuna' }],
    originStory: 'Un filo (糸) unito a 半 (metà che si completa): un laccio che unisce due parti distinte rendendole inseparabili.',
    examples: [
      { word: '家族の絆', kana: 'かぞくのきずな', romaji: 'kazoku no kizuna', meaning: 'legame familiare' },
      { word: '絆を深める', kana: 'きずなをふかめる', romaji: 'kizuna o fukameru', meaning: 'rafforzare i legami' },
      { word: '心の絆', kana: 'こころのきずな', romaji: 'kokoro no kizuna', meaning: 'legame del cuore' }
    ]
  },
  {
    id: '02-28', month: 2, day: 28, dayOfYear: 59, jpDate: '二月二十八日',
    season: 'Primavera', sekki: 'Usui', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Biscotto in Giappone', titleJp: 'ビスケットの日 (Bisuketto no Hi)',
    observanceDesc: 'Il 28 febbraio 1855 il medico giapponese Shibata Hōan descrisse in una lettera da Nagasaki la ricetta dei biscotti europei studiati tramite i trattati olandesi (Rangaku).',
    kanji: '菓', meaningIt: 'dolce, frutto candito', strokes: 11, radical: '艹 (erba)',
    on: [{ kana: 'カ', romaji: 'ka' }],
    kun: [],
    originStory: 'Le piante erbacee (艹) unite al frutto sull’albero (果): in passato i dolci nascevano da frutta essiccata, noci e piante zuccherine.',
    examples: [
      { word: '和菓子', kana: 'わがし', romaji: 'wagashi', meaning: 'dolci tradizionali giapponesi' },
      { word: 'お菓子', kana: 'おかし', romaji: 'okashi', meaning: 'dolciumi, snack' },
      { word: '製菓', kana: 'せいか', romaji: 'seika', meaning: 'pasticceria' }
    ]
  },
  {
    id: '02-29', month: 2, day: 29, dayOfYear: 60, jpDate: '二月二十九日',
    season: 'Primavera', sekki: 'Usui', category: 'Giornata Curiosa',
    titleIt: 'Giorno Bisestile e dell’Aglio', titleJp: '閏日・にんにくの日 (Urūbi · Ninniku no Hi)',
    observanceDesc: 'Il giorno raro che compare una volta ogni quattro anni (urūdoshi). Per goroawase (2-2-9 = nin-ni-ku), è anche la giornata dell’aglio energizzante per affrontare il cambio di stagione.',
    kanji: '閏', meaningIt: 'bisestile, intercalare', strokes: 12, radical: '門 (porta)',
    on: [{ kana: 'ジュン', romaji: 'jun' }],
    kun: [{ kana: 'うるう', romaji: 'urū' }],
    originStory: 'Un sovrano (王) che resta all’interno della porta (門): secondo l’antico rito cinese, nel mese intercalare aggiunto al calendario il re celebrava le cerimonie stando sotto la soglia del palazzo.',
    examples: [
      { word: '閏年', kana: 'うるうどし', romaji: 'urūdoshi', meaning: 'anno bisestile' },
      { word: '閏日', kana: 'うるうび', romaji: 'urūbi', meaning: '29 febbraio, giorno bisestile' },
      { word: '閏秒', kana: 'うるうびょう', romaji: 'urūbyō', meaning: 'secondo intercalare' }
    ]
  },

  // MARZO (31 giorni)
  {
    id: '03-01', month: 3, day: 1, dayOfYear: 61, jpDate: '三月一日',
    season: 'Primavera', sekki: 'Usui', category: 'Rito Buddhista',
    titleIt: 'Omizutori al Tōdai-ji di Nara', titleJp: 'お水取り（修二会） (Omizutori · Shuni-e)',
    observanceDesc: 'Dal 1° al 14 marzo i monaci del tempio Tōdai-ji celebrano lo Shuni-e, rito ininterrotto da oltre 1.270 anni con enormi torce di pino (Otaimatsu) che portano la primavera a Nara.',
    kanji: '灯', meaningIt: 'lanterna, luce di fuoco', strokes: 6, radical: '火 (fuoco)',
    on: [{ kana: 'トウ', romaji: 'tō' }],
    kun: [{ kana: 'ひ', romaji: 'hi' }, { kana: 'ともしび', romaji: 'tomoshibi' }],
    originStory: 'Fuoco (火) sostenuto su un piedistallo o supporto (丁): la fiammella domestica o rituale che rischiara la notte.',
    examples: [
      { word: '灯台', kana: 'とうだい', romaji: 'tōdai', meaning: 'faro costiero' },
      { word: '提灯', kana: 'ちょうちん', romaji: 'chōchin', meaning: 'lanterna di carta giapponese' },
      { word: '街灯', kana: 'がいとう', romaji: 'gaitō', meaning: 'lampione stradale' }
    ]
  },
  {
    id: '03-02', month: 3, day: 2, dayOfYear: 62, jpDate: '三月二日',
    season: 'Primavera', sekki: 'Usui', category: 'Giornata Curiosa',
    titleIt: 'Giornata delle Miniature (Mini no Hi)', titleJp: 'ミニの日 (Mini no Hi)',
    observanceDesc: 'Per lettura fonetica — 3 (mi) e 2 (ni) = mini — il 2 marzo celebra le cose piccole e minuziose, come le sculture netsuke, le miniature artigianali e i taccuini tascabili.',
    kanji: '小', meaningIt: 'piccolo, minuto', strokes: 3, radical: '小 (piccolo)',
    on: [{ kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'ちい(さい)', romaji: 'chii(sai)' }, { kana: 'こ', romaji: 'ko' }, { kana: 'お', romaji: 'o' }],
    originStory: 'Tre granelli di sabbia o goccioline minuscole disposte l’una accanto all’altra: la semplicità essenziale di ciò che è minuto.',
    examples: [
      { word: '小説', kana: 'しょうせつ', romaji: 'shōsetsu', meaning: 'romanzo' },
      { word: '小川', kana: 'おがわ', romaji: 'ogawa', meaning: 'ruscello' },
      { word: '小鳥', kana: 'ことり', romaji: 'kotori', meaning: 'uccellino' }
    ]
  },
  {
    id: '03-03', month: 3, day: 3, dayOfYear: 63, jpDate: '三月三日',
    season: 'Primavera', sekki: 'Usui', category: 'Rito Shintō',
    titleIt: 'Hinamatsuri — Festa delle Bambole e dei Peschi', titleJp: '雛祭り・上巳の節句 (Hinamatsuri)',
    observanceDesc: 'Festa dedicata alla crescita serena delle bambine: nelle case si allestiscono altari a gradini con bambole della corte Heian, fiori di pesco, dolcetti hishimochi e chirashizushi.',
    kanji: '桃', meaningIt: 'pesco, pesca', strokes: 10, radical: '木 (albero)',
    on: [{ kana: 'トウ', romaji: 'tō' }],
    kun: [{ kana: 'もも', romaji: 'momo' }],
    originStory: 'Albero (木) associato a 兆 (molteplicità e buon auspicio): nell’antichità i rami di pesco fioriti proteggevano dalle influenze nefaste e simboleggiavano lunga vita.',
    examples: [
      { word: '桃の花', kana: 'もものはな', romaji: 'momo no hana', meaning: 'fiore di pesco' },
      { word: '桃色', kana: 'ももいろ', romaji: 'momoiro', meaning: 'rosa pesca' },
      { word: '白桃', kana: 'はくとう', romaji: 'hakutō', meaning: 'pesca bianca' }
    ]
  },
  {
    id: '03-04', month: 3, day: 4, dayOfYear: 64, jpDate: '三月四日',
    season: 'Primavera', sekki: 'Usui', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Baumkuchen e della Sanshin', titleJp: 'バウムクーヘンの日・三線の日',
    observanceDesc: 'A Okinawa il 4 marzo — 3 (san) e 4 (shi) richiama “sanshin” — si suona simultaneamente il liuto tradizionale a tre corde rivestito di pelle di serpente; a Hiroshima invece si ricorda il primo baumkuchen cotto nel 1919.',
    kanji: '弦', meaningIt: 'corda musicale, arco teso', strokes: 8, radical: '弓 (arco)',
    on: [{ kana: 'ゲン', romaji: 'gen' }],
    kun: [{ kana: 'つる', romaji: 'tsuru' }],
    originStory: 'Un arco (弓) con un filo teso sottile e profondo (玄): dalla corda che scocca la freccia a quella che vibra sugli strumenti musicali.',
    examples: [
      { word: '弦楽器', kana: 'げんがっき', romaji: 'gengakki', meaning: 'strumento a corde' },
      { word: '上弦の月', kana: 'じょうげんのつき', romaji: 'jōgen no tsuki', meaning: 'primo quarto di luna' },
      { word: '琴線', kana: 'きんせん', romaji: 'kinsen', meaning: 'corde del cuore (metafora musicale)' }
    ]
  },
  {
    id: '03-05', month: 3, day: 5, dayOfYear: 65, jpDate: '三月五日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Natura e Stagioni',
    titleIt: 'Keichitsu — Risveglio degli Insetti', titleJp: '啓蟄 (Keichitsu)',
    observanceDesc: 'Terzo termine solare: la terra si scalda abbastanza da risvegliare insetti, rane e lucertole dal letargo invernale. Nei giardini di Kyoto si tolgono le fasce di paglia dai pini.',
    kanji: '虫', meaningIt: 'insetto, piccola creatura', strokes: 6, radical: '虫 (insetto)',
    on: [{ kana: 'チュウ', romaji: 'chū' }],
    kun: [{ kana: 'むし', romaji: 'mushi' }],
    originStory: 'Pittogramma originario di una piccola vipera o larva con la testa triangolare e il corpo sinuoso; divenne il classificatore generale per insetti e animaletti.',
    examples: [
      { word: '昆虫', kana: 'こんちゅう', romaji: 'konchū', meaning: 'insetto' },
      { word: '虫の声', kana: 'むしのこえ', romaji: 'mushi no koe', meaning: 'canto degli insetti' },
      { word: '蛍', kana: 'ほたる', romaji: 'hotaru', meaning: 'lucciola (variante derivata)' }
    ]
  },
  {
    id: '03-06', month: 3, day: 6, dayOfYear: 66, jpDate: '三月六日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata dello Sport e del Fratello Minore', titleJp: '弟の日・スポーツ新聞の日',
    observanceDesc: 'Ricorrenza dedicata ai fratelli minori (complementare a quella dei maggiori a dicembre), e anniversario del primo quotidiano sportivo giapponese nel 1946.',
    kanji: '弟', meaningIt: 'fratello minore, discepolo', strokes: 7, radical: '弓 (arco)',
    on: [{ kana: 'テイ', romaji: 'tei' }, { kana: 'ダイ', romaji: 'dai' }, { kana: 'デ', romaji: 'de' }],
    kun: [{ kana: 'おとうと', romaji: 'otōto' }],
    originStory: 'In origine un bastone avvolto in una corda a spirale ordinata: simbolo della sequenza regolare e di chi viene subito dopo in ordine di nascita o apprendistato.',
    examples: [
      { word: '兄弟', kana: 'きょうだい', romaji: 'kyōdai', meaning: 'fratelli' },
      { word: '弟子', kana: 'でし', romaji: 'deshi', meaning: 'discepolo, apprendista' },
      { word: '師弟', kana: 'してい', romaji: 'shitei', meaning: 'maestro e allievo' }
    ]
  },
  {
    id: '03-07', month: 3, day: 7, dayOfYear: 67, jpDate: '三月七日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Sauna e dei Vigili del Fuoco', titleJp: 'サウナの日・消防記念日',
    observanceDesc: 'Il 7 marzo (3-7 = sa-u-na) celebra il rito moderno dei bagni caldi e dell’onsen. È anche l’anniversario della legge istitutiva dei vigili del fuoco municipali (1948).',
    kanji: '湯', meaningIt: 'acqua calda, sorgente termale', strokes: 12, radical: '水 (acqua)',
    on: [{ kana: 'トウ', romaji: 'tō' }],
    kun: [{ kana: 'ゆ', romaji: 'yu' }],
    originStory: 'Acqua (氵) riscaldata dal sole alto che irradia calore (昜): l’acqua termale fumante dei bagni sentō e degli onsen.',
    examples: [
      { word: 'お湯', kana: 'おゆ', romaji: 'oyu', meaning: 'acqua calda' },
      { word: '銭湯', kana: 'せんとう', romaji: 'sentō', meaning: 'bagno pubblico tradizionale' },
      { word: '湯呑み', kana: 'ゆのみ', romaji: 'yunomi', meaning: 'tazza da tè senza manico' }
    ]
  },
  {
    id: '03-08', month: 3, day: 8, dayOfYear: 68, jpDate: '三月八日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Miele e della Casa di Città', titleJp: 'みつばちの日・町家の日 (Mitsubachi · Machiya)',
    observanceDesc: 'Per goroawase (3-8 = mitsu-bachi), celebra le api e il miele di primavera; a Kyoto e Kanazawa si festeggiano le tradizionali case-bottega in legno chiamate machiya.',
    kanji: '蜜', meaningIt: 'miele, nettare dolce', strokes: 14, radical: '虫 (insetto)',
    on: [{ kana: 'ミツ', romaji: 'mitsu' }],
    kun: [],
    originStory: 'Sotto un tetto protettivo (宀) è custodita un’essenza preziosa e raccolta (必) prodotta da piccoli insetti (虫): l’immagine dell’alveare colmo di miele.',
    examples: [
      { word: '蜂蜜', kana: 'はちみつ', romaji: 'hachimitsu', meaning: 'miele' },
      { word: '花蜜', kana: 'かみつ', romaji: 'kamitsu', meaning: 'nettare dei fiori' },
      { word: '蜜柑', kana: 'みかん', romaji: 'mikan', meaning: 'mandarino giapponese' }
    ]
  },
  {
    id: '03-09', month: 3, day: 9, dayOfYear: 69, jpDate: '三月九日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata del "Grazie"', titleJp: 'ありがとうの日・記念切手記念日 (Arigatō no Hi)',
    observanceDesc: 'Il 3-9 suona come "san-kyū" (thank you): un giorno informale in cui amici, colleghi e famiglie si scambiano parole e piccoli biglietti di ringraziamento.',
    kanji: '謝', meaningIt: 'ringraziare, scusarsi', strokes: 17, radical: '言 (parola)',
    on: [{ kana: 'シャ', romaji: 'sha' }],
    kun: [{ kana: 'あやま(る)', romaji: 'ayama(ru)' }],
    originStory: 'Parole (言) unite a 射 (scoccare o rilasciare): esprimere con sincerità ciò che scioglie il debito verso l’altro, sia in gratitudine sia nel chiedere scusa.',
    examples: [
      { word: '感謝', kana: 'かんしゃ', romaji: 'kansha', meaning: 'gratitudine' },
      { word: '謝礼', kana: 'しゃれい', romaji: 'sharei', meaning: 'compenso di ringraziamento' },
      { word: '深謝', kana: 'しんしゃ', romaji: 'shinsha', meaning: 'profondo ringraziamento' }
    ]
  },
  {
    id: '03-10', month: 3, day: 10, dayOfYear: 70, jpDate: '三月十日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata dello Zucchero (Satō) e dell’Isola di Sado', titleJp: '砂糖の日・佐渡の日 (Satō no Hi)',
    observanceDesc: 'Per gioco fonetico — 3 (san → sa) e 10 (tō) = satō (“zucchero”) — si celebrano lo zucchero di canna bruno di Okinawa (kokutō) e i dolci tradizionali, oltre all’isola di Sado nel Mar del Giappone.',
    kanji: '甘', meaningIt: 'dolce, soave', strokes: 5, radical: '甘 (dolce)',
    on: [{ kana: 'カン', romaji: 'kan' }],
    kun: [{ kana: 'あま(い)', romaji: 'ama(i)' }],
    originStory: 'Una bocca (口) che trattiene un piccolo boccone saporito indicato dal tratto orizzontale al centro: il piacere di assaporare qualcosa di dolce.',
    examples: [
      { word: '甘味', kana: 'かんみ', romaji: 'kanmi', meaning: 'dolcezza, dolciumi' },
      { word: '甘酒', kana: 'あまざけ', romaji: 'amazake', meaning: 'bevanda dolce di riso fermentato' },
      { word: '甘い', kana: 'あまい', romaji: 'amai', meaning: 'dolce, indulgente' }
    ]
  },
  {
    id: '03-11', month: 3, day: 11, dayOfYear: 71, jpDate: '三月十一日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Anniversario Storico',
    titleIt: 'Memoria del Grande Terremoto del Tōhoku', titleJp: '東日本大震災追悼の日',
    observanceDesc: 'Alle 14:46 di questo giorno il Giappone osserva un minuto di silenzio in memoria delle vittime del sisma e dello tsunami del 2011 nel Tōhoku, onorando la resilienza delle comunità costiere.',
    kanji: '黙', meaningIt: 'silenzio, raccoglimento', strokes: 15, radical: '黒 (nero/ombra)',
    on: [{ kana: 'モク', romaji: 'moku' }, { kana: 'ボク', romaji: 'boku' }],
    kun: [{ kana: 'だま(る)', romaji: 'dama(ru)' }],
    originStory: 'Un cane da guardia che resta immobile e vigile nell’ombra (黒 + 犬): osservare in silenzio profondo e raccolto senza proferire parola.',
    examples: [
      { word: '黙祷', kana: 'もくとう', romaji: 'mokutō', meaning: 'preghiera silenziosa, minuto di silenzio' },
      { word: '沈黙', kana: 'ちんもく', romaji: 'chinmoku', meaning: 'silenzio profondo' },
      { word: '黙想', kana: 'もくそう', romaji: 'mokusō', meaning: 'meditazione silenziosa' }
    ]
  },
  {
    id: '03-12', month: 3, day: 12, dayOfYear: 72, jpDate: '三月十二日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Rito Buddhista',
    titleIt: 'Notte Sacra dell’Acqua al Tōdai-ji', titleJp: 'お水取り本行 (Omizutori)',
    observanceDesc: 'Nella notte tra il 12 e il 13 marzo si attinge dal pozzo Wakasa l’acqua sacra (kōsui) presso la sala Nigatsudō di Nara, ritenuta portatrice di benedizione per l’intero anno.',
    kanji: '水', meaningIt: 'acqua', strokes: 4, radical: '水 (acqua)',
    on: [{ kana: 'スイ', romaji: 'sui' }],
    kun: [{ kana: 'みず', romaji: 'mizu' }],
    originStory: 'Pittogramma di una corrente d’acqua sinuosa al centro con spruzzi e rivoli ai lati: il fluire incessante di un ruscello o di una sorgente.',
    examples: [
      { word: '清水', kana: 'しみず', romaji: 'shimizu', meaning: 'acqua limpida di sorgente' },
      { word: '山水', kana: 'さんすい', romaji: 'sansui', meaning: 'paesaggio di monti e acque' },
      { word: '水曜日', kana: 'すいようび', romaji: 'suiyōbi', meaning: 'mercoledì' }
    ]
  },
  {
    id: '03-13', month: 3, day: 13, dayOfYear: 73, jpDate: '三月十三日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Rito Shintō',
    titleIt: 'Kasuga Matsuri — Grande Festa Imperiale di Nara', titleJp: '春日祭 (Kasuga Matsuri)',
    observanceDesc: 'Una delle tre grandi feste imperiali giapponesi insieme all’Aoi Matsuri e all’Iwashimizu: cortei in costumi antichi percorrono il parco di Nara tra i cervi sacri e i boschi di cedri.',
    kanji: '鹿', meaningIt: 'cervo', strokes: 11, radical: '鹿 (cervo)',
    on: [{ kana: 'ロク', romaji: 'roku' }],
    kun: [{ kana: 'しか', romaji: 'shika' }, { kana: 'か', romaji: 'ka' }],
    originStory: 'Pittogramma raffinato di un cervo di profilo con le corna ramificate in cima e le zampe snelle in basso. A Nara i cervi sono messaggeri sacri dei kami.',
    examples: [
      { word: '奈良の鹿', kana: 'ならのしか', romaji: 'Nara no shika', meaning: 'i cervi di Nara' },
      { word: '子鹿', kana: 'こじか', romaji: 'kojika', meaning: 'cerbiatto' },
      { word: '馬鹿', kana: 'ばか', romaji: 'baka', meaning: 'sciocco (da antico aneddoto)' }
    ]
  },
  {
    id: '03-14', month: 3, day: 14, dayOfYear: 74, jpDate: '三月十四日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Giornata Curiosa',
    titleIt: 'White Day — Il Dono di Ricambio', titleJp: 'ホワイトデー (Howaito Dē)',
    observanceDesc: 'Esattamente un mese dopo San Valentino, chi ha ricevuto cioccolato ricambia con dolci bianchi, marshmallow o biscotti, seguendo il codice di cortesia chiamato okaeshi.',
    kanji: '白', meaningIt: 'bianco, puro, chiaro', strokes: 5, radical: '白 (bianco)',
    on: [{ kana: 'ハク', romaji: 'haku' }, { kana: 'ビャク', romaji: 'byaku' }],
    kun: [{ kana: 'しろ', romaji: 'shiro' }, { kana: 'しろ(い)', romaji: 'shiro(i)' }],
    originStory: 'Un raggio o un chicco di riso brillato e candido, oppure il chiarore dell’alba che affiora sopra l’orizzonte.',
    examples: [
      { word: '余白', kana: 'よはく', romaji: 'yohaku', meaning: 'margine bianco della pagina' },
      { word: '白紙', kana: 'はくし', romaji: 'hakushi', meaning: 'foglio bianco' },
      { word: '白鳥', kana: 'はくちょう', romaji: 'hakuchō', meaning: 'cigno' }
    ]
  },
  {
    id: '03-15', month: 3, day: 15, dayOfYear: 75, jpDate: '三月十五日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Rito Shintō',
    titleIt: 'Festa della Fertilità di Tagata e dell’Oliva', titleJp: '豊年祭・オリーブの日 (Hōnensai)',
    observanceDesc: 'Nel santuario di Tagata (Aichi) si celebra il vivace Hōnensai per invocare abbondanza di raccolti e nuove nascite; a Shōdoshima invece si festeggia la piantagione degli ulivi.',
    kanji: '豊', meaningIt: 'abbondante, fertile', strokes: 13, radical: '豆 (legume/vaso)',
    on: [{ kana: 'ホウ', romaji: 'hō' }],
    kun: [{ kana: 'ゆた(か)', romaji: 'yuta(ka)' }],
    originStory: 'Un vaso cerimoniale (豆) colmo di spighe rigogliose di cereali offerte in ringraziamento per la messe generosa.',
    examples: [
      { word: '豊作', kana: 'ほうさく', romaji: 'hōsaku', meaning: 'raccolto abbondante' },
      { word: '豊か', kana: 'ゆたか', romaji: 'yutaka', meaning: 'ricco, rigoglioso, sereno' },
      { word: '豊富', kana: 'ほうふ', romaji: 'hōfu', meaning: 'copioso, vasto' }
    ]
  },
  {
    id: '03-16', month: 3, day: 16, dayOfYear: 76, jpDate: '三月十六日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Anniversario Storico',
    titleIt: 'Istituzione dei Primi Parchi Nazionali', titleJp: '国立公園指定記念日 (Kokuritsu Kōen Shitei Kinenbi)',
    observanceDesc: 'Il 16 marzo 1934 furono istituiti i primi tre parchi nazionali giapponesi: Setonaikai (Mare Interno), Unzen e Kirishima, tutelando la bellezza paesaggistica dell’arcipelago.',
    kanji: '景', meaningIt: 'paesaggio, vista, luce', strokes: 12, radical: '日 (sole)',
    on: [{ kana: 'ケイ', romaji: 'kei' }],
    kun: [],
    originStory: 'Il sole (日) che illumina una capitale su una collina (京): le forme e le ombre disegnate dalla luce sul panorama.',
    examples: [
      { word: '景色', kana: 'けしき', romaji: 'keshiki', meaning: 'paesaggio, veduta' },
      { word: '風景', kana: 'ふうけい', romaji: 'fūkei', meaning: 'scenario naturale' },
      { word: '夜景', kana: 'やけい', romaji: 'yakei', meaning: 'panorama notturno' }
    ]
  },
  {
    id: '03-17', month: 3, day: 17, dayOfYear: 77, jpDate: '三月十七日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Rito Buddhista',
    titleIt: 'Ingresso nell’Equinozio Buddhista (Higan-iri)', titleJp: '彼岸入り (Higan-iri)',
    observanceDesc: 'Tre giorni prima dell’equinozio inizia lo Higan di primavera: sette giorni di visita alle tombe familiari, pulizia delle lapidi e preparazione dei dolci di riso botamochi.',
    kanji: '岸', meaningIt: 'riva, sponda', strokes: 8, radical: '山 (montagna)',
    on: [{ kana: 'ガン', romaji: 'gan' }],
    kun: [{ kana: 'きし', romaji: 'kishi' }],
    originStory: 'Un’alta rupe montuosa (山 + 厂) che sovrasta e delimita le acque (干): nel buddhismo "l’altra riva" (Higan) è il luogo della quiete oltre la sofferenza.',
    examples: [
      { word: 'お彼岸', kana: 'おひがん', romaji: 'ohigan', meaning: 'settimana equinoziale commemorativa' },
      { word: '海岸', kana: 'かいがん', romaji: 'kaigan', meaning: 'costa marina' },
      { word: '対岸', kana: 'たいがん', romaji: 'taigan', meaning: 'riva opposta' }
    ]
  },
  {
    id: '03-18', month: 3, day: 18, dayOfYear: 78, jpDate: '三月十八日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Giornata Curiosa',
    titleIt: 'Seirei no Hi — Omaggio ai Grandi Poeti Classici', titleJp: '精霊の日 (Seirei no Hi)',
    observanceDesc: 'Ricorda tre grandi poeti dell’epoca Heian — Ono no Komachi, Kakinomoto no Hitomaro e Izumi Shikibu — la cui grazia lirica vive ancora nelle antologie di waka.',
    kanji: '雅', meaningIt: 'eleganza raffinata, grazia', strokes: 13, radical: '隹 (uccello)',
    on: [{ kana: 'ガ', romaji: 'ga' }],
    kun: [{ kana: 'みや(び)', romaji: 'miya(bi)' }],
    originStory: 'Unisce il profilo di una zanna o becco ricurvo (牙) a un uccello (隹): in origine designava il corvo sacro, poi passò a indicare la grazia colta e sobria della musica e della poesia di corte.',
    examples: [
      { word: '雅楽', kana: 'ががく', romaji: 'gagaku', meaning: 'musica classica di corte' },
      { word: '優雅', kana: 'ゆうが', romaji: 'yūga', meaning: 'elegante, raffinato' },
      { word: '風雅', kana: 'ふうが', romaji: 'fūga', meaning: 'gusto poetico e ricercato' }
    ]
  },
  {
    id: '03-19', month: 3, day: 19, dayOfYear: 79, jpDate: '三月十九日',
    season: 'Primavera', sekki: 'Keichitsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Musica e dei Canti Popolari', titleJp: 'ミュージックの日 (Myūjikku no Hi)',
    observanceDesc: 'Il 19 marzo (3-1-9 = mi-yu-ji-kku) celebra musicisti, liutai e cori che tengono vive le melodie tradizionali e contemporanee del Giappone.',
    kanji: '音', meaningIt: 'suono, timbro', strokes: 9, radical: '音 (suono)',
    on: [{ kana: 'オン', romaji: 'on' }, { kana: 'イン', romaji: 'in' }],
    kun: [{ kana: 'おと', romaji: 'oto' }, { kana: 'ね', romaji: 'ne' }],
    originStory: 'Una bocca che pronuncia un discorso (言) con un tratto al suo interno: la vibrazione e il timbro della voce o di uno strumento.',
    examples: [
      { word: '音楽', kana: 'おんがく', romaji: 'ongaku', meaning: 'musica' },
      { word: '足音', kana: 'あしおと', romaji: 'ashioto', meaning: 'rumore di passi' },
      { word: '音読み', kana: 'おんよみ', romaji: 'on’yomi', meaning: 'lettura sino-giapponese del kanji' }
    ]
  },
  {
    id: '03-20', month: 3, day: 20, dayOfYear: 80, jpDate: '三月二十日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Festa Nazionale',
    titleIt: 'Equinozio di Primavera', titleJp: '春分の日 (Shunbun no Hi)',
    observanceDesc: 'Festa nazionale in cui giorno e notte si equivalgono in durata. È dedicata all’amore per la natura, al rispetto degli esseri viventi e al ricordo degli antenati.',
    kanji: '分', meaningIt: 'dividere, parte, minuto', strokes: 4, radical: '刀 (lama)',
    on: [{ kana: 'ブン', romaji: 'bun' }, { kana: 'フン', romaji: 'fun' }, { kana: 'ブ', romaji: 'bu' }],
    kun: [{ kana: 'わ(ける)', romaji: 'wa(keru)' }, { kana: 'わ(かる)', romaji: 'wa(karu)' }],
    originStory: 'Otto (八, due metà che si separano) sopra una lama (刀): dividere con esattezza una cosa in parti distinte, da cui anche "comprendere" distinguendo.',
    examples: [
      { word: '春分', kana: 'しゅんぶん', romaji: 'shunbun', meaning: 'equinozio di primavera' },
      { word: '自分', kana: 'じぶん', romaji: 'jibun', meaning: 'sé stessi' },
      { word: '季節の分かれ', kana: 'きせつのわかれ', romaji: 'kisetsu no wakare', meaning: 'passaggio tra le stagioni' }
    ]
  },
  {
    id: '03-21', month: 3, day: 21, dayOfYear: 81, jpDate: '三月二十一日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Anniversario Storico',
    titleIt: 'Giornata dello Zaino Scolastico (Randoseru)', titleJp: 'ランドセルの日 (Randoseru no Hi)',
    observanceDesc: 'La somma 3 + 2 + 1 = 6 richiama i sei anni della scuola elementare giapponese (e 3-2-1 il conto alla rovescia per il nuovo anno scolastico di aprile), celebrando lo storico zaino rigido randoseru.',
    kanji: '校', meaningIt: 'scuola, verifica', strokes: 10, radical: '木 (albero)',
    on: [{ kana: 'コウ', romaji: 'kō' }],
    kun: [],
    originStory: 'Legno (木) intrecciato (交): indicava in antico una staccionata di legno o un recinto dove ci si riuniva per istruirsi e confrontarsi.',
    examples: [
      { word: '学校', kana: 'がっこう', romaji: 'gakkō', meaning: 'scuola' },
      { word: '小学校', kana: 'しょうがっこう', romaji: 'shōgakkō', meaning: 'scuola elementare' },
      { word: '校正', kana: 'こうせい', romaji: 'kōsei', meaning: 'correzione di bozze' }
    ]
  },
  {
    id: '03-22', month: 3, day: 22, dayOfYear: 82, jpDate: '三月二十二日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Anniversario Storico',
    titleIt: 'Prima Trasmissione Radiofonica Giapponese', titleJp: '放送記念日 (Hōsō Kinenbi)',
    observanceDesc: 'Il 22 marzo 1925 la stazione di Tokyo effettuò la prima trasmissione radiofonica ufficiale in Giappone, portando notizie e musica nelle case di tutto il Paese.',
    kanji: '放', meaningIt: 'liberare, emettere, diffondere', strokes: 8, radical: '攵 (mano con asta)',
    on: [{ kana: 'ホウ', romaji: 'hō' }],
    kun: [{ kana: 'はな(す)', romaji: 'hana(su)' }, { kana: 'はな(つ)', romaji: 'hana(tsu)' }],
    originStory: 'Una mano con bastone (攵) che lascia andare verso ogni direzione (方): liberare un uccello o trasmettere un segnale nello spazio.',
    examples: [
      { word: '放送', kana: 'ほうそう', romaji: 'hōsō', meaning: 'trasmissione radio o TV' },
      { word: '解放', kana: 'かいほう', romaji: 'kaihō', meaning: 'liberazione, apertura' },
      { word: '花を放つ', kana: 'はなをはなつ', romaji: 'hana o hanatsu', meaning: 'sprigionare profumo' }
    ]
  },
  {
    id: '03-23', month: 3, day: 23, dayOfYear: 83, jpDate: '三月二十三日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Natura e Stagioni',
    titleIt: 'Fioritura dei Ciliegi a Tokyo (Media Storica)', titleJp: '桜開花目安・世界気象デー',
    observanceDesc: 'Intorno al 23 marzo l’Agenzia Meteorologica Giapponese osserva l’apertura dei primi cinque boccioli sull’albero campione Somei Yoshino al santuario Yasukuni, annunciando l’inizio dello hanami.',
    kanji: '桜', meaningIt: 'ciliegio giapponese (sakura)', strokes: 10, radical: '木 (albero)',
    on: [{ kana: 'オウ', romaji: 'ō' }],
    kun: [{ kana: 'さくら', romaji: 'sakura' }],
    originStory: 'La forma antica 櫻 affiancava all’albero (木) una donna (女) adorna di due conchiglie preziose come una collana (賏): i rami fioriti di ciliegio paragonati a gioielli delicati.',
    examples: [
      { word: '桜色', kana: 'さくらいろ', romaji: 'sakurairo', meaning: 'rosa pallido dei petali di ciliegio' },
      { word: '夜桜', kana: 'よざくら', romaji: 'yozakura', meaning: 'ciliegi in fiore visti di notte' },
      { word: '桜餅', kana: 'さくらもち', romaji: 'sakuramochi', meaning: 'dolce di riso avvolto in foglia di ciliegio' }
    ]
  },
  {
    id: '03-24', month: 3, day: 24, dayOfYear: 84, jpDate: '三月二十四日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Anniversario Storico',
    titleIt: 'Battaglia di Dan-no-ura e Memoria dell’Heike Monogatari', titleJp: '壇ノ浦の戦いの日 (Dan-no-ura no Tatakai)',
    observanceDesc: 'Secondo il calendario gregoriano corrisponde alla battaglia navale di Dan-no-ura (1185), che chiuse la guerra Genpei ispirando il celebre poema epico Heike Monogatari.',
    kanji: '波', meaningIt: 'onda, flutto', strokes: 8, radical: '水 (acqua)',
    on: [{ kana: 'ハ', romaji: 'ha' }],
    kun: [{ kana: 'なみ', romaji: 'nami' }],
    originStory: 'Acqua (氵) con una superficie tesa e increspata come pelle (皮): le increspature che corrono sul mare aperto.',
    examples: [
      { word: '津波', kana: 'つなみ', romaji: 'tsunami', meaning: 'maremoto' },
      { word: '波紋', kana: 'はもん', romaji: 'hamon', meaning: 'cerchi concentrico sull’acqua' },
      { word: '電波', kana: 'でんぱ', romaji: 'denpa', meaning: 'onda radio' }
    ]
  },
  {
    id: '03-25', month: 3, day: 25, dayOfYear: 85, jpDate: '三月二十五日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Anniversario Storico',
    titleIt: 'Giornata dell’Elettricità in Giappone', titleJp: '電気記念日 (Denki Kinenbi)',
    observanceDesc: 'Il 25 marzo 1878, durante l’inaugurazione dell’Ufficio Telegrafico Centrale a Tokyo, brillò per la prima volta in Giappone una lampada ad arco elettrico davanti a ospiti stupiti.',
    kanji: '光', meaningIt: 'luce, splendore', strokes: 6, radical: '儿 (gambe)',
    on: [{ kana: 'コウ', romaji: 'kō' }],
    kun: [{ kana: 'ひかり', romaji: 'hikari' }, { kana: 'ひか(る)', romaji: 'hika(ru)' }],
    originStory: 'Una fiamma o torcia (火) portata sopra la testa di una figura umana (儿): qualcuno che avanza reggendo un lume nella notte.',
    examples: [
      { word: '日光', kana: 'にっこう', romaji: 'nikkō', meaning: 'luce del sole / Nikkō' },
      { word: '観光', kana: 'かんこう', romaji: 'kankō', meaning: 'turismo (osservare la luce di un luogo)' },
      { word: '光陰', kana: 'こういん', romaji: 'kōin', meaning: 'lo scorrere del tempo' }
    ]
  },
  {
    id: '03-26', month: 3, day: 26, dayOfYear: 86, jpDate: '三月二十六日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Anniversario Storico',
    titleIt: 'Inaugurazione dello Shinkansen nell’Hokkaidō', titleJp: 'カチューシャの歌の日・北海道新幹線開業日',
    observanceDesc: 'Nel 2016 il treno ad alta velocità Shinkansen attraversò per la prima volta il tunnel sottomarino Seikan collegando l’isola di Honshū a Hakodate nell’Hokkaidō.',
    kanji: '北', meaningIt: 'nord, settentrione', strokes: 5, radical: '匕 (cucchiaio/figura)',
    on: [{ kana: 'ホク', romaji: 'hoku' }],
    kun: [{ kana: 'きた', romaji: 'kita' }],
    originStory: 'Due persone sedute schiena contro schiena: volgere le spalle al vento freddo che soffia da nord o cercare calore l’una contro l’altra.',
    examples: [
      { word: '北海道', kana: 'ほっかいどう', romaji: 'Hokkaidō', meaning: 'isola settentrionale del Giappone' },
      { word: '南北', kana: 'なんぼく', romaji: 'nanboku', meaning: 'nord e sud' },
      { word: '北風', kana: 'きたかぜ', romaji: 'kitakaze', meaning: 'tramontana, vento del nord' }
    ]
  },
  {
    id: '03-27', month: 3, day: 27, dayOfYear: 87, jpDate: '三月二十七日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Natura e Stagioni',
    titleIt: 'Giornata del Sakura', titleJp: 'さくらの日 (Sakura no Hi)',
    observanceDesc: 'Istituita dalla Japan Cherry Blossom Association: moltiplicando 3 × 9 (27) si ottiene sa-ku ("sbocciare"), celebrando la cultura dei ciliegi giapponesi e la tutela degli alberi secolari.',
    kanji: '咲', meaningIt: 'sbocciare, fiorire', strokes: 9, radical: '口 (bocca)',
    on: [{ kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'さ(く)', romaji: 'sa(ku)' }],
    originStory: 'In origine era una variante antica di 笑 (sorridere): una bocca che si apre gioiosa, passata in Giappone a indicare il dischiudersi di un bocciolo.',
    examples: [
      { word: '開花', kana: 'かいか', romaji: 'kaika', meaning: 'fioritura' },
      { word: '満開に咲く', kana: 'まんかいにさく', romaji: 'mankai ni saku', meaning: 'fiorire in pieno rigoglio' },
      { word: '早咲き', kana: 'はやざき', romaji: 'hayazaki', meaning: 'fioritura precoce' }
    ]
  },
  {
    id: '03-28', month: 3, day: 28, dayOfYear: 88, jpDate: '三月二十八日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Rito Buddhista',
    titleIt: 'Rikyū-ki — Commemorazione di Sen no Rikyū', titleJp: '利休忌 (Rikyū-ki)',
    observanceDesc: 'Secondo il calendario tradizionale si commemora Sen no Rikyū (1522–1591), sommo maestro che trasformò la cerimonia del tè nell’estetica sobria e profonda del wabi-cha.',
    kanji: '寂', meaningIt: 'quiete solitaria, sabi', strokes: 11, radical: '宀 (tetto)',
    on: [{ kana: 'ジャク', romaji: 'jaku' }, { kana: 'セキ', romaji: 'seki' }],
    kun: [{ kana: 'さび(しい)', romaji: 'sabi(shii)' }, { kana: 'さび', romaji: 'sabi' }],
    originStory: 'Sotto un tetto (宀) sta 叔 (raccolto, silenzioso): la quiete serena che avvolge una stanza da tè o un giardino muschiato.',
    examples: [
      { word: '侘び寂び', kana: 'わびさび', romaji: 'wabi-sabi', meaning: 'bellezza dell’imperfezione e del tempo' },
      { word: '静寂', kana: 'せいじゃく', romaji: 'seijaku', meaning: 'silenzio profondo' },
      { word: '寂しい', kana: 'さびしい', romaji: 'sabishii', meaning: 'malinconico, solitario' }
    ]
  },
  {
    id: '03-29', month: 3, day: 29, dayOfYear: 89, jpDate: '三月二十九日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Giornata Curiosa',
    titleIt: 'Giornata delle Alghe Sferiche Marimo del Lago Akan', titleJp: 'マリモの日 (Marimo no Hi)',
    observanceDesc: 'Il 29 marzo 1952 le singolari alghe sferiche Marimo del lago Akan in Hokkaidō furono designate Tesoro Naturale Speciale del Giappone.',
    kanji: '丸', meaningIt: 'rotondo, sferico, intero', strokes: 3, radical: '丶 (punto)',
    on: [{ kana: 'ガン', romaji: 'gan' }],
    kun: [{ kana: 'まる', romaji: 'maru' }, { kana: 'まる(い)', romaji: 'maru(i)' }],
    originStory: 'Disegno di un oggetto sferico o di un sasso arrotondato che rotola su una superficie curva: simbolo di compiutezza senza spigoli.',
    examples: [
      { word: '日の丸', kana: 'ひのまる', romaji: 'Hinomaru', meaning: 'bandiera del Giappone ("disco solare")' },
      { word: '丸文字', kana: 'まるもじ', romaji: 'marumoji', meaning: 'scrittura tondeggiante' },
      { word: '花丸', kana: 'はなまる', romaji: 'hanamaru', meaning: 'segno di lode a forma di fiore' }
    ]
  },
  {
    id: '03-30', month: 3, day: 30, dayOfYear: 90, jpDate: '三月三十日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Anniversario Storico',
    titleIt: 'Chiusura dell’Anno Scolastico e Fiscale (Nendo-matsu)', titleJp: '年度末 (Nendo-matsu)',
    observanceDesc: 'In Giappone gli ultimi giorni di marzo segnano la fine dell’anno scolastico e fiscale (nendo-matsu): studenti e impiegati chiudono i registri prima dei nuovi inizi d’aprile.',
    kanji: '終', meaningIt: 'fine, conclusione', strokes: 11, radical: '糸 (filo)',
    on: [{ kana: 'シュウ', romaji: 'shū' }],
    kun: [{ kana: 'お(わる)', romaji: 'o(waru)' }, { kana: 'つい(に)', romaji: 'tsui(ni)' }],
    originStory: 'Un filo di seta (糸) annodato all’estremità accanto a 冬 (inverno, fine dell’anno): legare l’ultimo capo di una trama completata.',
    examples: [
      { word: '終了', kana: 'しゅうりょう', romaji: 'shūryō', meaning: 'conclusione, termine' },
      { word: '最終', kana: 'さいしゅう', romaji: 'saishū', meaning: 'ultimo, finale' },
      { word: '始終', kana: 'しじゅう', romaji: 'shijū', meaning: 'dall’inizio alla fine, sempre' }
    ]
  },
  {
    id: '03-31', month: 3, day: 31, dayOfYear: 91, jpDate: '三月三十一日',
    season: 'Primavera', sekki: 'Shunbun', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’Educazione e del Cambio di Stagione', titleJp: '教育基本法公布記念日・オーケストラの日',
    observanceDesc: 'Il 31 marzo 1947 fu promulgata la Legge Fondamentale sull’Educazione e l’Istruzione Scolastica. Oggi in tutto il Paese i teatri celebrano anche la Giornata dell’Orchestra.',
    kanji: '響', meaningIt: 'risuonare, eco, armonia', strokes: 20, radical: '音 (suono)',
    on: [{ kana: 'キョウ', romaji: 'kyō' }],
    kun: [{ kana: 'ひび(く)', romaji: 'hibi(ku)' }],
    originStory: 'Due figure raccolte attorno a un banchetto (郷) sopra il suono (音): la risonanza delle voci e degli strumenti che si propaga nella sala.',
    examples: [
      { word: '交響曲', kana: 'こうきょうきょく', romaji: 'kōkyōkyoku', meaning: 'sinfonia' },
      { word: '影響', kana: 'えいきょう', romaji: 'eikyō', meaning: 'influenza, ripercussione' },
      { word: '心の響き', kana: 'こころのひびき', romaji: 'kokoro no hibiki', meaning: 'eco dell’animo' }
    ]
  }
];
