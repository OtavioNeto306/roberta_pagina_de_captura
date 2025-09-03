# Paleta "Luxo Bronze" - Guia de Implementação

## 🎨 Cores Implementadas

### Cores Base
- **Preto profundo (bg-900)**: `#0B0B0C` - Fundo principal
- **Grafite 1 (bg-800)**: `#161617` - Cards e elementos secundários
- **Grafite 2 (bg-700)**: `#2A2A2C` - Linhas e bordas

### Escala Bronze
- **Bronze escuro (bronze-700)**: `#8C5C3A` - Base do degradê
- **Bronze intermediário (bronze-600)**: `#A26B43`
- **Bronze médio (bronze-500)**: `#B37B4E` - Realce principal
- **Bronze intermediário claro (bronze-400)**: `#C79766`
- **Bronze claro (bronze-300)**: `#D8AE7A` - Brilho

### Cores de Destaque
- **Champagne**: `#EED9B6` - Pico do brilho
- **Off-white**: `#F6F1E8` - Texto em bronze

## 🛠️ Classes CSS Customizadas

### Botões

#### Botão Primário (Bronze Metálico)
```css
.btn-primary
```
- Degradê bronze completo com efeito metálico
- Sombra interna e externa para profundidade
- Hover com brightness e contrast
- Active com translateY

#### Botão Secundário (Outline Bronze)
```css
.btn-outline
```
- Fundo transparente com borda bronze
- Hover com fundo gradiente sutil
- Transição suave de cores

### Formulários

#### Card do Formulário
```css
.form-card
```
- Fundo com degradê escuro
- Borda bronze sutil
- Sombra profunda para elevação
- Border-radius de 18px

#### Inputs
```css
.input
```
- Fundo escuro (#141416)
- Borda bronze suave
- Focus com glow bronze
- Placeholder com opacidade reduzida

### Elementos de UI

#### Badge/Etiqueta
```css
.badge
```
- Degradê bronze com overlay branco sutil
- Border-radius circular (999px)
- Borda bronze translúcida

#### Cards Luxuosos
```css
.card-luxury
```
- Degradê de fundo escuro
- Borda com linha grafite
- Sombra difusa

### Utilitárias de Texto

```css
.text-luxury      /* Off-white */
.text-bronze      /* Bronze claro */
.text-champagne   /* Champagne */
.text-muted       /* Cinza claro para conforto */
```

### Degradês Especiais

#### Degradê Bronze Metálico
```css
.bronze-gradient
.bg-bronze-gradient
```
- 6 stops para simular metal
- Ângulo 135deg para naturalidade
- Transição suave entre tons

#### Texto com Degradê Bronze
```css
.text-bronze-gradient
```
- Background-clip: text
- Webkit-text-fill-color: transparent
- Efeito de texto metálico

### Efeitos Especiais

#### Brilho Bronze
```css
.glow-bronze
```
- Box-shadow com cor bronze
- Hover intensifica o brilho

#### Linha Divisória
```css
.divider-bronze
```
- Degradê horizontal bronze
- Opacidade reduzida para sutileza

#### Animação Shimmer
```css
.shimmer
```
- Efeito de brilho deslizante
- Animação de 3s infinita
- Simula reflexo metálico

## 🎯 Classes Tailwind Atualizadas

### Cores no Tailwind Config
```javascript
bg: {
  900: '#0B0B0C',
  800: '#161617',
  700: '#2A2A2C',
}
bronze: {
  700: '#8C5C3A',
  600: '#A26B43',
  500: '#B37B4E',
  400: '#C79766',
  300: '#D8AE7A',
}
champagne: '#EED9B6',
offwhite: '#F6F1E8',
```

### Classes Utilitárias Atualizadas
- `.bg-bg-900`, `.bg-bg-800`, `.bg-bg-700`
- `.text-offwhite`, `.text-champagne`
- `.border-bronze-300`, `.border-bronze-500`
- `.bg-bronze-500`, `.bg-bronze-300`

## 🌟 Fundo com Vinheta

O body agora possui um fundo sofisticado com:
- Dois gradientes radiais para vinheta sutil
- Gradiente linear de base
- Efeito de profundidade e luxo

```css
body {
  background: 
    radial-gradient(1200px 600px at 70% 0%, rgba(255,255,255,.04), transparent 60%), 
    radial-gradient(900px 500px at 20% 20%, rgba(255,255,255,.03), transparent 55%), 
    linear-gradient(180deg, #111112 0%, #0B0B0C 100%);
  color: #EDEDED;
}
```

## 📋 Componentes Atualizados

### ✅ Hero
- Fundo atualizado para bg-900/bg-800
- Badge usando classe `.badge`
- Título com `.text-bronze-gradient`
- Estatísticas com cores champagne
- Botões usando `.btn-primary` e `.btn-outline`

### ✅ ContactForm
- Card usando `.form-card`
- Inputs usando `.input`
- Labels e textos com cores atualizadas
- Status messages com cores bronze

### 🔄 Pendentes
- Services
- About
- App (footer)
- ServicesSlider

## 💡 Dicas de Uso

1. **Contraste**: Sempre use texto claro (offwhite/champagne) sobre fundos escuros
2. **Hierarquia**: Use bronze para elementos importantes, muted para secundários
3. **Espaçamento**: Mantenha 12-18px de border-radius para elegância
4. **Sombras**: Use sombras baixas e difusas, evite glows excessivos
5. **Hover**: Prefira brightness(1.05) a mudanças drásticas de cor
6. **Degradês**: Use os degradês prontos para consistência

## 🚀 Próximos Passos

1. Atualizar componentes Services, About e ServicesSlider
2. Revisar responsividade em diferentes telas
3. Testar acessibilidade e contraste
4. Otimizar performance dos degradês
5. Adicionar mais variações de hover states