# Regras Rígidas de Desenvolvimento: Angular e CSS

Para assegurar a consistência no ambiente de desenvolvimento, todas as páginas e componentes criados no Angular devem obedecer rigorosamente às seguintes regras.

## 1. Proibições Absolutas

1. **PROIBIDO ESTILO INLINE:** Não utilize `[style]="..."` ou atributo `style="..."` em templates HTML, exceto para valores puramente dinâmicos de cálculo (ex.: percentagem da barra de progresso em pixels/percentagem).
2. **PROIBIDO TAILWIND CSS OU UTILITÁRIOS:** Não usar classes de frameworks utility-first. Toda a estilização deve ser feita em ficheiros `.css` dedicados.
3. **PROIBIDO CSS INLINE DENTRO DO TYPESCRIPT:** Não use a propriedade `styles: ['...']` no decorator `@Component`. Use sempre `styleUrl: './nome-do-componente.component.css'`.

---

## 2. Padrão de Componentes Angular

- **Standalone Components:** Todos os componentes devem declarar `standalone: true`.
- **Separação Obrigatória de Arquivos:** Todo o componente deve possuir a sua própria pasta com 3 arquivos:
  1. `[nome].component.ts` (Lógica e estado)
  2. `[nome].component.html` (Template sem CSS embutido)
  3. `[nome].component.css` (Estilos específicos e encapsulados)

### Estrutura de Pastas Recomendada:

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── navbar.component.ts
│   │   │   ├── navbar.component.html
│   │   │   └── navbar.component.css
│   │   ├── hero-banner/
│   │   │   ├── hero-banner.component.ts
│   │   │   ├── hero-banner.component.html
│   │   │   └── hero-banner.component.css
│   │   ├── action-cards/
│   │   │   ├── action-cards.component.ts
│   │   │   ├── action-cards.component.html
│   │   │   └── action-cards.component.css
│   │   ├── gladiator-card/
│   │   │   ├── gladiator-card.component.ts
│   │   │   ├── gladiator-card.component.html
│   │   │   └── gladiator-card.component.css
│   │   ├── b9-modal/
│   │   │   ├── b9-modal.component.ts
│   │   │   ├── b9-modal.component.html
│   │   │   └── b9-modal.component.css
│   │   └── partner-modal/
│   │       ├── partner-modal.component.ts
│   │       ├── partner-modal.component.html
│   │       └── partner-modal.component.css
│   ├── models/
│   │   ├── gladiator.model.ts
│   │   ├── event.model.ts
│   │   └── merch.model.ts
│   ├── services/
│   │   ├── gladiator.service.ts
│   │   └── cart.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.config.ts
├── styles/
│   ├── variables.css
│   └── global.css
└── main.ts
```

---

## 3. Padrão de Nomenclatura e Metodologia CSS

### 3.1 Padrão BEM no CSS do Componente

```css
/* hero-banner.component.css */
.hero-banner {
  background-color: var(--color-dark);
  border-radius: var(--radius-card);
  padding: 40px;
  position: relative;
  overflow: hidden;
}

.hero-banner__title {
  color: var(--color-text-light);
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.2;
}

.hero-banner__badge-live {
  background-color: var(--color-red);
  color: var(--color-text-light);
  border-radius: var(--radius-pill);
  padding: 4px 14px;
}
```

### 3.2 Ficheiro Global de Variáveis (`src/styles/variables.css`)

```css
:root {
  --color-bg-main: #ffffff;
  --color-bg-secondary: #f8f9fa;
  --color-dark: #0f0f11;
  --color-dark-card: #18181b;
  --color-red: #dc2626;
  --color-red-hover: #b91c1c;
  --color-text-main: #111827;
  --color-text-muted: #6b7280;
  --color-text-light: #ffffff;
  --color-border: #e5e7eb;

  --radius-pill: 9999px;
  --radius-card: 28px;
  --radius-card-sm: 18px;

  --font-family-base: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
}
```

---

## 4. Modelos de Dados em TypeScript (`src/app/models/`)

Exemplo de tipagem estrita para evitar o uso de `any`:

```typescript
// gladiator.model.ts
export interface Gladiator {
  id: string;
  name: string;
  avatarUrl: string;
  neighborhood: string;
  totalBattles: number;
  wins: number;
  losses: number;
  status: 'active' | 'veteran' | 'b9_prodigy';
}

// event.model.ts
export interface RrplEvent {
  id: string;
  title: string;
  location: string;
  date: string;
  ticketPriceKz: number;
  vipPriceKz: number;
  isLive: boolean;
}
```

---

## 5. Gerenciamento de Estado e Reatividade

- Utilizar **Angular Signals** (`signal()`, `computed()`) para estados locais e de tela (ex.: modais abertos, seleções de filtro).
- Utilizar **Reactive Forms** (`FormGroup`, `FormControl`, `Validators`) no formulário de inscrição da Batalha dos 9 e no contacto de parceiros.
