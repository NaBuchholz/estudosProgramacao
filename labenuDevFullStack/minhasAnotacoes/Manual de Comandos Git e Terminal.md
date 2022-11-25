---
tags: Programação/Git, Versionamento, Terminal, Bash, Programação/Git/GitAtalho
---

https://www.hostinger.com.br/tutoriais/comandos-linux

# Comandos de terminal

- **Comandos Básicos**
    - **head** : mostra as 10 primeiras linhas de um arquivo;
    - **tail** : 10 ultimas linhas;
    - **whoami** : mostra o usuário ativo;
    - **echo "*hello world"** : imprime no terminal a *palavra/frase digitada;
    - **pwd** : mostra a pasta em que você está;
    - **cd** : muda de pasta (change directory);
    - **cd ./(nome da pasta)**: vai para a pasta selecionada;
    - **cd -** : volta para a última pasta;
    - **cd ../ :** vai para a pasta acima;
    - **ls**: lista todos os arquivos e pastar dentro de um diretório;
    - **touch**: cria um arquivo;
    - **mkdir**: cria pasta (make directory);
    - **rm:** remover arquivo;
    - **rm -rf:** remover diretório e tudo que tem dentro; (CUIDADO COM ISSO)
    - **mv:** move ou renomeia arquivo;
    - **cp:** copia arquivo;
    - **cat**: imprime tudo dentro de um arquivo;
    - **grep:** busca conteúdo dentro de um arquivo;
- **nano:** editor nativo dos terminais
-  **pwd**: encontra o caminho completo do diretório atual.
-   **cd:** permite navegar até determinada pasta.
-   **ls:** visualiza todos os arquivos de um diretório.
-   **cat:** lista os conteúdos de um arquivo de texto na saída padrão (sdout).
-   **cp:** copia arquivos do diretório atual para uma pasta diferente.
-   **mv:** pode ser usado para mover ou renomear arquivos.
-   **mkdir:** cria um novo diretório.
-   **rmdir:** permite deletar diretórios vazios.
-  **touch:** criar novos arquivos em branco
-  **rm -rf:** deleta arquivos e diretórios 


# Comandos Git

**<mark style="background: #FF5582A6;">git clone</mark>** → Clona um repositório já existente no github.

Sintaxe: `git clone <<url-do-repo.git>>`

**<mark style="background: #FF5582A6;">git config</mark>** → Necessário para configurar o git para uso pela primeira vez.

Sintaxe:

`git config --list`→ lista as configurações do git

`git config --global user.email [fulanodetal@exemplo.b](mailto:fulanodetal@exemplo.br)r` → configura o email do usuário. Deve ser o mesmo da conta do GitHub

`git config --global user.name "Fulano de Tal"` → configura o nome do usuário.

`git config --global alias.<exemploalias> checkout` → configura um apelido para algum comando

`git config --global alias.alias` → Listar os atalhos configurados

`git config --global --unset alias.co`  → Deletar um atalho 

**<mark style="background: #FF5582A6;">git branch</mark>** → Lista todas as branches presentes naquelerepositório

Sintaxe: `git branch`

💡 Digite :WQ para sair da lista que foi aberta

**<mark style="background: #FF5582A6;">git branch <></mark>** 

Sintaxe:

`git branch exemplo-de-nome` → Cria uma nova branch com o nome escolhido

`git branch -d [nome da branch]` → Deletar uma branch do repositório local

**<mark style="background: #FF5582A6;">git checkout < ></mark> ** → entra na branch com o nome selecionado

Sintaxe: `git checkout exemplo-de-nome` -> `git co exemplo-de-nome` 

💡 Bônus: podemos combinar os dois comandos acima usando `git checkout -b exemplo-de-nome`. Dessa forma criamos a branch e a acessamos.

**<mark style="background: #FFB86CA6;">git status</mark>** → lista as mudanças realizadas na branch desde o último commit

Sintaxe: `git status`

💡 Digite :WQ para sair da lista que foi aberta

**<mark style="background: #FF5582A6;">git add</mark>** → Adiciona arquivos para a **staging area**. Pode ser feito arquivo por arquivo ou adicionar a pasta inteira do projeto.

Sintaxe:

`git add -- all` → Adiciona todos os arquivos que ainda não foram adicionados

`git add .` → Adiciona todos arquivos da pasta atual

`git add nome-do-arquivo` → Adiciona o arquivo

**<mark style="background: #FF5582A6;">git commit</mark>** → Permite a criação de um novo **commit**, isto é, uma nova **etiqueta** das alterações do código em um determinado momento do tempo.

Sintaxe: `git commit -m "Descrição da alteração"`

💡 Não se esqueça das aspas aqui!

**<mark style="background: #FF5582A6;">git push</mark>** 

Sintaxe: 

`git push origin nome-da-branch` → Sobe os commits realizados para o github (ou outra plataforma de nuvem)

`git push --set-upstream origin [nome da branch]` → Fazer um push pra criar uma nova branch remotamente

`git push origin --delete [nome da branch]` → Deletar uma branch do repositório remoto

**<mark style="background: #FF5582A6;">git pull</mark>** → Baixa as atualizações do repositório remoto para o repositório local.

Sintaxe: `git pull origin nome-da-branch`

**<mark style="background: #FF5582A6;">git remote</mark>** → Define a origem do repositório remoto

Sintaxe: `git remote set-url origin &lturl&gt` ->  `git seturl`

- **Comandos de GIT**
    - **git clone <link-repositório>:** clona repositório remoto;
    - **git status:** status do repositório;
    - **git checkout -b <nome-da-branch>:** cria e já acessa a branch;
    - **git add**: envia arquivos para a *staging area;*
    - **git add —all**: adiciona todos os arquivos para a staging area;
    - **git add .** : adiciona todos os arquivos da pasta atual para a staging area;
    - **git commit -m "*mensagem*"**: "etiqueta" o que está na staging area;
    - **git log**: verifica o histórico de commits;
    - **git log —graph**: mais descritivo e visual que o anterior;
    - **git branch:** cria uma branch;
    - **git checkout <nome-da-branch>:** acessa a branch;
    - **git branch -m <novo-nome>:** renomear branch;
    - **git branch -d <nome da branch>:** deleta branch (D maiúsculo pra remover na força do ódio)
    - **git push origin <nome-da-branch>:** envia as atualizações para o repositório remoto;
    - **git pull origin <nome-da-branch>:** atualiza a branch com as informações mergeadas no repositório;
    - **git fetch:** trazer as branchs do repositório remoto;


# Meus Atalhos

Checkout → co 

Remote Set-URL → seturl 


# Referências

https://evellynlima.com.br/criando-atalhos-para-os-comandos-do-git/#:~:text=Pra%20configurar%20qualquer%20atalho%20é,é%20um%20comando%20de%20configuração
