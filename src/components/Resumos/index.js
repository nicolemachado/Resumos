import React from 'react'
import './style.css'

function ResumosJS() {
  return (
    <div className="container">
      <h1 className="text">💛 JavaScript</h1>
      <p className="p1">
          <ul>
            Variáveis e Tipos de Dados <br /><br />
            <li>String</li>
            Letras<br /><br />
            <li>Number</li>
            Números<br /><br />
            <li>Boolen</li>
            Verdadeiro ou Falso<br /><br />
            <li>Null</li>
            Nulo <br /><br />
            <li>Undefined</li>
            Indefinido<br /><br />
            <li>Object {'{}'}</li>
            <li>Array {'[]'}</li>
          </ul>
      </p>
      <h2 className="text2" >➪ Operadores Atirméticos </h2>
      <p className="p2">
        Adição <br /> Subtração <br /> Multiplicação <br /> Divisão <br />
        <br />
        Abreviados: <br />
        var ++ = acrescenta +1 <br />
        var -- = diminui -1 <br />
        var += = adiciona um valor na var definida <br />
        var -= = diminui um valor na var definida <br />
        var *= = multiplica um valor na var definida <br />
        var /= = divide um valor na var definida
      </p>

      <h2 className="text2" >➪ Operadores de Igualdade/Relacionais </h2>
      <p  className="p2">
        == igual a <br />
        != diferente de <br />
        === igual a e do mesmo tipo <br />
        !== dferente de mas do mesmo tipo <br />
        {'>'} maior que <br />
        {'<'} menor que <br />
        {'>='} maior ou igual a<br />
        {'<='} menor ou igual a

      </p> 
      
      <h2 className="text2" >➪ Operadores Lógicos </h2>
      <p className="p2">
      || = ou/or  <br />
      && = e/and <br />
      ! = não/not
      </p> 

      <h2 className="text2" >➪ Funções </h2>
      <p className="p2">
      Funções são blocos de códigos que trazem instruções para o JS. <br />
      Pode ou não retornar algo. <br />
      Os parênteses {'()'} indicam que é uma função, eles recebem os argumenos {'(que devem ser separados por vírgula)'}. <br />
      As chaves {'{}'} é onde fica o corpo da função.<br />
      Ela precisa ser definida com um nome, e depois tem que ser chamada.
      </p> 

      <h2 className="text2" >➪ Operadores Unários </h2>
      <p className="p2">
      O operador unário tenta converter o número. Concatenar valores.<br />
      De string para number<br />
      o - converte para negativoconverte um operando em um número e nega o valor depois dele.<br />
      o + converte um operando em um número.<br />   
      </p> 

      <h2 className="text2" >➪ Estrutura Léxica </h2>
      <p className="p2">
        É a estrutura da sintaxe do JS, ou seja, como ele deve ser escrito.<br />
        Ele é case sensitive, uma letra maíscula é diferente de uma minúscula. <br />
        {'/**/'} = comentário em bloco.<br />
        {'//'} = comentário em linha.<br />
        Existem palavras reservadas do JS que não podem ser usadas como funções! {'(É bom pesquisar sobre isso, no site MDN Web Docs - Mozilla)'}.
      </p> 

      <h2 className="text2" >➪ Instruções Condicionais </h2>
      <p className="p2">
      Testar valor ou condição para relizar uma ação {'(conteúdo)'}, reescrever variáveis, etc.<br />
      Tomar decisões no JS.<br />
      if = se <br />
      else = caso contrário <br />
      else if = controlar 2 condições.  
      </p> 

      <h2 className="text2" >➪ Tipos Primitivos  Objetos </h2>
      <p className="p2">
      Objetos:<br />
      Primitivos: number, string, boolean, null, undefined.<br />
      Uma variável pode ser uma função.
      </p> 

      <h2 className="text2" >➪ Método de Objeto </h2>
      <p className="p2">
      O método é atribuido a um objeto.  
      </p> 

      <h2 className="text2" >➪ Truthy e Falsy </h2>
      <p className="p2">
      Um valor truthy é um valor que se traduz em verdadeiro quando avaliado em um contexto Booleano.<br /> Todos os valores são truthy a menos que eles sejam definidos como falsy<br />
      Falsy:<br />
      - Undefined<br />
      - Null<br />
      - NaN<br />
      - 0<br />
      = -0<br />
      - ' ' ou " "
      </p> 

      <h2 className="text2" >➪ Operador Condicional Ternário </h2>
      <p className="p2">
      É uma forma de fazer testes sem precisar de instruições condicionais. <br />
      Substituir um if/else, deixando o código mais curto.<br />
      Uma expressão é avaliada como true ou false.<br />
      Sintaxe: condition ? expr1 : expr2.<br />
      As expressões podem ser de qualquer tipo.
      </p> 

      <h2 className="text2" >➪ Escopo de Variáveis e Funções </h2>
      <p className="p2">
      Variável Local/Bloco:<br />
      Pode ser usada/invocada somente no local onde foi criada. Não funciona no console.log<br /><br />
      Variável Global:<br />
      Pode ser usada/invocada em qualquer lugar do código. Funciona no console.log<br /><br />
      Argumentos de funções:<br />
      São de escopos de bloco, só existem dentro da função.
      </p> 

      <h2 className="text2" >➪ Retorno de Funções com Arrays e Objetos </h2>
      <p className="p2">
      Objetos {'{}'}<br />
      Arrays {'[]'}<br />
      Retornos de funções podem ser de qualquer tipo de dado no JS.<br />
      Uma vez por função.  
      </p> 

      <h2 className="text2" >➪ Parâmetros de Funções como Arrays e Objetos </h2>
      <p className="p2">
      O objeto se "chama" com . após o nome {'(na invocação)'} ou na função.<br />
      Array se chama com {'[]'} na invocação ou na função.
      </p> 

      <h2 className="text2" >➪ Operador vírgula e Estrutura Condicional Switch </h2>
      <p className="p2">
      Variáveis seguidas de vírgula são globais, mesma coisa que escrever várias var só que em uma linha apenas.<br />
      O outro jeito é mais aconselhável, mesmo que esse seja bem comum em códigos.
      <br /><br />
      Switch = também consegue declarar condicionais. É tipo um loop com else if.<br />
      Testes condicionais com qualquer tipo de valor {'(str, nmbr, boolean, etc...)'}<br />
      case = compara <br />
      break = para a comparação<br />
      </p> 

      <h2 className="text2" >➪ Estrutura de Repetição While </h2>
      <p className="p2">
      Testa se um valor é verdadeiro e vai executar a função enquanto um valor for false.
      </p> 

      <h2 className="text2" >➪ Operadore Módulo </h2>
      <p className="p2">
      Ele dá o resto da divisão no JS<br />
      Por exemplo, se faz uma divisão, e o restinho é o operador módulo<br />
      Seus resultados são os mesmos apenas para um dividendo positivo, mas se tivermos um dividendo negativo a e um operador de <br /> módulo for aplicado sobre ele, os resultados serão completamente diferentes.
      </p> 

      <h2 className="text2" >➪ Array e Propriedade Length </h2>
      <p className="p2">
      Arrays são "listas de objetos" com métodos para realizar operações.<br />
      A propriedade length é o comprimento, a quantidade de itens/propriedades que há dentro do array.
      </p> 

      <h2 className="text2" >➪ Método push e Loop for </h2>
      <p className="p2">
      push {'()'} = empurra/acrescenta coisas no array<br />
      2 formas:<br />
      - sobrescrevendo o array<br />
      - push no array<br />
      for = tudo que o while faz, só que de uma vez só.
      </p> 

      <h2 className="text2" >➪ Funções Auto-Executáveis </h2>
      <p className="p2">
      São funções que o nome já diz, auto-executáveis. Ajudam muito em arquivos globais, para não poluir o código.  
      </p> 

      <h2 className="text2" >➪ Teste de Valores </h2>
      <p className="p2">
      typeOf =  vai testando o tipo de dado dentro do js<br />
      - testar o tipo de dado na variável<br />
      - só funciona com tipos primitivos. <br />
      {'(Mostra o tipo de dado.)'}
      </p> 

      <h2 className="text2" >➪ DOM </h2>
      <p className="p2">
      Document Object Model = TUDO que está no HTML.  
      </p> 

      <h2 className="text2" >➪ getElementById </h2>
      <p className="p2">
      Acessar uma div com a ID dela.<br />
      .innerHTML pega só o valor que tem na ID.  
      </p> 

      <h2 className="text2" >➪ getElementByClassName </h2>
      <p className="p2">
      Busca várias classes e transforma em uma coleção de HTML´s = arrays.<br />
      Para pegar apenas uma classe, tem que mostrar qual a posição em que ela está.<br />
      A contagem começa no 0 {'(zero)'}.
      Acessar seletores.
      </p> 

      <h2 className="text2" >➪ getElementByTagName </h2>
      <p className="p2">
      Acessar uma tag específica do HTML.  
      </p> 

      <h2 className="text2" >➪ querySelector </h2>
      <p className="p2">
      Simplificação do getElementbyID, getElementByClassName e getElementByTagName.<br />
      Não faz o array.<br />
      Acessa um elemento só, # id . class
      </p> 

      <h2 className="text2" >➪ querySelectorAll </h2>
      <p className="p2">
      Seleciona todos os elementos.<br />
      Array de leitura, apenas para acessar os elementos.
      </p> 

      <h2 className="text2" >➪ createElement </h2>
      <p className="p2">
      Item que é capaz de criar um elemento através da documentação.  
      </p> 

      <h2 className="text2" >➪ appendChild </h2>
      <p className="p2">
      Recurso em que inserimos um elemento dentro do outro.
      </p> 

      <h2 className="text2" >➪ removeChild </h2>
      <p className="p2">
      Remove um item do elemento.  
      </p> 

      <h2 className="text2" >➪ parentNode </h2>
      <p className="p2">
      Acessa o elemento pai de um determinado elemento acessado, sucessivamente.  
      </p> 

      <h2 className="text2" >➪ Variáveis Declaráveis </h2>
      <p className="p2">
      Armazena valores/dados. <br />
      São criadas antes do código executado {'(global)'}.<br />
      Variávaies "const" não mudam. <br />
      Não podem ser chamadas pelas palavras reservadas.

      </p> 

      <h2 className="text2" >➪ Objetos </h2>
      <p className="p2">
      Tem índice e valor, inicia com {'{}'}, separa por vírgula.  
      </p> 

      <h2 className="text2" >➪ Arrays/Vetores </h2>
      <p className="p2">
      Tem índices, começa com {'[]'}, sempre é contado a partir do 0.  
      </p> 

      <h2 className="text2" >➪ Loops </h2>
      <p className="p2">
      - For = adiciona coisas em mais de uma classe. Acessa um array, tanto HTML collection quanto array de verdade. Muda o HTML.<br />
      HTML collection != de array<br /> 
      HTML colletcion = array apenas com HTML<br />
      Array = pode ter qualquer valor<br />
      <br />
      - Foreach = recebe uma função. Acessa um elemento index diretamente. Só percorre prototype array.<br /> Também da pra muda. <br /><br />
      - Map = só percorre arrays, parecido com o foreach. Altera diretamente o element.<br />
      Clone de dados com o map.<br /><br />
      - While = percorre enquanto a condição for true, e não para se não houver um break{'(limite definido'} <br />
      var de escopo global pode ser acessada no while.

      </p> 

      <h2 className="text2" >➪ Eventos </h2>
      <p className="p2">
      Eventos no JS são "respostas" ao usuário, quando o mesmo faz algo no HTML, o JS o responde com alguma ação.<br />
      Um clique em botão, por exemplo.  <br /><br /> 
      </p> 
      
      <p className="p1">
      <ul>
        <li>Onload</li>
        <li>Click</li>
        <li>Hover</li>
        <li>Change</li>
        <li>Blur</li>
        <li>Keyup</li>
        <li>Keypress</li>
        <li>Submit</li>
        <br /><br />
      </ul>
      </p>

      <p className="p2">
        - Onload = evento para quando a página for carregada, função que pode executar qualquer coisa {'(pelo windown.onload)'}.<br />
        Após o HTML carregar.<br /><br />

        - Click = evento ao clicar em algo. <br />
        add.EventListener{'()'}, é uma função com 2 {'(dois)'} parâmetros, recebe um nome em string e uma ação.<br /><br />

        - Hover = quando o mouse passa por cima de algo, não há necessidade do click. <br />
        É como se fosse o "depois" de algo.<br /><br />
        classList.add = adiciona classe no evento <br />
        * o atributo {'< this >'} dá refer~encia ao elemento do escopo atual {'(função)'}.
        <br />
        mouseover = mouse passa em cima.<br />
        mouseleave = mouse sai de cima.<br /><br />

        - Change = alteração no elemento<br />
        feito pelo add.EventListener<br /><br />

        - Blur = toda vez que sair do elemento.<br />
        innerText = insere apenas texto no elemento.<br />
        innerHTML = insere qualquer coisa.<br /><br />

        - Keyup = evento na PRIMEIRA tecla no elemento.<br /><br />

        - Keypress = evento ao pressionar a primeira tecla.<br /><br />

        -Submit = "enviar". Toda vez que algo for enviado.<br /><br />
        Para prevenir o refresh da página = .preventDefault<br />
        Para verificar um campo vazio = .addEventListener
      </p>

      <h1 className="text2" >➪ jQuery </h1>
      <p className="p2">
      Biblioteca JS, para simplificar o JS nativo. <br />
      Segue a ideia da vanilha.<br />
      É bom para usar em sites com muitos efeitos/transições  
      </p> 

      <h2 className="text2" >➪ Seletores </h2>
      <p className="p2">
      {'$'} = para selecionar id, class, etc.
      </p> 

      <h2 className="text2" >➪ Eventos </h2>
      <p className="p2">
      São ações realizadas pelo jQuery, igual ao JS normal.<br /><br />
      Com a função "on", recebe dois parãmetros, nome e ação/função.
      </p> 

      <h2 className="text2" >➪ Delay </h2>
      <p className="p2">
      Simplificador para sign time out no jQuery.<br />
      Intervalo maior para emitir uma ação/resposta.  
      </p> 

      <h2 className="text2" >➪ add class e remove class </h2>
      <p className="p2">
      addClass = adiciona uma ação/função como resposta de ação do usuário.<br />
      removeClass =  remove uma ação/função como resposta de ação do usuário.
      </p> 

      <h2 className="text2" >➪ Serialize e Serialize Array </h2>
      <p className="p2">
      Serializar os dados = informar quais são as informações que irão para o servidor.<br />
      <br />
      Serialize array = converte em objeto.  
      </p> 


    </div>
  );
}

export default ResumosJS;