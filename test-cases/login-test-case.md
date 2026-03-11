# Login Test Case

## TC-01 Login con credenciales correctas

Steps:
1. Abrir la pagina de login : https://the-internet.herokuapp.com/login
2. Escribir el nombre del usuario : tomsmith
3. Escribir la password correcta : SuperSecretPassword!
4. Presionar login

Expected Result:
El usuario entra la pagina segura.

## TC-02 Usuario con caracteres especiales en usuario

Steps:
1. Abrir la pagina de login : https://the-internet.herokuapp.com/login
2. Escribir el nombre del usuario : @@@user@@
3. Escribir la password correcta : SuperSecretPassword!
4. Presionar login

Expected Result:
El usuario es invalido.


## TC-03 Usuario correcto pero con password vacia

Steps:
1. Abrir la pagina de login : https://the-internet.herokuapp.com/login
2. Escribir el nombre del usuario : tomsmith
3. Dejar la password vacia
4. Presionar login

Expected Result:
La password es invalida

## TC-04 Usuario correcto pero con password con caracteres especiales

Steps:
1. Abrir la pagina de login : https://the-internet.herokuapp.com/login
2. Escribir el nombre del usuario : tomsmith
3. Escribir la password con caracteres especiales : [SuperSecretPassword!]
4. Presionar login

Expected Result:
La Password es incorrecta

## TC-05 Presionar en repetidas ocasiones el boton login con los campos de usuario y password vacios

Steps:
1. ingresar la pagina de login : https://the-internet.herokuapp.com/login
2. Dejar el usuario y password vacios
3. Presionar en repetidas ocasiones en boton login

Expected Result:
La pagina no cambio en nada solo da el mensaje de usuario no valido

## TC-06 Cambiar el campo de login a ¨Secure¨

Steps:
1. ingresar a la pagina de login : https://the-internet.herokuapp.com/login
2. Cambiar en la url login a secure
3. Dar enter para cargar la pagina

Expected Result:
La pagina da error y pide iniciar sesion primero para poder ingresar a la area segura
