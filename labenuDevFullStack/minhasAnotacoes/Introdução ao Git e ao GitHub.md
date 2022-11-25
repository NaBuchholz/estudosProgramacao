---
tags: [Estudo, Programação, CursoLivre, Programação/Git, Programação/GitHub, OrangeTech]
type: [lecture]
status: [in-progress]
aliases: 
date: 2022-Oct-25
disciplina: true
---
# Comandos básicos para um bom desempenho no terminal
- flaggs => variações do comando ->ex. --global
- atributo => complemento comando -> init
# Tópicos fundamentais para entender o funcionamento do [[Git]]
> A sigla SHA significa Secure Hash Algorithm (Algoritimo de Hash Seguro), é um conjunto de funções hash criptográficas projetdas pela NSA.

- Output gera um conj. de caracters ==**único**== de 40 dig. e serve como id que representa o estado de um arquivo
```
echo "ola mundo" | openssl sha1
```

# Objetos internos do [[Git]]
1. ==Commits:== Junta todas as informações
	- aponta p/ árvore, parente, autor e mensagem; tem um timestamp e tbm possuem um SHA1 próprio
1. Trees: Tem um SHA1 próprio
	- Armazenam e aponta Blobs
	- guarda o nome dos arquivos
2. Blobs: Tem um SHA1 próprio
	- contém ==**metadados**== de tipo, tamanho\0 "conteúdo"

![[Pasted image 20221025174623.png]]
- Essa estrutura torna tudo muito seguro (histórico pega ladrão)
![[Pasted image 20221025175742.png]]


# Chave SSH e Token

- **==Chave SSH==** => forma de estabelecer uma conexão segura entre duas maquinas
(Win/Linux)
```
ssh-keygen -t ed25519 -C {{e-mail}}
Abrir processo para criar chave ssh 
Senha: CriaSenhaAqui
-------------
navegar até a pasta de criação
cat id_ed25519.pub
copiar conteúdo e add no github
-------------
eval $(ssh-agent -s)
ssh-add id_ed25519
```

# Token de acesso pessoal
- Tem especificações de permissão
- Usa o protocolo HTTPS para clonar

# Primeiros comandos com o Git
- Todo comando leva o git a frente, uma vez que estamos chamando o programa no terminal

## Iniciando e criando um commit
- ==git init== -> iniciar repositório na pasta, como uma pasta oculta .git
	-para ver repositórios ocultos
		_**-ls -a**_
	-caso seja a primeira utilização do git
		_**git config --global user.email "email"
		git config --global user.name**_
		
- ==git add== -> Move do working directory para Staged
		nomeArquivo
		(*)ou (.) pega tudo na pasta
		
- ==git commit== -> Move do Staged para Local Repository
		(-m "mensagem")

# Ciclo de vida dos arquivos nos git
## PAP no ciclo de vida
![[Pasted image 20221027104809.png]]
- Tracked -> ==Staged== preparação p/ um commit
- Untracked-> git não tem ciência do arquivo
- **==git status==**
- commit => integra o staging com o repositório local e retorna o arquivo para Unmodified
![[Pasted image 20221027110645.png]]

# Introdução ao [[GitHub]]
## Trabalhando com o GitHub
- ==git remote== 
	- add origin httpsDoGit
	- -v -> listar os repositórios remotos
- ==git push==
	- origin main -> para subir o local pro servidor

## Como os conflitos acontecem no GitHub e como resolvê-los
- Conflito de Merge: alterações diferentes na mesma linha => git deixa você decidir qual é a melhor versão e commit ela.
- ==git pull== 
	- origin master
- ==git clone== <-https do projeto> => clona um repositório
## Trabalhando com Branches no GitHub
### O que são as Branches?
- Uma bifurcação/ramificação do conteúdo atual que permite o desenvolvimento em paralelo 
- não existe commit sem branch nem o revés
![[Pasted image 20221027142910.png]]
- Uma branch carrega todo o histórico de commits da qual ela se originou

## Entendendo na prática sobre branches
- master => passou a ser main
> [!caution]+ Criou README no git
Antes de commit precisa dar um pull para o repo. local

### Guiando-se nas branches com a tag HEAD
- Tag que aponta o último commit numa branch
- Sempre diz aonde aquela branch "parou"; o histórico mais avançado

### Comando checkout e merge
- ==git checkout== < branch> => usado para se movimentar entre branchs 
	- <-b> para também criar uma branch nova
- ==git merge== =>Juntar à branch em que você esta uma outra branch

### Comando stash e seus subcomandos
- ==git branch== => listar branch's do repositório local e mostrar aonde você esta com a tag head
	- <-m> => troca o nome da branch enquanto **dentro** dela
	- <-m < nome_atual_da_branch novo_nome_da_branch>> => troca o nome estando **fora** da branch
		- ex.: git branch -m funcionalidade-1 funcionalidade-2
- < -d> => deleta uma branch
> [!note]+ Arquivos Rastros
Sempre que você da checkout você carrega os arquivos no stage de uma branch para outra, isso pode gerar problemas com um arquivo que não deveria pertencer a determinada branch. Para evitar isso existe o stash, uma "caixa" aonde armazenamos "contextos" do working directory e index (stage). Funciona como um array.
- ==git stash== => sem o < save> ele salva o contexto como WIP (Work in Progress) ; **usado de forma momentânea**
	- < save>"contexto" => faz o array e define contexto; 
	- < list> => lista dos stashs criados
	- < pop<numero_do_array>> => traz ele de volta ao stage da branch atual
	- < clear> => limpa o stash

## Visualização de histórico
### Comando git log
- ==git log== => Mostra o SHA1, Tag HEAD, Origin , Author, Mesagem, Data
	- < nome_diretório ou arquivo> => mostra somente log especificado
	- :q =>cancela visualização
	- Subcomandos específicos com git log
		- < --oneline> => resumo em 1 linha de cada commit
		- < --graph> => forma mais ilustrada do output
- ==gitk== => abre ferramenta de visualização do histórico no **S.O Win**
- [Site GUIs](https://git-scm.com/downloads/guis)
	- [GitHub Desktop](https://desktop.github.com) Win ou mac

## Commits
### Conceitos iniciais sobre reverter commits
> [!warning] Destruição de Código
Esses comandos de reverter commit podem sim destruir as informações contidas e causar a perda de código, **usar com sabedoria**.
- Falando aqui de repositório *LOCAL*
- < hash(sha1)_de_um_commit> -> ex. 8fs7lxcl
- < HEAD~1(Nºpara reverter)> -> em relação a HEAD
- ==git revert== => Manipula os commits
	- move a tag HEAD e Reverte todas as alterações que o commit especificado implementou gerando um commit novo 
		![[Pasted image 20221028140020.png]]
- ==git reset== =>Manipula os estados dos arquivos => gera um commit com as alterações inversas
	1. --soft => volta os arquivos para o Index(Staged)
	2. --mixed => default ; Reverte para o work directory
	3. --hard
		>[!warning]- APAGA GERAL DEPOIS DO ESPECIFICADO
- Falando aqui de repositório *REMOTO*
- ==Se efetuado reset no seu rep. local, na hora de dar o push para o remoto ele vai avisar que foi rejected e que vc precisaria dar um pull, e resolver os possiveis conflitos primeiro, para depois commitar no repo. remoto.
Já se for um revert ele aceita as alterações, mas você vai ter que lidar com possiveis [[Introdução ao Git e ao GitHub#Como os conflitos acontecem no GitHub e como resolvê-los | conflitos de Merge]]==
![[Pasted image 20221028142206.png|300]]
![[Pasted image 20221028142314.png|300]]

### Conceitos iniciais sobre estruturação de commits
- De forma geral 
1. Commits atômicos => Unidade solida que tenha início, meio e fim.
	
	![[Pasted image 20221028143954.png|Antes da organização|300]]
	![[Pasted image 20221028144316.png|Depois da organização por commit atómico|300]]
	- Contexto para verificar Pt x En
	- Estrutura:
	- Assunto: Curto e compreensível; começar com Maiúscula; Sem terminar em ponto (.); **Forma Imperativa** ex.: Adiciona a funcionalidade X, Remove a funcionalidade Y, Se aceito esse commit atualiza, remove, adiciona, altera Z
	> [!info] Em Inglês
	Usar o imperative mood ex.: Remove a feature, if applied this commit will add/remove/update
	- Corpo: Detalhes, Quebra de linha em 75 caracteres; Identifique sua audiência; Explique tudo; Use markdown
	- Rodapé: Referencie assuntos relacionados (Issues).
		- palavra reservada=> closes # <n_da_issue> => fecha a issue
		- palavra reservada=> Ref #  => amarra estruturas tipo pull request, actions
2. Commits Semânticos =>
	- Versionamento Semântico
		- 3(Major).2(Minor.7(Patch)
		- Major=> Quebra a compatibilidade
		- Minor=> Implementa algo com retro compatibilidade
		- PATCH=> pequenas alterações
		- [Site detalhado](https://semver.org/lang/pt-BR/)
	> A especificação do Conventional Commits é uma convenção simples para utilizar nas mensagens de commit. Ela define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação. Esta convenção se encaixa com o [SemVer](https://semver.org/), descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.
	- [Tipos: fix(PATCH), feat(MINOR), BREAKING CHANGE(MAJOR)](https://www.conventionalcommits.org/pt-br/v1.0.0/)
# Git e GitHub Focado em PullRequest
## Forks
- Processo utilizado para "mover" um repositório de outrem para o seu perfil pessoal
- Por fork a origem do repositório sempre vai estar ligada ao seu repositório pessoal, abaixo do caminho dele
> [!Tip] Criar Branch Para Alterações
Uma boa prática é ao invés de se trabalhar na branch master, logo que clonar o repositório fazer uma branch nova para as alterações que você pretende fazer nele, e trabalhar nela ao invés da branch main do repositório.

## Permissões
- settings do repositório > manage access
- Colaborador => pode commitar sem passar por uma pull request (ou seja, diretamente)
- Pull Request => sua possível commit sera analisada por algum maintainer do projeto e aprovada ou não a fazer parte do repositório.

## Organizações e Times
- Nova permissão com conta de organização: Times
	- Trabalhar com times maiores sem ter a necessidade do pull request => permissões como ler, fazer triagem, escrever, manter, administrar

## Fazendo seu primeiro Pull Request
- Fork -> Clone ->Fazer Nova Branch -> Editar
-  Templates (nome_template.md) podem conter tarefas que são identificadas pelo github e mostradas
- Ajuda a fazer o code review

## Utilizando Issues
- Pode usar templates => settings do repo -> Issues
- Usada para discussões que podem gerar alterações no projeto

## Configurando Aliases
- Colocar apelidos nos comandos
	- ==git config --global alias.< apelido do comando><espaço>< qual comando representa>==
		- git config --global alias.s status
	- --unset alias.< apelido> para retirar

# #OrangeTech/DesafioDeProjeto :  Criando seu Primeiro Repositório no GitHub Para Compartilhar Seu Progresso
## DESCRIÇÃO

Reforce seu conhecimento em [[Git]] com um desafio de projeto totalmente prático, onde você executará todos os passos para a criação, atualização e sincronização de um repositório no [[GitHub]]. Para isso, tenha em mente todas as dicas e direcionamentos apresentados pelo expert nas aulas. Dessa forma, você poderá compartilhar suas anotações e exercícios em seu próprio repositório. Criando assim, o primeiro (de muitos) projetos do seu portfólio ;-)


# Referências:
[[Orange tech + | Hub]]

[Plataforma Dio](https://web.dio.me/track/81278323-8916-401b-8446-03118eaff280)