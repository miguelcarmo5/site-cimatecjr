# site-cimatecjr
# Projeto Landing Page da Red Bull

## Descrição

Este projeto é uma landing page responsiva para a marca Red Bull, desenvolvida como um exercício prático para aplicar e aprofundar conhecimentos em tecnologias front-end, além de pleitear a tão sonhada vaga no cimatec jr. A página apresenta informações sobre a marca, um catálogo interativo de produtos, seções informativas e segue a identidade visual da Red Bull.

**Importante:** Este projeto foi desenvolvido em um contexto de aprendizado onde o uso do framework Bootstrap e a assistência de ferramentas de IA (como o Google Gemini e Chatgpt), além de amigos e profissionais da aréa. O foco foi aprender a utilizar essas ferramentas de forma eficaz, entender o código gerado/sugerido e integrá-lo em um projeto coeso. Agradeço desde ja a oportunidade de programar pela primeira vez nessas linguagens.

## Funcionalidades Implementadas

* **Barra de Navegação Fixa:** Menu superior com links para as seções da página e campo de busca.
* **Carrossel de Imagens:** Apresentação dinâmica de imagens na seção principal.
* **Catálogo de Produtos Interativo:** Exibição de produtos em cards, com botão "Detalhes" que abre uma janela **Modal** com mais informações sobre cada produto.
* **Seções de Conteúdo:** Áreas dedicadas para "Sobre Nós", "Parceiros" e "Onde Estamos".
* **Rodapé:** Informações de copyright e links para redes sociais.
* **Design Responsivo:** Layout adaptado para diferentes tamanhos de tela (Mobile First) utilizando Bootstrap.
* **Busca no Site (Client-Side):** Funcionalidade de busca que destaca palavras-chave encontradas no conteúdo principal da página.
* **Estilização Personalizada:** Cores, fontes (Poppins) e ajustes visuais para alinhar com a identidade da marca Red Bull.

## Tecnologias Utilizadas

* **HTML5:** Estruturação do conteúdo.
* **CSS3:** Estilização personalizada, layout (em conjunto com Bootstrap).
    * Variáveis CSS para gerenciamento de cores.
    * Fontes customizadas (Poppins) via `@font-face`.
* **JavaScript (ES6+):** Interatividade, principalmente para a funcionalidade de busca e destaque de texto no DOM.
* **Bootstrap 5.3:** Framework front-end para componentes (Navbar, Carousel, Cards, Modals, Grid) e responsividade.
* **Font Awesome:** Biblioteca de ícones (utilizada no rodapé).

## Como Rodar o Projeto

Este é um projeto front-end estático, não requer instalação de dependências ou um servidor web complexo.

1.  **Clone ou faça o download** dos arquivos do projeto.
2.  **Mantenha a estrutura de pastas** original (`components`, `js`, `styles`, etc.).
3.  Abra o arquivo `index.html` diretamente em seu navegador de preferência (Google Chrome, Firefox, Microsoft Edge, etc.).

## Estrutura do Projeto
* **`index.html`**: Contém toda a estrutura HTML da página, incluindo a disposição dos componentes Bootstrap e o conteúdo textual.
* **`styles/style.css`**: Define a aparência visual personalizada do site, sobrescrevendo e complementando os estilos padrão do Bootstrap. Inclui a definição das cores da marca, aplicação das fontes Poppins e ajustes de layout/espaçamento.
* **`js/scripts.js`**: Responsável pela funcionalidade da barra de busca, implementando a lógica para encontrar e destacar texto na página.
* **`components/`**: Armazena recursos externos como fontes e imagens.

## Processo de Desenvolvimento e Aprendizado

Este projeto foi construído iterativamente com foco no aprendizado das tecnologias front-end mencionadas.

* **Bootstrap:** Foi amplamente utilizado para a criação rápida de componentes responsivos como a barra de navegação, o carrossel, os cards de produto e os modais. O aprendizado envolveu entender o sistema de grid, as classes utilitárias e a customização dos componentes.
* **CSS:** A estilização personalizada foi feita em `style.css` para aplicar a identidade visual da Red Bull (cores, fontes), ajustar espaçamentos e garantir a coesão visual além do padrão Bootstrap.
* **JavaScript:** A funcionalidade de busca foi implementada com JavaScript puro para manipular o DOM, adicionar/remover highlights e gerenciar eventos do formulário.
* **Uso de IA (Gemini e Chatgpt):** Utilizei o Google Gemini como ferramenta de aprendizado e assistência. Minha interação envolveu:
    * Solicitar exemplos de estrutura HTML para componentes Bootstrap específicos (ex: modais).
    * Pedir sugestões de código CSS para aplicar estilos específicos.
    * Obter ajuda na geração da lógica inicial para a funcionalidade de busca em JavaScript.
    * Tirar dúvidas sobre conceitos e sintaxe.

## Autor

[Miguel Carmo de Aquino]

---
