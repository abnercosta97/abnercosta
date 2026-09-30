---
title: "Do login à evidência: segregação de acesso, controle e auditoria com LDAP"
slug: "do-login-a-evidencia-segregacao-acesso-ldap"
summary: "Como estruturar identidades, grupos, papéis, segregação de funções e trilhas de auditoria em ambientes que utilizam LDAP."
publishedAt: "2026-09-30"
tags: [seguranca, iam, rbac, ldap, auditoria]
draft: false
---

Um login bem-sucedido responde apenas a uma pergunta: quem está tentando entrar? Para proteger um sistema de verdade, ainda é necessário decidir o que essa identidade pode fazer, por quanto tempo, com qual aprovação e como a ação será verificada depois.

Este artigo apresenta um modelo generalista para organizar identidade, autorização e auditoria em aplicações que usam um diretório LDAP. Os exemplos são didáticos e não representam uma infraestrutura específica.

## O problema: autenticar não é autorizar

Autenticação e autorização são controles diferentes:

- **Autenticação** verifica a identidade apresentada.
- **Autorização** decide quais ações e recursos estão disponíveis.
- **Provisionamento** concede, altera ou remove acessos.
- **Governança** registra a finalidade, a aprovação e o prazo do acesso.
- **Auditoria** preserva evidências do que foi tentado e executado.

Confundir essas etapas costuma produzir sistemas em que qualquer pessoa autenticada recebe permissões excessivas. O diretório pode confirmar a identidade e informar seus grupos, mas a aplicação ainda precisa aplicar suas próprias regras.

## Um modelo em camadas

Uma forma prática de organizar o controle é separar cinco camadas:

1. **Identidade:** pessoa, serviço ou automação que executa uma ação.
2. **Autenticação:** mecanismo usado para provar a identidade.
3. **Autorização:** decisão sobre a ação, o recurso e o contexto.
4. **Governança:** motivo, responsável, aprovação, validade e revisão.
5. **Auditoria:** registro confiável da decisão e do resultado.

Essa separação facilita a investigação. Um usuário pode ter uma autenticação válida e ainda assim receber uma resposta de acesso negado porque não possui o papel necessário.

## Da identidade à permissão

Em um modelo baseado em grupos e papéis, o fluxo pode ser representado assim:

```text
identidade → grupo → papel → permissão → recurso
```

O ideal é conceder acesso a grupos e papéis com finalidade clara, em vez de cadastrar permissões diretamente para cada pessoa. Isso reduz a quantidade de exceções e torna a revisão periódica viável.

Um grupo deve ter pelo menos um responsável, uma finalidade documentada e uma regra para expiração ou recertificação. Grupos genéricos como “acesso total” dificultam a análise e tendem a acumular privilégios que ninguém mais consegue explicar.

## Níveis de acesso e segregação de funções

Uma matriz simples ajuda a tornar conflitos visíveis:

| Papel | Pode | Não pode |
| --- | --- | --- |
| Leitor | Consultar recursos autorizados | Alterar configurações |
| Operador | Executar tarefas operacionais delimitadas | Aprovar o próprio acesso |
| Aprovador | Aprovar solicitações justificadas | Provisionar o acesso aprovado |
| Auditor | Consultar evidências | Operar o controle auditado |
| Administrador | Gerenciar políticas | Excluir a própria trilha de auditoria |

A segregação de funções, ou SoD, evita que uma única identidade controle todas as etapas de uma operação sensível. Solicitar, aprovar, provisionar, executar e auditar são responsabilidades diferentes.

Há duas formas comuns de aplicar esse princípio:

- **SoD estática:** papéis conflitantes não podem ser atribuídos à mesma identidade.
- **SoD dinâmica:** a identidade pode possuir os papéis, mas não pode exercê-los na mesma transação ou janela de tempo.

Em equipes pequenas, controles compensatórios podem reduzir o risco: dupla aprovação, acesso temporário, revisão independente posterior e alertas reforçados para ações privilegiadas.

## Menor privilégio

Menor privilégio não significa apenas ter poucas permissões. O acesso deve ser:

- necessário para uma tarefa específica;
- limitado aos recursos necessários;
- limitado às ações necessárias;
- temporário quando o risco justificar;
- associado a uma identidade individual;
- testável e revogável;
- revisado em intervalos definidos.

A autorização deve negar por padrão. Também deve ser testada negativamente: não basta verificar que o operador consegue executar sua tarefa; é preciso comprovar que ele não consegue aprovar a própria solicitação ou alterar uma evidência de auditoria.

## Onde o LDAP participa

LDAP pode centralizar identidades, grupos e atributos para diferentes consumidores. Ele é útil para:

- autenticação centralizada;
- consulta de grupos;
- organização de identidades;
- aplicação de políticas de ciclo de vida;
- revogação central de novos acessos.

LDAP não substitui a autorização da aplicação. Cada serviço consumidor ainda precisa mapear grupos para papéis locais, controlar sessões, registrar suas decisões e tratar situações como expiração, contas de emergência e indisponibilidade do diretório.

### Grupos fictícios

Um desenho neutro poderia usar grupos como estes:

```text
cn=app-leitores,ou=grupos,dc=example,dc=org
cn=app-operadores,ou=grupos,dc=example,dc=org
cn=app-aprovadores,ou=grupos,dc=example,dc=org
cn=app-auditores,ou=grupos,dc=example,dc=org
cn=app-administradores,ou=grupos,dc=example,dc=org
```

E um mapeamento explícito para papéis da aplicação:

```text
app-leitores        → READER
app-operadores      → OPERATOR
app-aprovadores     → APPROVER
app-auditores       → AUDITOR
app-administradores → ADMIN
```

A conexão com o diretório deve usar TLS com validação de certificado. A conta técnica de consulta deve ser exclusiva, somente leitura, limitada aos atributos necessários e protegida por um mecanismo apropriado de gestão de segredos.

## Autorização deve acontecer no servidor

Ocultar um botão na interface não protege uma operação. A regra precisa ser aplicada no servidor, próximo ao recurso que será alterado.

Um exemplo didático de matriz de permissões:

```ts
type Role = "READER" | "OPERATOR" | "APPROVER" | "AUDITOR" | "ADMIN";

const permissions: Record<Role, readonly string[]> = {
  READER: ["record:read-own"],
  OPERATOR: ["record:read", "record:update"],
  APPROVER: ["access-request:approve"],
  AUDITOR: ["audit-log:read"],
  ADMIN: ["policy:manage"],
};
```

Esse código é apenas ilustrativo. Em uma aplicação real, a decisão também deve considerar o recurso, o proprietário do dado, o estado da solicitação, o contexto da sessão e eventuais conflitos de função.

Se o diretório ficar indisponível, o sistema não deve transformar a falha em permissão ampla. O comportamento seguro é negar a operação ou limitar o acesso a um modo previamente definido e auditado.

## Ciclo de vida do acesso

O ciclo Joiner–Mover–Leaver ajuda a evitar permissões esquecidas:

- **Joiner:** criar a identidade e conceder apenas o acesso inicial necessário.
- **Mover:** remover direitos antigos antes de adicionar os novos quando a função mudar.
- **Leaver:** revogar grupos, sessões, tokens, chaves e certificados no desligamento.
- **Recertificação:** revisar periodicamente se cada acesso ainda tem finalidade.
- **Exceções:** registrar justificativa, responsável e data de expiração.

Remover uma entrada do diretório não garante, sozinho, que sessões já emitidas foram encerradas. A aplicação deve definir como tokens, sessões e credenciais derivadas serão invalidados.

## Acesso privilegiado

Acesso administrativo deve ser nominal, justificado e temporário sempre que possível. Boas práticas incluem:

- conta administrativa separada da conta cotidiana;
- aprovação proporcional ao risco;
- elevação temporária;
- expiração automática;
- alerta quando o privilégio é usado;
- revisão posterior das ações executadas.

Uma conta de emergência deve ter tratamento próprio: armazenamento protegido, uso alertado, acesso limitado e revisão obrigatória depois da utilização. Ela não deve se tornar um atalho permanente para contornar o processo normal.

## Auditoria de usuários

Uma trilha de auditoria útil registra mais do que “login realizado”. Eventos importantes incluem:

- autenticação aceita ou rejeitada;
- concessão, alteração e revogação de acesso;
- inclusão ou remoção de grupos;
- aprovação ou rejeição de solicitações;
- uso de privilégio administrativo;
- alteração de políticas;
- leitura ou exportação de dados sensíveis;
- uso de acesso emergencial.

Cada evento deve permitir responder quem fez o quê, quando, sobre qual recurso e com qual resultado. Sempre que possível, inclua identidade, tipo de identidade, origem, sessão, aprovação relacionada e um identificador de correlação.

Logs não devem conter senhas, tokens, cookies, chaves ou dados pessoais desnecessários. O administrador que é auditado não deve controlar sozinho a alteração ou exclusão das próprias evidências.

## Como validar o controle

Uma implementação confiável combina configuração, aprovação, execução e evidência. Testes mínimos incluem:

1. Usuário sem grupo não recebe acesso.
2. Operador não consegue aprovar a própria solicitação.
3. Auditor possui leitura, mas não altera eventos.
4. Remoção de um grupo impede novas autorizações.
5. A falha do LDAP não concede permissões por padrão.
6. Toda ação privilegiada gera um evento correlacionável.
7. Permissões negadas também aparecem na trilha quando o risco exigir.

Um teste pontual não prova que o controle continuará funcionando. A revisão periódica deve comparar a matriz aprovada, a configuração efetiva, os eventos registrados e os resultados dos testes negativos.

## Checklist

- Cada pessoa e automação possui uma identidade própria?
- Grupos têm finalidade, responsável e prazo de revisão?
- Existem permissões concedidas diretamente a indivíduos?
- Acesso privilegiado expira automaticamente?
- Mudança de função remove direitos antigos?
- Há testes de ações permitidas e negadas?
- O uso de emergência gera alerta e revisão?
- O operador consegue alterar a própria evidência?
- A revogação cobre sessões e credenciais derivadas?
- As permissões reais correspondem à matriz aprovada?

## Conclusão

LDAP pode ser uma peça importante para centralizar identidades e grupos, mas não é o controle inteiro. O resultado depende da combinação entre autenticação, autorização no servidor, menor privilégio, segregação de funções, ciclo de vida e auditoria independente.

O objetivo não é apenas impedir o acesso indevido. É conseguir explicar, depois de uma decisão, por que aquela identidade tinha aquela permissão, quem aprovou, quando ela deveria expirar e qual evidência foi preservada.

## Referências

- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- [NIST Access Control](https://csrc.nist.gov/projects/access-control)
- [RFC 4511: Lightweight Directory Access Protocol](https://www.rfc-editor.org/rfc/rfc4511)
