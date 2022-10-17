var carta1 = {
    nome: "Darkrai",
    imagem:
      "https://i0.wp.com/overplay.com.br/wp-content/uploads/2021/10/capaartigo-7.jpg?fit=1920%2C1080&ssl=1",
    atributos: {
      Ataque: 20,
      Defesa: 10,
      Poder: 13
    }
  };
  
  var carta2 = {
    nome: "Yveltal",
    imagem:
      "https://i.pinimg.com/originals/f1/b2/57/f1b257accc91fee0f250a0c7c206e9c9.png",
    atributos: {
      Ataque: 15,
      Defesa: 20,
      Poder: 12
    }
  };
  
  var carta3 = {
    nome: "Mewtwo",
    imagem:
      "https://ae01.alicdn.com/kf/HTB1wZx9BOOYBuNjSsD4q6zSkFXaa/Diamante-quadrado-completo-5d-diy-pintura-diamante-mewtwo-pokemon-bordado-ponto-cruz-strass-pintura-em-mosaico.jpg_Q90.jpg_.webp",
    atributos: {
      Ataque: 15,
      Defesa: 12,
      Poder: 20
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    //sorteio da carta da maquina
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    //sorteio da carta do jogador
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      var numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    //habilitar o botão "Jogar"
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu!</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu!</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empate!</p>";
    }
    console.log(divResultado);
    divResultado.innerHTML = htmlResultado;
  
    exibirCartaMaquina();
  }
  