import { categories } from './categories';
import type { Article } from './types';

const category = (slug: string) => categories.find((item) => item.slug === slug)!;

// These are substantive editorial drafts, not published news. They carry no
// byline or publication date until a human editor verifies and approves them.
export const seedArticles: Article[] = [
  {
    title: 'Inhumas em números: como ler o Censo e a estimativa populacional', slug: 'inhumas-censo-estimativa-populacional', category: category('inhumas-regiao'), location: 'Inhumas, Goiás', readingTime: 5,
    excerpt: 'O dado do Censo de 2022 e a estimativa mais recente do IBGE respondem a perguntas diferentes. Veja como consultar a fonte e evitar comparações apressadas.',
    body: [
      'O perfil de uma cidade começa pelos dados, mas um número sozinho não conta toda a história. Na página de Inhumas, o IBGE informa 52.204 moradores no Censo Demográfico de 2022 e uma estimativa de 54.133 habitantes para 2026. O primeiro número vem da contagem censitária; o segundo é uma estimativa produzida para um ano de referência posterior.',
      'Essa diferença não deve ser apresentada automaticamente como uma contagem exata de pessoas que chegaram ou saíram da cidade. Censos e estimativas usam procedimentos distintos. Para acompanhar a população ao longo do tempo, registre o indicador, o ano de referência e a fonte, e compare séries construídas com metodologia compatível.',
      'O portal do IBGE também reúne área territorial, densidade demográfica, escolarização e outros indicadores. Cada item tem seu próprio ano e fonte. Por isso, uma matéria que reúne vários números precisa mostrar a data de cada um, em vez de atribuir o mesmo ano a toda a tabela.',
      'Na prática, quem acompanha uma decisão municipal pode usar esses dados como contexto: população e faixa etária ajudam a formular perguntas sobre demanda por escolas, saúde, transporte e orçamento. Eles não substituem dados de atendimento dos serviços nem provam, por si só, que uma política pública funcionou ou falhou.',
    ],
    keyPoints: ['Censo 2022: 52.204 moradores, segundo o IBGE.', 'Estimativa 2026: 54.133 habitantes; é uma estimativa, não uma nova contagem censitária.', 'Ao citar indicadores, informe o ano de referência de cada dado.'],
    sources: [{ label: 'IBGE — Inhumas (GO)', url: 'https://www.ibge.gov.br/cidades-e-estados/go/inhumas.html' }], status: 'review',
  },
  {
    title: 'Como encontrar informações públicas da Prefeitura de Inhumas', slug: 'consultar-transparencia-prefeitura-inhumas', category: category('inhumas-regiao'), location: 'Inhumas, Goiás', readingTime: 6,
    excerpt: 'O portal municipal reúne informações sobre receitas, contratos, saúde, educação e legislação. Um roteiro para localizar documentos e registrar dúvidas.',
    body: [
      'A Prefeitura de Inhumas mantém um Portal da Transparência com áreas para informações gerais, receitas, licitações e contratos, legislação, conselhos e dados de saúde e educação. O mapa do portal ajuda a entender quais conjuntos de informação estão disponíveis antes de iniciar uma busca.',
      'Comece definindo uma pergunta específica: por exemplo, qual órgão contratou um serviço, em que período, ou onde está publicado um relatório. Anote o nome da seção, o filtro utilizado e a data em que consultou o documento. Isso facilita conferir a informação mais tarde e permite que outra pessoa refaça o caminho.',
      'Se o documento não estiver no portal, a Carta de Serviços municipal explica como encaminhar um pedido de acesso por meio do e-SIC. Faça uma solicitação objetiva, descreva o período e o assunto e guarde o número de protocolo. O pedido de informação não substitui uma apuração: dados precisam ser lidos no contexto e confirmados com o órgão responsável.',
      'Na publicação, diferencie o que o documento mostra do que ainda precisa de resposta. Se a prefeitura for procurada, registre quando e por qual canal. Se não houver retorno antes do fechamento, informe isso com clareza e atualize a matéria se chegar uma resposta relevante.',
    ],
    keyPoints: ['O mapa do portal lista áreas como contratos, receitas e transparência em saúde.', 'A Carta de Serviços municipal descreve o acesso ao e-SIC.', 'Guarde links, filtros, datas e protocolos para que a consulta seja reproduzível.'],
    sources: [{ label: 'Portal da Transparência de Inhumas', url: 'https://servicos.inhumas.go.gov.br/' }, { label: 'Prefeitura de Inhumas — Carta de Serviços', url: 'https://www.inhumas.go.gov.br/wp-content/uploads/2026/05/carta_de_servicos_inhumas.pdf' }], status: 'review',
  },
  {
    title: 'Saúde em Inhumas: onde conferir os serviços municipais', slug: 'onde-consultar-servicos-saude-inhumas', category: category('inhumas-regiao'), location: 'Inhumas, Goiás', readingTime: 5,
    excerpt: 'A página municipal de saúde lista unidades e contatos. Veja como confirmar horários e disponibilidade antes de se deslocar.',
    body: [
      'A Prefeitura de Inhumas mantém uma página de serviços de saúde com informações sobre a rede municipal e órgãos de atendimento. Como horários, equipes e disponibilidade podem mudar, use a página como ponto de partida e confirme o serviço diretamente com o canal oficial antes de sair de casa.',
      'Para uma consulta jornalística, vale registrar o nome da unidade, o endereço, o serviço procurado e a data da verificação. Se uma página não trouxer o dado necessário, procure a Secretaria Municipal de Saúde ou o canal de atendimento indicado pelo município e documente a resposta.',
      'O município também mantém uma área de transparência em saúde, que reúne itens como estoque de medicamentos e listas de espera. A presença de um painel não significa que toda informação individual possa ser publicada: dados pessoais e prontuários são protegidos, e a matéria deve usar apenas informação pública agregada ou autorizada.',
      'Este guia não substitui orientação médica nem informa a disponibilidade em tempo real. Em uma urgência, procure os serviços de emergência oficiais; para questões de rotina, confirme o atendimento com a unidade ou com a Secretaria de Saúde.',
    ],
    keyPoints: ['Confira a data da página antes de usar endereço ou contato.', 'Use o canal municipal para confirmar horário e disponibilidade.', 'Não publique dados pessoais de pacientes nem trate o guia como orientação médica.'],
    sources: [{ label: 'Prefeitura de Inhumas — Serviços de Saúde', url: 'https://inhumas.go.gov.br/servicos-de-saude/' }, { label: 'Portal da Transparência de Inhumas', url: 'https://servicos.inhumas.go.gov.br/' }], status: 'review',
  },
  {
    title: 'CRE Inhumas: quais municípios fazem parte da coordenação regional', slug: 'cre-inhumas-municipios-atendidos', category: category('inhumas-regiao'), location: 'Inhumas e região, Goiás', readingTime: 4,
    excerpt: 'A Secretaria de Educação de Goiás lista os municípios vinculados à Coordenação Regional de Educação de Inhumas e publica seus canais de contato.',
    body: [
      'A Coordenação Regional de Educação (CRE) de Inhumas integra a estrutura da Secretaria de Estado da Educação de Goiás. A página da Secretaria lista Inhumas, Araçu, Brazabrantes, Caturaí, Damolândia, Goianira, Itauçu, Nova Veneza, Santa Rosa de Goiás, Santo Antônio de Goiás e Taquaral de Goiás entre os municípios atendidos pela coordenação.',
      'A relação é útil para famílias, profissionais da educação e equipes de reportagem que precisam identificar qual instância regional consultar. A mesma página publica endereço, telefone e e-mail institucional. Como contatos e atribuições podem mudar, confirme-os na página oficial no momento em que precisar falar com a CRE.',
      'Para uma pauta sobre escola, comece separando a responsabilidade municipal da estadual. Em seguida, peça à escola ou à secretaria o documento que formaliza a decisão, confirme se ela vale para uma unidade ou para toda a rede e ouça as pessoas afetadas. Uma coordenação regional pode orientar o caminho, mas a resposta depende do tema e do órgão responsável.',
    ],
    keyPoints: ['A lista oficial inclui Inhumas e dez municípios da região.', 'O portal da Seduc-GO publica os contatos da CRE.', 'Confirme a atribuição responsável antes de encaminhar uma demanda.'],
    sources: [{ label: 'Seduc-GO — Coordenações Regionais', url: 'https://goias.gov.br/educacao/coordenacoes-regionais/' }], status: 'review',
  },
  {
    title: 'Vai pegar estrada em Goiás? Como conferir informações da Goinfra', slug: 'consultar-condicoes-rodovias-goias-goinfra', category: category('inhumas-regiao'), location: 'Goiás e Centro-Oeste', readingTime: 5,
    excerpt: 'A agência estadual publica notícias sobre condições e obras nas rodovias. Entenda como encontrar o mapa e checar se uma informação ainda está atualizada.',
    body: [
      'A Goinfra informa que divulga regularmente notícias sobre condições de estradas e disponibiliza o Mapa Rodoviário do Estado de Goiás. O mapa identifica a malha estadual, incluindo rodovias pavimentadas e não pavimentadas, e também mostra rodovias federais que atravessam Goiás.',
      'Antes de viajar, confira a publicação mais recente sobre o trecho e observe a data, o sentido da via e o intervalo coberto. Um aviso antigo pode descrever uma situação que já mudou; um mapa oficial mostra a rede, mas não funciona como um boletim instantâneo de tráfego ou acidente.',
      'Em uma matéria sobre obra ou interdição, identifique a rodovia e o trecho com precisão, consulte a agência responsável e confirme quando a intervenção começa e termina. Se o assunto envolver rodovia federal, também é necessário consultar o órgão federal responsável, em vez de atribuir toda a malha à agência estadual.',
      'As páginas de perguntas frequentes da Goinfra reúnem orientações sobre obras, restrições e equipamentos de fiscalização. Use-as para localizar documentos e depois verifique se a informação específica continua vigente.',
    ],
    keyPoints: ['Use o mapa para localizar a malha, não como condição de tráfego em tempo real.', 'Leia a data e o trecho exato de cada aviso.', 'Confirme se a via é estadual ou federal e consulte o órgão correspondente.'],
    sources: [{ label: 'Goinfra — Sobre rodovias', url: 'https://www.goinfra.go.gov.br/Sobre-rodovias/320' }, { label: 'Goinfra — Perguntas frequentes', url: 'https://www.goinfra.go.gov.br/perguntas-e-respostas-frequentes-da-sociedade/414' }], status: 'review',
  },
  {
    title: 'Licitações e contratos: um roteiro para acompanhar compras públicas', slug: 'como-acompanhar-licitacoes-contratos', category: category('politica'), location: 'Inhumas e Brasil', readingTime: 7,
    excerpt: 'Editais, contratos e pagamentos são etapas diferentes. Este roteiro ajuda a localizar documentos e fazer perguntas verificáveis.',
    body: [
      'Uma compra pública pode aparecer em mais de um documento: edital ou aviso, resultado, contrato, aditivos e registros de execução. Encontrar um contrato não prova, sozinho, que o objeto foi entregue; para isso, é preciso localizar registros de execução, pagamentos e eventuais relatórios de fiscalização.',
      'No Portal da Transparência de Inhumas, procure a seção de licitações e contratos. Anote o número do processo, órgão, objeto, fornecedor, valor e datas. Em nível federal, o Portal da Transparência permite consultar licitações, contratos e despesas, com filtros por órgão e outros campos.',
      'Compare documentos da mesma contratação e observe a diferença entre valor estimado, valor contratado e valor pago. Se houver aditivo, confira o que mudou e qual justificativa foi publicada. Para contextualizar, peça ao órgão uma resposta sobre cronograma, fiscalização e situação atual do serviço.',
      'Uma reportagem deve explicar o método de consulta e publicar os links usados, respeitando dados que a lei protege. Se os registros estiverem incompletos ou contraditórios, descreva a lacuna e peça esclarecimentos antes de afirmar irregularidade.',
    ],
    keyPoints: ['Separe edital, resultado, contrato, aditivo e pagamento.', 'Valor contratado não é igual a valor efetivamente pago.', 'Peça manifestação ao órgão e não conclua irregularidade apenas por uma lacuna documental.'],
    sources: [{ label: 'Portal da Transparência de Inhumas', url: 'https://servicos.inhumas.go.gov.br/' }, { label: 'Portal da Transparência Federal — Despesas', url: 'https://portaldatransparencia.gov.br/despesas/' }, { label: 'Portal da Transparência Federal', url: 'https://portaldatransparencia.gov.br/' }], status: 'review',
  },
  {
    title: 'Projeto de lei: como acompanhar a tramitação na Câmara dos Deputados', slug: 'como-acompanhar-projeto-lei-camara', category: category('politica'), location: 'Brasil', readingTime: 6,
    excerpt: 'Uma proposta ainda pode passar por comissões, votação e outras etapas. A página da Câmara permite consultar o texto e o andamento.',
    body: [
      'Uma proposta apresentada ao Congresso não vira lei automaticamente. Na Câmara dos Deputados, a consulta de proposições permite pesquisar por número, assunto e filtros como autoria, situação e órgão onde a matéria tramita.',
      'Ao encontrar uma proposta, abra sua página e confira o texto original, os despachos, pareceres, emendas e o histórico de tramitação. O estágio atual precisa ser descrito com o nome usado pela própria Câmara. “Apresentado”, “aprovado em comissão”, “aprovado pela Câmara” e “transformado em lei” são situações diferentes.',
      'A Câmara oferece acompanhamento por e-mail para proposições. Esse recurso pode ajudar a detectar mudanças, mas cada atualização deve ser lida no documento oficial e comparada com as etapas seguintes. Uma votação em uma Casa não encerra, necessariamente, o processo legislativo.',
      'Na notícia, informe o número da proposta, quem a apresentou, o que o texto prevê e o que ainda falta acontecer. Se resumir uma emenda ou parecer, linke o documento e deixe claro se a mudança foi aprovada ou apenas sugerida.',
    ],
    keyPoints: ['Pesquise pelo número ou por assunto e confirme a situação na página oficial.', 'Diferencie proposta, parecer, aprovação em comissão, votação em plenário e lei publicada.', 'Acompanhar por e-mail é um alerta; a confirmação deve vir do documento oficial.'],
    sources: [{ label: 'Câmara dos Deputados — Como pesquisar proposições', url: 'https://www2.camara.leg.br/transparencia/acesso-a-informacao/copy_of_perguntas-frequentes/como_pesquisar_proposicoes' }, { label: 'Câmara — Pesquisa avançada de proposições', url: 'https://www.camara.leg.br/busca-portal/proposicoes/pesquisa-avancada' }], status: 'review',
  },
  {
    title: 'Como consultar leis e decretos publicados pelo Governo de Goiás', slug: 'consultar-legislacao-goias', category: category('politica'), location: 'Goiás', readingTime: 4,
    excerpt: 'O portal da Casa Civil permite pesquisar normas por ano, número e palavra-chave. Veja o que conferir antes de resumir uma regra.',
    body: [
      'A Casa Civil de Goiás explica três caminhos de consulta à legislação estadual: navegar por ano, pesquisar pelo número da norma ou buscar por palavras. A página orienta que a pessoa abra a norma para acessar seu inteiro teor.',
      'Quando uma reportagem trata de uma regra, confirme o tipo do ato, o número, a data, a ementa e o texto completo. Verifique se há alterações posteriores, revogação ou regulamentação. Uma notícia sobre a assinatura de um decreto não deve presumir que todos os seus efeitos começaram naquela mesma data.',
      'Se o tema envolver uma lei aprovada pela Assembleia Legislativa, procure também o registro da tramitação legislativa. Depois, compare o texto aprovado com a versão sancionada e publicada. Essa checagem ajuda a identificar vetos e mudanças que ocorreram durante o processo.',
      'Na matéria, inclua um link direto para a norma e explique em linguagem cotidiana quem é afetado e a partir de quando. Em casos de interpretação jurídica complexa, consulte especialistas independentes e deixe claras as diferentes leituras.',
    ],
    keyPoints: ['A Casa Civil descreve buscas por ano, número e palavra-chave.', 'Confira vigência, alterações e publicação integral.', 'Uma notícia sobre assinatura não substitui a leitura do ato oficial.'],
    sources: [{ label: 'Casa Civil de Goiás — Consulta à legislação', url: 'https://goias.gov.br/casacivil/sobre-consulta-a-legislacao/' }], status: 'review',
  },
  {
    title: 'Dados de segurança em Goiás: o que os números registram — e o que não mostram', slug: 'como-ler-estatisticas-criminais-goias', category: category('seguranca'), location: 'Goiás', readingTime: 7,
    excerpt: 'A SSP-GO publica indicadores com atraso para revisão. Entenda por que registros podem mudar e como evitar conclusões além do que a série permite.',
    body: [
      'A Secretaria de Segurança Pública de Goiás informa que divulga estatísticas criminais mensalmente, com pelo menos 60 dias de atraso para permitir análise e encaminhamentos técnicos. Os dados partem de registros do Sistema RAI e podem mudar conforme o andamento das investigações.',
      'Isso significa que uma comparação precisa usar períodos equivalentes, a mesma definição de ocorrência e a versão mais recente da série. Uma queda no número de registros não explica, sozinha, por que ela ocorreu; tampouco mede automaticamente a sensação de segurança de cada bairro.',
      'Antes de publicar um gráfico, confira se a fonte apresenta números absolutos, taxas por população ou produtividade policial. Esses indicadores respondem a perguntas diferentes. Se houver mudança de metodologia, território ou classificação, registre a ressalva ao lado do dado, não apenas em uma nota distante.',
      'Quando a pauta for sobre Inhumas, não substitua dados municipais por um número estadual. Pergunte à SSP-GO se há recorte local comparável, informe as limitações e solicite manifestação de especialistas e autoridades. Um registro policial também não é uma conclusão judicial sobre culpa.',
    ],
    keyPoints: ['A SSP-GO informa atraso de pelo menos 60 dias para revisão dos indicadores.', 'Registros podem mudar ao longo da investigação.', 'Não extrapole uma série estadual para Inhumas nem trate registro como condenação.'],
    sources: [{ label: 'SSP-GO — Estatísticas', url: 'https://goias.gov.br/seguranca/estatisticas/' }], status: 'review',
  },
  {
    title: 'Cobertura policial responsável: diferença entre suspeita, denúncia e condenação', slug: 'cobertura-policial-suspeita-denuncia-condenacao', category: category('seguranca'), location: 'Brasil', readingTime: 6,
    excerpt: 'A Constituição protege a presunção de inocência. Uma cobertura precisa identificar a etapa do caso e atribuir alegações à fonte que as fez.',
    body: [
      'A Constituição Federal estabelece que ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória. Para a cobertura jornalística, isso torna essencial distinguir uma suspeita, uma investigação, uma denúncia recebida, um julgamento e uma condenação definitiva.',
      'Atribua cada informação a quem a apresentou. “A polícia informou”, “o Ministério Público denunciou” e “o tribunal decidiu” descrevem atos diferentes. A versão de uma autoridade não deve ser apresentada como fato comprovado sem checagem e documentação. Sempre que possível, procure a defesa e registre se ela respondeu.',
      'Evite publicar endereço, imagens de familiares ou detalhes que identifiquem vítimas sem necessidade pública. Em caso que envolva crianças ou adolescentes, dados pessoais e imagens exigem cuidado especial. A decisão de publicar deve considerar o interesse público e o risco de dano.',
      'Se houver atualização processual, corrija o título, o texto e as chamadas em redes sociais. Mantenha a data da atualização visível e explique o que mudou. A precisão jurídica não impede uma notícia clara; ela ajuda o leitor a entender o que de fato aconteceu até aquele momento.',
    ],
    keyPoints: ['Use a etapa processual correta e identifique a fonte da alegação.', 'Procure a manifestação da defesa e evite dados pessoais sem interesse público.', 'Atualize o texto quando a situação do processo mudar.'],
    sources: [{ label: 'Constituição Federal — art. 5º, LVII', url: 'https://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/constituicao' }], status: 'review',
  },
  {
    title: 'Emergências: quais números ligar e que informações passar', slug: 'numeros-emergencia-e-informacoes-uteis', category: category('seguranca'), location: 'Brasil', readingTime: 4,
    excerpt: 'Polícia, atendimento médico, bombeiros e Defesa Civil têm canais distintos. Saiba qual serviço cada número aciona e como comunicar a localização.',
    body: [
      'Em uma emergência, o número certo ajuda a encaminhar o pedido: 190 para Polícia Militar, 192 para o SAMU, 193 para o Corpo de Bombeiros, 191 para a Polícia Rodoviária Federal em rodovias federais e 199 para a Defesa Civil. As chamadas para serviços públicos de emergência são gratuitas, conforme a Anatel.',
      'Ao telefonar, diga primeiro onde está: município, rua, número ou ponto de referência. Depois descreva o que ocorreu, quantas pessoas precisam de atendimento e se há riscos próximos, como fogo, fios expostos ou vazamento. Responda às perguntas do atendente e não desligue antes de receber orientação.',
      'O SAMU 192 atende urgências médicas e funciona por meio de uma central de regulação. Em Goiás, a SSP também mantém serviços digitais para alguns registros e ocorrências; uma delegacia virtual não substitui a ligação de emergência quando há risco imediato à vida ou à segurança.',
      'Este guia é informativo e não verifica a disponibilidade de uma linha em cada localidade. Em caso de falha, procure os canais oficiais da instituição e da operadora. Use números de emergência somente quando a situação exigir atendimento.',
    ],
    keyPoints: ['190: Polícia Militar; 192: SAMU; 193: Bombeiros; 191: PRF; 199: Defesa Civil.', 'Informe localização e ponto de referência logo no início da ligação.', 'Para risco imediato, use o canal de emergência; canais digitais servem a situações compatíveis com o serviço.'],
    sources: [{ label: 'Anatel — Serviços de emergência', url: 'https://www.gov.br/anatel/pt-br/regulado/acompanhamento-e-controle/servicos-de-utilidade-publica-e-de-emergencia-tridigitos' }, { label: 'Ministério das Comunicações — Números de emergência', url: 'https://www.gov.br/mcom/pt-br/noticias/2026/setembro/emergencia-voce-sabe-para-quem-ligar-quando-precisa-de-ajuda' }, { label: 'Ministério da Saúde — SAMU 192', url: 'https://www.gov.br/saude/pt-br/composicao/saes/samu-192' }], status: 'review',
  },
  {
    title: 'Como montar um orçamento doméstico sem depender de aplicativo', slug: 'como-montar-orcamento-domestico', category: category('economia-financas'), location: 'Brasil', readingTime: 5,
    excerpt: 'O Banco Central descreve o orçamento como registro do que entra e do que sai. Um método simples para começar no papel ou em uma planilha.',
    body: [
      'Um orçamento doméstico é um planejamento do que a família recebe e de como gasta. O Banco Central recomenda registrar ganhos e despesas para saber para onde o dinheiro está indo e se haverá sobra ou falta. Não é necessário começar com um aplicativo: papel, caderno ou planilha também servem.',
      'Separe entradas por data e origem. Depois anote despesas fixas, variáveis e eventuais, sem esquecer pagamentos anuais e dívidas. Ao fim do mês, compare o previsto com o realizado e destaque os itens que variaram mais. O objetivo inicial é tornar o fluxo visível, não julgar escolhas individuais.',
      'Se houver sobra, decida uma prioridade concreta, como formar uma reserva ou quitar uma obrigação cara. Se houver déficit, liste vencimentos, juros e alternativas de negociação antes de assumir novo crédito. Não compare apenas parcelas: observe o custo total e as condições do contrato.',
      'O orçamento é uma ferramenta de organização, não uma recomendação de investimento nem uma promessa de que todos conseguirão economizar. A renda, os preços e as despesas variam entre famílias. Para decisões financeiras complexas, procure orientação adequada e desconfie de promessas de retorno garantido.',
    ],
    keyPoints: ['Registre entradas, despesas e vencimentos em uma ferramenta simples.', 'Compare o previsto ao realizado e atualize o plano todo mês.', 'Avalie custo total de crédito; este guia não recomenda produtos financeiros.'],
    sources: [{ label: 'Banco Central — Educação financeira', url: 'https://www.bcb.gov.br/meubc/faqs/s/educacao-financeira-sub' }, { label: 'Banco Central — Cidadania Financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' }], status: 'review',
  },
  {
    title: 'Inflação: o que o IPCA mede e por que pode diferir do seu carrinho', slug: 'o-que-ipca-mede-inflacao', category: category('economia-financas'), location: 'Brasil', readingTime: 6,
    excerpt: 'O IPCA acompanha uma cesta média de consumo. A experiência de cada família pode ser diferente, e o indicador precisa ser lido com período e abrangência.',
    body: [
      'O IPCA é produzido pelo IBGE e mede a variação de preços de uma cesta de produtos e serviços consumida por famílias dentro da faixa de renda definida para o indicador. Ele é uma referência ampla para acompanhar a inflação, não uma conta personalizada de cada casa.',
      'A composição da sua despesa pode ser diferente da cesta média. Uma família que gasta mais com aluguel, transporte ou alimentos pode sentir uma variação diferente do índice geral. Isso não significa que o indicador esteja “errado”; significa que ele responde a uma pergunta estatística sobre um conjunto de famílias e locais cobertos pela pesquisa.',
      'Ao ler um resultado, confira o período, a variação mensal e o acumulado em 12 meses. O IPCA-15 também é publicado pelo IBGE, mas tem período de coleta distinto e funciona como uma prévia do IPCA. Não compare os dois como se fossem a mesma janela de medição.',
      'Uma notícia econômica útil apresenta o número, a fonte e o período, explica quais grupos contribuíram para a variação e evita extrapolar o resultado para toda família. Para atualizar um valor por inflação, use a calculadora e a metodologia do IBGE, lembrando que a correção é uma referência estatística.',
    ],
    keyPoints: ['IPCA é uma média baseada em cesta e abrangência definidas pelo IBGE.', 'Seu orçamento pode variar de forma diferente do índice geral.', 'IPCA e IPCA-15 têm períodos de coleta distintos.'],
    sources: [{ label: 'IBGE Explica — Inflação', url: 'https://www.ibge.gov.br/explica/inflacao.php' }, { label: 'IBGE — Painel de indicadores', url: 'https://www.ibge.gov.br/indicadores/inflacao-e-precos/ipca.html' }], status: 'review',
  },
  {
    title: 'Como comparar dados do Brasil com outros países sem perder a metodologia', slug: 'comparar-dados-internacionais-metodologia', category: category('brasil-mundo'), location: 'Brasil e mundo', readingTime: 6,
    excerpt: 'Indicadores internacionais podem usar definições, fontes e anos diferentes. Uma checagem de metodologia evita rankings enganosos.',
    body: [
      'Comparar países exige conferir como cada indicador foi definido e produzido. Estatísticas oficiais devem explicar fontes, métodos e procedimentos para que o público interprete os números corretamente. Esse princípio é destacado pelo IBGE entre as orientações das Nações Unidas para estatísticas oficiais.',
      'Antes de montar um ranking, verifique se todos os países aparecem no mesmo ano, se o valor é absoluto ou proporcional à população e se houve revisão da série. Em economia, por exemplo, comparar valores convertidos por câmbio corrente pode responder a uma pergunta diferente de comparar poder de compra.',
      'Bases como a UNdata reúnem estatísticas oficiais produzidas por países e compiladas pelo sistema das Nações Unidas, além de estimativas e projeções. A ficha do indicador pode esclarecer conceitos e definições. Quando a comparação for importante, abra também a fonte nacional e veja se há diferenças de cobertura.',
      'Uma matéria responsável mostra o indicador escolhido, a data de acesso, as lacunas e o que a comparação permite concluir. Se dois países usaram métodos diferentes ou dados de anos distintos, explique a limitação no texto e evite transformar uma tabela em afirmação sobre “o melhor” ou “o pior” país.',
    ],
    keyPoints: ['Confira ano, unidade, população coberta e metodologia.', 'UNdata compila estatísticas oficiais e oferece definições pesquisáveis.', 'A comparação não deve sugerir precisão que os dados não têm.'],
    sources: [{ label: 'IBGE — Princípios das estatísticas oficiais', url: 'https://www.ibge.gov.br/pt/component/content/article/1861-novo-portal/institucional/16148-principios-fundamentais-das-estatisticas-oficiais.html' }, { label: 'UNdata — Perguntas frequentes e definições', url: 'https://data.un.org/Host.aspx?Content=FAQ' }, { label: 'IBGE — Programa de Comparação Internacional', url: 'https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9286-programa-de-comparacao-internacional.html?lang=pt-BR' }], status: 'review',
  },
  {
    title: 'Notícia internacional: sete perguntas para verificar a origem de uma informação', slug: 'como-verificar-noticia-internacional', category: category('brasil-mundo'), location: 'Brasil e mundo', readingTime: 5,
    excerpt: 'Autor, data, evidência e contexto ajudam a conferir relatos que circulam em vários países e idiomas.',
    body: [
      'Uma informação internacional pode circular traduzida, recortada ou acompanhada de uma imagem antiga. Antes de publicar, pergunte: quem publicou primeiro? Qual é a data? A imagem mostra o lugar e o momento descritos? Há um documento, dado ou testemunha identificável? O link realmente sustenta a afirmação?',
      'Procure a fonte original citada, como órgão público, instituição científica ou documento judicial, e compare com reportagens independentes que tenham apuração no local. Em situações de saúde ou desastre, a Organização Mundial da Saúde recomenda avaliar a fonte, o autor, a data e as evidências de apoio, além de conferir se o material está fora de contexto.',
      'Uma fonte oficial ajuda a confirmar o que uma instituição declarou, mas não é a única perspectiva relevante. Em assuntos contestados, registre quem produziu os dados, que interesses podem existir, o que ainda é desconhecido e quais especialistas independentes podem explicar os limites.',
      'Se a redação não consegue confirmar um vídeo ou número, não o apresente como fato. É melhor explicar o que já foi confirmado e o que continua sob verificação do que preencher lacunas com uma tradução automática ou um resumo de publicações não verificadas.',
    ],
    keyPoints: ['Volte à fonte original e confira autor, data, local e evidência.', 'Compare relatos independentes e não confunda declaração oficial com confirmação independente.', 'Mantenha explícito o que está confirmado e o que segue em apuração.'],
    sources: [{ label: 'OMS — Como navegar desinformação', url: 'https://www.who.int/news-room/spotlight/let-s-flatten-the-infodemic-curve' }, { label: 'OMS — Verificação de informações em emergências', url: 'https://www.who.int/europe/news/item/25-01-2024-addressing-dangerous-health-narratives-in-emergencies--an-operational-toolkit' }], status: 'review',
  },
];
