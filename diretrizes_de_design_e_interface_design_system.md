# Diretrizes de Design & Especificação de Interface: RRPL Web

## 1. Princípios Visuais Fundamentais

O design combina o conceito de **WhiteSpace Moderno** (amplo espaçamento, fundos limpos, clareza estrutural) com o peso urbano e marcante da **cultura Hip-Hop e Rap de Batalha**.

1. **Predominância do Branco Puro:** O plano de fundo de páginas, secções e cabeçalhos deve ser predominantemente limpo, permitindo que os elementos em cartões se destaquem com máxima nitidez.
2. **Cards com Raios Muito Acentuados:** Todas as divisões de conteúdo usam cartões (`border-radius: 24px` a `32px`).
3. **Alto Contraste Seletivo:** Os blocos de ação prioritária (Apoiar Liga, Parcerias, Destaque de Evento) usam fundos pretos profundos ou gradientes escuros, com **tipografia fina branca** no seu interior.
4. **Pílulas e Distintivos (Pill Badges):** Selos de estado ("Ao Vivo", "Votação Aberta", "Kz") devem ter a forma de cápsulas totalmente arredondadas (`border-radius: 9999px`).

---

## 2. Paleta de Cores Oficial

* **Background Principal (Light):** `#FFFFFF`
* **Background Secundário (Off-White/Cinza Suave):** `#F8F9FA`
* **Cards Escuros (Dark Contrast):** `#0F0F11` e `#18181B`
* **Cor de Destaque / Ação (Vermelho RRPL):** `#DC2626` (Hover: `#B91C1C`)
* **Bordas Sutis:** `#E5E7EB`
* **Texto Primário (Sobre fundo claro):** `#111827`
* **Texto Secundário (Sobre fundo claro):** `#6B7280`
* **Texto Primário (Sobre fundo escuro):** `#FFFFFF` (Fonte fina / Light)
* **Texto Secundário (Sobre fundo escuro):** `#9CA3AF`

---

## 3. Tipografia

* **Família Tipográfica:** `Inter`, `Montserrat` ou `Plus Jakarta Sans` (sem serifa, de traço limpo e geométrico).
* **Hierarquia:**
  * **Títulos de Secções (H1, H2):** `font-weight: 600` ou `700`, cor `#111827`.
  * **Textos Internos dos Cards Escuros:** `font-weight: 300` ou `400` (Light/Regular), cor `#FFFFFF`.
  * **Preços e Métricas:** `font-weight: 600`, número em destaque.
  * **Badges:** `font-size: 11px` ou `12px`, `font-weight: 500`, `letter-spacing: 0.5px`, `text-transform: uppercase`.

---

## 4. Estrutura dos Componentes Visuais (Baseados no Protótipo)

### 4.1 Cabeçalho (Navbar)
* Fundo branco puro sem bordas agressivas (apenas uma sombra muito suave ou linha `#F3F4F6`).
* Logótipo da RRPL (coroa e microfone) centralizado ou à esquerda.
* Links de navegação: *Início*, *Eventos*, *Batalha dos 9*, *Apoiar*, *Parcerias*.
* Botão de conversão à direita: Pílula vermelha com texto branco fino *"Apoiar o Movimento"*.

### 4.2 Banner Principal do Evento (Hero Card)
* Card amplo com cantos arredondados (`border-radius: 28px`), fundo cinza escuro/preto com imagem sobreposta dos gladiadores e do Fly Skuad.
* Tag pílula no canto superior direito: Indicador vermelho pulsante *"Ao Vivo"* e *"Votação Aberta"*.
* Botão de chamada para ação (CTA): Pílula vermelha *"Comprar Bilhete"*.
* Cartão flutuante interno com fundo semi-translúcido escuro: *"Gladiadores do Fly Skuad"*.

### 4.3 Linha de Cards de Ação Rápida (Grid de 3 Colunas)
1. **Card "Batalha dos 9":** Fundo claro ou cinza ultra suave, sombra discreta, botão preto interno arredondado *"Submeter Rima (B9)"* e etiqueta de taxa clara.
2. **Card "Tornar-se Parceiro":** Fundo preto profundo, texto explicativo em branco fino, botão arredondado com selo de contacto e logótipos de pagamento.
3. **Card "Apoiar a Liga":** Fundo preto profundo com gradiente de borda avermelhado, texto explicativo claro e logo Multicaixa Express (MCX) bem visível.

### 4.4 Carrossel de Merchandising e Lista de Gladiadores
* Cards verticais de produtos com cantos arredondados, imagem centralizada sobre fundo suave e botão pill *"Adicionar"*.
* Cards de gladiadores com fotos circulares/arredondadas, nome artístico em destaque, número de vitórias e botão de avaliação/votação.

---

## 5. Responsividade Mobile-First
* No ecrã móvel, a grelha de 3 colunas desdobra-se em cartões empilhados verticalmente com largura total (90% do ecrã) e navegação por scroll horizontal nos produtos e lutadores.
* Manter espaçamento generoso (`padding: 16px` a `24px`) para respeitar a regra do WhiteSpace.