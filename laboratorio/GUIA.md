# Guia do laboratório de senhas

## Usar no navegador

1. Abra `verificador_de_senhas.html` localmente, com dois cliques. Não é necessário instalar nada.
2. Digite somente os exemplos fictícios de `Fase2_Senhas`.
3. Registre tempo, classificação e alerta de previsibilidade.
4. Compare `PortoDaBarra2026` com `ladeira cuscuz farol varanda`.
5. Crie seu próprio exemplo fictício, registre a avaliação e explique a escolha. O exemplo adicional aprovado nesta entrega é público e serve exclusivamente à demonstração.

## Como o programa calcula

O tamanho usa `s.length` de JavaScript. Para os exemplos ASCII da prática, ele coincide com o número de caracteres. Fora desse conjunto, pode contar unidades UTF-16, como dois elementos para alguns emojis.

O conjunto considerado soma 26 para minúsculas, 26 para maiúsculas, 10 para números e 33 para símbolos. Espaços e letras acentuadas entram na categoria genérica de símbolos. O programa calcula `C^L / 10^10` segundos, assumindo dez bilhões de tentativas por segundo. É o tempo para percorrer todo o espaço teórico, e não uma medição ou garantia. Sob escolha uniforme e busca sem repetição, uma média teórica ficaria aproximadamente na metade; o programa não usa essa média.

Há uma avaliação separada por lista de palavras, anos de 1900 a 2099, algumas sequências e três caracteres iguais seguidos. Se houver padrão, a classificação é Fraca independentemente do tempo.

| Condição, na ordem aplicada | Classificação |
| --- | --- |
| Padrão detectado ou tempo menor que 30 dias | Fraca |
| Sem padrão e tempo menor que 100 anos | Média |
| Sem padrão e tempo menor que 1 milhão de anos | Boa |
| Demais casos sem padrão | Forte |

## Limites que devem aparecer no relatório

- O código não faz ataques, não quebra hashes e não mede a infraestrutura da imobiliária.
- A lista de padrões é pequena; ausência de alerta não prova ausência de previsibilidade.
- O programa não normaliza leet speak. `C@s4!Brr` fica Fraca pelo tempo inferior a 30 dias, e não por reconhecimento das substituições.
- Frases de palavras são calculadas como cadeias de caracteres. A entropia depende do processo de escolha das palavras, que não pode ser inferido da aparência.
- O modelo não inclui hash, equipamento real, MFA, limitação de tentativas ou credenciais vazadas.
- A marca Forte é resultado das regras da ferramenta, não garantia universal de segurança.

## Reprodução opcional em Node.js

O uso normal do HTML dispensa Node.js. Para reproduzir os resultados registrados a partir da raiz da pasta:

```sh
node laboratorio/reproduzir_senhas.cjs
```

O script extrai e executa a função original em um contexto com campos simulados. Apenas escreve JSON na saída; não faz solicitações de rede, não modifica o HTML e não grava credenciais. Os exemplos públicos estão no próprio script.

Os resultados desta execução estão em `resultados_senhas.json` e `resultados_senhas.csv`, ambos em formato aberto. Os resultados foram reproduzidos diretamente da função original; não foram produzidas capturas de tela do navegador.

## Criar uma alternativa forte

Para uma senha não memorizável, use um gerenciador que gere caracteres aleatórios e uma credencial exclusiva para cada conta. Para uma frase memorizável, sorteie independentemente várias palavras de uma lista ampla e crie uma imagem mental após o sorteio. Evite letras de música, citações, nome da empresa, datas e dados pessoais. Ajuste o comprimento às exigências do serviço e use MFA.

Exemplo somente didático: `Nuvem!Tijolo!Cacto!Violino` (26 caracteres; Forte no programa). Ele foi composto, não sorteado. Não o use como senha real nem atribua a ele entropia aleatória. Sorteie novas palavras para uma credencial real e mantenha-a fora do relatório.

Referência: [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html).
