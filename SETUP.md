# 🛡️ Front Security - QTI Monitor

## Como Configurar

### 1. Criar Projeto no Firebase (GRÁTIS)

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Faça login com sua conta Google
3. Clique em **"Adicionar projeto"**
4. Dê o nome: `front-security-qti`
5. Desative o Google Analytics (não é necessário)
6. Clique em **"Criar projeto"**

### 2. Configurar o Realtime Database

1. No menu lateral, clique em **"Criação" → "Realtime Database"**
2. Clique em **"Criar banco de dados"**
3. Selecione a região mais próxima (us-central1)
4. Selecione **"Iniciar no modo de teste"** → Ativar
5. Pronto! O banco de dados está criado

### 3. Obter a Configuração do App

1. No painel do Firebase, clique no ícone de **engrenagem ⚙️** → **"Configurações do projeto"**
2. Role até a seção **"Seus apps"**
3. Clique no ícone **`</>`** (Web)
4. Dê um apelido (ex: `qti-monitor`)
5. **NÃO** marque Firebase Hosting
6. Clique em **"Registrar app"**
7. Copie o objeto `firebaseConfig` que aparece:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "front-security-qti.firebaseapp.com",
  databaseURL: "https://front-security-qti-default-rtdb.firebaseio.com",
  projectId: "front-security-qti",
  storageBucket: "front-security-qti.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

8. Cole este JSON no app quando ele pedir a configuração

### 4. Hospedar o App (GRÁTIS)

#### Opção A: GitHub Pages (Recomendado)

1. Crie uma conta no [github.com](https://github.com) (se não tiver)
2. Crie um novo repositório chamado `qti-monitor`
3. Faça upload dos 3 arquivos: `index.html`, `style.css`, `app.js`
4. Vá em **Settings** → **Pages**
5. Em "Source", selecione **"Deploy from a branch"**
6. Selecione branch **"main"** e pasta **"/ (root)"**
7. Clique em **Save**
8. Aguarde 1-2 minutos
9. Seu app estará disponível em: `https://seuusuario.github.io/qti-monitor`

#### Opção B: Netlify (Arrastar e Soltar)

1. Acesse [netlify.com](https://app.netlify.com)
2. Faça login com GitHub ou email
3. Arraste a pasta com os 3 arquivos para a área de deploy
4. Pronto! Você receberá uma URL automática

#### Opção C: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu GitHub
3. Importe o repositório
4. Deploy automático!

### 5. Compartilhar com a Equipe

Envie o link do site para os 3 membros da equipe. Todos verão as atualizações em tempo real!

---

## Como Usar

### Status dos Postos

- 🔴 **Sem Contato** - Não conseguiu contato com o vigilante/funcionário
- 🟡 **QTI** - QTI (aguardando / em trânsito)
- 🟢 **Chegou** - Vigilante/funcionário chegou ao posto

### Alertas Automáticos

- **06:00** → Postos **diurnos** e de **limpeza** começam a piscar se não tiverem status
- **18:00** → Postos **noturnos** começam a piscar se não tiverem status
- **06:30** → Posto **Cesario (Limpeza)** começa a piscar
- Postos com dias específicos só aparecem ativos nos seus dias de funcionamento

### Compartilhar no WhatsApp

Clique no botão 📱 verde para gerar uma mensagem formatada com o status de todos os postos e compartilhar no grupo do WhatsApp.

### Gerenciar Postos

- **Adicionar**: Clique no botão ➕ laranja
- **Deletar**: Clique no ✕ no canto superior direito do card do posto
- **Resetar**: Clique no botão 🔄 para limpar todos os status

---

## Postos Cadastrados

### Segurança Econ
| Posto | Tipo | Dias |
|-------|------|------|
| Giovanni Gronchi | Diurno | Todos |
| Mascote | Diurno | Todos |
| Tumiaru | Noturno | Todos |
| Sabará | Noturno | Todos |
| Diadema | Noturno | Todos |
| Oswaldo | Noturno | Todos |
| Suzana | Noturno | Todos |

### Segurança Nurban
| Posto | Tipo | Dias |
|-------|------|------|
| Bosque | Diurno | Todos |
| Palmeiras | Diurno | Todos |
| Cesario | Diurno | Todos |
| Joao Ramalho | Noturno | Todos |
| Venancio | Noturno | Todos |

### Segurança Kallas
| Posto | Tipo | Dias |
|-------|------|------|
| Central Kallas | Diurno | Seg, Qua, Sex |

### Segurança Cursino
| Posto | Tipo | Dias |
|-------|------|------|
| Terreno Cursino | Diurno | Seg a Sáb |

### Limpeza
| Posto | Tipo | Dias | Observação |
|-------|------|------|------------|
| Clinica | Limpeza | Todos | - |
| Campo Belo | Limpeza | Qua | Somente quartas |
| Palmeiras 1 | Limpeza | Todos | - |
| Palmeiras 2 | Limpeza | Exceto Qua | - |
| Cesario | Limpeza | Seg,Ter,Qui,Sex,Sáb | Alerta às 6:30 |
| Bosque | Limpeza | Todos | - |
