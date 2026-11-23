import type { AgendaEntry } from '../types/agenda';

export const Q4_ENTRIES: AgendaEntry[] = [
  // OTTOBRE (31 giorni)
  {
    id: '10-01', month: 10, day: 1, dayOfYear: 275, jpDate: '十月一日',
    season: 'Autunno', sekki: 'Shūbun', category: 'Natura e Stagioni',
    titleIt: 'Cambio d’Abito Autunnale, Tōkaidō Shinkansen e Nihonshu', titleJp: '衣替え・日本酒の日・新幹線開業記念日 (Kannazuki)',
    observanceDesc: 'Ottobre (Kannazuki, "mese senza dèi", perché tutti i kami convergono a Izumo) si apre con il cambio d’abito autunnale, l’inaugurazione dello Shinkansen nel 1964 e la Giornata del Sakè Giapponese (il kanji 酉 indica il decimo mese e l’anfora da sakè).',
    kanji: '酉', meaningIt: 'anfora da sakè, decimo segno zodiacale', strokes: 7, radical: '酉 (anfora)',
    on: [{ kana: 'ユウ', romaji: 'yū' }],
    kun: [{ kana: 'とり', romaji: 'tori' }],
    originStory: 'Pittogramma diretto di una giara panciuta con collo stretto usata per la fermentazione e conservazione del vino di riso.',
    examples: [
      { word: '酉の市', kana: 'とりのいち', romaji: 'Tori no Ichi', meaning: 'fiera autunnale dei rastrelli portafortuna' },
      { word: '発酵', kana: 'はっこう', romaji: 'hakkō', meaning: 'fermentazione (con radicale 酉)' },
      { word: '芳醇', kana: 'ほうじゅん', romaji: 'hōjun', meaning: 'aroma ricco e rotondo' }
    ]
  },
  {
    id: '10-02', month: 10, day: 2, dayOfYear: 276, jpDate: '十月二日',
    season: 'Autunno', sekki: 'Shūbun', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Tofu', titleJp: '豆腐の日 (Tōfu no Hi)',
    observanceDesc: 'Per assonanza numerica (10 = tō e 2 = fu, cioè tōfu), il 2 ottobre celebra uno dei pilastri più versatili della cucina vegetariana buddhista shōjin ryōri e delle tavole giapponesi.',
    kanji: '汁', meaningIt: 'brodo, succo, zuppa', strokes: 5, radical: '水 (acqua)',
    on: [{ kana: 'ジュウ', romaji: 'jū' }],
    kun: [{ kana: 'しる', romaji: 'shiru' }],
    originStory: 'Acqua (氵) raccolta in misura essenziale (十): il brodo leggero dashi o il succo che estrae l’anima saporita degli ingredienti.',
    examples: [
      { word: '味噌汁', kana: 'みそしる', romaji: 'misoshiru', meaning: 'zuppa di miso' },
      { word: '出汁', kana: 'だし', romaji: 'dashi', meaning: 'brodo di alghe kombu e bonito' },
      { word: '果汁', kana: 'かじゅう', romaji: 'kajū', meaning: 'succo di frutta' }
    ]
  },
  {
    id: '10-03', month: 10, day: 3, dayOfYear: 277, jpDate: '十月三日',
    season: 'Autunno', sekki: 'Shūbun', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’Alpinismo (Tozan no Hi)', titleJp: '登山の日 (Tozan no Hi)',
    observanceDesc: 'Il 10-3 suona come to-zan ("scalata montana"): con l’aria limpida di ottobre le Alpi Giapponesi e il Monte Takao si tingono dei primi ori e rossi autunnali.',
    kanji: '登', meaningIt: 'salire, scalare, registrare', strokes: 12, radical: '癶 (passi)',
    on: [{ kana: 'トウ', romaji: 'tō' }, { kana: 'ト', romaji: 'to' }],
    kun: [{ kana: 'のぼ(る)', romaji: 'nobo(ru)' }],
    originStory: 'Due piedi che salgono (癶) verso un vaso rituale sollevato con entrambe le mani (豆): ascendere un’altura o offrire in alto.',
    examples: [
      { word: '登山', kana: 'とざん', romaji: 'tozan', meaning: 'escursionismo, alpinismo' },
      { word: '登場', kana: 'とうじょう', romaji: 'tōjō', meaning: 'ingresso in scena' },
      { word: '登録', kana: 'とうろく', romaji: 'tōroku', meaning: 'registrazione' }
    ]
  },
  {
    id: '10-04', month: 10, day: 4, dayOfYear: 278, jpDate: '十月四日',
    season: 'Autunno', sekki: 'Shūbun', category: 'Giornata Curiosa',
    titleIt: 'Giornata degli Angeli (Tenshi) e dei Pesci Sardine (Iwashi)', titleJp: '天使の日・いわしの日 (Tenshi no Hi)',
    observanceDesc: 'Il 10-4 si legge ten-shi ("angelo") e i-wa-shi ("sardina"), protagonista autunnale dei porti del Pacifico cucinata con zenzero o su carbonella.',
    kanji: '翼', meaningIt: 'ala, proteggere', strokes: 17, radical: '羽 (piume)',
    on: [{ kana: 'ヨク', romaji: 'yoku' }],
    kun: [{ kana: 'つばさ', romaji: 'tsubasa' }],
    originStory: 'Piume distese (羽) unite a 異 (ali spiegate simmetricamente): aprire le ali per sollevarsi o custodire ciò che sta sotto.',
    examples: [
      { word: '翼を広げる', kana: 'つばさをひろげる', romaji: 'tsubasa o hirogeru', meaning: 'spiegare le ali' },
      { word: '右翼・左翼', kana: 'うよく・さよく', romaji: 'uyoku / sayoku', meaning: 'ala destra e sinistra' },
      { word: '銀翼', kana: 'ぎんよく', romaji: 'gin’yoku', meaning: 'ali d’argento' }
    ]
  },
  {
    id: '10-05', month: 10, day: 5, dayOfYear: 279, jpDate: '十月五日',
    season: 'Autunno', sekki: 'Shūbun', category: 'Rito Buddhista',
    titleIt: 'Daruma-ki — Commemorazione di Bodhidharma', titleJp: '達磨忌 (Daruma-ki)',
    observanceDesc: 'Ricorda Bodhidharma (Daruma Daishi), fondatore della tradizione Zen: nei templi Zen si tengono letture di sutra e nelle case si dipinge il secondo occhio alle statuette portafortuna daruma a voto esaudito.',
    kanji: '禅', meaningIt: 'meditazione Zen, quiete mentale', strokes: 13, radical: '礻 (altare)',
    on: [{ kana: 'ゼン', romaji: 'zen' }],
    kun: [],
    originStory: 'L’altare spirituale (礻) unito a 単 (semplice, essenziale): la forma abbreviata del sanscrito dhyāna, raccoglimento silenzioso libero dal superfluo.',
    examples: [
      { word: '座禅', kana: 'ざぜん', romaji: 'zazen', meaning: 'meditazione seduta Zen' },
      { word: '禅寺', kana: 'ぜんでら', romaji: 'zendera', meaning: 'tempio Zen' },
      { word: '枯山水と禅', kana: 'かれさんすいとぜん', romaji: 'karesansui to zen', meaning: 'giardino secco e Zen' }
    ]
  },
  {
    id: '10-06', month: 10, day: 6, dayOfYear: 280, jpDate: '十月六日',
    season: 'Autunno', sekki: 'Shūbun', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Cooperazione Internazionale', titleJp: '国際協力の日 (Kokusai Kyōryoku no Hi)',
    observanceDesc: 'Il 6 ottobre 1954 il Giappone aderì al Piano di Colombo avviando la propria cooperazione tecnica e culturale internazionale nel mondo.',
    kanji: '協', meaningIt: 'cooperare, unire le forze', strokes: 8, radical: '十 (dieci/insieme)',
    on: [{ kana: 'キョウ', romaji: 'kyō' }],
    kun: [],
    originStory: 'Molti insieme (十) che uniscono tre volte la forza delle braccia (劦): la concordia che rende possibile ciò che da soli non si può sollevare.',
    examples: [
      { word: '協力', kana: 'きょうりょく', romaji: 'kyōryoku', meaning: 'collaborazione' },
      { word: '協調', kana: 'きょうちょう', romaji: 'kyōchō', meaning: 'armonia, intesa' },
      { word: '協会', kana: 'きょうかい', romaji: 'kyōkai', meaning: 'associazione' }
    ]
  },
  {
    id: '10-07', month: 10, day: 7, dayOfYear: 281, jpDate: '十月七日',
    season: 'Autunno', sekki: 'Shūbun', category: 'Rito Shintō',
    titleIt: 'Nagasaki Kunchi — Festa d’Autunno di Nagasaki', titleJp: '長崎くんち開幕 (Nagasaki Kunchi)',
    observanceDesc: 'Dal 7 al 9 ottobre Nagasaki vive la sua festa secolare al Santuario Suwa, celebre per la danza del drago Ja Odori che fonde radici shintō, cinesi ed europee fin dal Seicento.',
    kanji: '龍', meaningIt: 'drago celeste', strokes: 16, radical: '龍 (drago)',
    on: [{ kana: 'リュウ', romaji: 'ryū' }, { kana: 'リョウ', romaji: 'ryō' }],
    kun: [{ kana: 'たつ', romaji: 'tatsu' }],
    originStory: 'Pittogramma maestoso di una creatura serpentina coronata da corna e cresta sul dorso, signore delle nuvole e delle piogge benefiche.',
    examples: [
      { word: '龍踊', kana: 'じゃおどり', romaji: 'Ja Odori', meaning: 'danza del drago di Nagasaki' },
      { word: '龍安寺', kana: 'りょうあんじ', romaji: 'Ryōan-ji', meaning: 'celebre tempio del giardino zen a Kyoto' },
      { word: '昇り龍', kana: 'のぼりりゅう', romaji: 'nobori-ryū', meaning: 'drago ascendente (simbolo di slancio)' }
    ]
  },
  {
    id: '10-08', month: 10, day: 8, dayOfYear: 282, jpDate: '十月八日',
    season: 'Autunno', sekki: 'Kanro', category: 'Natura e Stagioni',
    titleIt: 'Kanro — Rugiada Fredda e Giornata del Legno', titleJp: '寒露・木の日 (Kanro · Ki no Hi)',
    observanceDesc: 'Diciassettesimo termine solare: la rugiada mattutina si raffredda annunciando i primi geli montani, mentre l’8 ottobre celebra il legno e le foreste perché combinando il 10 (十) e l’8 (八) si disegna proprio la forma del kanji dell’albero 木.',
    kanji: '木', meaningIt: 'albero, legno', strokes: 4, radical: '木 (albero)',
    on: [{ kana: 'モク', romaji: 'moku' }, { kana: 'ボク', romaji: 'boku' }],
    kun: [{ kana: 'き', romaji: 'ki' }, { kana: 'こ', romaji: 'ko' }],
    originStory: 'Pittogramma essenziale di un albero con il tronco verticale, i rami distesi verso l’alto e le radici che scendono nel terreno.',
    examples: [
      { word: '大木', kana: 'たいぼく', romaji: 'taiboku', meaning: 'grande albero' },
      { word: '木漏れ日', kana: 'こもれび', romaji: 'komorebi', meaning: 'luce che filtra tra le foglie' },
      { word: '木工', kana: 'もっこう', romaji: 'mokkō', meaning: 'falegnameria artistica' }
    ]
  },
  {
    id: '10-09', month: 10, day: 9, dayOfYear: 283, jpDate: '十月九日',
    season: 'Autunno', sekki: 'Kanro', category: 'Rito Shintō',
    titleIt: 'Festival d’Autunno di Takayama (Hachiman Matsuri)', titleJp: '高山秋祭り・トラックの日 (Takayama Matsuri)',
    observanceDesc: 'Tra il 9 e il 10 ottobre i magnifici carri dorati di Hida Takayama sfilano nuovamente sotto le foglie autunnali con migliaia di lanterne accese alla sera (Yoimatsuri).',
    kanji: '金', meaningIt: 'oro, metallo, denaro', strokes: 8, radical: '金 (metallo)',
    on: [{ kana: 'キン', romaji: 'kin' }, { kana: 'コン', romaji: 'kon' }],
    kun: [{ kana: 'かね', romaji: 'kane' }, { kana: 'かな', romaji: 'kana' }],
    originStory: 'Pepite preziose nascoste nella terra (土) sotto un riparo o miniera coperta (亼): il metallo lucente che non arrugginisce.',
    examples: [
      { word: '金色', kana: 'きんいろ', romaji: 'kin’iro', meaning: 'colore oro' },
      { word: '金閣寺', kana: 'きんかくじ', romaji: 'Kinkaku-ji', meaning: 'Padiglione d’Oro di Kyoto' },
      { word: '金曜日', kana: 'きんようび', romaji: 'kin’yōbi', meaning: 'venerdì' }
    ]
  },
  {
    id: '10-10', month: 10, day: 10, dayOfYear: 284, jpDate: '十月十日',
    season: 'Autunno', sekki: 'Kanro', category: 'Festa Nazionale',
    titleIt: 'Giorno dello Sport (data storica Olimpionica) e del Sentō', titleJp: '体育の日・銭湯の日 (Taiiku no Hi · Sentō no Hi)',
    observanceDesc: 'Ricorda la cerimonia d’apertura delle Olimpiadi di Tokyo del 10 ottobre 1964 (fino al 1999 festa nazionale in questa data, oggi secondo lunedì del mese); 10-10 si legge anche sen-tō ("bagno pubblico").',
    kanji: '走', meaningIt: 'correre, slanciarsi', strokes: 7, radical: '走 (correre)',
    on: [{ kana: 'ソウ', romaji: 'sō' }],
    kun: [{ kana: 'はし(る)', romaji: 'hashi(ru)' }],
    originStory: 'Una persona con le braccia piegate nello slancio della corsa (夭/土) sopra un piede in movimento (止): avanzare rapidi sulla pista.',
    examples: [
      { word: '競走', kana: 'きょうそう', romaji: 'kyōsō', meaning: 'gara di corsa' },
      { word: '走者', kana: 'そうしゃ', romaji: 'sōsha', meaning: 'corridore' },
      { word: 'ご馳走', kana: 'ごちそう', romaji: 'gochisō', meaning: 'banchetto prelibato ("correre a cercare ingredienti")' }
    ]
  },
  {
    id: '10-11', month: 10, day: 11, dayOfYear: 285, jpDate: '十月十一日',
    season: 'Autunno', sekki: 'Kanro', category: 'Anniversario Storico',
    titleIt: 'Sicurezza Urbana e Settimana delle Ferrovie', titleJp: '安全・安心なまちづくりの日・鉄道の日週間',
    observanceDesc: 'A metà ottobre le campagne celebrano i nuovi raccolti di riso e le ferrovie storiche preparano il Tetsudō no Hi tra valli che cominciano a tingersi d’autunno.',
    kanji: '安', meaningIt: 'quieto, sicuro, sereno', strokes: 6, radical: '宀 (tetto)',
    on: [{ kana: 'アン', romaji: 'an' }],
    kun: [{ kana: 'やす(い)', romaji: 'yasu(i)' }],
    originStory: 'Una donna seduta raccolta (女) al riparo sotto il tetto di casa (宀): immagine primordiale di pace domestica e sicurezza interiore.',
    examples: [
      { word: '安心', kana: 'あんしん', romaji: 'anshin', meaning: 'sollievo, tranquillità' },
      { word: '安全', kana: 'あんぜん', romaji: 'anzen', meaning: 'sicurezza' },
      { word: '平安時代', kana: 'へいあんじだい', romaji: 'Heian-jidai', meaning: 'epoca Heian ("pace e serenità")' }
    ]
  },
  {
    id: '10-12', month: 10, day: 12, dayOfYear: 286, jpDate: '十月十二日',
    season: 'Autunno', sekki: 'Kanro', category: 'Rito Buddhista',
    titleIt: 'Oeshiki al Tempio Ikegami Honmon-ji', titleJp: 'お会式（池上本門寺）・豆乳の日 (Oeshiki)',
    observanceDesc: 'Tra il 12 e il 13 ottobre decine di migliaia di fedeli sfilano fino al tempio Honmon-ji di Tokyo con grandi lanterne fiorite mandō e tamburi per commemorare il monaco Nichiren (1282).',
    kanji: '万', meaningIt: 'diecimila, moltitudine', strokes: 3, radical: '一 (uno)',
    on: [{ kana: 'マン', romaji: 'man' }, { kana: 'バン', romaji: 'ban' }],
    kun: [{ kana: 'よろず', romaji: 'yorozu' }],
    originStory: 'Nella forma tradizionale 萬 raffigurava uno scorpione o una moltitudine in danza cerimoniale, poi semplificato in 万 per indicare diecimila e la ricchezza innumerevole del cosmo.',
    examples: [
      { word: '万葉集', kana: 'まんようしゅう', romaji: 'Man’yōshū', meaning: 'antologia poetica delle "diecimila foglie"' },
      { word: '万灯', kana: 'まんどう', romaji: 'mandō', meaning: 'diecimila lanterne votive' },
      { word: '万歳', kana: 'ばんざい', romaji: 'banzai', meaning: 'diecimila anni (evviva)' }
    ]
  },
  {
    id: '10-13', month: 10, day: 13, dayOfYear: 287, jpDate: '十月十三日',
    season: 'Autunno', sekki: 'Kanro', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Patata Dolce Arrosto (Satsumaimo)', titleJp: 'さつまいもの日 (Satsumaimo no Hi)',
    observanceDesc: 'A Kawagoe, celebre città edoiana delle patate dolci, si celebra il 13 ottobre perché "tredici ri" (jūsan-ri) ricorda sia la distanza da Edo a Kawagoe sia l’espressione "kuri yori umai" ("più buona delle castagne": 9+4 = 13).',
    kanji: '栗', meaningIt: 'castagna', strokes: 10, radical: '木 (albero)',
    on: [{ kana: 'リツ', romaji: 'ritsu' }],
    kun: [{ kana: 'くり', romaji: 'kuri' }],
    originStory: 'Frutti spinosi appesi ai rami di un albero (木): i ricci dorati delle castagne che annunciano il pieno autunno nei boschi giapponesi.',
    examples: [
      { word: '栗ご飯', kana: 'くりごはん', romaji: 'kurigohan', meaning: 'riso cotto con castagne' },
      { word: '栗色', kana: 'くりいろ', romaji: 'kuriiro', meaning: 'colore castano' },
      { word: '栗きんとん', kana: 'くりきんとん', romaji: 'kurikinton', meaning: 'dolce di castagne passate' }
    ]
  },
  {
    id: '10-14', month: 10, day: 14, dayOfYear: 288, jpDate: '十月十四日',
    season: 'Autunno', sekki: 'Kanro', category: 'Anniversario Storico',
    titleIt: 'Giornata delle Ferrovie Giapponesi', titleJp: '鉄道の日 (Tetsudō no Hi)',
    observanceDesc: 'Il 14 ottobre 1872 fu inaugurata la prima linea ferroviaria del Giappone tra Shimbashi (Tokyo) e Yokohama, alla presenza dell’imperatore Meiji su treni a vapore.',
    kanji: '線', meaningIt: 'linea, binario, filo sottile', strokes: 15, radical: '糸 (filo)',
    on: [{ kana: 'セン', romaji: 'sen' }],
    kun: [{ kana: 'すじ', romaji: 'suji' }],
    originStory: 'Un filo di seta (糸) che scorre diritto come acqua di sorgente (泉): il tratto teso delle strade ferrate, dei raggi e dei disegni.',
    examples: [
      { word: '山手線', kana: 'やまのてせん', romaji: 'Yamanote-sen', meaning: 'linea circolare di Tokyo' },
      { word: '新幹線', kana: 'しんかんせん', romaji: 'Shinkansen', meaning: 'treno ad alta velocità' },
      { word: '視線', kana: 'しせん', romaji: 'shisen', meaning: 'linea dello sguardo' }
    ]
  },
  {
    id: '10-15', month: 10, day: 15, dayOfYear: 289, jpDate: '十月十五日',
    season: 'Autunno', sekki: 'Kanro', category: 'Rito Shintō',
    titleIt: 'Nada no Kenka Matsuri a Himeji e Giornata dei Funghi', titleJp: '灘のけんか祭り・きのこの日 (Kenka Matsuri)',
    observanceDesc: 'A Himeji i maestosi reliquiari mikoshi si urtano ritualmente con vigore al santuario Matsubara Hachiman; nelle cucine di tutta l’isola profumano intanto i funghi d’autunno matsutake e shiitake.',
    kanji: '茸', meaningIt: 'fungo del bosco', strokes: 9, radical: '艹 (erba)',
    on: [{ kana: 'ジョウ', romaji: 'jō' }],
    kun: [{ kana: 'きのこ', romaji: 'kinoko' }, { kana: 'たけ', romaji: 'take' }],
    originStory: 'Pianta spontanea (艹) dalla cappella tondeggiante simile a un orecchio (耳) che spunta sul legno umido dopo le piogge autunnali.',
    examples: [
      { word: '松茸', kana: 'まつたけ', romaji: 'matsutake', meaning: 'pregiato fungo profumato dei pini' },
      { word: '椎茸', kana: 'しいたけ', romaji: 'shiitake', meaning: 'fungo shiitake' },
      { word: '初茸', kana: 'はつたけ', romaji: 'hatsutake', meaning: 'primi funghi d’autunno' }
    ]
  },
  {
    id: '10-16', month: 10, day: 16, dayOfYear: 290, jpDate: '十月十六日',
    season: 'Autunno', sekki: 'Kanro', category: 'Giornata Curiosa',
    titleIt: 'Giornata Mondiale dell’Alimentazione e del Riso Nuovo', titleJp: '世界食糧デー (Sekai Shokuryō Dē)',
    observanceDesc: 'A metà ottobre il raccolto del riso nuovo shinmai arriva finalmente sulle tavole giapponesi in ciotole fumanti e lucenti, accompagnato dal ringraziamento per il cibo quotidiano.',
    kanji: '飯', meaningIt: 'riso cotto, pasto', strokes: 12, radical: '食 (cibo)',
    on: [{ kana: 'ハン', romaji: 'han' }],
    kun: [{ kana: 'めし', romaji: 'meshi' }],
    originStory: 'Cibo (飠) unito a 反 (volgere e servire regolarmente ogni giorno): il pasto quotidiano a base di riso al vapore.',
    examples: [
      { word: 'ご飯', kana: 'ごはん', romaji: 'gohan', meaning: 'riso cotto / pasto' },
      { word: '朝ご飯', kana: 'あさごはん', romaji: 'asagohan', meaning: 'colazione' },
      { word: '炊飯器', kana: 'すいはんき', romaji: 'suihanki', meaning: 'cuociriso elettrico' }
    ]
  },
  {
    id: '10-17', month: 10, day: 17, dayOfYear: 291, jpDate: '十月十七日',
    season: 'Autunno', sekki: 'Kanro', category: 'Rito Shintō',
    titleIt: 'Kannamesai al Grande Santuario di Ise', titleJp: '神嘗祭 (Kannamesai)',
    observanceDesc: 'Il rito più importante del calendario shintō a Ise Jingū: le prime spighe del nuovo raccolto di riso (hatsuho) vengono offerte ad Amaterasu Ōmikami come primo dono prima che gli uomini le assaggino.',
    kanji: '穂', meaningIt: 'spiga di riso o grano', strokes: 15, radical: '禾 (spiga)',
    on: [{ kana: 'スイ', romaji: 'sui' }],
    kun: [{ kana: 'ほ', romaji: 'ho' }],
    originStory: 'Pianta di cereale (禾) con un dono prezioso e gentile (恵): le spighe d’oro piegate dal peso dei chicchi maturi.',
    examples: [
      { word: '初穂', kana: 'はつほ', romaji: 'hatsuho', meaning: 'primizie del raccolto offerte ai kami' },
      { word: '稲穂', kana: 'いなほ', romaji: 'inaho', meaning: 'spiga di riso' },
      { word: '瑞穂', kana: 'みずほ', romaji: 'mizuho', meaning: 'spighe rigogliose (antico nome del Giappone)' }
    ]
  },
  {
    id: '10-18', month: 10, day: 18, dayOfYear: 292, jpDate: '十月十八日',
    season: 'Autunno', sekki: 'Kanro', category: 'Rito Buddhista',
    titleIt: 'Kiku Kuyō al Sensō-ji e Giornata della Statistica', titleJp: '金龍の舞（浅草寺）・統計の日',
    observanceDesc: 'Presso il tempio Sensō-ji di Asakusa si danza la danza sacra del Drago d’Oro e si benedicono i crisantemi; nello stesso giorno del 1879 fu adottato il primo modulo moderno di statistica nazionale.',
    kanji: '竜', meaningIt: 'drago', strokes: 10, radical: '龍 (drago)',
    on: [{ kana: 'リュウ', romaji: 'ryū' }],
    kun: [{ kana: 'たつ', romaji: 'tatsu' }],
    originStory: 'Forma moderna semplificata di 龍: un’architettura di linee agili che salgono da terra in volo sinuoso.',
    examples: [
      { word: '竜巻', kana: 'たつまき', romaji: 'tatsumaki', meaning: 'tromba d’aria ("drago avvolgente")' },
      { word: '恐竜', kana: 'きょうりゅう', romaji: 'kyōryū', meaning: 'dinosauro' },
      { word: '天竜川', kana: 'てんりゅうがわ', romaji: 'Tenryūgawa', meaning: 'fiume Tenryū' }
    ]
  },
  {
    id: '10-19', month: 10, day: 19, dayOfYear: 293, jpDate: '十月十九日',
    season: 'Autunno', sekki: 'Kanro', category: 'Rito Shintō',
    titleIt: 'Bettara Ichi a Nihonbashi (Tokyo)', titleJp: 'べったら市 (Bettara Ichi)',
    observanceDesc: 'Antico mercato di epoca Edo attorno al santuario Takarada Ebisu di Tokyo, illuminato da oltre mille lanterne di carta dove si vendono ravanelli daikon marinati dolci nel malto di riso kōji.',
    kanji: '市', meaningIt: 'mercato, fiera, città', strokes: 5, radical: '巾 (tessuto)',
    on: [{ kana: 'シ', romaji: 'shi' }],
    kun: [{ kana: 'いち', romaji: 'ichi' }],
    originStory: 'Un drappo esposto su un sostegno (亠 + 巾) o una piazzetta crocevia dove artigiani e contadini scambiavano merci in giorni stabiliti.',
    examples: [
      { word: '朝市', kana: 'あさいち', romaji: 'asaichi', meaning: 'mercato del mattino' },
      { word: '市場', kana: 'いちば・しじょう', romaji: 'ichiba / shijō', meaning: 'mercato locale / finanziario' },
      { word: '京都市', kana: 'きょうとし', romaji: 'Kyōto-shi', meaning: 'città di Kyoto' }
    ]
  },
  {
    id: '10-20', month: 10, day: 20, dayOfYear: 294, jpDate: '十月二十日',
    season: 'Autunno', sekki: 'Kanro', category: 'Rito Shintō',
    titleIt: 'Ebisu-kō d’Autunno (Festa dei Mercanti)', titleJp: '秋のえびす講・リサイクルの日 (Ebisu-kō)',
    observanceDesc: 'Nel mese in cui gli altri kami si recano a Izumo, Ebisu resta a custodire i villaggi e le botteghe: i commercianti gli offrono orate rosse tai e sakè ringraziando per il lavoro svolto.',
    kanji: '鯛', meaningIt: 'orata rossa giapponese (tai)', strokes: 19, radical: '魚 (pesce)',
    on: [{ kana: 'チョウ', romaji: 'chō' }],
    kun: [{ kana: 'たい', romaji: 'tai' }],
    originStory: 'Pesce (魚) dalle forme armoniose e compiute (周): per il suo colore rosso festoso e il suono simile a medetai ("lieto auspicio"), è il pesce d’onore delle feste.',
    examples: [
      { word: '真鯛', kana: 'まだい', romaji: 'madai', meaning: 'orata rossa pregiata' },
      { word: 'めでたい', kana: 'めでたい', romaji: 'medetai', meaning: 'propizio, gioioso' },
      { word: '鯛めし', kana: 'たいめし', romaji: 'taimeshi', meaning: 'riso cotto con orata' }
    ]
  },
  {
    id: '10-21', month: 10, day: 21, dayOfYear: 295, jpDate: '十月二十一日',
    season: 'Autunno', sekki: 'Kanro', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Luce (Akari no Hi)', titleJp: 'あかりの日 (Akari no Hi)',
    observanceDesc: 'Nel 1879 Thomas Edison perfezionò la lampada a incandescenza usando anche fibra di bambù giapponese di Yawata (Kyoto): il 21 ottobre celebra il dialogo tra luce, calore e risparmio.',
    kanji: '明', meaningIt: 'luminoso, chiaro, alba', strokes: 8, radical: '日 (sole)',
    on: [{ kana: 'メイ', romaji: 'mei' }, { kana: 'ミョウ', romaji: 'myō' }],
    kun: [{ kana: 'あか(るい)', romaji: 'aka(rui)' }, { kana: 'あ(かり)', romaji: 'a(kari)' }],
    originStory: 'Il sole (日) unito alla luna (月): i due astri più luminosi del cielo che insieme dissipano ogni oscurità.',
    examples: [
      { word: '明かり', kana: 'あかり', romaji: 'akari', meaning: 'luce, chiarore di lanterna' },
      { word: '明日', kana: 'あした・あす', romaji: 'ashita / asu', meaning: 'domani' },
      { word: '透明', kana: 'とうめい', romaji: 'tōmei', meaning: 'trasparente' }
    ]
  },
  {
    id: '10-22', month: 10, day: 22, dayOfYear: 296, jpDate: '十月二十二日',
    season: 'Autunno', sekki: 'Kanro', category: 'Rito Shintō',
    titleIt: 'Jidai Matsuri di Kyoto e Kurama no Hi Matsuri', titleJp: '時代祭・鞍馬の火祭 (Jidai Matsuri)',
    observanceDesc: 'Giorno sacro a Kyoto: di mattina sfila il corteo storico Jidai Matsuri con duemila figuranti in costumi dal periodo Meiji fino all’anno 794 (fondazione di Heian-kyō); la sera sui monti di Kurama arde il suggestivo Festival del Fuoco.',
    kanji: '京', meaningIt: 'capitale imperiale (Kyōto)', strokes: 8, radical: '亠 (coperchio)',
    on: [{ kana: 'キョウ', romaji: 'kyō' }, { kana: 'ケイ', romaji: 'kei' }],
    kun: [{ kana: 'みやこ', romaji: 'miyako' }],
    originStory: 'Un edificio sovrastante su un’altura (亠 + 口 + 小): il palazzo maestoso edificato su un colle, sede della capitale millenaria di Kyoto.',
    examples: [
      { word: '京都', kana: 'きょうと', romaji: 'Kyōto', meaning: 'Kyoto, antica capitale' },
      { word: '東京', kana: 'とうきょう', romaji: 'Tōkyō', meaning: 'Tokyo ("capitale orientale")' },
      { word: '上京', kana: 'じょうきょう', romaji: 'jōkyō', meaning: 'salire verso la capitale' }
    ]
  },
  {
    id: '10-23', month: 10, day: 23, dayOfYear: 297, jpDate: '十月二十三日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Natura e Stagioni',
    titleIt: 'Sōkō — Discesa della Brina', titleJp: '霜降 (Sōkō)',
    observanceDesc: 'Diciottesimo termine solare: la brina mattutina comincia a posarsi sui campi del nord e sui versanti alpini, accendendo il rosso vivo degli aceri momiji e preparando il letargo degli animali.',
    kanji: '霜', meaningIt: 'brina, gelata bianca', strokes: 17, radical: '雨 (pioggia)',
    on: [{ kana: 'ソウ', romaji: 'sō' }],
    kun: [{ kana: 'しも', romaji: 'shimo' }],
    originStory: 'Fenomeno celeste (雨) che si posa fitto e visibile sulle superfici (相): i cristalli d’argento del primo gelo d’autunno.',
    examples: [
      { word: '霜降', kana: 'そうこう', romaji: 'sōkō', meaning: 'Discesa della Brina (sekki)' },
      { word: '初霜', kana: 'はつしも', romaji: 'hatsushimo', meaning: 'prima brina della stagione' },
      { word: '霜柱', kana: 'しもばしら', romaji: 'shimobashira', meaning: 'aguglie di ghiaccio nel terreno' }
    ]
  },
  {
    id: '10-24', month: 10, day: 24, dayOfYear: 298, jpDate: '十月二十四日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Fringuello di Giava (Bunchō)', titleJp: '文鳥の日 (Bunchō no Hi)',
    observanceDesc: 'Il 24 ottobre gli amanti degli uccelli celebrano il grazioso fringuello di Giava (bunchō), molto amato nelle case giapponesi: la data gioca con le sillabe 10 (te, dieci dita), 2 (ni) e 4 (shi-awase) per formare te ni shiawase, "felicità tra le mani".',
    kanji: '羽', meaningIt: 'piuma, ala', strokes: 6, radical: '羽 (piume)',
    on: [{ kana: 'ウ', romaji: 'u' }],
    kun: [{ kana: 'は', romaji: 'ha' }, { kana: 'はね', romaji: 'hane' }],
    originStory: 'Pittogramma di due ali piumate affiancate che si aprono pronte al volo. Serve anche come classificatore numerico per uccelli e conigli.',
    examples: [
      { word: '一羽', kana: 'いちわ', romaji: 'ichiwa', meaning: 'un uccello (o coniglio)' },
      { word: '羽織', kana: 'はおり', romaji: 'haori', meaning: 'soprabito tradizionale del kimono' },
      { word: '羽毛', kana: 'うもう', romaji: 'umō', meaning: 'piumino morbido' }
    ]
  },
  {
    id: '10-25', month: 10, day: 25, dayOfYear: 299, jpDate: '十月二十五日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Giornata Curiosa',
    titleIt: 'Giornata dei Tagliolini Kishimen di Nagoya', titleJp: 'きしめんの日 (Kishimen no Hi)',
    observanceDesc: 'A Nagoya il 25 ottobre celebra gli ampi tagliolini piatti di grano kishimen in brodo caldo di soia, molto richiesti nei primi freddi d’autunno.',
    kanji: '丼', meaningIt: 'ciotola profonda (donburi)', strokes: 5, radical: '丶 (punto)',
    on: [{ kana: 'トン', romaji: 'ton' }, { kana: 'ドン', romaji: 'don' }],
    kun: [{ kana: 'どんぶり', romaji: 'donburi' }],
    originStory: 'Un pozzo profondo (井) con qualcosa gettato al centro (丶): immagine sia del tonfo nell’acqua sia della ciotola colma di riso e brodo caldo.',
    examples: [
      { word: '丼物', kana: 'どんぶりもの', romaji: 'donburimono', meaning: 'piatti unici serviti in ciotola su riso' },
      { word: '親子丼', kana: 'おやこどん', romaji: 'oyakodon', meaning: 'riso con pollo e uovo' },
      { word: '天丼', kana: 'てんどん', romaji: 'tendon', meaning: 'riso con tempura' }
    ]
  },
  {
    id: '10-26', month: 10, day: 26, dayOfYear: 300, jpDate: '十月二十六日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Giornata Curiosa',
    titleIt: 'Giornata dei Cachi (Kaki no Hi)', titleJp: '柿の日 (Kaki no Hi)',
    observanceDesc: 'Il 26 ottobre 1895 il poeta Masaoka Shiki, soggiornando a Nara dopo una lunga passeggiata al Hōryū-ji, scrisse l’immortale haiku: "Addento un cachi / e rintocca la campana / del tempio Hōryū-ji".',
    kanji: '柿', meaningIt: 'cachi (kaki)', strokes: 9, radical: '木 (albero)',
    on: [{ kana: 'シ', romaji: 'shi' }],
    kun: [{ kana: 'かき', romaji: 'kaki' }],
    originStory: 'Un albero (木) dai frutti rotondi arancioni che restano appesi sui rami nudi d’autunno e vengono venduti nelle piazze e nei mercati (市) d’ottobre.',
    examples: [
      { word: '干し柿', kana: 'ほしがき', romaji: 'hoshigaki', meaning: 'cachi essiccati appesi sotto le gronde' },
      { word: '柿色', kana: 'かきいろ', romaji: 'kakiiro', meaning: 'arancione caldo del cachi' },
      { word: '柿渋', kana: 'かきしぶ', romaji: 'kakishibu', meaning: 'tannino naturale di cachi per carta washi e legno' }
    ]
  },
  {
    id: '10-27', month: 10, day: 27, dayOfYear: 301, jpDate: '十月二十七日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Anniversario Storico',
    titleIt: 'Inizio della Settimana della Lettura (Dokusho Shūkan)', titleJp: '読書週間・文字・活字文化の日 (Dokusho Shūkan)',
    observanceDesc: 'Dal 27 ottobre al 9 novembre (attorno al Giorno della Cultura) librerie e biblioteche in tutto il Giappone celebrano la lettura d’autunno ("aki no yonaga", le lunghe notti adatte ai libri).',
    kanji: '本', meaningIt: 'libro, origine, radice', strokes: 5, radical: '木 (albero)',
    on: [{ kana: 'ホン', romaji: 'hon' }],
    kun: [{ kana: 'もと', romaji: 'moto' }],
    originStory: 'Un albero (木) segnato da un tratto alla base del tronco: indica ciò che sta alle radici e all’origine, e per estensione il testo fondamentale o libro.',
    examples: [
      { word: '日本', kana: 'にほん・にっぽん', romaji: 'Nihon / Nippon', meaning: 'Giappone ("origine del sole")' },
      { word: '本屋', kana: 'ほんや', romaji: 'hon’ya', meaning: 'libreria' },
      { word: '古本', kana: 'ふるほん', romaji: 'furuhon', meaning: 'libro usato o antico' }
    ]
  },
  {
    id: '10-28', month: 10, day: 28, dayOfYear: 302, jpDate: '十月二十八日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Anniversario Storico',
    titleIt: 'Giornata della Prefettura di Gunma', titleJp: '群馬県民の日 (Gunma Kenmin no Hi)',
    observanceDesc: 'Nel 1871 fu istituita la prefettura di Gunma tra le montagne del Kantō settentrionale, terra di sete artigianali, terme di Kusatsu e bamboline kokeshi.',
    kanji: '絹', meaningIt: 'seta', strokes: 13, radical: '糸 (filo)',
    on: [{ kana: 'ケン', romaji: 'ken' }],
    kun: [{ kana: 'きぬ', romaji: 'kinu' }],
    originStory: 'Fili preziosi (糸) srotolati dai bozzoli tondi (口 + 月/肉) per tessere stoffe luminose e leggere come il vento.',
    examples: [
      { word: '絹織物', kana: 'きぬおりもの', romaji: 'kinuorimono', meaning: 'tessuto di seta' },
      { word: '正絹', kana: 'しょうけん', romaji: 'shōken', meaning: 'pura seta per kimono' },
      { word: '絹ごし豆腐', kana: 'きぬごしどうふ', romaji: 'kinugoshi dōfu', meaning: 'tofu morbido filtrato su seta' }
    ]
  },
  {
    id: '10-29', month: 10, day: 29, dayOfYear: 303, jpDate: '十月二十九日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’Asciugamano di Cortesia (Oshibori)', titleJp: 'おしぼりの日 (Oshibori no Hi)',
    observanceDesc: 'Per gioco numerico (10 = ten, dieci dita; 2 = fu e 9 = ku, cioè fuku, "asciugare"), ricorda l’antica usanza giapponese di offrire all’ospite un panno umido caldo o fresco appena entra in locanda o al ristorante.',
    kanji: '拭', meaningIt: 'asciugare, pulire strofinando', strokes: 9, radical: '扌 (mano)',
    on: [{ kana: 'ショク', romaji: 'shoku' }],
    kun: [{ kana: 'ふ(く)', romaji: 'fu(ku)' }, { kana: 'ぬぐ(う)', romaji: 'nugu(u)' }],
    originStory: 'Una mano (扌) che applica cura regolare (式): passare il panno con gesto pulito su mani, tavole di legno e specchi.',
    examples: [
      { word: '手拭い', kana: 'てぬぐい', romaji: 'tenugui', meaning: 'asciugamano sottile di cotone tinto' },
      { word: '雑巾拭き', kana: 'ぞうきんぶき', romaji: 'zōkinbuki', meaning: 'pulizia dei pavimenti in legno' },
      { word: '払拭', kana: 'ふっしょく', romaji: 'fusshoku', meaning: 'dissipare ogni dubbio' }
    ]
  },
  {
    id: '10-30', month: 10, day: 30, dayOfYear: 304, jpDate: '十月三十日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Anniversario Storico',
    titleIt: 'Giornata del Riso con Uovo (Tamago Kake Gohan) e del Primo Amore', titleJp: '卵かけご飯の日・初恋の日 (Tamago Kake Gohan)',
    observanceDesc: 'In autunno si celebrano i sapori semplici della tavola rurale come il riso caldo con uovo crudo e gocce di salsa di soia (TKG) a Unnan (Shimane), mentre Tōson Shimazaki ispirò il Giorno del Primo Amore.',
    kanji: '卵', meaningIt: 'uovo', strokes: 7, radical: '卩 (sigillo)',
    on: [{ kana: 'ラン', romaji: 'ran' }],
    kun: [{ kana: 'たまご', romaji: 'tamago' }],
    originStory: 'Pittogramma di due uova o covate simmetriche di piccoli germi vitali accostate l’una all’altra.',
    examples: [
      { word: '卵焼き', kana: 'たまごやき', romaji: 'tamagoyaki', meaning: 'frittatina arrotolata giapponese' },
      { word: '温泉卵', kana: 'おんせんたまご', romaji: 'onsen tamago', meaning: 'uovo cotto lento nelle acque termali' },
      { word: '産卵', kana: 'さんらん', romaji: 'sanran', meaning: 'deposizione delle uova' }
    ]
  },
  {
    id: '10-31', month: 10, day: 31, dayOfYear: 305, jpDate: '十月三十一日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Tè Giapponese e di Halloween a Tokyo', titleJp: '日本茶の日・ガスの記念日 (Nihoncha no Hi)',
    observanceDesc: 'Nel 1191 (calendario antico) il monaco Eisai tornò dalla Cina portando i semi di tè verde e il testo Kissa Yōjōki ("Bere il tè per la salute"), dando vita alla cultura giapponese del tè.',
    kanji: '碗', meaningIt: 'tazza da tè, ciotola in ceramica', strokes: 13, radical: '石 (pietra)',
    on: [{ kana: 'ワン', romaji: 'wan' }],
    kun: [],
    originStory: 'Pietra e ceramica (石) modellata e curvata con morbidezza (宛) per accogliere nel palmo il tè matcha o il riso caldo.',
    examples: [
      { word: '茶碗', kana: 'ちゃわん', romaji: 'chawan', meaning: 'tazza da cerimonia del tè / ciotola da riso' },
      { word: '小碗', kana: 'こわん', romaji: 'kowan', meaning: 'piccola ciotola' },
      { word: '湯碗', kana: 'ゆわん', romaji: 'yuwan', meaning: 'tazza per infusi caldi' }
    ]
  },

  // NOVEMBRE (30 giorni)
  {
    id: '11-01', month: 11, day: 1, dayOfYear: 306, jpDate: '十一月一日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Cane, dei Ventagli e del Tè Nero Giapponese', titleJp: '犬の日・紅茶の日・灯台記念日 (Shimotsuki)',
    observanceDesc: 'Novembre (Shimotsuki, "mese della brina") inizia con il giorno del cane (11-1 = wan-wan-wan), quello del tè nero (ricordo di Daikokuya Kōdayū nel 1791) e la Giornata dei Fari costieri (primo faro a Kannonzaki nel 1868).',
    kanji: '犬', meaningIt: 'cane', strokes: 4, radical: '犬 (cane)',
    on: [{ kana: 'ケン', romaji: 'ken' }],
    kun: [{ kana: 'いぬ', romaji: 'inu' }],
    originStory: 'Pittogramma di profilo di un cane con le orecchie tese, il muso allungato e la coda arricciata; con il trattino superiore a destra che ne indica il muso.',
    examples: [
      { word: '秋田犬', kana: 'あきたいぬ', romaji: 'Akitainu', meaning: 'cane di razza Akita' },
      { word: '柴犬', kana: 'しばいぬ', romaji: 'Shibainu', meaning: 'cane di razza Shiba' },
      { word: '愛犬', kana: 'あいけん', romaji: 'aiken', meaning: 'amato cane' }
    ]
  },
  {
    id: '11-02', month: 11, day: 2, dayOfYear: 307, jpDate: '十一月二日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Rito Shintō',
    titleIt: 'Karatsu Kunchi — Carri Giganti nella Prefettura di Saga', titleJp: '唐津くんち開幕・書道の日 (Karatsu Kunchi)',
    observanceDesc: 'Nel Kyūshū dal 2 al 4 novembre sfilano i quattordici colossali carri hikiyama laccati di Karatsu a forma di leoni, elmi samurai e orate rosse. Il 11-2 si legge anche i-i fude / mo-ji per gli amanti della calligrafia.',
    kanji: '墨', meaningIt: 'inchiostro sumi, bastoncino d’inchiostro', strokes: 14, radical: '土 (terra)',
    on: [{ kana: 'ボク', romaji: 'boku' }],
    kun: [{ kana: 'すみ', romaji: 'sumi' }],
    originStory: 'Fuliggine nera (黒) impastata con colla e terra minerale (土) fino a formare un panetto compatto da sfregare sulla pietra da inchiostro suzuri.',
    examples: [
      { word: '墨絵', kana: 'すみえ', romaji: 'sumi-e', meaning: 'pittura a inchiostro monocromo' },
      { word: '書道と墨', kana: 'しょどうとすみ', romaji: 'shodō to sumi', meaning: 'calligrafia e inchiostro' },
      { word: '墨汁', kana: 'ぼくじゅう', romaji: 'bokujū', meaning: 'inchiostro liquido per calligrafia' }
    ]
  },
  {
    id: '11-03', month: 11, day: 3, dayOfYear: 308, jpDate: '十一月三日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Festa Nazionale',
    titleIt: 'Giornata della Cultura (Bunka no Hi)', titleJp: '文化の日 (Bunka no Hi)',
    observanceDesc: 'Festa nazionale dedicata all’amore per la cultura, le arti e la pace (anniversario della promulgazione della Costituzione nel 1946). Il Palazzo Imperiale conferisce l’Ordine della Cultura e i musei aprono le porte gratis.',
    kanji: '化', meaningIt: 'trasformazione, civiltà, cultura', strokes: 4, radical: '匕 (persona voltata)',
    on: [{ kana: 'カ', romaji: 'ka' }, { kana: 'ケ', romaji: 'ke' }],
    kun: [{ kana: 'ば(ける)', romaji: 'ba(keru)' }, { kana: 'ば(かす)', romaji: 'ba(kasu)' }],
    originStory: 'Una persona dritta in piedi (亻) accostata a una persona capovolta o mutata (匕): il passaggio da una forma all’altra, principio dell’arte e della natura.',
    examples: [
      { word: '文化', kana: 'ぶんか', romaji: 'bunka', meaning: 'cultura' },
      { word: '文化財', kana: 'ぶんかざい', romaji: 'bunkazai', meaning: 'bene culturale' },
      { word: '変化', kana: 'へんか', romaji: 'henka', meaning: 'mutamento' }
    ]
  },
  {
    id: '11-04', month: 11, day: 4, dayOfYear: 309, jpDate: '十一月四日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Costituzione dell’UNESCO', titleJp: 'ユネスコ憲章記念日 (Yunesuko Kenshō Kinenbi)',
    observanceDesc: 'Il 4 novembre 1946 entrò in vigore la Costituzione dell’UNESCO, a cui il Giappone è profondamente legato per la tutela dei propri siti Patrimonio dell’Umanità da Hōryū-ji al Monte Fuji.',
    kanji: '遺', meaningIt: 'lasciare in eredità, tramandare', strokes: 15, radical: '辶 (cammino)',
    on: [{ kana: 'イ', romaji: 'i' }, { kana: 'ユイ', romaji: 'yui' }],
    kun: [{ kana: 'のこ(す)', romaji: 'noko(su)' }],
    originStory: 'Portare lungo il cammino del tempo (辶) qualcosa di prezioso (貴): ciò che una generazione consegna con rispetto a quelle future.',
    examples: [
      { word: '世界遺産', kana: 'せかいいさん', romaji: 'sekai isan', meaning: 'Patrimonio dell’Umanità' },
      { word: '遺跡', kana: 'いせき', romaji: 'iseki', meaning: 'sito archeologico' },
      { word: '遺言', kana: 'ゆいごん', romaji: 'yuigon', meaning: 'testamento' }
    ]
  },
  {
    id: '11-05', month: 11, day: 5, dayOfYear: 310, jpDate: '十一月五日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Giornata Curiosa',
    titleIt: 'Giornata delle Mele di Aomori e Prevenzione Tsunami', titleJp: 'いいりんごの日・津波防災の日 (Ringo no Hi)',
    observanceDesc: 'L’11-5 si legge i-i (11 = "buono") rin-go (5 = fine di ringo, "mela") nella prefettura di Aomori, regina delle mele d’autunno; ricorda inoltre il gesto di Hamaguchi Goryō nel 1854 ("Inamura no Hi"), che bruciò i covoni di riso per guidare in salvo il villaggio dallo tsunami.',
    kanji: '林', meaningIt: 'bosco, radura alberata', strokes: 8, radical: '木 (albero)',
    on: [{ kana: 'リン', romaji: 'rin' }],
    kun: [{ kana: 'はやし', romaji: 'hayashi' }],
    originStory: 'Due alberi affiancati (木 + 木): un boschetto luminoso di pini, meli o bambù dove filtra la luce autunnale.',
    examples: [
      { word: '林檎', kana: 'りんご', romaji: 'ringo', meaning: 'mela' },
      { word: '松林', kana: 'まつばやし', romaji: 'matsubayashi', meaning: 'pineta' },
      { word: '竹林', kana: 'ちくりん', romaji: 'chikurin', meaning: 'boschetto di bambù' }
    ]
  },
  {
    id: '11-06', month: 11, day: 6, dayOfYear: 311, jpDate: '十一月六日',
    season: 'Autunno', sekki: 'Sōkō', category: 'Natura e Stagioni',
    titleIt: 'Apertura della Pesca del Granchio delle Nevi (Matsuba-gani)', titleJp: '松葉ガニ漁解禁・お見合い記念日',
    observanceDesc: 'Lungo la costa del Mar del Giappone (Tottori, Hyōgo, Ishikawa) si apre la pesca invernale dei pregiati granchi Matsuba-gani e Echizen-gani, annunciando le delizie d’inverno.',
    kanji: '蟹', meaningIt: 'granchio', strokes: 19, radical: '虫 (creatura)',
    on: [{ kana: 'カイ', romaji: 'kai' }],
    kun: [{ kana: 'かに', romaji: 'kani' }],
    originStory: 'Creatura dalla corazza articolata che si disarma e cambia guscio (解 + 虫): nei racconti popolari giapponesi appare spesso nella fiaba della scimmia e del granchio.',
    examples: [
      { word: '松葉蟹', kana: 'まつばがに', romaji: 'matsubagani', meaning: 'granchio delle nevi di San’in' },
      { word: '蟹座', kana: 'かにざ', romaji: 'kaniza', meaning: 'costellazione del Cancro' },
      { word: '蟹鍋', kana: 'かになべ', romaji: 'kaninabe', meaning: 'pentola calda di granchio' }
    ]
  },
  {
    id: '11-07', month: 11, day: 7, dayOfYear: 312, jpDate: '十一月七日',
    season: 'Inverno', sekki: 'Rittō', category: 'Natura e Stagioni',
    titleIt: 'Rittō — Inizio dell’Inverno e Giornata del Nabe', titleJp: '立冬・鍋の日 (Rittō · Nabe no Hi)',
    observanceDesc: 'Diciannovesimo termine solare: inizia ufficialmente l’inverno tradizionale. Per l’11-7 (i-i na-be), le famiglie si riuniscono attorno alla pentola calda di terracotta donabe fumante al centro della tavola.',
    kanji: '冬', meaningIt: 'inverno', strokes: 5, radical: '夂 (passo/fine)',
    on: [{ kana: 'トウ', romaji: 'tō' }],
    kun: [{ kana: 'ふゆ', romaji: 'fuyu' }],
    originStory: 'Un filo o matassa annodata alla fine (夂) sopra due gocce di gelo o cristalli (冫): la chiusura silenziosa e raccolta del ciclo annuale.',
    examples: [
      { word: '立冬', kana: 'りっとう', romaji: 'rittō', meaning: 'inizio dell’inverno tradizionale' },
      { word: '真冬', kana: 'まふゆ', romaji: 'mafuyu', meaning: 'cuore dell’inverno' },
      { word: '秋冬', kana: 'しゅうとう', romaji: 'shūtō', meaning: 'autunno e inverno' }
    ]
  },
  {
    id: '11-08', month: 11, day: 8, dayOfYear: 313, jpDate: '十一月八日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Giornata dei Denti Sani e Festa dei Fabbri (Fuigo Matsuri)', titleJp: 'いい歯の日・鞴祭 (Ii Ha no Hi · Fuigo Matsuri)',
    observanceDesc: 'L’11-8 si legge i-i ha (11 = "buoni", 8 = "denti"); nella tradizione artigiana cade inoltre il Fuigo Matsuri, in cui fabbri, orafi e costruttori di spade purificano il mantice offrendo mandarini mikan.',
    kanji: '鍛', meaningIt: 'forgiare, temprare', strokes: 17, radical: '金 (metallo)',
    on: [{ kana: 'タン', romaji: 'tan' }],
    kun: [{ kana: 'きた(える)', romaji: 'kita(eru)' }],
    originStory: 'Metallo (金) battuto con colpi ritmati e ripetuti (段): l’arte dei maestri spadaio katana-kaji di temprare tanto l’acciaio quanto il proprio animo.',
    examples: [
      { word: '鍛錬', kana: 'たんれん', romaji: 'tanren', meaning: 'disciplina, tempra fisica e mentale' },
      { word: '鍛冶屋', kana: 'かじや', romaji: 'kajiya', meaning: 'fucina del fabbro' },
      { word: '心を鍛える', kana: 'こころをきたえる', romaji: 'kokoro o kitaeru', meaning: 'temprare lo spirito' }
    ]
  },
  {
    id: '11-09', month: 11, day: 9, dayOfYear: 314, jpDate: '十一月九日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Giornata Antincendio (119) e del Calendario Solare', titleJp: '119番の日・太陽暦採用記念日',
    observanceDesc: 'Il 9 novembre (119, numero d’emergenza dei vigili del fuoco in Giappone) apre la settimana nazionale antincendio d’autunno; nel 1872 inoltre il governo Meiji annunciò l’adozione del calendario solare gregoriano.',
    kanji: '暦', meaningIt: 'calendario, almanacco', strokes: 14, radical: '日 (sole)',
    on: [{ kana: 'レキ', romaji: 'reki' }],
    kun: [{ kana: 'こよみ', romaji: 'koyomi' }],
    originStory: 'Sotto una volta o tetto d’osservazione (厂) due spighe ordinate (林/秝) misurano il ritorno ciclico dei giorni del sole (日): l’almanacco delle stagioni.',
    examples: [
      { word: '暦', kana: 'こよみ', romaji: 'koyomi', meaning: 'calendario tradizionale, almanacco' },
      { word: '西暦', kana: 'せいれき', romaji: 'seireki', meaning: 'calendario occidentale' },
      { word: '還暦', kana: 'かんれき', romaji: 'kanreki', meaning: 'sessantesimo compleanno (ritorno del ciclo)' }
    ]
  },
  {
    id: '11-10', month: 11, day: 10, dayOfYear: 315, jpDate: '十一月十日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’Ascensore e della Cura degli Ambienti', titleJp: 'エレベーターの日・トイレの日 (Toire no Hi)',
    observanceDesc: 'Nel 1890 fu inaugurato il primo ascensore elettrico del Giappone nella torre Ryōunkaku di Asakusa (alta dodici piani); l’11-10 si legge inoltre i-i to-ire (11 = "buono", 10 = inizio di toire), celebrando l’igiene e la cura degli spazi giapponesi.',
    kanji: '昇', meaningIt: 'salire, levarsi in alto', strokes: 8, radical: '日 (sole)',
    on: [{ kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'のぼ(る)', romaji: 'nobo(ru)' }],
    originStory: 'Il sole (日) che s’innalza diritto dal basso verso l’alto (升): l’ascesa luminosa dell’alba o il salire verso piani più alti.',
    examples: [
      { word: '上昇', kana: 'じょうしょう', romaji: 'jōshō', meaning: 'salita, ascesa' },
      { word: '日の出が昇る', kana: 'ひのでがのぼる', romaji: 'hinode ga noboru', meaning: 'il sole sorge' },
      { word: '昇進', kana: 'しょうしん', romaji: 'shōshin', meaning: 'avanzamento' }
    ]
  },
  {
    id: '11-11', month: 11, day: 11, dayOfYear: 316, jpDate: '十一月十一日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Giornata degli Origami, del Pocky e dei Calzini', titleJp: '折り紙の日・ポッキーの日・靴下の日 (Origami no Hi)',
    observanceDesc: 'Quattro "1" dritti come bastoncini di Pocky, ma anche come i quattro lati di un foglio quadrato d’origami: l’11 novembre è la giornata più giocosa dell’autunno, tra gru di carta, bacchette e calzini appaiati.',
    kanji: '折', meaningIt: 'piegare, spezzare, momento', strokes: 7, radical: '扌 (mano)',
    on: [{ kana: 'セツ', romaji: 'setsu' }],
    kun: [{ kana: 'お(る)', romaji: 'o(ru)' }, { kana: 'おり', romaji: 'ori' }],
    originStory: 'Una mano (扌) accanto a un’ascia o taglio netto (斤): in origine piegare o recidere un ramo, poi curvare con precisione millimetrica un foglio quadrato di carta.',
    examples: [
      { word: '折り紙', kana: 'おりがみ', romaji: 'origami', meaning: 'arte della piegatura della carta' },
      { word: '折り鶴', kana: 'おりづる', romaji: 'orizuru', meaning: 'gru di carta piegata' },
      { word: '折々', kana: 'おりおり', romaji: 'oriori', meaning: 'di stagione in stagione, di tanto in tanto' }
    ]
  },
  {
    id: '11-12', month: 11, day: 12, dayOfYear: 317, jpDate: '十一月十二日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’abbigliamento Occidentale (Yōfuku)', titleJp: '洋服記念日・皮膚の日 (Yōfuku Kinenbi)',
    observanceDesc: 'Il 12 novembre 1872 il decreto Meiji introdusse gli abiti formali di taglio occidentale (yōfuku) alla corte, affiancandoli al kimono tradizionale (wafuku).',
    kanji: '服', meaningIt: 'vestito, seguire con rispetto', strokes: 8, radical: '月 (luna/corpo)',
    on: [{ kana: 'フク', romaji: 'fuku' }],
    kun: [],
    originStory: 'Una persona inginocchiata (卩) accanto a una mano che sostiene o adatta (又) al corpo (月): in origine l’abito cerimoniale aderente al rango.',
    examples: [
      { word: '和服', kana: 'わふく', romaji: 'wafuku', meaning: 'abbigliamento tradizionale giapponese' },
      { word: '洋服', kana: 'ようふく', romaji: 'yōfuku', meaning: 'abito occidentale' },
      { word: '制服', kana: 'せいふく', romaji: 'seifuku', meaning: 'divisa scolastica o lavorativa' }
    ]
  },
  {
    id: '11-13', month: 11, day: 13, dayOfYear: 318, jpDate: '十一月十三日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Lacca Urushi e dell’Ibaraki', titleJp: '茨城県民の日・うるしの日 (Urushi no Hi)',
    observanceDesc: 'Secondo la leggenda, nel 701 d.C. il principe Koreta incontrò sul monte Yoshino un maestro eremita che gli svelò l’arte della lacca urushi il tredicesimo giorno dell’undicesimo mese.',
    kanji: '漆', meaningIt: 'lacca giapponese (urushi)', strokes: 14, radical: '水 (acqua)',
    on: [{ kana: 'シツ', romaji: 'shitsu' }],
    kun: [{ kana: 'うるし', romaji: 'urushi' }],
    originStory: 'Linfa liquida (氵) estratta incidendo la corteccia dell’albero della lacca (桼, albero con gocce che colano): materiale lucente e incorruttibile dell’artigianato Wajima e Aizu.',
    examples: [
      { word: '漆器', kana: 'しっき', romaji: 'shikki', meaning: 'oggetti in legno laccato' },
      { word: '漆塗', kana: 'うるしぬり', romaji: 'urushinuri', meaning: 'laccatura tradizionale' },
      { word: '漆黒', kana: 'しっこく', romaji: 'shikkoku', meaning: 'nero lucido intenso' }
    ]
  },
  {
    id: '11-14', month: 11, day: 14, dayOfYear: 319, jpDate: '十一月十四日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Giornata delle Pietre Preziose e di Saitama', titleJp: '埼玉県民の日・いい石の日 (Ii Ishi no Hi)',
    observanceDesc: 'L’11-14 si legge i-i i-shi ("bella pietra"): artigiani della pietra, giardini zen e intagliatori di lanterne tōrō celebrano il carattere eterno e silenzioso della roccia.',
    kanji: '岩', meaningIt: 'roccia, rupe', strokes: 8, radical: '山 (montagna)',
    on: [{ kana: 'ガン', romaji: 'gan' }],
    kun: [{ kana: 'いわ', romaji: 'iwa' }],
    originStory: 'Pietra (石) che forma la spalla stessa della montagna (山): i grandi massi muschiati nei giardini karesansui e sulle coste giapponesi.',
    examples: [
      { word: '岩石', kana: 'がんせき', romaji: 'ganseki', meaning: 'roccia, formazione rocciosa' },
      { word: '岩場', kana: 'いわば', romaji: 'iwaba', meaning: 'scogliera, parete rocciosa' },
      { word: '岩清水', kana: 'いわしみず', romaji: 'iwashimizu', meaning: 'acqua pura che sgorga dalla roccia' }
    ]
  },
  {
    id: '11-15', month: 11, day: 15, dayOfYear: 320, jpDate: '十一月十五日',
    season: 'Inverno', sekki: 'Rittō', category: 'Rito Shintō',
    titleIt: 'Shichi-Go-San — Festa dei Bambini di 3, 5 e 7 Anni', titleJp: '七五三 (Shichi-Go-San)',
    observanceDesc: 'Uno dei giorni più teneri del calendario shintō: bambine di 3 e 7 anni e bambini di 5 anni visitano il santuario in kimono formali per ringraziare della crescita e ricevere le lunghe caramelle augurali chitose-ame ("caramelle dei mille anni").',
    kanji: '祝', meaningIt: 'celebrare, benedire, augurare', strokes: 9, radical: '礻 (altare)',
    on: [{ kana: 'シュク', romaji: 'shuku' }, { kana: 'シュウ', romaji: 'shū' }],
    kun: [{ kana: 'いわ(う)', romaji: 'iwa(u)' }],
    originStory: 'Una persona inginocchiata in preghiera (兄) davanti all’altare sacro (礻): rivolgere ai kami un augurio di gioia e protezione.',
    examples: [
      { word: 'お祝い', kana: 'おいわい', romaji: 'oiwai', meaning: 'festa, regalo augurale' },
      { word: '祝日', kana: 'しゅくじつ', romaji: 'shukujitsu', meaning: 'festività nazionale' },
      { word: '祝福', kana: 'しゅくふく', romaji: 'shukufuku', meaning: 'benedizione' }
    ]
  },
  {
    id: '11-16', month: 11, day: 16, dayOfYear: 321, jpDate: '十一月十六日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Nascita del Primo Asilo d’Infanzia in Giappone', titleJp: '幼稚園記念日 (Yōchien Kinenbi)',
    observanceDesc: 'Il 16 novembre 1876 aprì a Tokyo il primo asilo d’infanzia del Giappone presso la Scuola Normale Femminile, introducendo giochi educativi con carta piegata e canti.',
    kanji: '園', meaningIt: 'giardino, parco, vivaio', strokes: 13, radical: '囗 (recinto)',
    on: [{ kana: 'エン', romaji: 'en' }],
    kun: [{ kana: 'その', romaji: 'sono' }],
    originStory: 'Un’area verde raccolta entro un perimetro (囗) dove crescono alberi e fiori curati con grazia (袁): il giardino giapponese o l’orto fiorito per l’infanzia.',
    examples: [
      { word: '日本庭園', kana: 'にほんていえん', romaji: 'nihon teien', meaning: 'giardino tradizionale giapponese' },
      { word: '公園', kana: 'こうえん', romaji: 'kōen', meaning: 'parco pubblico' },
      { word: '幼稚園', kana: 'ようちえん', romaji: 'yōchien', meaning: 'scuola materna' }
    ]
  },
  {
    id: '11-17', month: 11, day: 17, dayOfYear: 322, jpDate: '十一月十七日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Giornata dello Shōgi (Scacchi Giapponesi) e delle Radici di Loto', titleJp: '将棋の日・レンコンの日 (Shōgi no Hi)',
    observanceDesc: 'Durante il periodo Edo lo shōgun Tokugawa Yoshimune fissò il 17° giorno dell’11° mese per i grandi tornei di shōgi al castello (Oshiro-shōgi); a Tsuchiura si celebrano intanto le radici di loto renkon.',
    kanji: '駒', meaningIt: 'puledro, pezzo dello shōgi', strokes: 15, radical: '馬 (cavallo)',
    on: [{ kana: 'ク', romaji: 'ku' }],
    kun: [{ kana: 'こま', romaji: 'koma' }],
    originStory: 'Un cavallo giovane (馬) contenuto e curato (句): indica il puledro agile, i ponticelli dello shamisen e i tasselli pentagonali del gioco dello shōgi.',
    examples: [
      { word: '将棋の駒', kana: 'しょうぎのこま', romaji: 'shōgi no koma', meaning: 'pezzi in legno dello shōgi' },
      { word: '子駒', kana: 'こごま', romaji: 'kogoma', meaning: 'puledrino' },
      { word: '一駒', kana: 'ひとこま', romaji: 'hitokoma', meaning: 'una vignetta / una scena' }
    ]
  },
  {
    id: '11-18', month: 11, day: 18, dayOfYear: 323, jpDate: '十一月十八日',
    season: 'Inverno', sekki: 'Rittō', category: 'Natura e Stagioni',
    titleIt: 'Momijigari — Picco delle Foglie d’Acero a Kyoto e Nikkō', titleJp: '紅葉狩りの頃・土木の日 (Momijigari)',
    observanceDesc: 'A metà novembre i templi Tōfuku-ji, Eikandō e Kiyomizu-dera si accendono di rosso scarlatto: passeggiare cercando i colori più intensi degli aceri si chiama poeticamente momijigari ("caccia alle foglie rosse").',
    kanji: '楓', meaningIt: 'acero giapponese', strokes: 13, radical: '木 (albero)',
    on: [{ kana: 'フウ', romaji: 'fū' }],
    kun: [{ kana: 'かえで', romaji: 'kaede' }],
    originStory: 'Albero (木) che danza con il vento (風): in giapponese kaede deriva da kaeru-te ("manine di rana") per la forma palmata delle sue foglie.',
    examples: [
      { word: '楓の葉', kana: 'かえでのは', romaji: 'kaede no ha', meaning: 'foglia d’acero' },
      { word: '紅葉', kana: 'もみじ', romaji: 'momiji', meaning: 'fogliame rosso d’autunno' },
      { word: '楓林', kana: 'ふうりん', romaji: 'fūrin', meaning: 'bosco d’aceri' }
    ]
  },
  {
    id: '11-19', month: 11, day: 19, dayOfYear: 324, jpDate: '十一月十九日',
    season: 'Inverno', sekki: 'Rittō', category: 'Giornata Curiosa',
    titleIt: 'Giornata dei Volontari agli Attraversamenti Scolastici', titleJp: '緑のおばさんの日 (Midori no Obasan no Hi)',
    observanceDesc: 'Nel pieno dell’autunno le scuole e i quartieri ringraziano i volontari che accompagnano ogni mattina i bambini agli attraversamenti pedonali con la bandierina gialla.',
    kanji: '護', meaningIt: 'proteggere, custodire con premura', strokes: 20, radical: '言 (parola)',
    on: [{ kana: 'ゴ', romaji: 'go' }],
    kun: [{ kana: 'まも(る)', romaji: 'mamo(ru)' }],
    originStory: 'Parole attente (言) accanto a un uccello custodito tra le mani (蒦): vigilare con sollecitudine su chi ci è affidato.',
    examples: [
      { word: '保護', kana: 'ほご', romaji: 'hogo', meaning: 'protezione, tutela' },
      { word: '介護', kana: 'かいご', romaji: 'kaigo', meaning: 'assistenza agli anziani' },
      { word: 'お護り', kana: 'おまもり', romaji: 'omamori', meaning: 'amuleto di protezione' }
    ]
  },
  {
    id: '11-20', month: 11, day: 20, dayOfYear: 325, jpDate: '十一月二十日',
    season: 'Inverno', sekki: 'Rittō', category: 'Rito Shintō',
    titleIt: 'Ebisu-kō e Secondo Giorno di Tori no Ichi', titleJp: 'えびす講・ピザの日 (Ebisu-kō)',
    observanceDesc: 'Durante i giorni di novembre dedicati al dio dei mercanti Ebisu e ai rastrelli kumade di Tori no Ichi, i quartieri commerciali di Tokyo e Asakusa risuonano di battiti di mani propiziatori tejime.',
    kanji: '掌', meaningIt: 'palmo della mano', strokes: 12, radical: '手 (mano)',
    on: [{ kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'てのひら', romaji: 'tenohira' }],
    originStory: 'La mano aperta (手) rivolta verso l’alto (尚): il palmo aperto per applaudire nei riti, accogliere o modellare la ceramica.',
    examples: [
      { word: '掌編', kana: 'しょうへん', romaji: 'shōhen', meaning: 'racconto brevissimo ("che sta nel palmo")' },
      { word: '合掌', kana: 'がっしょう', romaji: 'gasshō', meaning: 'mani giunte in preghiera o gratitudine' },
      { word: '車掌', kana: 'しゃしょう', romaji: 'shashō', meaning: 'capotreno' }
    ]
  },
  {
    id: '11-21', month: 11, day: 21, dayOfYear: 326, jpDate: '十一月二十一日',
    season: 'Inverno', sekki: 'Rittō', category: 'Anniversario Storico',
    titleIt: 'Inaugurazione del Teatro Kabuki-za', titleJp: '歌舞伎座開業記念日 (Kabuki-za Kaigyō Kinenbi)',
    observanceDesc: 'Il 21 novembre 1889 aprì a Ginza (Tokyo) il teatro Kabuki-za, tempio della scena tradizionale giapponese con il suo inconfondibile tetto a timpano curvo.',
    kanji: '劇', meaningIt: 'teatro, dramma', strokes: 15, radical: '刂 (lama)',
    on: [{ kana: 'ゲキ', romaji: 'geki' }],
    kun: [],
    originStory: 'Una tigre e un cinghiale che lottano con vigore (虍 + 豕) affiancati a una lama (刂): tensione intensa sulla scena o nelle vicende umane.',
    examples: [
      { word: '劇場', kana: 'げきじょう', romaji: 'gekijō', meaning: 'teatro' },
      { word: '悲劇', kana: 'ひげき', romaji: 'higeki', meaning: 'tragedia' },
      { word: '演劇', kana: 'えんげき', romaji: 'engeki', meaning: 'arte drammatica' }
    ]
  },
  {
    id: '11-22', month: 11, day: 22, dayOfYear: 327, jpDate: '十一月二十二日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Buona Coppia (Ii Fūfu) e Shōsetsu', titleJp: 'いい夫婦の日・小雪 (Ii Fūfu no Hi · Shōsetsu)',
    observanceDesc: 'L’11-22 si pronuncia i-i fū-fu ("buona coppia"): giorno amatissimo in Giappone per i matrimoni e i piccoli gesti di cura tra coniugi. Coincide con Shōsetsu ("Piccola Neve"), ventesimo termine solare.',
    kanji: '婦', meaningIt: 'donna sposata, sposa', strokes: 11, radical: '女 (donna)',
    on: [{ kana: 'フ', romaji: 'fu' }],
    kun: [],
    originStory: 'Una donna (女) che regge la scopa rituale di casa (帚): custode dell’armonia e della cura quotidiana del focolare.',
    examples: [
      { word: '夫婦', kana: 'ふうふ', romaji: 'fūfu', meaning: 'marito e moglie, coppia' },
      { word: '新婦', kana: 'しんぷ', romaji: 'shinpu', meaning: 'sposa' },
      { word: '主婦', kana: 'しゅふ', romaji: 'shufu', meaning: 'padrona di casa' }
    ]
  },
  {
    id: '11-23', month: 11, day: 23, dayOfYear: 328, jpDate: '十一月二十三日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Festa Nazionale',
    titleIt: 'Giorno di Ringraziamento per il Lavoro (e Rito Niinamesai)', titleJp: '勤労感謝の日・新嘗祭 (Kinrō Kansha no Hi)',
    observanceDesc: 'Festa nazionale dedicata al rispetto del lavoro umano e alla gratitudine reciproca. Affonda le radici nell’antichissimo rito shintō Niinamesai, in cui l’imperatore offre ai kami il primo riso nuovo dell’autunno.',
    kanji: '感', meaningIt: 'sentire profondamente, emozione', strokes: 13, radical: '心 (cuore)',
    on: [{ kana: 'カン', romaji: 'kan' }],
    kun: [{ kana: 'かん(じる)', romaji: 'kan(jiru)' }],
    originStory: 'Un sentimento che vibra con pienezza (咸) dentro il cuore (心): esserne toccati profondamente, da cui nasce la parola kansha ("gratitudine").',
    examples: [
      { word: '感謝', kana: 'かんしゃ', romaji: 'kansha', meaning: 'gratitudine, ringraziamento' },
      { word: '感動', kana: 'かんどう', romaji: 'kandō', meaning: 'commozione profonda' },
      { word: '季節感', kana: 'きせつかん', romaji: 'kisetsukan', meaning: 'sensibilità alle stagioni' }
    ]
  },
  {
    id: '11-24', month: 11, day: 24, dayOfYear: 329, jpDate: '十一月二十四日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Washoku (Cucina Tradizionale Giapponese)', titleJp: '和食の日 (Washoku no Hi)',
    observanceDesc: 'L’11-24 si legge i-i ni-hon-sho-ku ("11 = buona", "2 = ni", "4 = sho-ku", cioè buona cucina giapponese): promossa dall’associazione Washoku per celebrare il rispetto degli ingredienti stagionali e il riconoscimento UNESCO del 2013.',
    kanji: '旬', meaningIt: 'stagione migliore, freschezza (shun)', strokes: 6, radical: '日 (sole)',
    on: [{ kana: 'ジュン', romaji: 'jun' }, { kana: 'シュン', romaji: 'shun' }],
    kun: [],
    originStory: 'Un ciclo completo (勹) di dieci giorni di sole (日): il periodo esatto e fugace in cui un frutto, un pesce o un ortaggio tocca la massima bontà.',
    examples: [
      { word: '旬の味', kana: 'しゅんのあじ', romaji: 'shun no aji', meaning: 'sapore di piena stagione' },
      { word: '上旬・下旬', kana: 'じょうじゅん・げじゅん', romaji: 'jōjun / gejun', meaning: 'prima / ultima decade del mese' },
      { word: '季節の旬', kana: 'きせつのしゅん', romaji: 'kisetsu no shun', meaning: 'il culmine stagionale' }
    ]
  },
  {
    id: '11-25', month: 11, day: 25, dayOfYear: 330, jpDate: '十一月二十五日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Anniversario Storico',
    titleIt: 'Yūkoku-ki — Ricordo dello Scrittore Yukio Mishima', titleJp: '憂国忌 (Yūkoku-ki)',
    observanceDesc: 'Ricorda la scomparsa dello scrittore Yukio Mishima (1970), autore de "Il Padiglione d’Oro", figura complessa della letteratura giapponese del Novecento.',
    kanji: '閣', meaningIt: 'padiglione a più piani, gabinetto', strokes: 14, radical: '門 (porta)',
    on: [{ kana: 'カク', romaji: 'kaku' }],
    kun: [],
    originStory: 'Un portale maestoso (門) che custodisce spazi distinti (各): un edificio elegante a più ordini come il Kinkaku-ji o il Ginkaku-ji di Kyoto.',
    examples: [
      { word: '銀閣寺', kana: 'ぎんかくじ', romaji: 'Ginkaku-ji', meaning: 'Padiglione d’Argento di Kyoto' },
      { word: '天守閣', kana: 'てんしゅかく', romaji: 'tenshukaku', meaning: 'torre centrale del castello giapponese' },
      { word: '楼閣', kana: 'ろうかく', romaji: 'rōkaku', meaning: 'alta torre palatina' }
    ]
  },
  {
    id: '11-26', month: 11, day: 26, dayOfYear: 331, jpDate: '十一月二十六日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata dell’Ii Furo (Buon Bagno Termale)', titleJp: 'いい風呂の日 (Ii Furo no Hi)',
    observanceDesc: 'L’11-26 suona esattamente i-i fu-ro ("un bel bagno caldo"): nelle terme onsen e nei bagni pubblici sentō d’inverno le vasche profumano di foglie e agrumi per scaldare il corpo fino alle ossa.',
    kanji: '暖', meaningIt: 'caldo piacevole, mitezza', strokes: 13, radical: '日 (sole)',
    on: [{ kana: 'ダン', romaji: 'dan' }],
    kun: [{ kana: 'あたた(かい)', romaji: 'atata(kai)' }, { kana: 'あたた(める)', romaji: 'atata(meru)' }],
    originStory: 'Il sole (日) unito a una mano gentile che offre conforto (爰): un calore avvolgente che scioglie il freddo invernale.',
    examples: [
      { word: '暖房', kana: 'だんぼう', romaji: 'danbō', meaning: 'riscaldamento' },
      { word: '暖かい心', kana: 'あたたかいこころ', romaji: 'atatakai kokoro', meaning: 'cuore caloroso' },
      { word: '暖簾', kana: 'のれん', romaji: 'noren', meaning: 'tendina divisa all’ingresso delle botteghe' }
    ]
  },
  {
    id: '11-27', month: 11, day: 27, dayOfYear: 332, jpDate: '十一月二十七日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Giornata Curiosa',
    titleIt: 'Viali di Ginkgo in Autunno e Giornata del Nobel', titleJp: 'ノーベル賞制定記念日・更生保護の日',
    observanceDesc: 'In quest’ultima settimana di novembre i viali di ginkgo (ichō) a Meiji Jingū Gaien a Tokyo formano un tappeto giallo dorato sotto i piedi dei passanti.',
    kanji: '黄', meaningIt: 'giallo, dorato', strokes: 11, radical: '黄 (giallo)',
    on: [{ kana: 'コウ', romaji: 'kō' }, { kana: 'オウ', romaji: 'ō' }],
    kun: [{ kana: 'き', romaji: 'ki' }],
    originStory: 'In origine raffigurava un pendente di giada gialla legato alla cintura cerimoniale sopra la terra di loess (田 + 廿): il colore della terra fertile e delle foglie di ginkgo.',
    examples: [
      { word: '黄色', kana: 'きいろ', romaji: 'kiiro', meaning: 'colore giallo' },
      { word: '黄金', kana: 'おうごん・こがね', romaji: 'ōgon / kogane', meaning: 'oro puro, dorato' },
      { word: '黄昏', kana: 'たそがれ', romaji: 'tasogare', meaning: 'crepuscolo ("chi è là?" nell’ora incerta)' }
    ]
  },
  {
    id: '11-28', month: 11, day: 28, dayOfYear: 333, jpDate: '十一月二十八日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Rito Buddhista',
    titleIt: 'Hōonkō — Commemorazione di Shinran Shōnin', titleJp: '報恩講（親鸞聖人忌）・フランスパンの日',
    observanceDesc: 'Presso i grandi templi Higashi e Nishi Hongan-ji di Kyoto si conclude lo Hōonkō, settimana di riconoscenza dedicata a Shinran, fondatore del Buddhismo della Terra Pura Jōdo Shinshū.',
    kanji: '恩', meaningIt: 'gratitudine, beneficio ricevuto', strokes: 10, radical: '心 (cuore)',
    on: [{ kana: 'オン', romaji: 'on' }],
    kun: [],
    originStory: 'Un motivo profondo e una ragione (因) custoditi stabilmente nel cuore (心): la consapevolezza riconoscente di tutto ciò che abbiamo ricevuto dagli altri.',
    examples: [
      { word: '恩恵', kana: 'おんけい', romaji: 'onkei', meaning: 'beneficio, grazia' },
      { word: '恩師', kana: 'おんし', romaji: 'onshi', meaning: 'maestro indimenticabile' },
      { word: 'ご恩返し', kana: 'ごおんがえし', romaji: 'goongaeshi', meaning: 'ricambiare la gentilezza ricevuta' }
    ]
  },
  {
    id: '11-29', month: 11, day: 29, dayOfYear: 334, jpDate: '十一月二十九日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Buona Carne (Ii Niku no Hi) e degli Abiti', titleJp: 'いい肉の日・いい服の日 (Ii Niku no Hi)',
    observanceDesc: 'L’11-29 suona come i-i ni-ku ("buona carne") e i-i fu-ku ("belli abiti"): giorno celebre per gustare sukiyaki o shabu-shabu in famiglia nelle sere ormai fredde.',
    kanji: '肉', meaningIt: 'carne, polpa, corpo', strokes: 6, radical: '肉 (carne)',
    on: [{ kana: 'ニク', romaji: 'niku' }],
    kun: [],
    originStory: 'Pittogramma di un taglio di carne venata con le fibre disegnate all’interno di una sezione.',
    examples: [
      { word: '肉筆', kana: 'にくひつ', romaji: 'nikuhitsu', meaning: 'autografo originale dell’artista' },
      { word: '筋肉', kana: 'きんにく', romaji: 'kinniku', meaning: 'muscolo' },
      { word: '肉眼', kana: 'にくがん', romaji: 'nikugan', meaning: 'occhio nudo' }
    ]
  },
  {
    id: '11-30', month: 11, day: 30, dayOfYear: 335, jpDate: '十一月三十日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Libro d’Immagini (Ehon no Hi) e dello Specchio', titleJp: '絵本の日・鏡の日 (Ehon no Hi · Ii Mirā)',
    observanceDesc: 'Ricorda l’uscita de "L’arte dell’albo illustrato" (Ehonron) di Kyōko Matsuoka e, per lettura 11-30 (i-i mi-rā), invita a guardarsi nello specchio con serenità alla fine di novembre.',
    kanji: '眺', meaningIt: 'contemplare da lontano, ammirare', strokes: 11, radical: '目 (occhio)',
    on: [{ kana: 'チョウ', romaji: 'chō' }],
    kun: [{ kana: 'なが(める)', romaji: 'naga(meru)' }],
    originStory: 'L’occhio (目) rivolto verso l’ampio orizzonte dei presagi lontani (兆): guardare con calma contemplativa il paesaggio o il cielo.',
    examples: [
      { word: '眺め', kana: 'ながめ', romaji: 'nagame', meaning: 'panorama, vista' },
      { word: '眺望', kana: 'ちょうぼう', romaji: 'chōbō', meaning: 'veduta panoramica' },
      { word: '月を眺める', kana: 'つきをながめる', romaji: 'tsuki o nagameru', meaning: 'ammirare la luna' }
    ]
  },

  // DICEMBRE (31 giorni)
  {
    id: '12-01', month: 12, day: 1, dayOfYear: 336, jpDate: '十二月一日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Anniversario Storico',
    titleIt: 'Inizio di Shiwasu e Giornata del Cinema Giapponese', titleJp: '師走・映画の日 (Shiwasu · Eiga no Hi)',
    observanceDesc: 'Dicembre si chiama Shiwasu ("il mese in cui perfino i monaci corrono" per i preparativi di fine anno). Il 1° dicembre 1896 fu proiettato a Kōbe il primo spettacolo cinematografico in Giappone.',
    kanji: '師', meaningIt: 'maestro, guida, esperto', strokes: 10, radical: '巾 (drappo)',
    on: [{ kana: 'シ', romaji: 'shi' }],
    kun: [],
    originStory: 'In origine raffigurava un’altura presidiata accanto a uno stendardo di comando (巾): la figura autorevole che guida schiere, allievi, artigiani e monaci.',
    examples: [
      { word: '師走', kana: 'しわす', romaji: 'Shiwasu', meaning: 'dicembre ("mese in cui corrono i maestri")' },
      { word: '教師', kana: 'きょうし', romaji: 'kyōshi', meaning: 'insegnante' },
      { word: '陶芸師', kana: 'とうげいし', romaji: 'tōgeishi', meaning: 'maestro ceramista' }
    ]
  },
  {
    id: '12-02', month: 12, day: 2, dayOfYear: 337, jpDate: '十二月二日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Rito Shintō',
    titleIt: 'Vigilia del Chichibu Yomatsuri', titleJp: '秩父夜祭（宵宮） (Chichibu Yomatsuri)',
    observanceDesc: 'Tra i tre maggiori festival di carri del Giappone: a Chichibu (Saitama) i carri illuminati da lanterne si preparano tra fuochi d’artificio invernali e il suono possente dei tamburi Chichibu Yatai-bayashi.',
    kanji: '夜', meaningIt: 'notte', strokes: 8, radical: '夕 (sera)',
    on: [{ kana: 'ヤ', romaji: 'ya' }],
    kun: [{ kana: 'よ', romaji: 'yo' }, { kana: 'よる', romaji: 'yoru' }],
    originStory: 'Una figura sotto il cielo scuro (亠 + 亻) illuminata dalla falce della sera (夕): le ore silenziose o festive dopo il tramonto.',
    examples: [
      { word: '夜空', kana: 'よぞら', romaji: 'yozora', meaning: 'cielo notturno' },
      { word: '深夜', kana: 'しんや', romaji: 'shin’ya', meaning: 'notte fonda' },
      { word: '大晦日の夜', kana: 'おおみそかのよる', romaji: 'Ōmisoka no yoru', meaning: 'notte di San Silvestro' }
    ]
  },
  {
    id: '12-03', month: 12, day: 3, dayOfYear: 338, jpDate: '十二月三日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Rito Shintō',
    titleIt: 'Chichibu Yomatsuri — Grande Festa Notturna d’Inverno', titleJp: '秩父夜祭（大祭）・奇術の日 (Chichibu Yomatsuri)',
    observanceDesc: 'Sei enormi carri lignei trainati a mano salgono la ripida salita Dango-zaka nel cuore della notte fredda mentre spettacolari fuochi d’artificio invernali fioriscono nel cielo limpido.',
    kanji: '曳', meaningIt: 'trainare, tirare insieme', strokes: 6, radical: '曰 (dire/contenitore)',
    on: [{ kana: 'エイ', romaji: 'ei' }],
    kun: [{ kana: 'ひ(く)', romaji: 'hi(ku)' }],
    originStory: 'Due braccia che tirano avanti e distendono con sforzo concorde una fune: l’azione corale di trainare i carri dei matsuri.',
    examples: [
      { word: '山車曳き', kana: 'だしひき', romaji: 'dashihiki', meaning: 'traino del carro festivo' },
      { word: '曳山', kana: 'ひきやま', romaji: 'hikiyama', meaning: 'carro da processione trainato a mano' },
      { word: '曳航', kana: 'えいこう', romaji: 'eikō', meaning: 'rimorchio in mare' }
    ]
  },
  {
    id: '12-04', month: 12, day: 4, dayOfYear: 339, jpDate: '十二月四日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Anniversario Storico',
    titleIt: 'Riconoscimento UNESCO della Cucina Washoku', titleJp: '和食UNESCO登録記念日',
    observanceDesc: 'Il 4 dicembre 2013 la cucina tradizionale giapponese Washoku fu iscritta dall’UNESCO nel Patrimonio Culturale Immateriale dell’Umanità per il suo legame con le stagioni e la convivialità.',
    kanji: '膳', meaningIt: 'vassoio da tavola, pasto curato', strokes: 16, radical: '月 (carne/cibo)',
    on: [{ kana: 'ゼン', romaji: 'zen' }],
    kun: [],
    originStory: 'Pietanze preparate (月) con bontà e cura (善): i piccoli tavolini laccati individuali su cui si servono riso, zuppa e contorni ("ichijū sansai").',
    examples: [
      { word: 'お膳', kana: 'おぜん', romaji: 'ozen', meaning: 'vassoio o tavolino basso per il pasto' },
      { word: '御膳', kana: 'ごぜん', romaji: 'gozen', meaning: 'pasto raffinato in più portate' },
      { word: '配膳', kana: 'はいぜん', romaji: 'haizen', meaning: 'servizio a tavola' }
    ]
  },
  {
    id: '12-05', month: 12, day: 5, dayOfYear: 340, jpDate: '十二月五日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Anniversario Storico',
    titleIt: 'Giornata del Volontariato e degli Album dei Ricordi', titleJp: '国際ボランティア・デー・アルバムの日',
    observanceDesc: 'A inizio dicembre le famiglie giapponesi sfogliano album fotografici e preparano le liste dei destinatari per le cartoline di Capodanno nengajō.',
    kanji: '贈', meaningIt: 'donare, inviare un omaggio', strokes: 18, radical: '貝 (valore)',
    on: [{ kana: 'ゾウ', romaji: 'zō' }, { kana: 'ソウ', romaji: 'sō' }],
    kun: [{ kana: 'おく(る)', romaji: 'oku(ru)' }],
    originStory: 'Un bene prezioso (貝) che accresce l’affetto e la gioia reciproca (曽): il dono di fine anno oseibo inviato per dire "grazie".',
    examples: [
      { word: '贈り物', kana: 'おくりもの', romaji: 'okurimono', meaning: 'regalo, omaggio' },
      { word: '贈答品', kana: 'ぞうとうひん', romaji: 'zōtōhin', meaning: 'doni stagionali oseibo/ochūgen' },
      { word: '寄贈', kana: 'きぞう', romaji: 'kizō', meaning: 'donazione a un museo o biblioteca' }
    ]
  },
  {
    id: '12-06', month: 12, day: 6, dayOfYear: 341, jpDate: '十二月六日',
    season: 'Inverno', sekki: 'Shōsetsu', category: 'Anniversario Storico',
    titleIt: 'Giornata dell’Ascolto Musicale (Oto no Hi)', titleJp: '音の日・姉の日 (Oto no Hi · Ane no Hi)',
    observanceDesc: 'Ricorda la prima registrazione sonora del fonografo di Edison nel 1877; è anche la giornata dedicata alle sorelle maggiori (ane), completando la serie familiare del calendario giapponese.',
    kanji: '姉', meaningIt: 'sorella maggiore', strokes: 8, radical: '女 (donna)',
    on: [{ kana: 'シ', romaji: 'shi' }],
    kun: [{ kana: 'あね', romaji: 'ane' }],
    originStory: 'Donna (女) accostata a 市 (in antico segnale di crescita o chiarezza): colei che guida con premura i fratelli più piccoli.',
    examples: [
      { word: '姉妹', kana: 'しまい', romaji: 'shimai', meaning: 'sorelle' },
      { word: 'お姉さん', kana: 'おねえさん', romaji: 'oneesan', meaning: 'sorella maggiore' },
      { word: '姉妹都市', kana: 'しまいとし', romaji: 'shimai toshi', meaning: 'città gemellate' }
    ]
  },
  {
    id: '12-07', month: 12, day: 7, dayOfYear: 342, jpDate: '十二月七日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Natura e Stagioni',
    titleIt: 'Taisetsu — Grande Neve', titleJp: '大雪 (Taisetsu)',
    observanceDesc: 'Ventunesimo termine solare: la neve copre fitta i monti del Giappone settentrionale, gli orsi entrano in letargo e nei villaggi costieri si appendono pesci e cachi ad essiccare al vento gelido.',
    kanji: '凍', meaningIt: 'congelare, ghiacciarsi', strokes: 10, radical: '冫 (ghiaccio)',
    on: [{ kana: 'トウ', romaji: 'tō' }],
    kun: [{ kana: 'こお(る)', romaji: 'kō(ru)' }, { kana: 'こご(える)', romaji: 'kogo(eru)' }],
    originStory: 'Due cristalli di ghiaccio (冫) accanto a 東 (che richiama anche il vento rigido d’inverno): il gelo intenso che irrigidisce laghetti e sentieri sotto il cielo invernale.',
    examples: [
      { word: '凍結', kana: 'とうけつ', romaji: 'tōketsu', meaning: 'congelamento' },
      { word: '凍える', kana: 'こごえる', romaji: 'kogoeru', meaning: 'intirizzirsi dal freddo' },
      { word: '冷凍', kana: 'れいとう', romaji: 'reitō', meaning: 'surgelazione' }
    ]
  },
  {
    id: '12-08', month: 12, day: 8, dayOfYear: 343, jpDate: '十二月八日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Rito Buddhista',
    titleIt: 'Jōdō-e — Giorno dell’Illuminazione del Buddha (Bodhi Day)', titleJp: '成道会・事納め (Jōdō-e · Koto-osame)',
    observanceDesc: 'Nel buddhismo giapponese si celebra il risveglio di Śākyamuni sotto l’albero della Bodhi; nelle campagne tradizionali è anche Koto-osame, giornata in cui si ringraziano gli strumenti agricoli con zuppa kenchin-jiru.',
    kanji: '覚', meaningIt: 'risvegliarsi, ricordare, percepire', strokes: 12, radical: '見 (vedere)',
    on: [{ kana: 'カク', romaji: 'kaku' }],
    kun: [{ kana: 'おぼ(える)', romaji: 'obo(eru)' }, { kana: 'さ(める)', romaji: 'sa(meru)' }],
    originStory: 'La forma tradizionale 覺 mostrava due mani che trasmettono il sapere sotto un tetto sopra l’atto di vedere (見): aprire finalmente gli occhi con comprensione limpida.',
    examples: [
      { word: '自覚', kana: 'じかく', romaji: 'jikaku', meaning: 'consapevolezza interiore' },
      { word: '感覚', kana: 'かんかく', romaji: 'kankaku', meaning: 'percezione, senso' },
      { word: '目覚め', kana: 'めざめ', romaji: 'mezame', meaning: 'risveglio' }
    ]
  },
  {
    id: '12-09', month: 12, day: 9, dayOfYear: 344, jpDate: '十二月九日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Anniversario Storico',
    titleIt: 'Sōseki-ki — Ricordo di Natsume Sōseki', titleJp: '漱石忌・障害者の日 (Sōseki-ki)',
    observanceDesc: 'Il 9 dicembre 1916 si spense a Tokyo Natsume Sōseki, autore di "Io sono un gatto", "Botchan" e "Kokoro", padre del romanzo moderno giapponese.',
    kanji: '著', meaningIt: 'scrivere opere, rendersi evidente', strokes: 11, radical: '艹 (erba)',
    on: [{ kana: 'チョ', romaji: 'cho' }],
    kun: [{ kana: 'あらわ(す)', romaji: 'arawa(su)' }, { kana: 'いちじる(しい)', romaji: 'ichijiru(shii)' }],
    originStory: 'Rami e germogli che si distendono chiari alla vista (艹 + 者): portare alla luce opere letterarie durature e ben riconoscibili.',
    examples: [
      { word: '著者', kana: 'ちょしゃ', romaji: 'chosha', meaning: 'autore di un libro' },
      { word: '名著', kana: 'めいちょ', romaji: 'meicho', meaning: 'capolavoro letterario' },
      { word: '顕著', kana: 'けんちょ', romaji: 'kencho', meaning: 'notevole, evidente' }
    ]
  },
  {
    id: '12-10', month: 12, day: 10, dayOfYear: 345, jpDate: '十二月十日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Rito Shintō',
    titleIt: 'Tōka-ichi di Ōmiya e Giornata dei Diritti Umani', titleJp: '大宮十日市・人権デー (Tōka-ichi)',
    observanceDesc: 'Nel dicembre di Saitama si tiene la fiera invernale Tōka-ichi di Ōmiya per acquistare i primi talismani portafortuna hamaya e daruma in vista dell’anno nuovo, insieme alla chiusura della settimana per i diritti umani.',
    kanji: '矢', meaningIt: 'freccia', strokes: 5, radical: '矢 (freccia)',
    on: [{ kana: 'シ', romaji: 'shi' }],
    kun: [{ kana: 'や', romaji: 'ya' }],
    originStory: 'Pittogramma diretto di una freccia con la punta triangolare in alto, l’asta dritta e l’impennaggio alla base: simbolo di direzione sicura nelle feste shintō (hamaya).',
    examples: [
      { word: '破魔矢', kana: 'はまや', romaji: 'hamaya', meaning: 'freccia sacra portafortuna dei santuari' },
      { word: '光陰矢の如し', kana: 'こういんやのごとし', romaji: 'kōin ya no gotoshi', meaning: 'il tempo vola come una freccia' },
      { word: '矢印', kana: 'やじるし', romaji: 'yajirushi', meaning: 'segno della freccia' }
    ]
  },
  {
    id: '12-11', month: 12, day: 11, dayOfYear: 346, jpDate: '十二月十一日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Anniversario Storico',
    titleIt: 'Giornata della Moneta da 100 Yen e delle Montagne', titleJp: '国際山岳デー・百円玉記念日',
    observanceDesc: 'Nel 1957 uscì per la prima volta in Giappone la moneta d’argento da 100 yen con l’immagine della fenice e dei fiori di ciliegio, sostituendo le vecchie banconote.',
    kanji: '百', meaningIt: 'cento, molteplicità', strokes: 6, radical: '白 (bianco)',
    on: [{ kana: 'ヒャク', romaji: 'hyaku' }],
    kun: [{ kana: 'もも', romaji: 'momo' }],
    originStory: 'Un tratto orizzontale (一) sopra il seme bianco (白): cento unità riunite in un solo fascio o secolo.',
    examples: [
      { word: '百人一首', kana: 'ひゃくにんいっしゅ', romaji: 'Hyakunin Isshu', meaning: 'raccolta classica di cento poeti' },
      { word: '百貨店', kana: 'ひゃっかてん', romaji: 'hyakkaten', meaning: 'grande magazzino ("cento merci")' },
      { word: '八百屋', kana: 'やおや', romaji: 'yaoya', meaning: 'fruttivendolo ("ottocento merci")' }
    ]
  },
  {
    id: '12-12', month: 12, day: 12, dayOfYear: 347, jpDate: '十二月十二日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata del Kanji (Kanji no Hi)', titleJp: '漢字の日 (Kanji no Hi)',
    observanceDesc: 'Istituita dalla Fondazione per l’Attitudine ai Kanji: 12-12 suona come i-i ji i-chi-ji ("un bel carattere unico"). Sul palco del tempio Kiyomizu-dera di Kyoto il sommo abate traccia con un pennello gigante il "Kanji dell’Anno" scelto dai cittadini.',
    kanji: '漢', meaningIt: 'dinastia Han, Cina classica, kanji', strokes: 13, radical: '水 (acqua)',
    on: [{ kana: 'カン', romaji: 'kan' }],
    kun: [],
    originStory: 'Dal nome del grande fiume Han (氵) in Cina e della dinastia che unificò e codificò la scrittura poi giunta in Giappone come kanji ("caratteri degli Han").',
    examples: [
      { word: '漢字', kana: 'かんじ', romaji: 'kanji', meaning: 'ideogramma sino-giapponese' },
      { word: '漢和辞典', kana: 'かんわじてん', romaji: 'kanwa jiten', meaning: 'dizionario dei kanji' },
      { word: '漢方', kana: 'かんぽう', romaji: 'kanpō', meaning: 'medicina tradizionale erboristica' }
    ]
  },
  {
    id: '12-13', month: 12, day: 13, dayOfYear: 348, jpDate: '十二月十三日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Rito Shintō',
    titleIt: 'Susuharai — Grande Pulizia Rituale e Kotohajime', titleJp: '煤払い・正月事始め (Susuharai · Kotohajime)',
    observanceDesc: 'Data tradizionale che apre i preparativi di Capodanno: nei templi di Kyoto e Nara si spolverano le statue sacre con lunghe canne di bambù, e nel quartiere delle geishe di Gion le allieve porgono omaggio alle maestre portando dolci kagami-mochi.',
    kanji: '掃', meaningIt: 'spazzare, purificare la casa', strokes: 11, radical: '扌 (mano)',
    on: [{ kana: 'ソウ', romaji: 'sō' }],
    kun: [{ kana: 'は(く)', romaji: 'ha(ku)' }],
    originStory: 'Una mano (扌) che impugna una scopa di saggina o bambù (帚): liberare la casa dalla polvere dell’anno trascorso per accogliere il nuovo.',
    examples: [
      { word: '大掃除', kana: 'おおそうじ', romaji: 'ōsōji', meaning: 'grande pulizia di fine anno' },
      { word: '清掃', kana: 'せいそう', romaji: 'seisō', meaning: 'pulizia accurata' },
      { word: '掃き清める', kana: 'はききよめる', romaji: 'hakikiyomeru', meaning: 'spazzare e purificare' }
    ]
  },
  {
    id: '12-14', month: 12, day: 14, dayOfYear: 349, jpDate: '十二月十四日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Anniversario Storico',
    titleIt: 'Memoria dei 47 Rōnin al Sengaku-ji', titleJp: '忠臣蔵の日・義士祭 (Gishi-sai)',
    observanceDesc: 'Il 14 dicembre 1702 (secondo il calendario antico) i quarantasette rōnin di Akō vendicarono il proprio signore Asano Naganori: ogni anno al tempio Sengaku-ji di Tokyo migliaia di persone offrono incenso davanti alle loro tombe.',
    kanji: '忠', meaningIt: 'lealtà, fedeltà retta', strokes: 8, radical: '心 (cuore)',
    on: [{ kana: 'チュウ', romaji: 'chū' }],
    kun: [],
    originStory: 'Un centro perfetto (中) sopra il cuore (心): mantenere l’animo saldo, schietto e fedele alla propria parola senza deviazioni.',
    examples: [
      { word: '忠実', kana: 'ちゅうじつ', romaji: 'chūjitsu', meaning: 'fedele, scrupoloso' },
      { word: '忠義', kana: 'ちゅうぎ', romaji: 'chūgi', meaning: 'devozione e lealtà' },
      { word: '忠告', kana: 'ちゅうこく', romaji: 'chūkoku', meaning: 'consiglio sincero' }
    ]
  },
  {
    id: '12-15', month: 12, day: 15, dayOfYear: 350, jpDate: '十二月十五日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Rito Shintō',
    titleIt: 'Setagaya Boro-ichi e Apertura delle Cassette Nengajō', titleJp: '世田谷ボロ市・年賀郵便特別取扱開始',
    observanceDesc: 'Dal 1578 nel quartiere di Setagaya (Tokyo) si tiene il celebre mercatino invernale Boro-ichi con oltre settecento bancarelle di antiquariato, tessuti e mochi caldi. Oggi aprono anche le cassette rosse dedicate alle cartoline nengajō.',
    kanji: '賀', meaningIt: 'congratularsi, celebrare auguri', strokes: 12, radical: '貝 (valore)',
    on: [{ kana: 'ガ', romaji: 'ga' }],
    kun: [],
    originStory: 'Parole gioiose e forza d’augurio (加) accompagnate da un dono prezioso (貝): porgere felicemente gli auguri per il nuovo anno.',
    examples: [
      { word: '年賀状', kana: 'ねんがじょう', romaji: 'nengajō', meaning: 'cartolina d’auguri di Capodanno' },
      { word: '謹賀新年', kana: 'きんがしんねん', romaji: 'kinga shinnen', meaning: 'rispettosi auguri di Buon Anno' },
      { word: '祝賀', kana: 'しゅくが', romaji: 'shukuga', meaning: 'celebrazione festosa' }
    ]
  },
  {
    id: '12-16', month: 12, day: 16, dayOfYear: 351, jpDate: '十二月十六日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Anniversario Storico',
    titleIt: 'Primo Servizio Telefonico Pubblico e Kasuga On-matsuri', titleJp: '電話創業の日・春日若宮おん祭',
    observanceDesc: 'Il 16 dicembre 1890 venne inaugurato il primo servizio telefonico pubblico tra Tokyo e Yokohama, mentre a Nara dal 15 al 18 dicembre si svolge l’antico Kasuga Wakamiya On-matsuri.',
    kanji: '話', meaningIt: 'parlare, storia, dialogo', strokes: 13, radical: '言 (parola)',
    on: [{ kana: 'ワ', romaji: 'wa' }],
    kun: [{ kana: 'はな(す)', romaji: 'hana(su)' }, { kana: 'はなし', romaji: 'hanashi' }],
    originStory: 'Parole (言) pronunciate con la lingua sciolta (舌): raccontare, conversare e trasmettere notizie tra persone vicine e lontane.',
    examples: [
      { word: '電話', kana: 'でんわ', romaji: 'denwa', meaning: 'telefono' },
      { word: '昔話', kana: 'むかしばなし', romaji: 'mukashibanashi', meaning: 'fiaba antica giapponese' },
      { word: '会話', kana: 'かいわ', romaji: 'kaiwa', meaning: 'conversazione' }
    ]
  },
  {
    id: '12-17', month: 12, day: 17, dayOfYear: 352, jpDate: '十二月十七日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Rito Buddhista',
    titleIt: 'Hagoita-ichi — Fiera delle Palette Decorative al Sensō-ji', titleJp: '羽子板市（浅草寺） (Hagoita-ichi)',
    observanceDesc: 'Dal 17 al 19 dicembre il cortile del tempio Sensō-ji di Asakusa si riempie delle splendide palette di legno hagoita decorate con ritratti in rilievo di attori kabuki, comprate come portafortuna per respingere i malanni.',
    kanji: '板', meaningIt: 'tavola di legno, paletta', strokes: 8, radical: '木 (albero)',
    on: [{ kana: 'ハン', romaji: 'han' }, { kana: 'バン', romaji: 'ban' }],
    kun: [{ kana: 'いた', romaji: 'ita' }],
    originStory: 'Legno (木) tagliato in assi larghe e piane (反): dalle tavole dei pavimenti engawa fino alle palette portafortuna hagoita e alle matrici ukiyo-e.',
    examples: [
      { word: '羽子板', kana: 'はごいた', romaji: 'hagoita', meaning: 'paletta decorata di fine anno' },
      { word: '黒板', kana: 'こくばん', romaji: 'kokuban', meaning: 'lavagna' },
      { word: '木版と板', kana: 'もくはんといった', romaji: 'mokuhan to ita', meaning: 'xilografia e tavola di legno' }
    ]
  },
  {
    id: '12-18', month: 12, day: 18, dayOfYear: 353, jpDate: '十二月十八日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Rito Buddhista',
    titleIt: 'Osame no Kannon — Ultima Preghiera dell’Anno a Kannon', titleJp: '納めの観音・東京駅完成記念日 (Osame no Kannon)',
    observanceDesc: 'Il 18 dicembre è l’ultima festa mensile dell’anno dedicata a Kannon Bosatsu per ringraziare della protezione ricevuta; nello stesso giorno del 1914 fu completata la facciata in mattoni rossi della Stazione di Tokyo.',
    kanji: '拝', meaningIt: 'inchinarsi devotamente, pregare', strokes: 8, radical: '扌 (mano)',
    on: [{ kana: 'ハイ', romaji: 'hai' }],
    kun: [{ kana: 'おが(む)', romaji: 'oga(mu)' }],
    originStory: 'Due mani che si avvicinano e si congiungono con rispetto davanti a qualcosa di sacro o nobile.',
    examples: [
      { word: '参拝', kana: 'さんぱい', romaji: 'sanpai', meaning: 'visita devota a un santuario o tempio' },
      { word: '礼拝', kana: 'らいはい・れいはい', romaji: 'raihai / reihai', meaning: 'venerazione' },
      { word: '拝見', kana: 'はいけん', romaji: 'haiken', meaning: 'guardare con umiltà (linguaggio cortese)' }
    ]
  },
  {
    id: '12-19', month: 12, day: 19, dayOfYear: 354, jpDate: '十二月十九日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Anniversario Storico',
    titleIt: 'Primo Volo Motorizzato in Giappone', titleJp: '日本人初飛行の日 (Nihonjin Hatsu Hikō no Hi)',
    observanceDesc: 'Il 19 dicembre 1910 il capitano Yoshitoshi Tokugawa compì il primo volo motorizzato riuscito in Giappone sul campo di Yoyogi a Tokyo per circa tre chilometri.',
    kanji: '飛', meaningIt: 'volare, librarsi', strokes: 9, radical: '飛 (volo)',
    on: [{ kana: 'ヒ', romaji: 'hi' }],
    kun: [{ kana: 'と(ぶ)', romaji: 'to(bu)' }],
    originStory: 'Pittogramma di un uccello visto dall’alto con la testa slanciata avanti e le due grandi ali spiegate ai lati mentre fende l’aria.',
    examples: [
      { word: '飛行機', kana: 'ひこうき', romaji: 'hikōki', meaning: 'aeroplano' },
      { word: '飛び石', kana: 'とびいし', romaji: 'tobiishi', meaning: 'pietre da guado nei giardini giapponesi' },
      { word: '飛躍', kana: 'ひやく', romaji: 'hiyaku', meaning: 'balzo in avanti' }
    ]
  },
  {
    id: '12-20', month: 12, day: 20, dayOfYear: 355, jpDate: '十二月二十日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Giornata Curiosa',
    titleIt: 'Giornata della Ricciola Invernale (Buri no Hi)', titleJp: 'ブリの日 (Buri no Hi)',
    observanceDesc: 'Il 20 dicembre celebra la pregiata ricciola invernale (kan-buri) delle coste di Toyama e Ishikawa: il suo nome in kanji 鰤 unisce "pesce" (魚) e "maestro/dodicesimo mese" (師 di Shiwasu), mentre il 20 gioca con la lettura buri.',
    kanji: '魚', meaningIt: 'pesce', strokes: 11, radical: '魚 (pesce)',
    on: [{ kana: 'ギョ', romaji: 'gyo' }],
    kun: [{ kana: 'うお', romaji: 'uo' }, { kana: 'さかな', romaji: 'sakana' }],
    originStory: 'Pittogramma completo di un pesce verticale con la testa in alto, il corpo a scaglie incrociate (田) e la pinna caudale divaricata alla base (灬).',
    examples: [
      { word: '金魚', kana: 'きんぎょ', romaji: 'kingyo', meaning: 'pesce rosso ornamentale' },
      { word: '魚市場', kana: 'うおいちば', romaji: 'uoichiba', meaning: 'mercato del pesce' },
      { word: '焼き魚', kana: 'やきざかな', romaji: 'yakizakana', meaning: 'pesce alla griglia' }
    ]
  },
  {
    id: '12-21', month: 12, day: 21, dayOfYear: 356, jpDate: '十二月二十一日',
    season: 'Inverno', sekki: 'Taisetsu', category: 'Rito Buddhista',
    titleIt: 'Shimai Kōbō — Ultimo Mercatino al Tō-ji di Kyoto', titleJp: '終い弘法 (Shimai Kōbō)',
    observanceDesc: 'Il 21 dicembre al tempio Tō-ji di Kyoto si svolge l’ultimo grande mercato di Kōbō Daishi dell’anno: centinaia di bancarelle vendono kimono usati, ceramiche, calligrafie, decorazioni kadomatsu e dolciumi per Capodanno.',
    kanji: '古', meaningIt: 'antico, tradizionale', strokes: 5, radical: '口 (bocca)',
    on: [{ kana: 'コ', romaji: 'ko' }],
    kun: [{ kana: 'ふる(い)', romaji: 'furu(i)' }],
    originStory: 'Dieci generazioni (十) che hanno tramandato di bocca in bocca (口) una memoria o custodito un oggetto nel tempo.',
    examples: [
      { word: '古都', kana: 'こと', romaji: 'koto', meaning: 'antica capitale (Kyoto, Nara)' },
      { word: '古道具', kana: 'ふるどうぐ', romaji: 'furudōgu', meaning: 'oggetti d’antiquariato' },
      { word: '古典', kana: 'こてん', romaji: 'koten', meaning: 'classico letterario' }
    ]
  },
  {
    id: '12-22', month: 12, day: 22, dayOfYear: 357, jpDate: '十二月二十二日',
    season: 'Inverno', sekki: 'Tōji', category: 'Natura e Stagioni',
    titleIt: 'Tōji — Solstizio d’Inverno e Bagno allo Yuzu', titleJp: '冬至・ゆず湯 (Tōji · Yuzuyu)',
    observanceDesc: 'Ventiduesimo termine solare e notte più lunga dell’anno: da domani la luce ricomincia a crescere (ichiyō raifuku). La tradizione vuole che si mangi zucca kabocha (kabocha / nankin — cibi con la "n" per fortuna) e ci si immerga in un bagno caldo con agrumi yuzu profumati.',
    kanji: '柚', meaningIt: 'agrume yuzu', strokes: 9, radical: '木 (albero)',
    on: [{ kana: 'ユ', romaji: 'yu' }, { kana: 'ユウ', romaji: 'yū' }],
    kun: [{ kana: 'ゆず', romaji: 'yuzu' }],
    originStory: 'Albero (木) dai frutti dorati e profumati (由): l’agrume rustico che resiste al gelo di dicembre e diffonde aroma balsamico nell’acqua calda del solstizio.',
    examples: [
      { word: '柚子湯', kana: 'ゆずゆ', romaji: 'yuzuyu', meaning: 'bagno caldo con agrumi yuzu del solstizio' },
      { word: '柚子茶', kana: 'ゆずちゃ', romaji: 'yuzucha', meaning: 'infuso dolce allo yuzu' },
      { word: '冬至と柚子', kana: 'とうじとゆず', romaji: 'tōji to yuzu', meaning: 'solstizio d’inverno e yuzu' }
    ]
  },
  {
    id: '12-23', month: 12, day: 23, dayOfYear: 358, jpDate: '十二月二十三日',
    season: 'Inverno', sekki: 'Tōji', category: 'Anniversario Storico',
    titleIt: 'Completamento della Tokyo Tower', titleJp: '東京タワー完工の日 (Tōkyō Tawā Kankō no Hi)',
    observanceDesc: 'Il 23 dicembre 1958 venne completata la Tokyo Tower (333 metri), icona rosso-bianca della rinascita urbana e del paesaggio di Tokyo per oltre mezzo secolo.',
    kanji: '建', meaningIt: 'costruire, edificare', strokes: 9, radical: '廴 (passo lungo)',
    on: [{ kana: 'ケン', romaji: 'ken' }, { kana: 'コン', romaji: 'kon' }],
    kun: [{ kana: 'た(てる)', romaji: 'ta(teru)' }, { kana: 'た(つ)', romaji: 'ta(tsu)' }],
    originStory: 'Una mano che traccia progetti o linee rette (聿) lungo fondamenta estese (廴): innalzare edifici e istituzioni destinate a durare.',
    examples: [
      { word: '建築', kana: 'けんちく', romaji: 'kenchiku', meaning: 'architettura' },
      { word: '建物', kana: 'たてもの', romaji: 'tatemono', meaning: 'edificio' },
      { word: '再建', kana: 'さいけん', romaji: 'saiken', meaning: 'ricostruzione' }
    ]
  },
  {
    id: '12-24', month: 12, day: 24, dayOfYear: 359, jpDate: '十二月二十四日',
    season: 'Inverno', sekki: 'Tōji', category: 'Giornata Curiosa',
    titleIt: 'Vigilia di Natale alla Giapponese', titleJp: 'クリスマスイブ・納めの地蔵 (Kurisumasu Ibu)',
    observanceDesc: 'In Giappone la Vigilia di Natale è vissuta come una serata romantica e luminosa per le strade delle città: si gustano torte alla panna e fragole (Kurisumasu kēki) sotto le luminarie invernali, mentre nei templi cade l’ultimo giorno di Jizō.',
    kanji: '苺', meaningIt: 'fragola', strokes: 9, radical: '艹 (erba)',
    on: [{ kana: 'バイ', romaji: 'bai' }],
    kun: [{ kana: 'いちご', romaji: 'ichigo' }],
    originStory: 'Pianta bassa e strisciante (艹) che genera molti piccoli frutti rossi (母, madre feconda): la fragola rossa coltivata nelle serre invernali giapponesi.',
    examples: [
      { word: '苺ケーキ', kana: 'いちごケーキ', romaji: 'ichigo kēki', meaning: 'torta soffice con panna e fragole' },
      { word: '苺狩り', kana: 'いちごがり', romaji: 'ichigogari', meaning: 'raccolta delle fragole in serra' },
      { word: '野苺', kana: 'のいちご', romaji: 'noichigo', meaning: 'fragolina di bosco' }
    ]
  },
  {
    id: '12-25', month: 12, day: 25, dayOfYear: 360, jpDate: '十二月二十五日',
    season: 'Inverno', sekki: 'Tōji', category: 'Rito Shintō',
    titleIt: 'Shimai Tenjin a Kyoto e Inizio dell’Era Shōwa', titleJp: '終い天神・昭和改元の日 (Shimai Tenjin)',
    observanceDesc: 'Al santuario Kitano Tenmangū di Kyoto si tiene l’ultimo mercato dell’anno dedicato a Tenjin; inoltre il 25 dicembre 1926 iniziò l’era Shōwa. Subito dopo il 25 le città cambiano volto preparando i kadomatsu.',
    kanji: '松', meaningIt: 'pino sempreverde (matsu)', strokes: 8, radical: '木 (albero)',
    on: [{ kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'まつ', romaji: 'matsu' }],
    originStory: 'Albero (木) nobile e pubblico come un principe (公): il pino sempreverde che non perde gli aghi nel gelo d’inverno, simbolo di costanza e lunga vita.',
    examples: [
      { word: '門松', kana: 'かどまつ', romaji: 'kadomatsu', meaning: 'decorazione di pino e bambù all’ingresso' },
      { word: '松竹梅', kana: 'しょうちくばい', romaji: 'shōchikubai', meaning: 'pino, bambù e prugno (i Tre Amici dell’Inverno)' },
      { word: '松林', kana: 'まつばやし', romaji: 'matsubayashi', meaning: 'pineta' }
    ]
  },
  {
    id: '12-26', month: 12, day: 26, dayOfYear: 361, jpDate: '十二月二十六日',
    season: 'Inverno', sekki: 'Tōji', category: 'Anniversario Storico',
    titleIt: 'Giornata del Baseball Professionistico Giapponese', titleJp: 'プロ野球誕生の日・ボクシングデー',
    observanceDesc: 'Il 26 dicembre 1934 venne fondato a Tokyo il Dai-Nihon Tōkyō Yakyū Club (oggi Yomiuri Giants), primo club professionistico di baseball dell’arcipelago.',
    kanji: '勝', meaningIt: 'vincere, superare sé stessi', strokes: 12, radical: '力 (forza)',
    on: [{ kana: 'ショウ', romaji: 'shō' }],
    kun: [{ kana: 'か(つ)', romaji: 'ka(tsu)' }, { kana: 'まさ(る)', romaji: 'masa(ru)' }],
    originStory: 'Unisce un antico elemento che raffigurava due mani intente a offrire o sollevare con slancio (la parte sinistra, poi assimilata alla forma 月) alla forza muscolare (力): prevalere con impegno leale.',
    examples: [
      { word: '勝負', kana: 'しょうぶ', romaji: 'shōbu', meaning: 'sfida, vittoria o sconfitta' },
      { word: '優勝', kana: 'ゆうしょう', romaji: 'yūshō', meaning: 'vittoria del torneo' },
      { word: '名勝', kana: 'めいしょう', romaji: 'meishō', meaning: 'luogo celebre per bellezza paesaggistica' }
    ]
  },
  {
    id: '12-27', month: 12, day: 27, dayOfYear: 362, jpDate: '十二月二十七日',
    season: 'Inverno', sekki: 'Tōji', category: 'Giornata Curiosa',
    titleIt: 'Mochi-tsuki — Battitura dei Mochi di Fine Anno', titleJp: '餅つきの日・ピーターパンの日 (Mochi-tsuki)',
    observanceDesc: 'Negli ultimi giorni dell’anno le famiglie e i quartieri preparano i mochi per il Capodanno battendo il riso al vapore con pesanti martelli di legno kine nei mortai usu: tra il 27 e il 28 dicembre si allestiscono gli ornamenti shimekazari (evitando il 29, "nove = sofferenza", e il 31, "una sola notte").',
    kanji: '飾', meaningIt: 'ornare, decorare con cura', strokes: 13, radical: '食 (cibo/offerta)',
    on: [{ kana: 'ショク', romaji: 'shoku' }],
    kun: [{ kana: 'かざ(る)', romaji: 'kaza(ru)' }],
    originStory: 'Offerte scelte (飠) e tessuti o figure ordinate da una persona con il drappo (人 + 巾): abbellire la soglia di casa per accogliere gli ospiti e i kami.',
    examples: [
      { word: 'しめ飾り', kana: 'しめかざり', romaji: 'shimekazari', meaning: 'decorazione di paglia sacra per l’ingresso' },
      { word: 'お飾り', kana: 'おかざり', romaji: 'okazari', meaning: 'ornamento tradizionale' },
      { word: '装飾', kana: 'そうしょく', romaji: 'sōshoku', meaning: 'decorazione' }
    ]
  },
  {
    id: '12-28', month: 12, day: 28, dayOfYear: 363, jpDate: '十二月二十八日',
    season: 'Inverno', sekki: 'Tōji', category: 'Rito Shintō',
    titleIt: 'Goyō-osame — Ultimo Giorno Lavorativo e Ornamenti Propizi (Otto)', titleJp: '仕事納め・官公庁御用納め (Shigoto-osame)',
    observanceDesc: 'Uffici pubblici e botteghe chiudono i registri dell’anno. Il 28 dicembre è il giorno più propizio per appendere i kadomatsu e i kagami-mochi, perché il numero 8 (八) si apre verso il basso come simbolo di prosperità crescente (suehirogari).',
    kanji: '八', meaningIt: 'otto, apertura propizia', strokes: 2, radical: '八 (otto)',
    on: [{ kana: 'ハチ', romaji: 'hachi' }],
    kun: [{ kana: 'や', romaji: 'ya' }, { kana: 'や(つ)', romaji: 'ya(tsu)' }],
    originStory: 'Due tratti inclinati che si aprono verso il basso: nella cultura giapponese la forma slargata alla base (suehirogari) simboleggia un futuro che cresce e si espande.',
    examples: [
      { word: '八百万の神', kana: 'やおよろずのかみ', romaji: 'yaoyorozu no kami', meaning: 'gli innumerevoli kami dello Shintō' },
      { word: '八坂神社', kana: 'やさかじんじゃ', romaji: 'Yasaka-jinja', meaning: 'storico santuario di Gion a Kyoto' },
      { word: '八重桜', kana: 'やえざくら', romaji: 'yaezakura', meaning: 'ciliegio dai petali doppi' }
    ]
  },
  {
    id: '12-29', month: 12, day: 29, dayOfYear: 364, jpDate: '十二月二十九日',
    season: 'Inverno', sekki: 'Tōji', category: 'Giornata Curiosa',
    titleIt: 'Preparazione dell’Osechi Ryōri', titleJp: 'おせち準備・清水トンネル貫通記念日',
    observanceDesc: 'Nelle cucine giapponesi si preparano lentamente i piatti tradizionali dell’osechi ryōri che riposeranno nelle scatole laccate jubako a più piani, così da non dover accendere i fornelli nei primi giorni del nuovo anno.',
    kanji: '重', meaningIt: 'strato sovrapposto, importante, prezioso', strokes: 9, radical: '里 (villaggio)',
    on: [{ kana: 'ジュウ', romaji: 'jū' }, { kana: 'チョウ', romaji: 'chō' }],
    kun: [{ kana: 'おも(い)', romaji: 'omo(i)' }, { kana: 'かさ(ねる)', romaji: 'kasa(neru)' }],
    originStory: 'Univa in origine l’immagine di una persona in piedi con un pesante fagotto sulle spalle sopra la terra: peso, profondità e accumulo di strati felici.',
    examples: [
      { word: '重箱', kana: 'じゅうばこ', romaji: 'jūbako', meaning: 'scatole laccate impilabili per l’osechi' },
      { word: '大切・重要', kana: 'たいせつ・じゅうよう', romaji: 'taisetsu / jūyō', meaning: 'importante, essenziale' },
      { word: '重ねる', kana: 'かさねる', romaji: 'kasaneru', meaning: 'sovrapporre, accumulare (anni o gioie)' }
    ]
  },
  {
    id: '12-30', month: 12, day: 30, dayOfYear: 365, jpDate: '十二月三十日',
    season: 'Inverno', sekki: 'Tōji', category: 'Anniversario Storico',
    titleIt: 'Inaugurazione della Prima Metropolitana d’Asia (Ginza Line)', titleJp: '地下鉄記念日 (Chikatetsu Kinenbi)',
    observanceDesc: 'Il 30 dicembre 1927 aprì a Tokyo la linea tra Asakusa e Ueno, prima metropolitana dell’intera Asia; intanto nei mercati come Ameyoko le famiglie completano gli acquisti per il veglione.',
    kanji: '歳', meaningIt: 'anno di vita, ciclo annuale', strokes: 13, radical: '止 (piede/fermarsi)',
    on: [{ kana: 'サイ', romaji: 'sai' }, { kana: 'セイ', romaji: 'sei' }],
    kun: [{ kana: 'とし', romaji: 'toshi' }],
    originStory: 'Un passo che compie il giro celeste (歩) attorno alla stella di riferimento e alla lama rituale (戌): il compiersi esatto di una rivoluzione solare.',
    examples: [
      { word: 'お歳暮', kana: 'おせいぼ', romaji: 'oseibo', meaning: 'doni di fine anno' },
      { word: '歳月', kana: 'さいげつ', romaji: 'saigetsu', meaning: 'il trascorrere dei mesi e degli anni' },
      { word: '二十歳', kana: 'はたち', romaji: 'hatachi', meaning: 'vent’anni d’età' }
    ]
  },
  {
    id: '12-31', month: 12, day: 31, dayOfYear: 366, jpDate: '十二月三十一日',
    season: 'Inverno', sekki: 'Tōji', category: 'Rito Buddhista',
    titleIt: 'Ōmisoka — Notte di San Silvestro e i 108 Rintocchi', titleJp: '大晦日・除夜の鐘 (Ōmisoka · Joya no Kane)',
    observanceDesc: 'Ultimo giorno dell’anno: si mangiano i lunghi tagliolini toshikoshi-soba (augurio di lunga vita e taglio netto con le fatiche passate) e a mezzanotte le campane dei templi suonano 108 rintocchi (Joya no Kane) per purificare i 108 desideri terreni.',
    kanji: '年', meaningIt: 'anno', strokes: 6, radical: '干 (scudo/stelo)',
    on: [{ kana: 'ネン', romaji: 'nen' }],
    kun: [{ kana: 'とし', romaji: 'toshi' }],
    originStory: 'In origine raffigurava un uomo chino sotto il peso di una spiga matura di cereale (禾 + 千): il raccolto annuale che scandiva il passare del tempo.',
    examples: [
      { word: '年越し蕎麦', kana: 'としこしそば', romaji: 'toshikoshi soba', meaning: 'soba di fine anno' },
      { word: '大晦日', kana: 'おおみそか', romaji: 'Ōmisoka', meaning: '31 dicembre, vigilia di Capodanno' },
      { word: '良いお年を', kana: 'よいおとしを', romaji: 'Yoi otoshi o', meaning: 'Buon fine anno e anno nuovo!' }
    ]
  }
];
