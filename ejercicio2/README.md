#Exercise


Build a simple url shortening. It must have: a function to shorten a url 
(saving the result in memory) and a function to obtain the initial url given 
the shortened string. Examples:

A. Short a url
const shortStringUrl = ShortStringUrl("https://github.com/apiaryio/");
console.log(shortStringUrl);
--ABCDE

B. Get initial url
const initialUrl = InitialUrl("ABCDE");
console.log(initialUrl);
--https://github.com/apiaryio/

C. Get initial url but shortStringUrl is invalid:
const initialUrl = InitialUrl("ABCDX”);

Consideraciones: 

Me tomé la libertad de crear un UI para hacer  las pruebas y no mostrar los resultados solo por consola 