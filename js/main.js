//Esercizio fizz buzz
//Ho un programma che prende in considerazione i numeri da 1 a 100
//Al posto dei multipli di 3 il programma deve stampare fizz
//Al posto dei multipli di 5 il programma deve stampare buzz
//Al posto dei multipli di 5 e 3 il programma deve stampare fizzbuzz
//abbiamo visto in aula come fare a stampare i numeri da 1 a 100 usando il ciclo for
//faccio la stessa cosa ma quando il numero sarà divisibile per 3,5 o entrambi stamperò una cosa diversa usando if, if else else.

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0)  {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
