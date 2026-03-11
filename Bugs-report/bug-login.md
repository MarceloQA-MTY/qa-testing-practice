# Bug Report

Bug ID : BUG-001

Titulo: Login con entradas de script ingection

Steps:

1. Entrar a la pagina : https://the-internet.herokuapp.com/login
2. En el nombre del usuario escribir : <script>alert(1)</script>
3. Escribir la password
4. Dar click en el boton de login

Resultado esperado:
El sistema debe desinfectar o rechazar la entrada del script

Resultado actual:
El sistema procesa la entrada como texto sin formato y muestra un error de inicio de sesion.

Severity:
baja