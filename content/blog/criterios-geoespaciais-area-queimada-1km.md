---
title: "Área queimada de 1 km: por que os critérios importam"
slug: "criterios-geoespaciais-area-queimada-1km"
summary: "Resolução, período e região de interesse influenciam a interpretação de produtos de área queimada e precisam ser tratados de forma explícita."
publishedAt: "2026-11-08"
tags: [geoprocessamento, sensoriamento-remoto, dados-ambientais, queimadas]
draft: false
---

Quando uma pessoa observa um produto de área queimada, é natural querer comparar regiões e períodos. Essa comparação só é útil quando os critérios utilizados são claros e consistentes.

## O que significa resolução de 1 km?

A resolução espacial indica o tamanho aproximado da unidade representada no produto. Em uma grade de 1 km, cada célula resume informações de uma área com essa ordem de grandeza.

Isso não significa que todos os detalhes existentes no território serão representados. Uma célula pode conter diferentes usos do solo, condições de vegetação e intensidades de ocorrência. O produto é uma representação adequada a determinado objetivo, não uma fotografia completa de cada ponto.

## O tempo também muda a interpretação

Uma área queimada observada em um período pode ser resultado de ocorrências iniciadas antes ou de múltiplos eventos próximos. Por isso, a janela temporal precisa ser definida junto com a análise espacial.

Ao comparar dois resultados, é importante perguntar:

- os períodos têm a mesma duração?
- os dados de entrada foram processados com critérios equivalentes?
- existe diferença de disponibilidade entre as regiões?
- o resultado representa ocorrência, estimativa ou outra medida?

## Região de interesse

Uma análise nacional pode esconder padrões locais. Já uma análise muito pequena pode não representar o contexto do evento. A região de interesse deve corresponder à pergunta que se deseja responder.

Exemplos de perguntas diferentes:

- Como o comportamento mudou entre biomas?
- Quais áreas protegidas registraram ocorrências?
- Qual foi a evolução de uma região em uma série histórica?
- Onde priorizar uma investigação ou ação de manejo?

Cada pergunta pode exigir filtros e formas de agregação diferentes.

## Transparência do produto

Um resultado geoespacial ganha valor quando vem acompanhado de metadados. O usuário precisa saber período, resolução, fonte, critérios e limitações.

Essa transparência evita que um mapa seja interpretado fora do contexto para o qual foi produzido. Também facilita a comparação entre versões e a reprodução da análise.

## Conclusão

Critérios geoespaciais e temporais não são detalhes secundários. Eles definem como um produto pode ser lido e comparado. Torná-los explícitos melhora a comunicação entre quem produz os dados e quem os utiliza para pesquisa, operação ou decisão.

O tema é aprofundado no trabalho [Critérios Geoespaciais e Temporais para Cálculo de Área Queimada com Resolução de 1 km](https://doi.org/10.29327/9786527225782.1469406).
