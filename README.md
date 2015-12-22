# formatar
Função em Javascript para formatação de qualquer dado num formulário html

Já vi muitas funções que tem esse propósito, mas nenhuma delas realmente me deixaram satisfeito.
Hoje eu criei a minha função com este propósito e ficou do jeito que eu queria e por isto resolvi compartilhar.

A forma de uso é simples:

1) Coloque entre as tags <HEAD></HEAD> a linha abaixo;
<script src="formatar.js"></script>

2) No campo que você deseja formatar faça, por exemplo, assim:
<input type="text" name="datanasc" onkeyup="formatar(this,'D');">

A função recebe 2 parametros e opcionalmente 3:
1) O objeto ou a *string a formatar;
2) Um identificador de uma máscaras de formatação existentes na função;
3) A máscara que você quer usar, se nenhuma das máscaras existentes na função te atende.

* Se for enviado um objeto no primeiro parâmetro a função atribuirá ao objeto a string formatada e não retorna nada, mas se for enviado uma String a função retornará uma string formatada.

As mascaras existentes dentro da função são:
"H" = Hora = "##:##:##"
"C" = CEP = "#####-###"
"D" = Data = "##/##/##"
"DT" = Data e Hora = "##/##/#### ##:##:##"
"N" = Numero decimal = "###.###.###.###,##"
"t" = Telefone fixo = "(##)####.####"
"T" = Telefone celular 9 Dígitos = "(##)#.####.####";
"J" = CNPJ = "##.###.###/####-##"
"F" = CPF = "###.###.###-##"

Acho que é só.

Espero que ajude a alguém.

João Carlos Rosseto
https://tsu.co/jcrosseto
