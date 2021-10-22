const titulo = document.getElementById("titulo");
const conteudo = document.getElementById("conteudo");
const imagem = document.getElementById("imagem");

function togglePopup(escolha){
    document.getElementById("popup-1").classList.toggle("active");

    if(document.getElementsByTagName('body')[0].style.overflow == "hidden"){
        document.getElementsByTagName('body')[0].style.overflow = "auto"
    }
    else{
        document.getElementsByTagName('body')[0].style.overflow = "hidden"
    }

    switch (escolha){
        case 'Harry Potter: Pedra Filosofal':
            titulo.innerHTML = "Harry Potter e a Pedra Filosofal";
            conteudo.innerHTML = "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.";
            imagem.src = "media/images/posters/hp_2001.jpg";
            break;
        case 'Harry Potter: Camara Secreta':
            titulo.innerHTML = "Harry Potter e a Câmara Secreta";
            conteudo.innerHTML = "Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e começar seu segundo ano na escola de bruxos. Na véspera do início das aulas, a estranha criatura Dobby aparece em seu quarto e o avisa de que voltar é um erro e que algo muito ruim pode acontecer se Harry insistir em continuar os estudos de bruxaria. O garoto, no entanto, está disposto a correr o risco e se livrar do lar problemático.";
            imagem.src = "media/images/posters/hp_2002.jpg";
            break;  
        case 'Harry Potter e o Prisioneiro de Azkaban':
            titulo.innerHTML="Harry Potter e o Prisioneiro de Azkaban";
            conteudo.innerHTML="O prisioneiro mais temido de Azkaban, Sirius Black, escapou da prisão e agora está na caça de Harry, por ele ter vencido Lorde Voldemort. Sirius quer matar Harry, por acreditar que, com ele morto, Voldemort voltará à ativa. A fuga de Sirius da prisão deixa um ar mais sombrio e preocupante em Hogwarts.";
            imagem.src = "media/images/posters/hp_2004.jpg";
            break;
        case 'O Caminho: Um filme de Breaking Bad':
            titulo.innerHTML="O Caminho: Um filme de Breaking Bad";
            conteudo.innerHTML="Após fugir do cativeiro, onde foi mantido quando sequestrado, dramaticamente, Jesse Pinkman inicia uma jornada em busca da própria liberdade, mas antes precisa se reconciliar com o passado para, só então, ter seu futuro garantido.";
            imagem.src = "media/images/posters/el_camino.jpg";
            break;
        case 'Batman: O Cavaleiro das Trevas':
            titulo.innerHTML="Batman: O Cavaleiro das Trevas";
            conteudo.innerHTML="Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade. O justiceiro será testado psicologicamente e fisicamente como nunca fora antes em um confronto bastante pessoal. Cabe a Batman encontrar uma maneira de deter o sádico vilão antes que mais vidas sejam perdidas.";
            imagem.src = "media/images/posters/dark_knight.jpg";
            break;
        case 'A Origem':
            titulo.innerHTML="A Origem";
            conteudo.innerHTML="Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.";
            imagem.src = "media/images/posters/inception.png";
            break;        
        case 'Okja':
            titulo.innerHTML="Okja";
            conteudo.innerHTML="Nova York, 2007. Lucy Mirando (Tilda Swinton), a CEO de uma poderosa empresa, apresenta ao mundo que uma nova espécie animal foi descoberta no Chile. Apelidada de 'super porco', ela é cuidada em laboratório e tem 26 animais enviados para países distintos, de forma que cada fazenda que o receba possa apresentá-lo à sua própria cultura local. A ideia é que os animais permaneçam espalhados ao redor do planeta, Uma década depois, a jovem Mija (Seo-Hyun Ahn) convive desde a infância com Okja, o super porco fêmea criado pelo avô. Prestes a perdê-la devido à proximidade do concurso, Mija decide lutar para ficar ao lado dela, custe o que custar.";
            imagem.src = "media/images/posters/okja.jpg";
            break;
        case 'Interestelar':
            titulo.innerHTML="Interestelar";
            conteudo.innerHTML="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.";
            imagem.src = "media/images/posters/interestelar.jpg";
            break;
        case 'Tubarao':
            titulo.innerHTML="Tubarão";
            conteudo.innerHTML="Um terrível ataque a banhistas é o sinal de que a praia da pequena cidade de Amity, na Nova Inglaterra, virou refeitório de um gigantesco tubarão branco. O chefe de polícia Martin Brody quer fechar as praias, mas o prefeito Larry Vaughn não permite, com medo de que o faturamento com a receita dos turistas deixe a cidade sem recursos. O cientista Matt Hooper e o pescador Quint se oferecem para ajudar Brody a capturar e matar a fera, mas a missão vai ser mais complicada do que eles imaginavam.";
            imagem.src = "media/images/posters/jaws.jpeg";
            break;
        case 'Blade Runner':
             titulo.innerHTML="Blade Runner";
             conteudo.innerHTML="No século 21, uma corporação desenvolve clones humanos para serem usados como escravos em colônias fora da Terra, identificados como replicantes. Em 2019, um ex-policial é acionado para caçar um grupo fugitivo vivendo disfarçado em Los Angeles.";
             imagem.src = "media/images/posters/blade_runner.jpg";
             break;
         case 'Blade Runner 2049':
            titulo.innerHTML="Blade Runner 2049";
            conteudo.innerHTML="Após descobrir um segredo enterrado há muito tempo, que ameaça o que resta da sociedade, um novo policial embarca na busca de Rick Deckard, que está desaparecido há 30 anos.";
            imagem.src = "media/images/posters/blade_runner_2049.jpg";
            break;
        case 'Me Chame Pelo Seu Nome':
            titulo.innerHTML="Me Chame Pelo Seu Nome";
            conteudo.innerHTML="O jovem Elio está enfrentando outro verão preguiçoso na casa de seus pais na bela e lânguida paisagem italiana. Mas tudo muda com a chegada de Oliver, um acadêmico que veio ajudar a pesquisa de seu pai.";
            imagem.src = "media/images/posters/call_me_by_your_name.jpg";
            break;
        case 'Mulher Maravilha':
            titulo.innerHTML="Mulher Maravilha";
            conteudo.innerHTML="Treinada desde cedo para ser uma guerreira imbatível, Diana Prince nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. Quando o piloto Steve Trevor sofre um acidente e cai em uma praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com a guerra, Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.";
            imagem.src = "media/images/posters/wonder_woman.jpg";
            break;
        case 'Clube de Compras Dallas':
            titulo.innerHTML="Clube de Compras Dallas";
            conteudo.innerHTML="Ron Woodroof, um eletricista heterossexual de Dallas, foi diagnosticado com AIDS em 1986, durante uma das épocas mais obscuras da doença. Embora os médicos tenham lhe dado apenas alguns meses de vida, Woodroof se recusou a aceitar o prognóstico e, procurando tratamentos alternativos, ele passa a contrabandear drogas ilegais do México.";
            imagem.src = "media/images/posters/dallas_buyers_club.jpg";
            break;
        case 'O Regresso':
            titulo.innerHTML="O Regresso";
            conteudo.innerHTML="Após ser atacado por um urso, o caçador Hugh Glass é abandonado na floresta por seu companheiro John Fitzgerald. Apesar de muito ferido, Glass consegue sobreviver e vai em busca de vingança.";
            imagem.src = "media/images/posters/the_revenant.jpg";
            break;
        case 'O Exterminador do Futuro':
            titulo.innerHTML="O Exterminador do Futuro";
            conteudo.innerHTML="Disfarçado de humano, o assassino conhecido como o Exterminador (Arnold Schwarzenegger) viaja de 2029 a 1984 para matar Sarah Connor (Linda Hamilton). Enviado para proteger Sarah está Kyle Reese (Michael Biehn), que divulga a chegada do Skynet, um sistema de inteligência artificial que detonará um holocausto nuclear. Sarah é o alvo porque a Skynet sabe que seu futuro filho comandará a luta contra eles. Com o implacável Exterminador os perseguindo, Sarah e Kyle tentam sobreviver.";
            imagem.src = "media/images/posters/the_terminator.jpg";
            break;
        case 'Ex Machina':
            titulo.innerHTML="Ex Machina";
            conteudo.innerHTML="Um jovem programador chamado Caleb ganha um concurso e recebe a oportunidade de testar uma inteligência artificial criada por Nathan, um brilhante e recluso bilionário. Mas conforme os testes progridem, Caleb descobre que essa inteligência artificial é tão sofisticada e imprevisível que ele não sabe mais em quem confiar.";
            imagem.src = "media/images/posters/ex_machina.jpg";
            break;
        case 'Vingadores Ultimato':
            titulo.innerHTML="Vingadores Ultimato";
            conteudo.innerHTML="Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.";
            imagem.src = "media/images/posters/Vingadores_ultimato.jpg";
            break;
        case 'Piratas do Caribe A Vingança de Salazar':
            titulo.innerHTML="Piratas do Caribe A Vingança de Salazar";
            conteudo.innerHTML="Johnny Depp retorna às telas de cinema no papel do anti-herói icônico e fanfarrão, Jack Sparrow, no novo filme 'Piratas do Caribe: A Vingança de Salazar'. Nessa aventura cheia de ação o Capitão Jack, que anda passando por uma onda de azar, sente os ventos da má sorte soprando com muita força quando os marinheiros fantasmas assassinos, liderados pelo aterrorizante Capitão Salazar (Javier Bardem), escapam do triângulo do diabo decididos a matar todos os piratas em seu caminho, especialmente Jack.";
            imagem.src = "media/images/posters/piratas_salazar.jpg";
            break;
        case 'Homem-Aranha no Aranhaverso':
            titulo.innerHTML="Homem-Aranha no Aranhaverso";
            conteudo.innerHTML="Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna o Homem-Aranha, inspirado no legado do já falecido Peter Parker. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói por baixo de um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras versões do Homem-Aranha.";
            imagem.src = "media/images/posters/aranhaverso.jpg";
            break;
        case 'Creed: Nascido para Lutar':
            titulo.innerHTML="Creed: Nascido para Lutar";
            conteudo.innerHTML="Adonis Johnson, filho do campeão de boxe Apollo Creed, pede a Rocky Balboa, que está aposentado, para ser seu treinador. Rocky aceita, mas tem dúvidas se Adonis tem o coração de um verdadeiro lutador.";
            imagem.src = "media/images/posters/creed.jpg";
            break;
        case 'Space Jam: Um Novo Legado':
            titulo.innerHTML="Space Jam: Um Novo Legado";
            conteudo.innerHTML="O superastro do basquete LeBron James se junta à gangue Looney Tunes para derrotar o Goon Squad e salvar seu filho.";
            imagem.src = "media/images/posters/spacejam2.jpg";
            break;
        case '2 Filhos de Francisco A História de Zeze di Camargo & Luciano':
            titulo.innerHTML="2 Filhos de Francisco A História de Zezé di Camargo & Luciano";
            conteudo.innerHTML="A história de Francisco, um homem simples e pobre, cujo sonho era ver os seus filhos se tornarem estrelas da música sertaneja e que se esforçou ao máximo para que isso acontecesse.";
            imagem.src = "media/images/posters/doisfilhosdefrancisco.jpg";
            break;
        case 'Parasita':
            titulo.innerHTML="Parasita";
            conteudo.innerHTML="Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado, mas uma obra do acaso faz com que ele comece a dar aulas de inglês a uma garota de família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe e filhos bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custam caro a todos.";
            imagem.src = "media/images/posters/parasite.jpg";
            break;
        case '1922':
            titulo.innerHTML="1922";
            conteudo.innerHTML="Um fazendeiro confessa o assassinato da esposa nesta trama macabra baseada na obra de Stephen King.";
            imagem.src = "media/images/posters/1922.jpg";
            break;

            /* SERIES */

        case 'Breaking Bad':
            titulo.innerHTML = "Breaking Bad";
            conteudo.innerHTML="O novo drama 'Breaking Bad' narra a história de Walter White (Bryan Cranston), um humilde professor de química que vê sua vida se transformar quando descobre ser portador de um câncer terminal. ... ele começa a usar suas habilidades em química a favor do crime, montando um laboratório de drogas para financiar seus anseios.";
            imagem.src="media/images/series/breaking_bad.jpg";
            break;
        case 'Mr. Robot':
            titulo.innerHTML = "Mr. Robot";
            conteudo.innerHTML="Elliot (Rami Malek) é um jovem programador que trabalha como engenheiro de segurança virtual durante o dia, e como hacker vigilante durante a noite. Elliot se vê numa encruzilhada quando o líder (Christian Slater) de um misterioso grupo de hacker o recruta para destruir a firma que ele é pago para proteger.";
            imagem.src="media/images/series/mr_robot.jpg";
            break;
        case 'Peaky Blinders':
            titulo.innerHTML = "Peaky Blinders";
            conteudo.innerHTML="Os Peaky Blinders são uma organização criminosa de origem cigana que se passa na cidade de Birmingham, Inglaterra, em 1919, formada vários meses após o final da Primeira Guerra Mundial (1914–1918). A história é centrada na ambição do líder da gangue inglesa, Thomas 'Tommy' Shelby";
            imagem.src="media/images/series/peaky_blinders.jpg";
            break;
        case 'The Leftovers':
            titulo.innerHTML = "The Leftovers";
            conteudo.innerHTML="Baseado no livro best-seller de Tom Perrotta, The Leftovers segue Kevin Garvey (Justin Theroux), um homem com dois filhos e chefe de polícia de uma pequena cidade nos arredores de Nova York. Ele tenta manter uma aparência de normalidade em sua vida, apesar desse termo não se aplicar a mais nada.";
            imagem.src="media/images/series/the_leftovers.jpg";
            break;
        case 'Vikings':
            titulo.innerHTML = "Vikings";
            conteudo.innerHTML="Vikings  gira em torno de Ragnar Lothbrok, um nórdico agricultor que se arrisca indo para as terras do oeste, onde nenhum outro viking jamais pisara e assim conquistando cada vez mais prestígio.";
            imagem.src="media/images/series/vikings.jpg";
            break;
        case 'Dark':
            titulo.innerHTML = "Dark";
            conteudo.innerHTML="Quatro diferentes famílias - Kahnwald, Nielsen, Doppler e Tiedemann - vivem em Winden, uma pequena e aparentemente tranquila cidade alemã. A rotina dos moradores vira de cabeça para baixo quando duas crianças desaparecem misteriosamente, nas proximidades de uma antiga usina nuclear.";
            imagem.src="media/images/series/Dark.jpg";
            break;
        case 'The Walking Dead':
            titulo.innerHTML = "The Walking Dead";
            conteudo.innerHTML="The Walking Dead é uma série norte-americana transmitida originalmente pelo canal AMC. A história acompanha a vida na Terra após um apocalipse zumbi e um grupo de sobreviventes liderados pelo ex-policial, Rick Grimes, viajam em busca de um lar seguro.";
            imagem.src="media/images/series/the_walking_dead.jpg";
            break;
        case 'Daredevil':
            titulo.innerHTML = "Daredevil";
            conteudo.innerHTML="Quando Matt decide vestir o uniforme e adotar o nome 'Demolidor' (Daredevil), leva uma vida dupla: é advogado durante o dia, e, à noite, protege as ruas de Hell's Kitchen, seu bairro em Nova York.";
            imagem.src="media/images/series/daredevil.jpg";
            break;
        case 'Game of Thrones':
            titulo.innerHTML = "Game of Thrones";
            conteudo.innerHTML="Situada nos continentes fictícios de Westeros e Essos, a série centra-se no Trono de Ferro dos Sete Reinos e segue um enredo de alianças e conflitos entre as famílias nobres dinásticas, seja competindo para reivindicar o trono ou lutando por sua independência.";
            imagem.src="media/images/series/game_of_thrones.jpg";
            break;
        case 'Westworld':
            titulo.innerHTML = "Westworld";
            conteudo.innerHTML="Westworld é um parque temático futurístico para adultos, dedicado à diversão dos ricos. Um espaço que reproduz o Velho Oeste, povoado por androides – os anfitriões –, programados pelo diretor executivo do parque, o Dr. Robert Ford (Anthony Hopkins), para acreditarem que são humanos e vivem no mundo real.";
            imagem.src="media/images/series/westworld.jpg";
            break;
        case 'Prision Break':
            titulo.innerHTML = "Prison Break";
            conteudo.innerHTML="Michael já fugiu da prisão com seu irmão uma vez. Ele agora precisa traçar um plano para tirar sua esposa grávida da cadeia, antes que ela seja assassinada por outras detentas que querem receber um prêmio por sua cabeça.";
            imagem.src="media/images/series/prision_break.jpg";
            break;
        case 'Greys Anatomy':
            titulo.innerHTML = "Grey's Anatomy";
            conteudo.innerHTML="A série acompanha a vida de Meredith Grey (Ellen Pompeo), filha da respeitada cirurgiã geral Ellis Grey, após seu ingresso no programa de residência no Seattle Grace Hospital. ... Posteriormente ingressaram no programa de residência Lexie Grey (Chyler Leigh), meia-irmã de Meredith, que morre no final da oitava temporada.";
            imagem.src="media/images/series/greys_anatomy.jpg";
            break;
        case 'Bridgeton':
            titulo.innerHTML = "Bridgerton";
            conteudo.innerHTML="Daphne Bridgerton (Phoebe Dynevor), a filha mais velha do respeitado clã, se encontra à procura de um marido adequado. Como seus pais, ela gostaria de se casar por amor, mas o irmão mais velho atrapalha seus planos e torna ainda mais difícil sua busca.";
            imagem.src="media/images/series/bridgerton.jpg";
            break;
        case '':
            titulo.innerHTML = "";
            conteudo.innerHTML="";
            imagem.src="media/images/series/.jpg";
            break;
        case 'You':
            titulo.innerHTML = "You";
            conteudo.innerHTML="A história acompanha Joe, um gerente de livrarias que conhece uma aspirante a escritora e usa a internet e as mídias sociais como ferramentas para reunir as informações pessoais para se aproximar dela e também para fazer a mulher dos seus sonhos se apaixonar por ele.";
            imagem.src="media/images/series/you.jpg";
            break;
        case 'Pretty Little Liars':
            titulo.innerHTML = "Pretty Little Liars";
            conteudo.innerHTML="A série conta a história de quatro garotas — Spencer Jill Hastings, Hanna Olivia Marin, Aria Marie Montgomery e Emily Catherine Fields — cuja amizade acaba quando a líder do grupo, Alison Lauren DiLaurentis, desaparece.";
            imagem.src="media/images/series/pretty_little_liars.jpg";
            break;
        case 'Control Z':
            titulo.innerHTML = "Control Z";
            conteudo.innerHTML="Um hacker começa a divulgar os segredos dos alunos para toda a escola, e Sofia, uma menina observadora e solitária, quer descobrir quem está por trás disso. Assista o quanto quiser.";
            imagem.src="media/images/series/controlz.jpg";
            break;
        case 'Riverdale':
            titulo.innerHTML = "Riverdale";
            conteudo.innerHTML="Riverdale traz uma abordagem subversiva de Archie, Betty, Veronica, Jughead Jones, Josie e seus amigos, explorando o surrealismo de uma pequena cidade e seus curiosos habitantes. A história começa quando a cidade se recupera de uma trágica perda, o que leva Archie a pensar mais seriamente a respeito de seu futuro.";
            imagem.src="media/images/series/riverdale.jpg";
            break;

        /* DOCS */

        case 'Nosso Planeta':
            titulo.innerHTML="Nosso Planeta";
            conteudo.innerHTML="Uma viagem por 50 países que mostra a diversidade de habitats ao redor do mundo. São imagens inéditas da vida selvagem, desde o Ártico, passando pelas selvas da América do Sul e pelas profundezas dos oceanos, até as paisagens africanas. O projeto mostra a importância de preservar o mundo natural.";
            imagem.src="media/images/documentarios/our_planet.jpg";
            break;
        case 'Misha e os Lobos':
            titulo.innerHTML="Misha e os Lobos";
            conteudo.innerHTML="Quando criança, ela escapou do Holocausto e viveu com os lobos. Ou pelo menos é isso o que ela diz. Uma história extraordinária que emociona e também levanta suspeitas.";
            imagem.src="media/images/documentarios/misha_wolves.jpg";
            break;
        case 'Elas Contra O Serial Killer':
            titulo.innerHTML="Elas Contra O Serial Killer";
            conteudo.innerHTML="Esse documentário acompanha uma chefe de polícia e a mãe de uma vítima de assassinato em uma busca incansável por um serial killer na Paris dos anos 1990.";
            imagem.src="media/images/documentarios/the_woman_themurderer.jpg";
            break;
        case 'Grandes Momentos da Segunda Guerra em cores':
            titulo.innerHTML="Grandes Momentos da Segunda Guerra em cores";
            conteudo.innerHTML="A série busca explicar os acontecimentos do confronto, que durou de 1939 a 1945 e buscava impedir o avanço dos regimes nazista e fascista na Europa. Com as filmagens coloridas, é possível ver maiores detalhes nas imagens resgatadas de arquivos tanto dos exércitos do Eixo, quanto dos Aliados.";
            imagem.src="media/images/documentarios/world_war_ii.jpg";
            break;
        case 'Arremesso Final':
            titulo.innerHTML="Arremesso Final";
            conteudo.innerHTML="Acompanhe a ascensão do astro Michael Jordan e do time do Chicago Bulls nos anos 1990. A série traz imagens inéditas da temporada inesquecível de 1997-1998. ";
            imagem.src="media/images/documentarios/Arremesso_Final.jpg";
            break;
        case 'Chorão: Marginal Alado':
            titulo.innerHTML="Chorão: Marginal Alado";
            conteudo.innerHTML="O documentário retrata a vida e a carreira do cantor brasileiro Chorão, líder da banda Charlie Brown Jr. Além de depoimentos sobre sua vida pessoal e profissional e imagens de arquivo, o filme acompanha a história de uma das estrelas do rock mais importantes do Brasil. Chorão viveu duas décadas intensas de sucesso nacional e internacional, cheios de momentos polêmicos, até sua morte prematura, por overdose de drogas, em 2013.";
            imagem.src="media/images/documentarios/chorao_marginal.jpg";
            break;
        case 'F1: Dirigir para Viver':
            titulo.innerHTML="F1: Dirigir para Viver";
            conteudo.innerHTML="Um mergulho no universo da Fórmula 1, desde os bastidores do Campeonato Mundial até o funcionamento das dependências de autódromos. Velocidade, tensão e rivalidade, com direito a depoimentos exclusivos de pilotos e diretores do torneio principal.";
            imagem.src="media/images/documentarios/f1.jpg";
            break;
        case 'O Dilema das Redes':
            titulo.innerHTML="O Dilema das Redes";
            conteudo.innerHTML="Especialistas em tecnologia do Vale do Silício soam o alarme do perigoso impacto das redes sociais na democracia e na humanidade como um todo.";
            imagem.src="media/images/documentarios/dilema_redes.jpg";
            break;
        case 'Ronaldo':
            titulo.innerHTML="Ronaldo";
            conteudo.innerHTML="Filmado ao longo de 14 meses com acesso sem precedentes ao círculo restrito do homem e do esporte, este é o primeiro filme oficial e autorizado do jogador português Cristiano Ronaldo, uma das figuras mais célebres do futebol. Pela primeira vez, o mundo tem acesso imparcial e inédito ao atacante, através de conversas profundas, filmagens fantásticas de jogos e vídeos de arquivo jamais vistos antes.";
            imagem.src="media/images/documentarios/ronaldo.jpg";
            break;
        case 'O Universo':
            titulo.innerHTML="O Universo";
            conteudo.innerHTML="O termo abordado pelo canal americano History Channel está em sua 8ª temporada (2014) e exibe alguns dos maiores segredos e mistérios do universo, apresentando fatos e teorias por meio de imagens geradas por computação gráfica, bem como de depoimentos e análises de renomados cientistas e especialistas nos campos da cosmologia, astronomia e astrofísica";
            imagem.src="media/images/documentarios/universo.jpg";
            break;
    }

}