# Gabrielle & Grazielle | Guia do Convidado

Projeto estático em `HTML + CSS + JavaScript` organizado para manutenção simples e futura hospedagem.

## Estrutura

- `index.html`: estrutura principal da landing page.
- `assets/images/`: imagens da identidade visual, ilustração principal e peças aproveitadas dos materiais enviados.
- `assets/audio/`: pasta reservada para a música do evento.
- `src/data/site-data.js`: conteúdo do site em formato de dados.
- `src/js/config.js`: configurações gerais, incluindo trilha sonora e espaço para futura chave de Google Maps.
- `src/js/modules/`: interações, renderização, navegação, contagem regressiva e áudio.
- `src/styles/`: estilos separados em base, layout e componentes.

## Como usar localmente

1. Abra `index.html` no navegador.
2. Se preferir, use Live Server no VS Code para navegar melhor durante as edições.

## Música automática

1. Coloque sua música em `assets/audio/trilha.mp3`.
2. Abra `src/js/config.js`.
3. Troque `enableAutoMusic` para `true`.

## Google Maps

O site já funciona sem chave usando iframe e links do Google Maps. Se quiser evoluir depois para a API, o ponto preparado está em `src/js/config.js`, no campo `googleMapsApiKey`.
