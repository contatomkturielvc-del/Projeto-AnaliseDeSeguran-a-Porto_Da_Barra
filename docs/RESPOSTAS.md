# Respostas da prática · Imobiliária Porto da Barra

![Status da entrega](../assets/status.svg)

**Autor:** Uriel Vieira Carvalho · **Disciplina:** Introdução à Segurança da Informação, turma 3004 · **Professor:** Alexmário Modesto de Jesus · **Versão final aprovada:** 24/10/2026.

Respostas finais, revisadas e aprovadas pelo autor, na ordem da planilha original. As perguntas são reproduzidas para rastreabilidade. Todas as situações pertencem ao caso fictício. As células da [planilha preenchida](../planilha/apoio_pratica_porto_da_barra_respondida.xlsx) correspondem às tabelas abaixo.

## Sumário

- [1.1 a 1.4 · Visita técnica](#fase1-visita)
- [1.5 · Autenticação e autorização](#fase1-acesso)
- [1.6 · Classificação dos ativos](#fase1-ativos)
- [2.1 · Ameaças e vulnerabilidades](#fase2-risco)
- [2.2 · Reconhecimento de ataques](#fase2-ataques)
- [2.3 · Resultados do verificador](#fase2-senhas)
- [3.1 · Referências de segurança](#fase3-referencias)
- [3.2 · Funções do NIST](#fase3-nist)
- [3.3 · Declaração de Aplicabilidade](#fase3-soa)
- [3.4 · Hierarquia documental](#fase3-documentos)
- [Declaração ética](#etica)

## Contexto · Dados_Caso

| Item | Descrição |
| --- | --- |
| Empresa | Imobiliária Porto da Barra (caso fictício), Salvador |
| Tamanho | 10 funcionários: dona, gerente, 5 corretores, financeiro, atendimento e uma estagiária |
| O que administra | Cerca de 400 imóveis alugados |
| Informações que guarda | Contratos de locação; CPF e comprovante de renda dos inquilinos; dados bancários dos proprietários; boletos de aluguel |
| Sistemas | Sistema de aluguéis num servidor da própria loja, acessível pela internet; planilha de boletos; e-mail; WhatsApp dos corretores |
| Incidente 1 | O valor do aluguel de um proprietário apareceu alterado no boleto, e ninguém soube dizer quem mudou |
| Incidente 2 | Um inquilino encontrou o próprio contrato, com CPF e renda, no lixo reciclável da calçada |
| Pedido da construtora | Uma construtora quer contratar a imobiliária para administrar um prédio inteiro e perguntou se ela é certificada na ISO 27001 |
| O que a dona quer | Saber o que está errado, o que pode atacar a imobiliária e por onde começar, num relatório que ela consiga ler |

---


<a id="fase1-visita"></a>
## 1.1 a 1.4 · Visita técnica

Aba: `Fase1_Visita`.

| Nº | Observação da visita técnica | Pilar da tríade CID mais afetado | Fase do ciclo de vida | Segurança física ou lógica | Recomendação (uma frase) |
| --- | --- | --- | --- | --- | --- |
| 1 | Contratos com CPF e comprovante de renda dos inquilinos ficam empilhados no balcão da recepção, à vista de quem chega. | Confidencialidade | Armazenamento | Física | Guardar contratos em armário com acesso restrito. |
| 2 | Os cinco corretores usam o mesmo login, "corretor", com a mesma senha, para entrar no sistema de aluguéis. | Integridade | Manuseio | Lógica | Adotar contas individuais, autenticação adequada e registros de operações. |
| 3 | Um corretor que saiu há três meses ainda acessa o sistema de aluguéis pelo celular. | Confidencialidade | Manuseio | Lógica | Revogar a conta e as sessões do ex-funcionário imediatamente. |
| 4 | A estagiária do atendimento consegue ver e editar os dados bancários de todos os proprietários. | Integridade | Manuseio | Lógica | Restringir consulta e edição bancária às funções que necessitam desses acessos. |
| 5 | Os boletos são gerados numa planilha que qualquer funcionário pode editar; um valor de aluguel foi alterado e ninguém sabe por quem. | Integridade | Manuseio | Lógica | Restringir edição dos boletos e registrar alterações e aprovações individuais. |
| 6 | O servidor do sistema de aluguéis fica no chão, embaixo da pia da copa. | Disponibilidade | Armazenamento | Física | Retirar o servidor debaixo da pia e protegê-lo de água e acesso indevido. |
| 7 | Contratos antigos vão inteiros para o lixo reciclável da calçada. | Confidencialidade | Descarte | Física | Destruir papéis com segurança após o prazo de retenção aplicável. |
| 8 | As fichas dos inquilinos são enviadas aos proprietários pelo WhatsApp pessoal dos corretores. | Confidencialidade | Transporte | Lógica | Usar canal corporativo controlado e compartilhar apenas os dados necessários. |
| 9 | O gerente leva para casa, na mochila, um pen drive sem senha com a cópia de todos os contratos. | Confidencialidade | Transporte | Física | Evitar cópias transportadas sem necessidade e criptografar a mídia autorizada. |
| 10 | O Wi-Fi aberto da sala de espera dos clientes é o mesmo da rede interna da imobiliária. | Confidencialidade | Manuseio | Lógica | Separar a rede de visitantes da rede interna e proteger o acesso. |
| 11 | O sistema de aluguéis fica fora do ar todo dia 5, quando os inquilinos entram ao mesmo tempo para tirar a segunda via do boleto. | Disponibilidade | Manuseio | Lógica | Avaliar e corrigir o gargalo de capacidade do portal no dia 5. |
| 12 | Computadores antigos foram doados a uma escola com os arquivos apenas deletados, sem apagamento seguro. | Confidencialidade | Descarte | Lógica | Sanitizar as mídias por método adequado e verificar o resultado antes da doação. |


**Critério de classificação.** Foi escolhido o pilar predominante. Na obs. 2, a falha direta é de autenticidade e rastreabilidade; integridade é a opção dentro da tríade. Na obs. 4 também há perda de confidencialidade. Na obs. 9, o risco de extravio é físico e a ausência de criptografia é lógica. Na obs. 12, a classificação lógica destaca a falha de sanitização de dados, embora exista doação física da mídia.


<a id="fase1-acesso"></a>
## 1.5 · Autenticação e autorização

Aba: `Fase1_Acesso`.

| Referência | Problema | Autenticação ou autorização? | Por quê? (uma frase) |
| --- | --- | --- | --- |
| Obs. 2 | Os cinco corretores usam o mesmo login, "corretor", com a mesma senha. | Autenticação | O login coletivo não distingue qual corretor está utilizando o sistema. |
| Obs. 3 | Um corretor que saiu há três meses ainda consegue entrar no sistema. | Autorização | O ex-corretor mantém um direito de acesso que deveria ter sido revogado. |
| Obs. 4 | A estagiária vê e edita os dados bancários de todos os proprietários. | Autorização | A estagiária possui permissões superiores às necessárias para sua função. |
| Obs. 5 | Qualquer funcionário pode editar a planilha de boletos. | Autorização | A edição dos boletos está liberada a pessoas sem necessidade funcional. |
| Extra | O sistema de aluguéis pede só senha, sem nenhum segundo fator, mesmo quando acessado pela internet. | Autenticação | O acesso pela internet depende apenas de senha, sem segundo fator. |


**Pergunta complementar: por que o login compartilhado impede saber quem alterou o boleto?**

O login compartilhado compromete a autenticidade da autoria, pois não distingue os cinco corretores, e prejudica o não repúdio, pois falta atribuição individual confiável das ações. Recomenda-se usar contas individuais, autenticação adequada e registros protegidos. O login é do sistema e o boleto é editado em planilha: sem demonstrar integração e trilhas de auditoria, não se pode afirmar que o log do sistema identificaria a edição da planilha.


<a id="fase1-ativos"></a>
## 1.6 · Classificação dos ativos

Aba: `Fase1_Ativos`.

| Nº | Ativo | Classificação (Pública, Interna ou Confidencial) | Justificativa (uma frase) |
| --- | --- | --- | --- |
| 1 | Anúncios dos imóveis disponíveis no site da imobiliária | Pública | Os anúncios destinam-se à divulgação ao público. |
| 2 | Tabela de comissões dos corretores | Interna | A tabela de comissões serve à gestão da equipe. |
| 3 | CPF e comprovantes de renda dos inquilinos | Confidencial | CPF e comprovantes de renda exigem acesso restrito. |
| 4 | Dados bancários dos proprietários | Confidencial | Dados bancários devem ser protegidos contra exposição e uso indevido. |
| 5 | Escala de plantão dos corretores no fim de semana | Interna | A escala organiza o trabalho e não necessita de divulgação pública. |
| 6 | Endereço e horário de funcionamento da loja | Pública | Endereço e horário são informações de atendimento. |
| 7 | O que o gerente sabe de cabeça sobre os proprietários mais antigos e seus acordos informais | Confidencial | O conhecimento tácito é um ativo de informação e inclui acordos de clientes. |


**Texto conclusivo exigido como entregável da Fase 1:**

Os três problemas prioritários são o descarte de contratos com CPF e renda na calçada (obs. 7), que expõe a privacidade de inquilinos; os acessos compartilhados e a edição irrestrita de boletos (obs. 2 e 5), que prejudicam a atribuição de autoria e a integridade financeira; e o servidor sob a pia (obs. 6), que coloca a continuidade em risco por sua exposição à água. Recomenda-se, respectivamente, descarte seguro, contas individuais com permissões e registros adequados e transferência do servidor para local protegido. A indisponibilidade recorrente no dia 5 (obs. 11) exige avaliação adicional de capacidade.


<a id="fase2-risco"></a>
## 2.1 · Ameaças e vulnerabilidades

Aba: `Fase2_Risco`.

| Nº | Cenário | Ameaça (o que pode causar dano) | Vulnerabilidade (a fraqueza explorada) | Tipo (intencional, acidental, ambiental) | Interna ou externa | Correção mais direta |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | A loja fica no térreo de uma rua que alaga nas chuvas fortes, e o servidor fica no chão, embaixo da pia. | Alagamento e dano ao servidor | Servidor no chão em local exposto à água | Ambiental | Externa | Relocar e proteger o servidor e manter recuperação fora da área de risco. |
| 2 | O login "corretor" tem a senha 123456, e o sistema de aluguéis pode ser acessado pela internet. | Acesso malicioso por adivinhação de senha | Senha 123456 em conta acessível pela internet | Intencional | Externa | Trocar a senha, individualizar contas, ativar MFA e limitar tentativas. |
| 3 | Um corretor que saiu insatisfeito ainda tem o acesso ativo. | Uso indevido por ex-corretor insatisfeito | Acesso ativo após o desligamento | Intencional | Externa | Revogar conta, sessões e demais credenciais no desligamento. Classificação externa pelo vínculo encerrado; ameaça originada de antigo integrante. |
| 4 | Uma funcionária recém-contratada, sem nenhuma orientação, apaga sem querer a pasta de contratos assinados. | Exclusão involuntária de contratos | Ausência de orientação e proteção adequada contra exclusões | Acidental | Interna | Treinar, restringir exclusões e assegurar recuperação dos contratos. |
| 5 | Os computadores estão sem atualização há um ano, e circula um vírus que explora uma falha já corrigida pelo fabricante. | Infecção por malware que explora falha conhecida | Computadores sem atualização há um ano | Intencional | Externa | Aplicar correções e manter rotina de gestão de atualizações. Origem externa e propagação intencional são premissas; vetor inicial não informado. |
| 6 | Um golpista liga se passando pelo banco e pede à estagiária, que tem acesso a tudo, os dados bancários de um proprietário. | Golpe telefônico por falsa identidade bancária | Acesso excessivo e falta de verificação independente da solicitação | Intencional | Externa | Confirmar pedidos por canal oficial e aplicar menor privilégio. |


**Premissas:** o ex-corretor é externo pelo vínculo encerrado, embora a ameaça tenha origem em antigo integrante. Para o malware, adota-se origem externa e disseminação intencional como hipótese; o vetor inicial não foi identificado. O risco decorre da possibilidade de uma ameaça explorar uma vulnerabilidade e produzir consequências; sua avaliação considera probabilidade e impacto.


<a id="fase2-ataques"></a>
## 2.2 · Reconhecimento de ataques

Aba: `Fase2_Ataques`.

| Nº | Incidente | Tipo de ataque | Pilar CID mais atingido | Controle que teria impedido ou reduzido o dano |
| --- | --- | --- | --- | --- |
| 1 | Um e-mail com a marca parecida com a do banco pede que o financeiro confirme, em até 1 hora, a senha do internet banking da imobiliária num link. | Phishing | Confidencialidade | Verificar pedidos pelo canal oficial do banco e treinar contra links falsos. |
| 2 | Um homem de crachá aparece dizendo ser técnico da empresa do sistema e pede para usar o computador do gerente "para uma atualização urgente". | Pretexting | Confidencialidade | Confirmar identidade e ordem de serviço antes de permitir acesso. Pretexting: falsa identidade de técnico. |
| 3 | Um pen drive escrito "Comissões 2026" é achado no estacionamento; um corretor curioso conecta no computador da loja. | Baiting | Integridade | Bloquear mídias não autorizadas e orientar a equipe. |
| 4 | Os arquivos do servidor amanhecem ilegíveis, com uma mensagem pedindo pagamento em criptomoeda para devolvê-los. | Ransomware | Disponibilidade | Manter backups isolados e verificar a restauração. |
| 5 | O registro do sistema mostra 40 mil tentativas de senha na conta "corretor" durante uma única noite. | Força bruta | Confidencialidade | Ativar MFA, limitar tentativas e alertar sobre acessos anômalos. A descrição não distingue dicionário de busca exaustiva. |
| 6 | No campo de busca de imóveis do site, alguém digita um comando estranho e a página passa a exibir a lista de clientes cadastrados. | Injeção de SQL | Confidencialidade | Usar consultas parametrizadas e autorização adequada; validar entradas como complemento. Injeção de SQL é hipótese compatível, sem confirmação técnica. |
| 7 | O portal de segunda via de boletos fica inacessível por horas, com tráfego vindo de milhares de endereços diferentes ao mesmo tempo. | DDoS | Disponibilidade | Adotar mitigação de tráfego distribuído e proteção do serviço. |
| 8 | Um corretor usa o Wi-Fi aberto de um café; depois, alguém entra no sistema com a sessão dele já aberta, sem digitar senha. | Sequestro de sessão | Confidencialidade | Proteger transporte e cookies, limitar sessões e exigir reautenticação em ações sensíveis. |


**Limites:** nos incidentes 2 e 3 não foi descrito dano consumado; o pilar representa o risco predominante. Quarenta mil tentativas não provam enumeração exaustiva nem distinguem ataque por dicionário. A injeção SQL é a hipótese compatível com a descrição, sem payload ou log que a confirme. O sequestro de sessão não comprova o mecanismo de captura; MFA de login isoladamente não resolve uma sessão já roubada.


<a id="fase2-senhas"></a>
## 2.3 · Resultados do verificador

Aba: `Fase2_Senhas`.

| Senha de teste (inventada) | Tempo estimado | Classificação | Por que ficou assim? |
| --- | --- | --- | --- |
| 123456 | menos de 1 segundo | Fraca | Curta e reconhecida como comum; o cálculo também indica menos de um segundo. |
| PortoDaBarra2026 | mais de 1 milhão de anos | Fraca | O nome da empresa e o ano acionam o alerta de previsibilidade, que prevalece sobre o tempo teórico. |
| aluguel | menos de 1 segundo | Fraca | Palavra da lista de termos comuns e comprimento reduzido. |
| Chave#Mar | 268 dias | Média | Tem 9 caracteres; não aciona os padrões do programa e o tempo fica entre 30 dias e 100 anos. |
| C@s4!Brr | 8 dias | Fraca | Tem 8 caracteres e tempo inferior a 30 dias; o programa não identifica seu leet speak. |
| ladeira cuscuz farol varanda | mais de 1 milhão de anos | Forte | Tem 28 caracteres e não aciona os padrões; a ferramenta conta espaços como símbolos. |
| Nuvem!Tijolo!Cacto!Violino | mais de 1 milhão de anos | Forte | Exemplo didático composto, de 26 caracteres, sem padrão detectado; não foi sorteado e não deve ser usado como senha real. |


**Método:** execução da função original `avaliar()` em Node.js com os campos da página simulados; sem rede, tentativa de login ou quebra de senha. O HTML permanece inalterado. O último exemplo é público e foi composto para demonstração, não sorteado; não utilizá-lo como credencial. Consulte o [guia de reprodução](../laboratorio/GUIA.md).

**Tarefa 2.4 · Duas surpresas:**

PortoDaBarra2026 recebe um tempo teórico enorme porque o programa calcula combinações a partir do tamanho e das categorias de caracteres, como se a escolha fosse aleatória; mesmo assim, o nome da empresa e o ano acionam a regra de previsibilidade e tornam a classificação Fraca. Já C@s4!Brr tem apenas oito caracteres e recebe estimativa de oito dias, abaixo do limiar de trinta dias usado para a classificação Fraca. O código não reconhece o leet speak desse exemplo: a limitação de substituições previsíveis é uma análise complementar, e não uma detecção demonstrada pela ferramenta. Os resultados são estimativas didáticas e não correspondem a senhas quebradas.


<a id="fase3-referencias"></a>
## 3.1 · Referências de segurança

Aba: `Fase3_Referencias`.

| Nº | Situação | Norma, lei ou framework | Obrigatória ou voluntária? | Justificativa (uma frase) |
| --- | --- | --- | --- | --- |
| 1 | Lei que obriga a imobiliária a proteger os dados pessoais dos inquilinos e a comunicar incidentes graves. | LGPD | Obrigatória | O tratamento de dados pessoais deve observar a lei; comunicação depende dos critérios legais e regulatórios aplicáveis. |
| 2 | Norma que define os requisitos de um Sistema de Gestão de Segurança da Informação e é a única certificável da família. | ISO 27001 | Voluntária | Define requisitos de um SGSI certificável; a prática contrasta essa referência com o guia ISO/IEC 27002. A adoção ou sua comprovação pode ser exigida contratualmente. |
| 3 | Guia de boas práticas que detalha como implementar cada controle de segurança na prática. | ISO 27002 | Voluntária | Fornece orientações para implementar controles de segurança. A adoção ou sua comprovação pode ser exigida contratualmente. |
| 4 | Se a imobiliária passar a receber aluguel por cartão de crédito no próprio site e guardar os dados dos cartões. | PCI-DSS | Obrigatória | Obrigatória no cenário proposto, conforme regras contratuais aplicáveis de bandeiras e adquirentes; não é lei.  |
| 5 | Framework que organiza a segurança em cinco funções: identificar, proteger, detectar, responder e recuperar. | NIST CSF | Voluntária | Organiza resultados de gestão de riscos; a atividade usa cinco funções, e a versão 2.0 acrescenta Governar. A adoção ou sua comprovação pode ser exigida contratualmente. |
| 6 | Relatório de auditoria que a empresa do sistema de aluguéis na nuvem apresenta, mostrando os controles de segurança e disponibilidade testados. | SOC 2 | Voluntária | É relatório de asseguração sobre controles de serviços; verificar escopo, período, tipo e exceções. A adoção ou sua comprovação pode ser exigida contratualmente. |
| 7 | Framework de governança que alinha a TI aos objetivos do negócio. | COBIT | Voluntária | Orienta a governança e a gestão da informação e tecnologia alinhadas ao negócio. A adoção ou sua comprovação pode ser exigida contratualmente. |


**Notas de precisão:** PCI DSS é padrão setorial exigível por regras contratuais aplicáveis, não uma lei. SOC 2 é relatório, não certificação ISO. A formulação “única certificável da família” foi interpretada no contraste didático entre ISO/IEC 27001 e 27002; não se estende essa afirmação a toda a família de normas. Referências: [fontes oficiais](REFERENCIAS.md).


<a id="fase3-nist"></a>
## 3.2 · Funções do NIST

Aba: `Fase3_NIST`.

| Nº | Ação | Função do NIST CSF |
| --- | --- | --- |
| 1 | Fazer a lista de todos os computadores, sistemas e tipos de dados da imobiliária. | Identificar |
| 2 | Ativar o segundo fator de autenticação (MFA) no sistema de aluguéis. | Proteger |
| 3 | Configurar um alerta para quando houver muitas tentativas de login erradas. | Detectar |
| 4 | Desconectar da rede um computador infectado e avisar a dona imediatamente. | Responder |
| 5 | Restaurar os contratos apagados a partir do backup. | Recuperar |
| 6 | Treinar a equipe para reconhecer e-mails falsos. | Proteger |


**Atualização complementar:** as cinco funções foram mantidas conforme solicitado na atividade. O NIST CSF 2.0 possui também **Governar**. Exemplo adicional proposto: a proprietária definir responsáveis, prioridades e critérios de risco. [NIST](https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework).


<a id="fase3-soa"></a>
## 3.3 · Declaração de Aplicabilidade

Aba: `Fase3_SoA`.

| Nº | Controle (inspirado na ISO/IEC 27002) | Aplica-se à imobiliária? (Sim ou Não) | Evidência (nº da observação da Fase 1) | Justificativa da inclusão ou da exclusão |
| --- | --- | --- | --- | --- |
| 1 | Controle de acesso pelo menor privilégio | Sim | 4 e 5 | Permissões excessivas permitem consulta e edição indevidas; aplicar menor privilégio. |
| 2 | Desativação do acesso no dia do desligamento | Sim | 3 | O ex-funcionário mantém acesso após o desligamento. |
| 3 | Backup com cópia fora da loja e teste de restauração | Sim | 6 e 9 (indiretas) | A exposição do servidor e o transporte de uma cópia justificam recuperação segura; não comprovam ausência de outros backups. |
| 4 | Descarte seguro de papéis e de discos | Sim | 7 e 12 | Papéis e discos são descartados sem proteção adequada dos dados. |
| 5 | Proteção física e de energia para o servidor | Sim | 6 | O servidor está sob a pia; proteção elétrica deve ser avaliada, pois sua ausência não foi descrita. |
| 6 | Separação da rede de visitantes da rede interna | Sim | 10 | Visitantes compartilham a rede interna. |
| 7 | Segurança no desenvolvimento de software (revisão de código, testes de segurança no código-fonte) | Não | Sem observação direta | Exclusão somente para desenvolvimento próprio, sob premissa de inexistência de desenvolvimento interno ou contratado sob responsabilidade da imobiliária; confirmar escopo e avaliar exigências ao fornecedor. |


**Limite da SoA simplificada:** inclusão significa relevância do controle, não implementação concluída. A exclusão do item 7 é condicional, restrita ao desenvolvimento próprio e sujeita à confirmação do escopo; segurança do fornecedor e de desenvolvimento contratado continuam a exigir avaliação. As obs. 6 e 9 não demonstram ausência de toda rotina de backup. A SoA desta prática não substitui uma declaração completa de um SGSI real.


<a id="fase3-documentos"></a>
## 3.4 · Hierarquia documental

Aba: `Fase3_Documentos`.

| Nº | Documento | Tipo |
| --- | --- | --- |
| 1 | Texto de uma página assinado pela dona: "A Porto da Barra protege as informações de clientes e proprietários, e todos são responsáveis por isso." | Política geral |
| 2 | Regras de uso aceitável do e-mail e do WhatsApp da imobiliária. | Política específica |
| 3 | Passo a passo para desativar todos os acessos de um corretor no dia em que ele sai. | Procedimento |
| 4 | Regras de backup: o que copiar, com que frequência e onde guardar as cópias. | Política específica |
| 5 | Passo a passo para restaurar um contrato a partir do backup. | Procedimento |
| 6 | Lista assinada dos funcionários que participaram do treinamento contra golpes em março. | Registro (evidência) |


**Tarefa 3.5 · Resposta à Sra. Helena:**

Sra. Helena, recomendo começar pela organização da gestão de segurança e pelos controles prioritários, usando a ISO/IEC 27001 como referência de requisitos e a ISO/IEC 27002 como guia de implementação. Antes de decidir sobre a certificação, confirme se ela é condição do contrato da construtora e avalie escopo, custos e prazo: o porte de dez funcionários não impede a certificação, mas também não permite prometer sua viabilidade sem avaliação. Quanto ao fornecedor, confira autenticidade, validade, entidade certificada e escopo do certificado, incluindo se o serviço contratado está abrangido. A certificação do fornecedor não certifica a imobiliária. A LGPD se aplica ao tratamento de dados pessoais independentemente de certificações voluntárias.


<a id="etica"></a>
## Declaração ética

> Confirmo que usei apenas dados fictícios, não testei nenhum sistema real e declarei qualquer uso de ferramentas de IA.

Uso de IA nesta edição: organização das respostas e do relatório, auxílio na análise do código, elaboração do mapa e revisão de consistência. A execução documentada limita-se ao verificador didático local. As justificativas e premissas técnicas explicitam os limites da análise.

**Assinatura do autor:** __________________________  
**Data:** ____/____/________

Os campos destinam-se à assinatura do autor e não representam assinatura eletrônica já realizada.
