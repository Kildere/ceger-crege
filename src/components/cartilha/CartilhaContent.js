import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

// Conteúdo das seções da cartilha baseado no documento fornecido
const cartilhaContent = {
  'apresentacao': {
    title: 'Apresentação',
    content: `
      <p>A Secretaria de Estado da Educação da Paraíba-SEE, estabeleceu, por meio da Portaria nº 591, o Comitê Estadual de Gestão de Resultados de Aprendizagem - CEGER e os Comitês Regionais de Gestão de Resultados de Aprendizagem - CREGE no âmbito das escolas da Rede Estadual de Educação, com os seguintes objetivos: melhorar os índices de fluxo da Rede Estadual de Educação, elevando-o sempre que possível, para patamares superiores a 90% (noventa por cento), com base na conceituação do Censo Escolar, instrumento de coleta de informações da educação básica coordenado pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira - INEP; elevar os índices de aprendizagem dos estudantes da Rede Estadual de Educação, conforme mensurado anualmente pelo Sistema SIAVE e bienalmente pelo Sistema SAEB e instituir, anualmente, o Plano de Metas SIAVE para todas as escolas da Rede Estadual de Educação.</p>
      <p>Para alcançar os objetivos, em conformidade com as diretrizes e marcos legais que regem a Educação, a SEE adotará práticas pedagógicas inovadoras, promoverá formações continuadas, elaboração e disponibilização de materiais didático pedagógico, disponibilizará dados por meio de dashboards, compartilhará relatórios via Metabase e fortalecerá a articulação com as Gerências Regionais de Ensino. Além disso, utilizará tecnologias educacionais para monitorar e definir as Metas SIAVE em nível de Gerência Regional, município e escola.</p>
      <p>O acompanhamento das ações voltadas ao desenvolvimento da aprendizagem nas escolas da Rede Estadual será realizado pelo Comitê Estadual de Gestão de Resultados de Aprendizagem - CEGER, enquanto o monitoramento dos indicadores de movimento e rendimento escolar, em âmbito regional, ficará sob a responsabilidade dos Comitês Regionais de Gestão de Resultados de Aprendizagem - CREGE. Dessa forma, propõe-se a compreensão e a aplicação da cartilha orientadora para assegurar um processo de ensino e aprendizagem claro e eficiente, favorecendo o alcance das metas estabelecidas pela Rede Estadual de Ensino.</p>
    `
  },
  'sobre-comites': {
    title: 'Sobre os Comitês',
    content: `
      <p>A periodicidade do Comitê Estadual de Gestão da Rede Estadual será mensal, com reuniões realizadas na Secretaria de Educação do Estado da Paraíba. Já os Comitês Regionais de Gestão de Resultados de Aprendizagem ocorrerão de acordo com o calendário regional.</p>
    `
  },
  'ceger': {
    title: 'Comitê Estadual de Gestão da Rede Estadual (CEGER)',
    content: `
      <p>O Comitê Estadual de Gestão da Rede Estadual (CEGER) foi criado para atender à necessidade de monitorar o desenvolvimento escolar e garantir a obtenção de resultados efetivos de aprendizagem.</p>
      <p>O Comitê CEGER é composto pelo Secretário de Estado da Educação, que exercerá a função de coordenador, pelo Secretário Executivo de Gestão Pedagógica, que atuará como subcoordenador, e pelo Gerente Executivo de Desenvolvimento Escolar, Acompanhamento e Apoio à Gestão para Resultados de Aprendizagem (GEDRA), que assumirá o papel de relator. Além destes, também fazem parte do comitê os demais Gerentes Executivos da Secretaria de Estado da Educação e os Gerentes Regionais de Educação.</p>
      <p>O fluxo do CEGER começa com a convocação do Comitê, realizada pelo Presidente por meio de ofício aos Gerentes Executivos, informando a data e o local da reunião. Posteriormente, o relator apresentará a evolução dos dados, por meio do painel estadual geral e das informações específicas por Gerência Regional de Ensino. Após esses primeiros passos, realiza-se a escuta dos Gerentes Regionais para identificar as principais ações que impactaram os resultados. Além disso, são discutidas propostas educacionais, como programas, projetos e ações da Secretaria Executiva de Gestão Pedagógica - SEGEP, com o objetivo de melhorar os resultados.</p>
      <p>Após esse processo, realiza-se a deliberação coletiva, na qual são definidos o cronograma unificado e os responsáveis por cada ação, com cada envolvido cumprindo sua tarefa acordada. Por fim, as gerências SEGEP ficam responsáveis pelo acompanhamento e monitoramento das ações, assegurando a participação constante e o avanço das atividades planejadas.</p>
    `
  },
  'crege': {
    title: 'Comitês Regionais de Gestão de Resultado de Aprendizagem (CREGE)',
    content: `
      <p>Os Comitês Regionais de Gestão de Resultados de Aprendizagem (CREGE), têm como foco a atuação regional e é composto pelo Gerente Regional de Educação de Ensino, que assume a coordenação, e pelo Chefe do Núcleo de Desenvolvimento da Escola e da Aprendizagem (NUDEA), que atuará como relator. Também fazem parte do comitê o Chefe do Núcleo de Desenvolvimento e Protagonismo Estudantil, o Chefe do Núcleo de Infraestrutura e Suporte de Tecnologia da Informação, além dos Gestores das Escolas da Rede Estadual de Educação de sua respectiva Gerência.</p>
      <p>O fluxo do CREGE ocorre com a convocação do Comitê pelo presidente, o Gerente Regional, via ofício, para os chefes de núcleo e gestores com data e local da reunião. Na sequência, o NUDEA apresenta a evolução dos dados, por meio do painel regional geral e de dados das escolas. Posteriormente, os gestores expressam suas opiniões sobre as principais ações que impactaram os dados. Através da análise dos dados, propostas educacionais são elaboradas, programas, projetos e ações da Gerência são implementadas para melhorar os resultados educacionais. Em seguida, é feita a deliberação coletiva, usando um cronograma unificado e designando as ações dos atores envolvidos. Por último, é realizado o acompanhamento das ações do NUDEA, que faz visitas periódicas a cada escola para acompanhar os esforços e o Núcleo de Infraestrutura e Suporte de Tecnologia da Informação (NUTCI) acompanha os dados.</p>
      <p>No entanto, é importante considerar que o fluxo dos Comitês ocorre de maneira cíclica, por meio de um monitoramento contínuo das estratégias e ações em andamento na Rede Estadual de Ensino, garantindo assim uma avaliação constante e ajustes necessários para o alcance dos objetivos estabelecidos.</p>
    `
  },
  'atribuicoes-ceger': {
    title: 'Atribuições do CEGER',
    content: `
      <p>São atribuições do CEGER (Comitê Estadual de Gestão de Resultados de Aprendizagem):</p>
      <ul>
        <li>Analisar as principais legislações vigentes em relação às ações que determinam o movimento e rendimento dos estudantes, propondo melhorias onde for necessário;</li>
        <li>Realizar estudos no contexto da implantação das ações concernentes ao movimento e rendimento escolar e as definidas pela Secretaria de Estado da Educação;</li>
        <li>Acompanhar a implantação das ações e seus resultados;</li>
        <li>Mapear eventuais necessidades de intervenção nas ações;</li>
        <li>Elaborar portarias e demais normas necessárias;</li>
        <li>Realizar estudos no sentido de implementar estratégias para a melhoria dos resultados de aprendizagem da Rede Estadual de Educação;</li>
        <li>Criar e monitorar o Plano de Metas SIAVE para as escolas da Rede Estadual de Educação;</li>
        <li>Outras atribuições correlatas.</li>
      </ul>
    `
  },
  'atribuicoes-crege': {
    title: 'Atribuições dos CREGE',
    content: `
      <p>São atribuições dos CREGE (Comitês Regionais de Gestão de Resultados de Aprendizagem):</p>
      <ul>
        <li>Analisar as condições que determinam o movimento e rendimento dos estudantes, de cada escola que compõe a Gerência Regional de Educação, propondo melhorias onde for necessário;</li>
        <li>Realizar estudos no contexto da implantação das ações concernentes ao movimento e rendimento escolar e as definidas pela Secretaria de Educação;</li>
        <li>Acompanhar a implantação das ações e seus resultados;</li>
        <li>Mapear eventuais necessidades de intervenção nas ações;</li>
        <li>Elaborar relatórios de acompanhamento das ações;</li>
        <li>Realizar estudos no sentido de implementar estratégias para a melhoria dos resultados de aprendizagem da Gerência Regional de Educação;</li>
        <li>Monitorar o plano de metas SIAVE para as escolas que compõem a Gerência Regional de Educação;</li>
        <li>Outras atribuições correlatas.</li>
      </ul>
    `
  },
  'atribuicoes-coordenadores': {
    title: 'Atribuições dos Coordenadores',
    content: `
      <p>São Atribuições do Coordenador (CEGER) e dos coordenadores (CREGE):</p>
      <ul>
        <li>Representar oficialmente os Comitês, podendo delegar tal tarefa a um dos seus membros, desde que previamente indicados;</li>
        <li>Convocar e presidir as reuniões dos Comitês;</li>
        <li>Elaborar a pauta das reuniões dos Comitês, fazendo constar as sugestões dos membros;</li>
        <li>Estender convite a participação de pessoas externas aos Comitês, sem direito a voto, em suas reuniões;</li>
        <li>Centralizar e divulgar as informações pertinentes aos Comitês para todos os seus membros;</li>
        <li>Acompanhar as ações e os assuntos de interesse dos Comitês juntamente aos órgãos competentes;</li>
        <li>Monitorar a execução das ações proposta pelos Comitês;</li>
        <li>Solicitar suporte técnico-administrativo necessário ao bom andamento das atividades dos Comitês;</li>
        <li>Delegar aos relatores dos Comitês as funções de registro e organização;</li>
        <li>Exercer outras atribuições que lhes sejam conferidas pelos Comitês;</li>
        <li>Organizar e manter arquivo das reuniões.</li>
      </ul>
    `
  },
  'indicadores-metas': {
    title: 'Indicadores e Metas de Desempenho da Gestão Escolar',
    content: `
      <p>Os indicadores e as metas desempenham um papel essencial no planejamento escolar, atuando como um instrumento de orientação e monitoramento do processo de ensino e aprendizagem é possível estabelecer um direcionamento claro, assegurando que as práticas pedagógicas estejam alinhadas às necessidades dos estudantes. Dessa maneira, permitem o acompanhamento contínuo do desempenho educacional, possibilitando intervenções e ajustes estratégicos para a melhoria da qualidade do ensino e aprendizagem.</p>
      <p>Nesse contexto, a Rede Estadual de Ensino define indicadores e metas educacionais como um mecanismo de avaliação e aprimoramento constante, garantindo a efetividade do processo educativo.</p>
    `
  },
  'boas-praticas': {
    title: 'Boas Práticas na Gestão Escolar',
    content: `
      <p>As boas práticas nas escolas são ações e estratégias que promovem um ambiente de aprendizado positivo, seguro e inclusivo para os estudantes, professores e a comunidade escolar. Elas incluem o respeito à diversidade, o incentivo à participação dos estudantes, o uso de metodologias inovadoras, a valorização dos professores, além do envolvimento da família no processo educacional.</p>
      <p>Entre as principais práticas, destacam-se a avaliação diagnóstica que pode ser realizada nos primeiros 15 dias de aula desempenhando um papel essencial, pois permite ao professor identificar as habilidades dos componentes curriculares já consolidadas pelos estudantes e mapear possíveis defasagens, o planejamento pedagógico eficiente, a adoção de estratégias de ensino diferenciadas, a promoção de um ambiente acolhedor e o incentivo ao desenvolvimento socioemocional dos estudantes.</p>
      <p>Além dessas práticas, a criação de um mapa de calor, baseado nas habilidades críticas em Língua Portuguesa e Matemática, permitindo que as áreas mais vulneráveis sejam priorizadas desde o início do ano letivo, prevenindo lacunas no aprendizado, a Busca Ativa Escolar (BAE) se destaca como uma ação estratégica essencial, pois fortalece os vínculos dos estudantes com a escola e contribui para garantir sua permanência.</p>
      <p>Assim, a implementação de boas práticas na escola é fundamental para promover um ambiente de aprendizado inclusivo e eficiente. Por conseguinte, as ações e estratégias como a avaliação diagnóstica, o planejamento pedagógico estruturado e metodologias inovadoras permitem um ensino mais direcionado e eficaz.</p>
    `
  },
  'recursos-apoio': {
    title: 'Recursos e Apoio',
    content: `
      <p>Os recursos e o apoio, disponibilizados pela Secretaria de Educação, Gerências SEGEP e pelas Gerências Regionais, para o acompanhamento das atividades, são fundamentais para garantir a eficácia da gestão educacional abrangendo desde equipamentos e ferramentas tecnológicas de monitoramento até estratégias organizacionais que sustentam a execução das ações e o alcance dos objetivos estratégicos.</p>
      <p>Para fortalecer o monitoramento das Escolas da Rede Estadual, a Secretaria disponibilizará: material didático; a partir das notas extraídas do sistema SIAGE.</p>
      <p>Outros instrumentos fazem parte do monitoramento, por meio de dashboard; relatórios com frequências e plataforma METABASE e ferramentas tecnológicas que auxiliam a coleta de dados educacionais proporcionando uma visão geral das condições das escolas em cada regional. Além desses, existem as revistas divididas por habilidades e categorias.</p>
      <p>Esses recursos e apoio são fundamentais para o processo de ensino e aprendizagem dos estudantes do estado da Paraíba.</p>
    `
  },
  'consideracoes': {
    title: 'Considerações Finais',
    content: `
      <p>A cartilha é fundamental para orientar a implementação das ações sugeridas, oferecendo um roteiro claro e estruturado para a melhoria contínua da gestão educacional. Orientando e fortalecendo-a, promovendo a melhoria do processo de ensino-aprendizagem. Desta forma, destaca-se o papel estratégico dos Comitês Estadual e Regionais de Gestão de Resultados de Aprendizagem (CEGER e CREGE), responsáveis pelo acompanhamento, análise e implementação de ações pedagógicas alinhadas às necessidades dos estudantes. Fazendo-se para isso o uso de indicadores, metas e boas práticas para subsidiar o planejamento escolar e garantir a eficácia das estratégias educacionais.</p>
      <p>O presente documento apresenta um roteiro claro e estruturado, contribuindo para o fortalecimento das competências dos profissionais da educação e para a obtenção de melhores resultados escolares. A atuação articulada dos Comitês, com o apoio da Secretaria de Educação, às Gerências SEGEP e Gerências Regionais, assegura que as ações desenvolvidas estejam em sintonia com as realidades locais, promovendo avanços concretos na aprendizagem e no fluxo escolar. Assim, a implementação e o monitoramento contínuo dessas práticas representam um marco importante na consolidação de uma gestão educacional mais eficaz e comprometida com a qualidade do ensino.</p>
    `
  },
  'referencias': {
    title: 'Referências',
    content: `
      <ul>
        <li>BRASIL. Lei nº 13.005, de 25 de junho de 2014. Aprova o Plano Nacional de Educação - PNE e dá outras providências. Brasília, 2014.</li>
        <li>BRASIL. Ministério da Educação. LDB - Lei nº 9.394/96, de 20 de dezembro de 1996.</li>
        <li>BRASIL. Ministério da Educação. Plano Nacional de Educação Especial. Brasília, DF: MEC, 2008.</li>
        <li>______. Ministério da Educação. Base Nacional Comum Curricular. Brasília: MEC, 2018.</li>
        <li>______. Ministério da Educação (MEC). Guia para Implementação da Recomposição das Aprendizagens. Brasília, DF: MEC, 2024.</li>
        <li>______. Ministério da Educação. Brasil na Escola: Caderno Técnico, acompanhamento personalizado das aprendizagens. Brasília: MEC, jan. 2022.</li>
        <li>PARAÍBA. Secretaria de Estado da Educação. Portaria Nº 591, de 26 de Setembro de 2024. João Pessoa -PB 2024.</li>
        <li>_______. Secretaria de Estado da Educação da Paraíba. Revista da Escola: Gestão Escolar. Universidade Federal de Juiz de Fora, Faculdade de Educação. CAEd. V.1 . Siave PB - 2023.</li>
        <li>_______. Secretaria de Estado da Educação da Paraíba. Revista da Escola: Equipe pedagógica de Matemática. Universidade Federal de Juiz de Fora, Faculdade de Educação. CAEd. V.1 . Siave PB - 2023.</li>
        <li>_______. Secretaria de Estado da Educação da Paraíba. Revista da Escola: Equipe pedagógica Língua Portuguesa. Universidade Federal de Juiz de Fora, Faculdade de Educação. CAEd. V.1 . Siave PB - 2023.</li>
      </ul>
    `
  },
  'anexos': {
    title: 'Anexos',
    content: `
      <p>Tabelas de Metas SIAVE 2025:</p>
      <ul>
        <li>Tabela 1 - Metas SIAVE 2025 - Ensino Fundamental - Anos Iniciais - 2º ANO</li>
        <li>Tabela 2 - Metas SIAVE 2025 - Ensino Fundamental - Anos Iniciais - 5º ANO</li>
        <li>Tabela 3 - Metas SIAVE 2025 - Ensino Fundamental - Anos Finais - 9º ANO</li>
      </ul>
      <p>As tabelas detalhadas serão implementadas na próxima fase do desenvolvimento, com a integração do painel de indicadores.</p>
    `
  }
};

const CartilhaContent = ({ sectionId }) => {
  const section = cartilhaContent[sectionId] || cartilhaContent['apresentacao'];

  return (
    <Box>
      <Typography variant="h5" component="h2" color="primary" gutterBottom>
        {section.title}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box 
        dangerouslySetInnerHTML={{ __html: section.content }} 
        sx={{ 
          '& p': { 
            textAlign: 'justify',
            mb: 2,
            lineHeight: 1.6
          },
          '& ul': {
            pl: 2,
            mb: 2
          },
          '& li': {
            mb: 1
          }
        }}
      />
    </Box>
  );
};

export default CartilhaContent;
