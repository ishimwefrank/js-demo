$(function() {

  var terms = ['JavaScript', 'Operators', 'Variables', 'Functions'];
  var definitions = ['An object-oriented computer programming language commonly used to create interactive effects within web browsers.',
  'An operator, in computer programing, is a symbol that usually represents an action or process. These symbols were adapted from mathematics and logic. An operator is capable of manipulating a certain value or operand.',
  'In programming, a variable is a value that can change, depending on conditions or on information passed to the program. Typically, a program consists of instruction s that tell the computer what to do and data that the program uses when it is running.',
  'In programming, a named section of a program that performs a specific task. In this sense, a function is a type of procedure or routine. Some programming languages make a distinction between a function, which returns a value, and a procedure, which performs some operation but does not return a value.'];

  var index = 0;  // index of the current card

  // Initialize first card
  $('#term').text(terms[0]);
  $('#def').text(definitions[0]);


  // Left arrow click
  $('#left').click(function() {

    if(index===0) {
      index = terms.length - 1;
    }
    else {
      index -= 1;
    }

    $('#term').text(terms[index]);
    $('#def').hide();
    $('#def').text(definitions[index]);
  });

  //Right arrow Click
  $('#right').click(function() {

    if(index===(terms.length - 1)) {
      index = 0;
    }
    else {
      index += 1;
    }

    $('#term').text(terms[index]);
    $('#def').hide();
    $('#def').text(definitions[index]);
  });

    $('#card').click(function() {
       $('#def').slideToggle();
    });

});
