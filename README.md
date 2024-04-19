### Front-end (React Native)

**SplashScreen.js:**
- Uma tela de introdução exibindo o logotipo e o nome do aplicativo.
- Utiliza o componente `Image` do React Native para exibir uma imagem.
- Define estilos para o container, logotipo e título usando `StyleSheet.create`.

**Login.js:**
- Uma tela de login que permite ao usuário inserir e-mail e senha.
- Utiliza os Hooks `useState` para controlar os campos de entrada e `useNavigation` para navegar entre telas.
- Define um método `handleLogin` que utiliza a API para autenticar o usuário.
- Utiliza os componentes `TextInput` e `Button` do React Native para entrada de texto e botão.

**Register.js:**
- Uma tela de registro que permite ao usuário inserir nome, e-mail e senha.
- Utiliza os Hooks `useState` para controlar os campos de entrada e `useNavigation` para navegar entre telas.
- Define um método `handleRegister` que utiliza a API para registrar um novo usuário.
- Utiliza os componentes `TextInput` e `Button` do React Native para entrada de texto e botão.

**Home.js:**
- Uma tela inicial que exibe uma lista de postagens.
- Utiliza o Hook `useState` para armazenar as postagens obtidas da API.
- Utiliza o Hook `useEffect` para buscar as postagens quando o componente é montado.
- Utiliza o componente `FlatList` do React Native para renderizar a lista de postagens.
- Define um método `handleNewPost` para navegar para a tela de criação de novas postagens.

**NewPost.js:**
- Uma tela para criar uma nova postagem.
- Utiliza o Hook `useState` para controlar o texto da postagem.
- Define um método `handleSave` que utiliza a API para salvar a nova postagem.
- Utiliza os componentes `TextInput` e `Button` do React Native para entrada de texto e botão.

**Post.js:**
- Um componente para exibir uma única postagem.
- Recebe a postagem como propriedade e exibe o nome do autor, texto da postagem e data de criação.

### Back-end (Node.js com Express e MongoDB)

**index.js:**
- Configura o servidor Express e conecta-se ao banco de dados MongoDB.
- Define rotas para manipulação de postagens e usuários.
- Define um endpoint raiz que redireciona para o endpoint `/posts`.

**models/Post.js:**
- Define o modelo de dados para uma postagem.
- Utiliza o `mongoose` para definir o esquema de dados.

**routes/posts.js:**
- Define as rotas para manipulação de postagens.
- Implementa operações CRUD (criar, ler, atualizar, excluir) para postagens.

**routes/app.js:**
- Define as rotas para registro e login de usuários.
- Implementa lógica para verificar credenciais de login e registrar novos usuários.****
