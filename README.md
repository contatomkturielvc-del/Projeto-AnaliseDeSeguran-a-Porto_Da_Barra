# Porto da Barra · Auditoria de Segurança da Informação

![Versão final aprovada](assets/status.svg)

Entrega acadêmica de **Uriel Vieira Carvalho**, para a disciplina **Introdução à Segurança da Informação**, turma 3004, do professor **Alexmário Modesto de Jesus**. Caso fictício de uma imobiliária em Salvador com dez funcionários e cerca de quatrocentos imóveis. **Versão final revisada e aprovada pelo autor, finalizada em 24/10/2026.**

## Documentos da entrega

| Arquivo | Finalidade |
| --- | --- |
| [Relatório final](RELATORIO_FINAL.md) | Apresentação executiva, achados, senhas, riscos e plano de ação recomendado |
| [Respostas da prática](docs/RESPOSTAS.md) | Questões respondidas individualmente e três textos conclusivos |
| [Planilha respondida](planilha/apoio_pratica_porto_da_barra_respondida.xlsx) | Dez abas de tarefas preenchidas e contexto preservado |
| [Mapa mental final do autor](mapa/mapa_mental.excalidraw) | Arquivo nativo com as alterações manuais do autor |
| [Guia do laboratório](laboratorio/GUIA.md) | Uso, fórmula e limitações do verificador |
| [Referências](docs/REFERENCIAS.md) | Fontes, premissas técnicas e rastreabilidade |

## Mapa mental do autor

O [mapa mental em Excalidraw](mapa/mapa_mental.excalidraw) fornecido pelo autor após suas alterações manuais e está preservado integralmente. Para visualizá-lo ou editá-lo, abra [Excalidraw](https://excalidraw.com), use **Abrir** e selecione o arquivo, ou arraste-o para a tela. O GitHub não renderiza o formato nativo como imagem.

O SVG Integrado no arquivo fornece uma visualização prática e não editável, para fins de apresentação do projeto, entendimento do procedimento utilizado pelo autor para efetuar as conclusões necessárias para conclusão do projeto!

## Organização

```text
porto-da-barra-auditoria-final/
├── README.md
├── RELATORIO_FINAL.md
├── MANIFESTO_SHA256.txt
├── docs/
│   ├── RESPOSTAS.md
│   └── REFERENCIAS.md
├── planilha/
│   └── apoio_pratica_porto_da_barra_respondida.xlsx
├── mapa/
│   └── mapa_mental.excalidraw
├── laboratorio/
│   ├── GUIA.md
│   ├── verificador_de_senhas.html
│   ├── reproduzir_senhas.cjs
│   ├── resultados_senhas.csv
│   └── resultados_senhas.json
└── assets/
    └── status.svg
```

## Laboratório de senhas

Abra `laboratorio/verificador_de_senhas.html` localmente no navegador. Utilize somente exemplos fictícios. O HTML funciona sem internet e seu código não faz chamadas de rede. O programa estima combinações e identifica alguns padrões; não executa ataques nem quebra senhas. Os resultados e o método de reprodução acompanham a entrega.

## GitHub e formatos

Para usar esta pasta como raiz de um repositório, extraia o ZIP e envie **o conteúdo da pasta**, preservando os subdiretórios. Assim o README aparecerá na página inicial. Nenhum repositório foi criado ou publicado por esta preparação.

Os documentos finais permanecem editáveis em Markdown, XLSX, Excalidraw, SVG, HTML, CSV e JSON. O modo escuro de Markdown depende do leitor. Diagramas Mermaid e seus recursos interativos dependem do renderizador e de suas políticas; as tabelas e descrições preservam a informação sem interatividade. O SVG de status é local e não depende de conexão externa.

## Ética e alcance das conclusões

> Confirmo que usei apenas dados fictícios, não testei nenhum sistema real e declarei qualquer uso de ferramentas de IA.

Houve auxílio de IA na análise, organização e preparação dos documentos. O mapa final inclui intervenções manuais do autor. A execução documentada limita-se à lógica do verificador didático local, sem ataques ou acesso a sistemas da imobiliária. A aprovação dos documentos não significa que os controles recomendados tenham sido implementados: matriz, prazos e medidas de tratamento permanecem propostas de auditoria.

Os campos de assinatura dos documentos estão disponíveis para formalização pelo autor, sem simulação de assinatura eletrônica. As referências identificam os materiais didáticos de terceiros; não foi atribuída licença aberta a esses materiais.

## Integridade

O manifesto SHA-256 registra os arquivos desta versão final, inclusive o mapa fornecido pelo autor. O próprio manifesto não integra sua lista de hashes. Alterações posteriores modificam os respectivos hashes.
