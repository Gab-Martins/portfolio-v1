// Conteúdo do guia. Para adicionar foto: coloque o arquivo em /img e preencha "foto": "img/arquivo.jpg".
// "preco" = valores aproximados pesquisados em nov/2026, confirmar no site oficial antes de ir.

window.GUIA = {
  intro: {
    titulo: "Toronto por Gab",
    subtitulo: "Tudo que eu fiz, comi e comprei em Toronto, com nota e opinião sincera.",
    conselho: "Minha maior dica: aproveita a vista e não esquece que tudo bem descansar. Afinal, são férias!"
  },

  lugares: [
    // ---------- CityPASS ----------
    {
      id: "cn-tower", cat: "citypass", nome: "CN Tower", nota: 5, emoji: "🗼",
      opiniao: "Uma vista indescritível, por um segundo o mundo ficou em silêncio enquanto eu apreciava a paisagem. Fui no pôr do sol, o mais lindo que já vi! Não fiz nada além de subir e curtir a vista, mas lá tem um restaurante giratório e dá pra ficar pendurada do lado de fora (adrenalina demais pra mim).",
      dica: "Deixa pra marcar num dia bem ensolarado e compra no próprio dia, assim garante a melhor vista.",
      curiosidades: [
        "Com 553 m, foi a estrutura independente mais alta do mundo de 1975 a 2007.",
        "O restaurante giratório (360 Restaurant) dá uma volta completa a cada 72 minutos mais ou menos. Quem janta lá não paga a subida à parte (consumo mínimo de uns CA$75).",
        "O \"pendurada do lado de fora\" é o EdgeWalk, uma caminhada presa por cabos na borda da torre, a 356 m de altura (uns CA$199)."
      ],
      preco: "Incluso no CityPASS",
      endereco: "290 Bremner Blvd", maps: "CN Tower Toronto", foto: "img/cn-tower.jpg"
    },
    {
      id: "casa-loma", cat: "citypass", nome: "Casa Loma", nota: 5, emoji: "🏰",
      opiniao: "É um CASTELO, preciso dizer algo mais? Me senti teletransportada pra outro mundo. Minhas salas favoritas foram a biblioteca, um mini jardim de inverno e um quarto com um cantinho de chá. As pinturas são lindas e subir na torre vale a pena, deu medinho, porém vista 10/10. Ouvi gente dizendo que não valeu a pena, mas acho que é questão de gosto. Eu tenho um muito bom, então recomendo!",
      dica: "Saindo de lá, desce pelas Baldwin Steps, que ficam do lado. A vista da cidade é linda.",
      curiosidades: [
        "Construída entre 1911 e 1914 por Sir Henry Pellatt, que ficou rico levando a energia elétrica de Niagara para Toronto.",
        "Custou CA$3,5 milhões na época e foi a maior casa particular da América do Norte. Pellatt faliu e perdeu o castelo em 1923.",
        "Tem passagens secretas e um túnel subterrâneo até os estábulos."
      ],
      preco: "Incluso no CityPASS",
      endereco: "1 Austin Terrace", maps: "Casa Loma Toronto", foto: "img/casa-loma.jpg"
    },
    {
      id: "rom", cat: "citypass", nome: "Royal Ontario Museum (ROM)", nota: 4, emoji: "🦕",
      opiniao: "O museu é enorme e tem muuuuita coisa legal. Minhas seções favoritas foram Grécia, China e os dinossauros, muito vibes Noite no Museu. Quando fui tinha passeio escolar, por isso uma estrela a menos, as crianças tavam me irritando.",
      dica: "Tem uma cafeteria lá dentro, muito gostosa. Recomendo a butter tart (tortinha de nozes com maple syrup). Não recomendo o croissant.",
      curiosidades: [
        "A fachada de cristal e alumínio (\"The Crystal\") foi projetada pelo arquiteto Daniel Libeskind e inaugurada em 2007."
      ],
      preco: "Incluso no CityPASS",
      endereco: "100 Queens Park", maps: "Royal Ontario Museum", foto: "img/rom.jpg"
    },
    {
      id: "ripleys", cat: "citypass", nome: "Ripley's Aquarium of Canada", nota: 3, emoji: "🦈",
      opiniao: "Achei um passeio bem relaxante e tranquilo. Gostei de ver os tubarões, as tartarugas e as águas-vivas. É um aquário, então não tem nada que não veria em outro, mas se sobrar tempo acho um passeio legal.",
      dica: "Fica do lado da CN Tower, dá pra fazer os dois no mesmo dia.",
      curiosidades: [
        "O túnel dos tubarões (Dangerous Lagoon) tem a maior esteira rolante subaquática da América do Norte."
      ],
      preco: "Incluso no CityPASS",
      endereco: "288 Bremner Blvd", maps: "Ripley's Aquarium of Canada", foto: "img/ripleys.jpg"
    },

    // ---------- Grátis ----------
    {
      id: "queens-park", cat: "gratis", nome: "Queen's Park", nota: 5, emoji: "🌳",
      opiniao: "Muito bonito, parece cena de filme. Ótimo pra andar, respirar e apreciar a vida.",
      curiosidades: [
        "O prédio rosado no meio do parque é a Assembleia Legislativa de Ontário, de 1893, e tem tour guiado de graça."
      ],
      preco: "Grátis",
      endereco: "Queen's Park", maps: "Queen's Park Toronto", foto: "img/queens-park.jpg"
    },
    {
      id: "uoft", cat: "gratis", nome: "Universidade de Toronto (U of T)", nota: 5, emoji: "🎓",
      opiniao: "Eles estudam num CASTELOOOOO. Até agora estou incrédula, muito Hogwarts vibes. Amei andar pelo campus e apreciar a arquitetura. Entrei em alguns prédios também, incrível.",
      dica: "Fiz o campus nessa ordem: Knox College, University College, Convocation Hall, Soldiers' Tower e Hart House (passa por baixo do arco) e por último o Trinity College. De lá são uns 5 min a pé até o ROM.",
      curiosidades: [
        "O Great Hall da Hart House é a comparação clássica com o salão de Hogwarts.",
        "A Soldiers' Tower é um memorial aos membros da universidade mortos nas guerras mundiais e tem um carrilhão de sinos."
      ],
      preco: "Grátis",
      endereco: "King's College Circle", maps: "University College Toronto", foto: "img/uoft.jpg"
    },
    {
      id: "fisher", cat: "gratis", nome: "Thomas Fisher Rare Book Library", nota: 3, emoji: "📜",
      opiniao: "Achei interessante conhecer e ver a exposição, mas confesso que esperava mais, a parte aberta ao público é pequena. Vale a visita se estiver no caminho de outra atividade.",
      curiosidades: [
        "É a maior biblioteca de livros raros do Canadá, com uns 700 mil volumes."
      ],
      preco: "Grátis",
      endereco: "120 St George St", maps: "Thomas Fisher Rare Book Library", foto: "img/fisher.jpg"
    },
    {
      id: "philosophers", cat: "gratis", nome: "Philosopher's Walk", nota: 4, emoji: "🍂",
      opiniao: "Um caminho bonitinho pelo campus, gostoso de passear.",
      curiosidades: [
        "O caminho segue o traçado do Taddle Creek, um riacho que hoje corre canalizado embaixo da terra."
      ],
      preco: "Grátis",
      endereco: "Entre a Hoskin Ave e a Bloor St W", maps: "Philosopher's Walk Toronto", foto: "", revisar: true
    },
    {
      id: "baldwin", cat: "gratis", nome: "Baldwin Steps", nota: 4, emoji: "🪜",
      opiniao: "É uma escada que fica atrás da Casa Loma, com uma vista bonita. Antes de chegar tem um mini parque/passeio que achei bonito de ver.",
      curiosidades: [
        "São 110 degraus, construídos em 1913. Lá de cima dá pra ver o skyline até a CN Tower."
      ],
      preco: "Grátis",
      endereco: "Spadina Rd & Davenport Rd", maps: "Baldwin Steps Toronto", foto: "img/baldwin.jpg"
    },
    {
      id: "chinatown", cat: "gratis", nome: "Chinatown", nota: 4, emoji: "🏮",
      opiniao: "Um bairro muito interessante, com muitos restaurantes e lojinhas diferentes. Gostei de andar, fazer comprinhas e comer. Lembrando que é um bairro, não tem nada temático. Na minha cabeça ia ser tipo entrar na vila do Kung Fu Panda.",
      dica: "A loja de skincare Reiwatakiya fica aqui (veja em Compras).",
      preco: "Grátis",
      endereco: "Spadina Ave & Dundas St W", maps: "Chinatown Toronto", foto: "img/chinatown.jpg"
    },
    {
      id: "kensington", cat: "gratis", nome: "Kensington Market", nota: 3, emoji: "🎨",
      opiniao: "É o bairro onde o hostel fica. Andei por lá, mas confesso que não é muito minha vibe. Tem algumas artes de grafite e tal, mas não achei nada demais.",
      dica: "O restaurante indiano The Cottage Cheese fica aqui (veja em Comida).",
      curiosidades: [
        "É Sítio Histórico Nacional do Canadá desde 2006."
      ],
      preco: "Grátis",
      endereco: "Kensington Ave & Augusta Ave", maps: "Kensington Market Toronto", foto: "img/kensington.jpg", revisar: true
    },
    {
      id: "graffiti", cat: "gratis", nome: "Graffiti Alley", nota: 0, emoji: "🖌️",
      opiniao: "",
      curiosidades: [
        "É a Rush Lane, um beco atrás da Queen St W cheio de grafites, pertinho do Value Village Boutique."
      ],
      preco: "Grátis",
      endereco: "Rush Lane (atrás da Queen St W)", maps: "Graffiti Alley Toronto", foto: "img/graffiti.jpg", credito: { texto: "mark.watmough from Toronto, Canada / Wikimedia Commons (CC BY 2.0)", url: "https://commons.wikimedia.org/wiki/File:Graffiti_Alley,_Toronto_(11609067585).jpg" }, revisar: true
    },
    {
      id: "letreiro", cat: "gratis", nome: "Letreiro Toronto (Nathan Phillips Square)", nota: 0, emoji: "🔤",
      opiniao: "",
      curiosidades: [
        "O letreiro 3D foi instalado em 2015 para os Jogos Pan-Americanos.",
        "No inverno a praça vira pista de patinação no gelo."
      ],
      preco: "Grátis",
      endereco: "100 Queen St W", maps: "Nathan Phillips Square", foto: "img/letreiro.jpg", credito: { texto: "Getfitvi / Wikimedia Commons (CC BY-SA 4.0)", url: "https://commons.wikimedia.org/wiki/File:Toronto_150.jpg" }, revisar: true
    },
    {
      id: "stjames", cat: "gratis", nome: "Catedral de St. James", nota: 0, emoji: "⛪",
      opiniao: "",
      curiosidades: [
        "A congregação é a mais antiga da cidade, de 1797. O prédio atual é a quarta igreja no mesmo terreno e abriu em 1853."
      ],
      preco: "Grátis",
      endereco: "106 King St E", maps: "St. James Cathedral Toronto", foto: "img/stjames.jpg"
    },
    {
      id: "yonge", cat: "gratis", nome: "Yonge Street", nota: 5, emoji: "🏙️",
      opiniao: "Minha rua favorita pra passear e ver. Parece cena de filme, fantástico!",
      curiosidades: [
        "Já foi considerada pelo Guinness a rua mais longa do mundo."
      ],
      preco: "Grátis",
      endereco: "Yonge St", maps: "Yonge Dundas Toronto", foto: "img/yonge.jpg"
    },
    {
      id: "reference", cat: "gratis", nome: "Toronto Reference Library", nota: 4, emoji: "📚",
      opiniao: "Gostei de conhecer, achei bem bonita. Curioso que eles têm computadores pra uso gratuito. Aproveita pra sentar e descansar um pouco.",
      curiosidades: [
        "Tem uma sala dedicada a Sherlock Holmes (coleção Arthur Conan Doyle), no 5º andar. Pode estar fechada por reforma."
      ],
      preco: "Grátis",
      endereco: "789 Yonge St", maps: "Toronto Reference Library", foto: "img/reference.jpg"
    },
    {
      id: "distillery", cat: "gratis", nome: "Distillery Winter Village", nota: 5, emoji: "🎄",
      opiniao: "Você TEM que ir. É uma vila natalina!",
      dica: "A entrada é grátis antes das 16h. À noite, em dias de pico (fim de semana e perto do Natal), cobram ingresso a partir de uns CA$16, então confere no site antes.",
      curiosidades: [
        "Acontece no Distillery District, antiga destilaria Gooderham & Worts, que tem a maior coleção de arquitetura industrial vitoriana da América do Norte.",
        "Temporada 2026: de 12/nov a 3/jan (fechado no Natal)."
      ],
      preco: "Grátis antes das 16h, à noite em dias de pico uns CA$16",
      endereco: "55 Mill St", maps: "Distillery District Toronto", foto: "img/distillery.jpg"
    },
    {
      id: "andar", cat: "gratis", nome: "Andar na rua", nota: 5, emoji: "🚶‍♀️",
      opiniao: "Eu gosto muito de andar, e Toronto tem coisa bonita em cada esquina. O que mais fiz foi andar por aí e apreciar tudo.",
      dica: "Vai de tênis de corrida!",
      preco: "Grátis", endereco: "", maps: "", foto: "img/andar.jpg"
    },

    // ---------- Niagara ----------
    {
      id: "cataratas", cat: "niagara", nome: "Cataratas do Niágara", nota: 3, emoji: "💦",
      opiniao: "É uma cachoeira bem impactante de ver, mas confesso que venta muito e faz muito frio. Não andei de barco, mas valeu a pena ir mesmo que só pra ver.",
      dica: "A cidade em si é legal de ver. Tem muito cassino, então é uma vibe Las Vegas.",
      curiosidades: [
        "A queda do lado canadense se chama Horseshoe Falls (por causa do formato de ferradura).",
        "Os passeios de barco só funcionam na temporada quente."
      ],
      preco: "Grátis pra ver",
      endereco: "Niagara Parkway", maps: "Horseshoe Falls Niagara", foto: "img/cataratas.jpg"
    },
    {
      id: "power", cat: "niagara", nome: "Niagara Parks Power Station", nota: 3, emoji: "⚡",
      opiniao: "É um museu numa antiga usina hidrelétrica. Tem um show de luzes bem legal lá dentro e, por lá, você tem acesso a um túnel que leva à parte baixa das cataratas. Gostei, apesar de esperar mais do museu, e achei a entrada um pouco cara. Mas como não fiz o passeio de barco, acho que valeu a pena.",
      curiosidades: [
        "A usina funcionou de 1905 a 2006.",
        "O túnel tem uns 670 m e fica a 55 m de profundidade, terminando numa plataforma aos pés das cataratas.",
        "O show de luzes noturno se chama \"Currents\"."
      ],
      preco: "uns CA$32",
      endereco: "7005 Niagara Pkwy", maps: "Niagara Parks Power Station", foto: "img/power.jpg"
    },
    {
      id: "festival", cat: "niagara", nome: "Festival das Luzes e fogos", nota: 0, emoji: "🎆",
      opiniao: "As luzes espalhadas pelo parque deixam tudo com clima de Natal, e é de graça! Os fogos são em cima das cataratas, às 20h em algumas noites, e duram uns 5 minutinhos, então chega antes pra pegar um lugar bom na grade. Vai MUITO agasalhada porque à noite o vento das cataratas é gelado.",
      curiosidades: [
        "O Winter Festival of Lights 2026/27 vai de 14/nov a 10/jan.",
        "Os fogos dependem do clima, então confere o calendário oficial antes."
      ],
      preco: "Grátis",
      endereco: "Queen Victoria Park", maps: "Queen Victoria Park Niagara Falls", foto: "img/festival.jpg", revisar: true
    },
    {
      id: "skywheel", cat: "niagara", nome: "Clifton Hill e roda-gigante (SkyWheel)", nota: 0, emoji: "🎡",
      opiniao: "Queria muito ter ido na roda-gigante, mas a fila estava enooorme e acabei não indo. Deixo aqui como dica, caso ache interessante.",
      curiosidades: [
        "A SkyWheel está incluída no Clifton Hill Fun Pass, junto com outras atrações da rua."
      ],
      preco: "Fun Pass, uns CA$35",
      endereco: "4950 Clifton Hill", maps: "Niagara SkyWheel", foto: "img/skywheel.jpg"
    },
    {
      id: "stcatharines", cat: "niagara", nome: "St. Catharines (dica do Javier)", nota: 0, emoji: "⛵",
      opiniao: "O Javier recomendou essa cidadezinha perto de Niagara, mas não tive tempo de conhecer.",
      curiosidades: [
        "Port Dalhousie: bairro à beira do lago, com um carrossel histórico.",
        "Na eclusa Lock 3 do Canal Welland dá pra ver navios do tamanho de prédios subindo e descendo."
      ],
      preco: "", endereco: "", maps: "Port Dalhousie St. Catharines", foto: ""
    }
  ],

  comida: [
    {
      id: "cottage", nome: "The Cottage Cheese", tipo: "Indiana", nota: 5, emoji: "🍛",
      opiniao: "Primeira vez provando comida indiana e amei! Comi o butter chicken e o naan de ervas verdes com alho: 10/10 pro chicken e 7/10 pro naan. Se voltasse, pediria o naan simples. Atendimento 10/10.",
      curiosidades: ["Tem o selo Bib Gourmand do Guia Michelin (comida boa por um preço justo). O butter chicken é o prato-assinatura."],
      preco: "", endereco: "64 Oxford St (Kensington)", maps: "The Cottage Cheese 64 Oxford St Toronto", foto: "img/cottage.jpg", revisar: true
    },
    {
      id: "pai", nome: "Pai", tipo: "Tailandesa", nota: 5, emoji: "🍜",
      opiniao: "Também foi minha primeira vez comendo comida tailandesa e gostei muito. De entrada pedi o camarão empanado com parmesão (ótimo!) e depois o pad thai de carne, muito saboroso. A pimenta é forte, então pedi o mais fraco possível (sou muito fraca pra pimenta).",
      curiosidades: ["O nome vem da vila no norte da Tailândia onde os donos se conheceram. Está no Guia Michelin, e o pad thai é o prato mais pedido."],
      preco: "CA$20 a 40 por pessoa", endereco: "18 Duncan St", maps: "Pai Northern Thai Kitchen 18 Duncan St", foto: ""
    },
    {
      id: "dualcitizen", nome: "Dual Citizen (Sheraton Centre)", tipo: "Hambúrguer", nota: 5, emoji: "🍔",
      opiniao: "O hambúrguer de wagyu foi o melhor que já comi na vida. Caro, porém vale cada centavo. Quando voltar, comerei com toda certeza.",
      preco: "CA$10 a 40", endereco: "123 Queen St W", maps: "Dual Citizen Sheraton Centre Toronto", foto: ""
    },
    {
      id: "shelbys", nome: "Shelby's Shawarma", tipo: "Shawarma", nota: 5, emoji: "🌯",
      opiniao: "Comi o shawarma de cordeiro, muito bom, um dos melhores que já comi. Preço bom e serviço rápido.",
      curiosidades: ["Começou num trailer de comida em Ontário e hoje tem várias unidades por Toronto."],
      preco: "uns CA$17", endereco: "Várias unidades", maps: "Shelby's Shawarma Toronto", foto: "", revisar: true
    },
    {
      id: "alfies", nome: "Alfie's Sandwiches + Market", tipo: "Sanduíche", nota: 5, emoji: "🥪",
      opiniao: "Comi o Crema di Parma. A porção é enorme, um dá pra 2 pessoas. Muito bom, 10/10, ótimo atendimento. Só não tem lugar pra sentar.",
      curiosidades: ["O pão de fermentação natural é feito lá mesmo, ao longo do dia. O cardápio vai rodiziando cerca de 40 sanduíches."],
      preco: "CA$19 a 27", endereco: "36 Baldwin St", maps: "Alfie's Sandwiches 36 Baldwin St Toronto", foto: ""
    },
    {
      id: "koryo", nome: "Koryo Korean BBQ (Eaton Centre)", tipo: "Coreana", nota: 5, emoji: "🍗",
      opiniao: "Bem servido e saboroso. Não esperava essa qualidade de comida de shopping, mas recomendo. Comi as asinhas de frango picantes com xarope de maple e uma marmita com costela, carne e coisas variadas (bem apimentada e gigante, dá pra alimentar uma família toda).",
      preco: "", endereco: "Praça de alimentação do Eaton Centre", maps: "Koryo Korean BBQ Eaton Centre", foto: ""
    },
    {
      id: "rom-cafe", nome: "Cafeteria do ROM", tipo: "Café", nota: 4, emoji: "🥧",
      opiniao: "Recomendo a butter tart (tortinha de nozes com maple syrup). Não recomendo o croissant.",
      preco: "", endereco: "Dentro do ROM", maps: "Royal Ontario Museum", foto: "img/rom-cafe.jpg"
    },
    {
      id: "timhortons", nome: "Tim Hortons", tipo: "Café", nota: 3, emoji: "☕",
      opiniao: "Tem que provar, né? Coisa de turista. Não tomo café, mas tomei o chocolate quente: bom, porém prefiro os mais encorpados. O brownie tava gostoso.",
      curiosidades: ["Fundada em 1964 por um jogador de hóquei. Prova também os Timbits (bolinhas de donut)."],
      preco: "$", endereco: "Em todo lugar", maps: "Tim Hortons", foto: ""
    },
    {
      id: "poutine", nome: "Poutine (Distillery Winter Village)", tipo: "Prato típico", nota: 3, emoji: "🍟",
      opiniao: "É bom. Esperava mais do único prato nacional canadense? Sim. É estranho minhas batatas fritas estarem molhadas com caldo de carne? Também. Mas é uma experiência, tem que provar kkkk.",
      curiosidades: ["Nasceu em Quebec nos anos 1950: batata frita, queijo coalho (cheese curds) e molho de carne (gravy)."],
      preco: "", endereco: "55 Mill St", maps: "Distillery District Toronto", foto: "img/poutine.jpg"
    },
    {
      id: "hardrock", nome: "Hard Rock Cafe (Niagara)", tipo: "Americana", nota: 1, emoji: "🎸", naoRecomendo: true,
      opiniao: "Não recomendo: superfaturado e nada demais. Fui pela experiência de nunca ter ido, e a decoração é muito legal, mas nem rock tava tocando. Não valeu o preço pra mim. Atendimento 10/10, isso sim.",
      preco: "", endereco: "Niagara Falls", maps: "Hard Rock Cafe Niagara Falls Canada", foto: "img/hardrock.jpg"
    }
  ],

  compras: [
    {
      id: "stlawrence", nome: "St. Lawrence Market", nota: 5, emoji: "🍁",
      opiniao: "Muito legal! É uma feira de comida num galpão fechado, muito organizada, com muita loja de lembrancinha. Não comi nada porque no dia estava empanturrada, mas parecia ter muita coisa boa. Comprei as lembrancinhas e o maple syrup lá. Achei caro, porém comprei.",
      dica: "Maple syrup vai na mala despachada (passa do limite de 100 ml da bagagem de mão).",
      curiosidades: ["A National Geographic já o elegeu o melhor mercado de comida do mundo."],
      endereco: "93 Front St E", maps: "St. Lawrence Market", foto: "img/stlawrence.jpg"
    },
    {
      id: "vaughan", nome: "Vaughan Mills (outlet)", nota: 5, emoji: "🛍️",
      opiniao: "Fica em outra cidade. Levei uns 1h20 de metrô e ônibus, mas achei tranquilo, fui ouvindo uma musiquinha. Pra mim compensou muito! Comprei tênis da Nike (tinha mais opções masculinas legais, então comprei alguns pro meu querido e só um pra mim), roupas da Tommy, Guess, Adidas e Old Navy. Na minha opinião o que mais compensou foi a Tommy, com até 85% de desconto.",
      dica: "Na Tommy, no final da compra se cadastra com o email: dão mais 15% em cima do valor final. Algumas lojas lá têm o mesmo preço de qualquer shopping, então foca nas que são factory/outlet de verdade.",
      curiosidades: ["Como chegar: metrô Linha 1 até Vaughan Metropolitan Centre e depois um ônibus curto ou Uber. Confere a rota no Google Maps."],
      endereco: "1 Bass Pro Mills Dr, Vaughan", maps: "Vaughan Mills", foto: "img/vaughan.jpg", credito: { texto: "Glenn Samonte / Wikimedia Commons (CC BY 4.0)", url: "https://commons.wikimedia.org/wiki/File:Vaughan_Mills,_Entrance_2_(54634951476).jpg" }
    },
    {
      id: "reiwatakiya", nome: "Reiwatakiya (skincare)", nota: 5, emoji: "🧴",
      opiniao: "Aqui tive que me segurar muito, porque os preços estavam MARAVILHOSOS. Nem tava na promoção, e custava uns 25% do que custa no Brasil.",
      curiosidades: ["É uma loja japonesa de cosméticos, skincare e produtos de casa. Tem outra unidade na 237 Queen St W."],
      endereco: "399 Spadina Ave", maps: "Reiwatakiya 399 Spadina Ave Toronto", foto: ""
    },
    {
      id: "eaton", nome: "Eaton Centre", nota: 4, emoji: "🏬",
      opiniao: "É O shopping de lá. Muito gigante, então prepara as pernas. Tem todas as lojas imagináveis e uma árvore de Natal enorme. Fui só na Winners e na Victoria's Secret (o resto estava acima do meu orçamento), mas vale a pena ir pra conhecer.",
      curiosidades: ["Olha pro teto: tem uma revoada de gansos canadenses pendurada (a escultura \"Flight Stop\").",
        "O nome vem da Eaton's, a rede de lojas de departamento que foi a âncora do shopping e fechou no fim dos anos 1990."],
      endereco: "220 Yonge St", maps: "CF Toronto Eaton Centre", foto: "img/eaton.jpg"
    },
    {
      id: "winners", nome: "Winners", nota: 4, emoji: "🏷️",
      opiniao: "Uma loja de departamento com várias marcas, inclusive famosas. Nem tudo é barato, mas se procurar um pouco dá pra achar itens que valem a pena.",
      endereco: "Eaton Centre", maps: "Winners Eaton Centre", foto: ""
    },
    {
      id: "vs", nome: "Victoria's Secret (Eaton Centre)", nota: 4, emoji: "💗",
      opiniao: "Comprei só body splash, tinha promo de 5 por CA$55, e dividi com minha mãe, sogra e amigas, então saiu baratinho. Me deram um cartão de desconto que não pude usar, então é seu! São CA$25 off em compras a partir de CA$75.",
      cupom: "RCC1251014FUEUVC5HL (vale de 2 a 11/dez/2026, só em lojas no Canadá, fora outlet e aeroporto)",
      endereco: "Eaton Centre", maps: "Victoria's Secret Eaton Centre", foto: ""
    },
    {
      id: "ikea", nome: "IKEA Toronto Downtown", nota: 5, emoji: "🕯️",
      opiniao: "Dica muito aleatória, mas fui na IKEA comprar velas aromáticas kkkk. Amo velas e aqui são muito caras; lá encontrei de CA$1 até CA$4 as maiores. Comprei umas 15, não me julgue (AMO VELAS).",
      endereco: "382 Yonge St", maps: "IKEA Toronto Downtown 382 Yonge St", foto: ""
    },
    {
      id: "bmv", nome: "BMV Books", nota: 5, emoji: "📖",
      opiniao: "Amei! Livraria com ótimos preços (livros novos e usados). Recomendo muito mais que a Indigo.",
      endereco: "10 Edward St (perto do Eaton Centre)", maps: "BMV Books 10 Edward St Toronto", foto: ""
    },
    {
      id: "indigo", nome: "Indigo (Eaton Centre)", nota: 3, emoji: "📕",
      opiniao: "Fui, mas achei os preços caros. Prefira a BMV, que fica pertinho.",
      endereco: "Eaton Centre", maps: "Indigo Eaton Centre", foto: "img/indigo.jpg"
    },
    {
      id: "valuevillage", nome: "Value Village Boutique", nota: 4, emoji: "👗",
      opiniao: "É um brechó, e fui na versão boutique. Muuuita opção e coisa pra ver, e as roupas pareciam em boas condições. Comprei algumas, preço ótimo. Os sapatos achei muito surradinhos, não acho que valham a pena.",
      dica: "O Graffiti Alley fica logo atrás.",
      endereco: "639 Queen St W", maps: "Value Village Boutique 639 Queen St W", foto: "", revisar: true
    }
  ],

  roteiros: [
    { titulo: "Castelo", emoji: "🏰", desc: "Fica no alto do morro, ao norte do centro.",
      paradas: ["casa-loma", "baldwin"] },
    { titulo: "Hogwarts e museu", emoji: "🎓", desc: "Tudo a pé, no campus e arredores.",
      paradas: ["queens-park", "uoft", "fisher", "philosophers", "rom", "rom-cafe"] },
    { titulo: "Kensington e Chinatown", emoji: "🏮", desc: "Bairros vizinhos, perto do hostel.",
      paradas: ["kensington", "cottage", "chinatown", "reiwatakiya", "alfies"] },
    { titulo: "Queen West", emoji: "🖌️", desc: "Brechó e grafite no mesmo quarteirão.",
      paradas: ["valuevillage", "graffiti"] },
    { titulo: "Centrão / Yonge", emoji: "🏙️", desc: "Um quarteirão do outro, dá pra fazer tudo a pé.",
      paradas: ["letreiro", "dualcitizen", "eaton", "winners", "vs", "indigo", "koryo", "bmv", "ikea", "yonge", "reference"] },
    { titulo: "Beira do lago", emoji: "🗼", desc: "CN Tower no pôr do sol e o aquário do lado. O Pai fica a uns 10 min a pé.",
      paradas: ["cn-tower", "ripleys", "pai"] },
    { titulo: "Leste: mercado e Natal", emoji: "🎄", desc: "Do St. Lawrence até a Distillery são uns 15 min a pé ou de bonde 504.",
      paradas: ["stlawrence", "stjames", "distillery", "poutine"] },
    { titulo: "Outlet", emoji: "🛍️", desc: "Reserva meio dia, fica em Vaughan.",
      paradas: ["vaughan"] },
    { titulo: "Niagara", emoji: "💦", desc: "Tudo perto das cataratas.",
      paradas: ["cataratas", "power", "skywheel", "hardrock", "festival", "stcatharines"] }
  ],

  transporte: {
    presto: "[NÚMERO DO PRESTO AQUI]",
    itens: [
      "Usei o cartão Presto e sobrou saldo. O número está aqui em cima pra você usar.",
      "Pagando com Presto (ou cartão de crédito por aproximação), você tem 2 horas de integração grátis entre metrô, ônibus e bonde.",
      "Cada viagem no TTC custa uns CA$3,35.",
      "Os transportes são limpinhos. Meu favorito foi o streetcar (bonde): muito fofinho, e todos que peguei estavam vazios.",
      "Os metrôs são bem pontuais, mas evita o horário de pico, que enche muito.",
      "Uber é muito caro. Só recomendo pra ir/voltar do aeroporto. Pra ter uma noção, paguei CA$40 pra ir pro aeroporto e ainda dói só de lembrar."
    ]
  },

  dicas: [
    "Tem muito esquilo, e alguns bem gorduchos, me assustei com o tamanho.",
    "Os guaxinins realmente roubam o lixo. Levei um susto com um.",
    "Os carros têm que usar silenciador no escapamento, então a cidade é MUITO silenciosa, sem moto fazendo RAN DAM DAM DAM. Amei, fã nº 1 do silêncio.",
    "Eles fumam muito, inclusive maconha, que lá é liberada, e tem várias lojinhas pela cidade. Não é minha praia, mas se curtir, já sabe.",
    "A maioria dos lugares serve a comida pra levar. Achei estranho, porque pra mim comer no local é parte da experiência.",
    "Compra um powerbank bom, o meu me deixou na mão algumas vezes.",
    "Os preços que você vê não incluem imposto (13% em Ontário), o que não faz sentido nenhum. E sim, eles esperam gorjeta pra tudo (de 15 a 20%) kkkk.",
    "Usa tênis de corrida pra andar por aí."
  ],

  playlist: {
    url: "https://open.spotify.com/playlist/3BU4CMutgLEZpnXDGD5uBD",
    texto: "Disclaimer: tenho muitos defeitos, mas meu gosto musical jamais foi um deles. Excepcional sempre. Tem rock, pop, indie, MPB, vibes, solos de guitarra épicos e nada de metal, prometo (só um gritinho, nada demais)."
  }
};
