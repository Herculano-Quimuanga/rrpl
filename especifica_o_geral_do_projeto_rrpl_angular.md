# Especificação Funcional e de Negócio: Plataforma Oficial RRPL (Angular)

## 1. Visão Geral
A plataforma web da **Reis do Rompimento Primeira Liga (RRPL)** é concebida como o sistema operacional oficial do movimento liderado por **Fly Skuad**. O seu objetivo principal é converter o engajamento massivo do rap de batalha angolano em receita recorrente, eliminando processos manuais através do WhatsApp e folhas de cálculo.

A aplicação será desenvolvida em **Angular** (arquitetura baseada em Componentes Standalone, Services injetáveis e Signals/RxJS para gestão de estado reativo).

---

## 2. Dados Reais & Mock Realistas para Demonstração (MVP)

### 2.1 Gladiadores Oficiais (Perfis & Cartel)
* **Mente Mágica** (Campeão da Liga / Veterano)
  * Província/Bairro: Luanda, Cazenga
  * Cartel: 14 Batalhas | 11 Vitórias | 3 Derrotas
  * Estilo: Punchlines agressivas, métrica densa, referências geopolíticas e sociais.
* **Cris MC** (Veterano / Estilo Lírico)
  * Província/Bairro: Luanda, Rangel
  * Cartel: 12 Batalhas | 9 Vitórias | 3 Derrotas
  * Estilo: Duplo sentido, trocadilhos, flow cadenciado.
* **Babuino** (Gladiador de Elite / Favorito do Público)
  * Cartel: 10 Batalhas | 7 Vitórias | 3 Derrotas
* **Paizão** (Força e Presença de Palco)
  * Cartel: 9 Batalhas | 6 Vitórias | 3 Derrotas
* **Emana Chekson** (Punchliner & Conhecimento Técnico)
  * Cartel: 11 Batalhas | 8 Vitórias | 3 Derrotas
* **Valete de Copas** (Destaque da Batalha dos 9 promovido à Primeira Liga)
  * Cartel: 5 Batalhas | 4 Vitórias | 1 Derrota

### 2.2 Próximos Eventos
* **Evento Principal:** RRPL Edição Especial: Duelo de Gigantes
  * Local: Cine Atlântico, Luanda
  * Data: Próximo Sábado, 16h00 (Portões abrem às 14h00)
  * Cartaz: Mente Mágica vs. Cris MC | Babuino vs. Emana Chekson
  * Ingressos: Geral (5.000 Kz) | VIP (15.000 Kz) | Mesa de Apoio (50.000 Kz)

---

## 3. Módulos e Funcionalidades Detalhadas

### 3.1 Módulo "Batalha dos 9" (B9 - Seleção de Novos MCs)
* **Objetivo:** Triagem digital e monetização da inscrição de novos talentos.
* **Formulário Reativo Angular (`ReactiveFormsModule`):**
  * Campos: Nome Artístico, Bairro/Província, Contacto Telefónico, Link de Rima (60s).
  * **Taxa de Inscrição:** 2.500 Kz (Simulação de checkout via Multicaixa Express com número de entidade e referência).
* **Quadro de Candidatos em Avaliação:** Lista visual com status dinâmico (`Em Análise`, `Aprovado para a B9`, `Repescagem`).
* **Votação Popular:** Ações de voto interativo em tempo real com contadores em Signals.

### 3.2 Módulo Pay-Per-View (PPV) e Transmissão Diáspora
* **Objetivo:** Monetização em moeda forte (EUR/USD) e Kwanzas antes de enviar o conteúdo para o YouTube.
* **Ofertas:**
  * Bilhete Virtual de Transmissão Ao Vivo: 3.500 Kz ou 5,00 EUR.
  * Passe VIP RRPL: 4.000 Kz/mês (Acesso antecipado de 72h a cada nova batalha).
* **Interface:** Player simulado com contagem decrescente, barra de chat lateral e reações rápidas de emoji.

### 3.3 Módulo de Apoio ao Movimento / Doações
* **Mecanismos de Doação:**
  * "Paga um Beat" (1.000 Kz).
  * "Pote do Campeão da Liga" (Doações cumulativas com barra de progresso).
  * "Apoio Diáspora" (10 EUR a 50 EUR).
* **Meios de Pagamento:** Multicaixa Express (MCX), BAI Directo, Visa/Mastercard.

### 3.4 Portal B2B: "Tornar-se Parceiro"
* **Objetivo:** Autonomia comercial para pequenas, médias e grandes marcas.
* **Cotas de Exposição:**
  * *Cota Bairro / Negócio Local:* 150.000 Kz.
  * *Cota Apresentação de Round:* 600.000 Kz.
  * *Cota Oficial RRPL Master:* Acesso direto ao Media Kit.
* **Calculador de Parceria:** Seleção de cotas que calcula dinamicamente o valor total e simula a emissão de proposta.

### 3.5 Merchandising Oficial (Loja RRPL)
* **Catálogo:**
  * T-Shirt Oficial RRPL Preta: 8.500 Kz
  * Boné Snapback Bordado RRPL: 6.000 Kz
  * Casaco Hoodie Oficial: 14.500 Kz
* **Gestão de Carrinho:** Implementada via `CartService` injetável (Angular Signals).