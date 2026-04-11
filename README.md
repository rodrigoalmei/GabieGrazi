# Gabrielle & Grazielle | Guia do Convidado

Projeto estatico em `HTML + CSS + JavaScript`, organizado para manutencao simples e futura hospedagem.

## Estrutura

- `index.html`: estrutura principal da landing page.
- `assets/images/brand`: monogramas e artes da identidade.
- `assets/images/gallery`: imagens usadas no carrossel.
- `assets/images/backgrounds`: fundos `fundo 1` e `fundo 2` aplicados no visual do site.
- `assets/audio`: playlist configurada para tocar automaticamente.
- `src/data/site-data.js`: conteudo central do site e dados da galeria.
- `src/js/config.js`: configuracoes de mapa e trilha sonora.
- `src/js/modules`: navegacao, contagem regressiva, audio e galeria.
- `src/styles`: separacao entre base, layout e componentes.

## Como usar localmente

1. Abra `index.html` no navegador.
2. Se preferir, use Live Server no VS Code para navegar melhor durante as edicoes.

## Trilha sonora

- A playlist toca em sequencia automatica com:
  - `01-sujeito-de-sorte.mp3`
  - `02-so-o-comeco.mp3`
  - `03-sonho.mp3`
- Para trocar musicas depois, substitua os arquivos em `assets/audio` e ajuste a ordem em `src/js/config.js`.
- Alguns navegadores podem bloquear autoplay ate a primeira interacao do usuario. Nesse caso, a reproducao retoma no primeiro toque ou clique.

## Google Maps

O site funciona sem chave com iframe e links diretos do Google Maps. Se voce quiser evoluir para a API depois, o ponto preparado continua em `src/js/config.js`, no campo `googleMapsApiKey`.
