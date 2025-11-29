# Testes

## Unitários

Unidade da aplicação

## Integração

Comunicação entre duas ou mais unidades

## e2e

Ponta a ponta: simula um usuário operando na aplicação

### front-end

Abre a página de login, digite o texto erik.souza@gmail.com no campo com ID email, e clique no botão de salvar

### back-end

Requisições HTTP, WebSockets

## Pirâmide de testes

Fazer primeiro os testes E2E, pois não dependem de nenhuma tecnologia, não dependem de nenhuma arquitetura.
Não se usa sempre E2E para tudo porque são lentos, geralmente, os outros dois tipos são mais performáticos.

#### Observações

- Todo teste deve se excluir de qualquer contexto, ou seja, não se deve escrever um teste que depende de outro teste
