¿Qué vas a APRENDER en este vídeo?
Y empezamos directamente con el código aquí referente a los inputs a los Select por ejemplo Cómo podemos leer lo que el
usuario escribe dentro de un input Qué propiedades o métodos podemos utilizar para enriquecer todo el proceso bueno
como aprovecharnos de todo ello para nuestros propios proyectos y por ello
tenemos un ejemplo muy básico en el body no tenemos nada únicamente la vinculación con javascript en el css
pues un poquito de css para que bueno tenga todo un poquito mejor de aspecto hay que decir una cosa importante el fss
pero también entraremos un poquito en ello Es que si yo por ejemplo en vez de poner todo esto le pongo un asterisco
estas propiedades no harán efecto a los inputs porque como los inputs tienen propiedades diferentes no se les aplica
por lo tanto para que se les aplique también a los inputs Bueno he colocado aquí todos los electores y luego en
nuestro javascript no tenemos absolutamente nada Entonces como vamos a
hablar de los inputs Bueno vamos a crear nuestro primer input que como bien sabéis un input nos permite permite al
usuario escribir cualquier tipo de información igual que ocurre con el resto de etiquetas podemos dar algún
tipo de nombre podemos darle un Class pero le vamos a dar un ID porque como
vamos a poner una etiqueta la etiqueta se relaciona con el input a través del ID por lo tanto Bueno pues le ponemos un
ID aquí opcionalmente le ponemos la etiqueta y para ligar una cosa con la
otra ponemos el mismo nombre campo con campo con lo cual lo cual cosa Va relacionada con la otra aquí vas a poner
por ejemplo nota la nota de cualquier examen o lo que sea y aquí el bien y
esto lo vemos de esta manera este es la etiqueta y este es el input y va ligado Porque si hago clic en la etiqueta el
cursor se mete dentro Pues bien aquí no me interesa es que yo ponga una nota 6,5 y al hacer clic en un botón que todavía
no tengo javascript lea este valor y lo almacene en una variable y luego con ese
valor haga diferentes cosas por lo tanto necesitamos un botón un botón que bueno
podemos poner aceptar o cualquiera Y aunque no es necesario del todo Vamos a
ponerle un nombre por ejemplo siendo originales al máximo botón perfecto
maravilloso genial muy bien Ahora dentro del Index tenemos que Acceder al input
para leer su valor pero un error muy habitual es que cuando nosotros aquí
colocamos el código yo no puedo colocar aquí la lectura del input porque si lo
colocó aquí la lectura del input es imposible automáticamente y de manera atómicamente
imposible que el usuario le de tiempo a escribir algo cuando javascript llega
esta línea Es decir que se presenta en pantalla lo que sería la página bien antes de que ningún ser humano haya
podido ni tan solo pestañear javascript ya ha llegado a la línea donde lee el contenido del input y ya tiene dicho
contenido guardado dentro de la variable es decir javascript ya leído lo que hay
dentro del input que es nada ya lo ha leído porque lo ha leído nada más empezar la aplicación y a mí como ser
humano me tiene que dar tiempo venía aquí y escribir algo cuando lo tiene que leer lo tiene que leer cuando yo haga
clic en el botón clic en el botón y javascript lo lee por lo tanto la
lectura No la vamos a poner aquí sino que lo que tenemos que poner aquí lo que tiene que hacer Sí o sí es estar
pendiente del botón de mi botón llamado en este caso botón por lo tanto aquí lo
primero que voy a hacer me voy a ampliarlo Así es decirle al botón Oye
botón sabes qué tiene que estar pendiente y cuando
detectes que sobre ti hay un clic esto ya lo expliqué en el tema de los eventos
tienes que ir a una función que se va a llamar leer o lectura o como queramos que se llame bien que es donde va a leer
el esta función la vamos a poner Aquí bien
y cuando lea javascript tiene que Acceder al input Ahora sí llamado campo
y obtener su valor A ver es muy muy muy
muy muy muy muy muy muy muy muy importante tener en cuenta que para Acceder al interior de un dip utilizamos
y en el html pero cuando nosotros queremos Acceder al valor de un input
elector se llama campo y como es un ID le ponemos Lambo hacia adelante no
podemos acceder a Su contenido utilizando en el html como lo hallamos con un dip por ejemplo sino que cuando
queremos Acceder al valor de un input utilizamos value value nos sirve para
leer y nos sirve para escribir Si queremos leer por ejemplo podemos dos
veces si queremos leer del input y almacenarlo dentro de una variable aquí le pondremos la variable Y si queremos
escribir en un input aquí le pondremos el valor que queremos escribir la variable en
este caso lo que queremos es leer por lo tanto nos interesa esta parte Aquí bien accedemos al input que se llama campo y
obtenemos su valor es decir lo que he escrito en su interior y lo almacenamos dentro de una variable Pero si yo lo
pongo de esta manera esta variable variable es totalmente local es decir únicamente tiene validez dentro de esta
función y cuando desde otra función queramos acceder a variable no vamos a poder porque estará únicamente dentro de
leer por lo tanto solución en la parte superior creamos led variable bueno
variable mejor poner otro vamos a poner nota o lo que sea y esto se lo asignamos sin
ningún tipo de valor por qué Porque no sé qué valor va a tener su gran nota es decir no soy adivino no sé qué nota va a
escribir el usuario como no lo sé al principio creo la variable global sin ningún tipo de valor y aquí le doy el
valor perfecto maravilloso genial muy bien otra cosa muy muy muy muy muy muy importante que bueno que crea problemas
imaginemos por ejemplo que yo tengo aquí un dip vamos a poner un bip
con el nombre de caja por ejemplo vacío donde escribiré lo que lea del inpu se
llama caja perfecto me vengo aquí bien si yo quiero escribir pues iría a este
elemento que se llama caja y para escribir dentro de un dip no utilizo
valium evidentemente sino que utilizo Inner html y luego aquí le pongo nota
hasta aquí ningún tipo de problema Es decir cuando yo pongo aquí un 7 y haga clic lo pone abajo perfecto Esto bueno
no hay ningún problema pero supongamos que yo quiero sumarle uno más quiero
sumarle uno más por cualquier tipo de razón por lo tanto que si yo le pongo aquí más uno lo hago de esta manera y
aquí lo pruebo le digo 7 hago clic y me lo concatena 7 + 1 71 Y por qué Porque
todo lo que se lee de un input es un String y alguien me dirá Bueno pero es
un aquí lo pone nada al no poner aquí ningún tipo de dato de valor pues es este pues tampoco Porque si yo pongo
aquí que el tipo de datos es de tipo number que sería solo se pueden Escribir
números es decir aquí no se pueden escribir letras como estoy haciendo ahora sino que se pueden Escribir
números y hago clic Aquí también ocurre siempre siempre siempre es numérico
siempre no ocurre lo mismo cuando lo que hago es hacer cualquier tipo de operación diferente a la suma si pongo
por ejemplo aquí por tres y aquí pongo un número sencillito tampoco tres por tres lo hace correctamente decir con la
resta la división o la multiplicación no hay ningún tipo de problema con las comparaciones mayor menor tampoco ningún
tipo de problema únicamente hay problema con la suma cuando utilizamos el más pero si yo hago un incremento del más
más del operador más más y tampoco habría ningún tipo de problema aquí funcionará bien pero es interesante que
funcione en cualquier caso entonces solución la solución es cuando nosotros leemos un input podemos convertir esto a
Convertir el valor del input en un un valor NUMÉRICO
numérico hay personas que lo convierten con otro tipo de métodos pero yo creo
que es mucho más útil utilizar el number con la n mayúscula porque lo que hace es
convertirla numérico y le da igual que sea valor entero un valor decimal lo convierte a número vale Pero hay otras
maneras de convertirlo de esta manera sería numérico y con un +1 como teníamos
antes no habría ningún tipo de problema y funcionaría bien perfecto bien Vamos a reconvertirlo supongamos que en vez de
preguntar la nota vamos a preguntar por ejemplo el nombre del usuario que sería
un dato de tipo en este caso String vamos a poner aquí nombre vamos a poner
aquí nombre por lo tanto el number ya no lo contrario del number para convertir de numérico a String que no es el caso
sería String Con la s mayúsculas bien aquí estamos obteniendo precisamente el nombre aquí le ponemos
nombre vamos a poner nada más bien y lo interesante sería que escribiese en la
caja el valor del input pero únicamente cuando el usuario hubiera escrito algo porque puede ser muy habitual que yo
haga clic en el botón y aquí no haya nada escrito por lo tanto me interesaría que esta parte de aquí únicamente la
hiciese cuando hubiese algo escrito en este caso lo que voy a hacer es poner un condicional para que cuando este valor
de aquí no sea nada que sea algo poder escribir Entonces el concepto de Algo
vamos a entrar un poquito el concepto de algo no existe en javascript no existe algo pero sí que existe su contrario que
es nada Cuando hablamos de String el nada es comillas comillas Entonces yo
puedo saber si algo hay escrito de dos maneras o bien contando el número de
caracteres que hubiera dentro del nombre o utilizando la propiedad Pero esto únicamente me valdría cuando el
contenido es texto Si no es texto no vale Y la otra es saber si no es nada si
no es nada quiere decir que es algo ya que algo como he dicho antes no existe por lo tanto utilizando un ternario de
momento los ternarios para esto no va muy bien le diría mira y la propiedad le diría Cuando nombre no es nada esto
sería una opción también lo podría poner así pero evidentemente esto se puede
abreviar mucho que es lo que haremos ahora pero cuando empezamos a programar es interesante importante primero
entender expresiones como esta que no le falta nada y luego Ver que esto Sería
posible reducirlo a esto y funcionaría correctamente por qué porque hemos dicho
también que cuando ponemos cualquier tipo de comparación y no ponemos nada lo normal es que lo compare con Igual igual
que tú habitual si lo ponemos nada es como si pusiéramos Aquí esta comparación
bien cuando nosotros ponemos esto o bien lo quitamos como este valor nombre no es
Conversión de un valor a BOOLEANO
booleano para saber si es true o es false tiene que javascript tiene que realizar una conversión implícita una
conversión de manera directa de un valor que no es voleando en booleano para saber si esto es true o bien Sports cómo
lo realiza Pues bien vamos a poner aquí por escrito a ver cuándo el valor Es
falso el valor es false bien cuando el propio valor es eso Es evidente también
es false cuando el valor inicialmente es un defined al convertir la boleano es
false cuando es null cuando es cero cuando es menos cero también también es
la conversión da un valor false cuando es nam y también cuando es comillas comillas cuando es cualquier tipo de
estos valores al convertirlo a booleano da false y si no es ninguno de estos
pues decir que es true por lo tanto Qué pasa aquí que si yo dejo esto vacío
nombre es igual igual a comillas comillas es decir es igual a este valor
como es igual a este valor en realidad esto sería falso si yo dentro de nombre
escribo cualquier cosa como cualquier cosa no es nada de esto Entonces el
valor de nombre al convertirlo a booleano sería true por lo tanto dicho
esto bueno Esto lo quito porque no me da error dicho esto yo le puedo dar aquí
nombre quiere decir que cuando nombre sea igual igual a true es decir no sea
nada de lo que escrito aquí quiere decir que escrito algo pues bien cuando esto se cumple lo que quiero que haga es esto
de aquí este operador te dan lógico me permite hay que arreglarlo Pero bueno Me
permite evitar tener que utilizar un operador porque el ternario sabéis que hay dos
opciones el true y el false a veces no me interesa uno de ellos Bueno pues puedo utilizar esto de aquí para que
cuando se cumpla esta condición tiene que realizar esto de aquí bien Por qué me da este pequeño problemilla Aquí pues
bien es un tema de la precedencia de los operadores que también expliqué que
indica que cuando en una misma línea sin utilizar paréntesis encuentra dos operadores es decir encuentra el han
encuentra el igual javascript tiene prueba de saber ostras cuál de los dos ejecutó primero Pues bien hay un orden
de precedencia que indica Cuál tiene que hacer primero y resulta que el operador lógico tiene mayor precedencia que el
igual Qué quiere decir que primero realiza esta expresión que lo que hace es una comparación da true o da Falls es
igual y luego viene el problema de que le tiene que asignar el valor de nombre se lo tiene que asignar a algo que no es
una variable por lo tanto aquí vendría el problema Entonces para que primero haga esto de aquí y después haga la
comparación lo que tenemos es que utilizar el operador que tiene mayor precedencia que son los paréntesis de
esta manera ya no da ningún tipo de error aquí tenemos la ley de preferencia el mayor de todos son los paréntesis
luego más para abajo más para abajo más aquí en el quinto lugar va el operador
lógico and y más para abajo casi en penúltimo lugar vendría el de la
asignación que Lo tendríamos aquí vale por lo tanto Bueno Este es el error si yo lo utilizo de esta manera ya lo
tendría correcto lo que pasa que Para probarlo vamos a modificarlo un poquito Porque si yo dejo el input vacío no voy
a poder comprobarlo porque lo que haría sería en este caso crear una caja y dentro de la caja poner nada y el
navegador cuando le decimos que escriba una caja vacía pues ni las ni la escribe por lo tanto no veríamos ningún tipo de resultado que qué vamos a hacer vamos a
poner aquí un saludo vamos a decirle Por ejemplo que aquí ponga Hola y el nombre
iría entre nuestras maravillosas llaves y de esta manera y escribirá algo seguro
si yo lo pruebo y lo dejo vacío no pone nada Y si yo pongo aquí Cualquier tipo de valor cuidado que no puedo escribir
nada que no sea números porque no lo he cambiado antes pondría Hola 567 Bueno
para escribir si lo quisiera hacer correctamente que sería la idea aquí o bien pondría text o bien Lo dejaría
vacío Y entonces aquí ya si le pongo Hub me dice hola Hub y vuelvo a reiniciar y
lo dejo vacío pues no hace absolutamente nada otra de las características que
tiene que ver con el vídeo anterior sería que yo a la hora de escribir aquí un nombre en vez de tener que hacer clic
Detectar la tecla ENTER
en el botón me gustaría poder pulsar el enter como estoy haciendo ahora y que automáticamente también funcionase y eso
con el código que tengo ahora lo que tendría que hacer es utilizar un evento
de teclado vamos a ello bien yo tengo aquí dentro del htm tengo un input este
input será el que va a recoger todas las pulsaciones del teclado con lo cual al input le voy a dar el evento el otro
evento de clics al botón pero en este caso se lo voy a dar al input que se llama campo por lo tanto la parte
superior le digo que vaya al documento me busque un elemento llamado campo y
aquí voy a Añadir el listener también se puede hacer con
un onkee down pero este caso voy a hacer con event Easter Aquí le voy a poner
keydow porque el key down permite recoger cualquier código de teclado porque tipo de tecla y además bueno
Funciona muy bien bien y luego Aquí tendrá que ir a una función que no existe voy a llamarla por ejemplo
teclado que se encargará de recoger cualquier pulsación de teclado bien con
lo cual aquí Pongo aquí no lo voy a explicar mucho porque lo he explicado en el vídeo anterior aquí dentro de recoge
todos los datos que necesito y decir que cuando e punto que es la propiedad que
indica pues la tecla que he pulsado sea igual igual que enter que es la tecla
que quiero detectar cuando esto de aquí se cumpla lo que tiene que hacer es ejecutar leer bueno Pues bien aquí como
es solo una acción le pongo aquí el Ann y le digo que vaya a leer Así es
sencillo cuando la tecla pulsada sea enter pues irá a leer y cuando no pues no ocurrirá absolutamente nada si ahora
pruebo vengo aquí le digo que me llamo Hub y al hacer clic la tecla enter me saluda perfecto maravilloso genial muy
bien pero me interesa que cuando yo escriba aquí algo esto aquí lo elimine
VACIAR el contenido de un input
ya parte de eliminarlo que no se quede así por ejemplo sino que el cursor esté metido dentro para que el usuario pueda
escribir otro nombre y a la hora de pulsar la tecla del enter o bien el
botón vací el contenido del input en ese caso lo que tengo que hacer es pues limpiarlo lo podría poner directamente
aquí debajo pero como son acciones que no tienen mucho que ver con esto lo
correcto para poder reutilizarlo más veces es ponerlo en una función nueva que voy a llamar por ejemplo limpiar
esta función va a hacer dos cosas primero va a borrar el contenido del input y después va a meter el cursor
dentro para que el usuario pueda escribir bien como lo voy a hacer dos veces casi es más fácil poner aquí un
cono repetirlo voy a poner aquí un elemento por ejemplo elemento y le voy a
decir que Esto va a ser igual a documento y selector Cómo se llama mi input Bueno pues mi input se llama aquí
campo Bueno pues aquí le digo almohadilla campo para no repetirlo dos
veces aquí ahora pondré elemento y Mi ahorro el documento selector etcétera
vale le digo primero voy a borrar lo que hay en el interior del input para borrar
lo que hay dentro de un input si fuera una caja podría Inner html o a la
comillas comillas pero como Esto no es una caja en vez de Inner html voy a
poner value elemento punto value igual a nada con lo cual esto lo que hace es meterse dentro y eliminarlo Pero cuidado
no va a meter el cursor dentro todavía y ahora lo que tendría que hacer es bueno
pues comunicar una función con la otra decir después de leerlo le diría que
vaya a limpiar si no hago una llamada a esta función nunca nunca lo haría
también lo que podría hacer en este caso también es utilizar esto también al principio para que nada más empezar por
si acaso también lo hiciera por tanto lo hace dos veces primero a principio de manera automática nada más entrar y
también después de leer bien si yo lo hago de esta manera y hago aquí pongo mi
nombre y le doy al enter veo que la ha borrado y veo que el cursor está aquí sin haber hecho nada pero por qué Porque
he hecho clic la tecla Pero si yo aquí le digo que me llamo perico y hago clic
en el botón se borra pero aquí no está dentro del cursor cursor está dentro
porque he hecho clic en el botón y el botón recupera el foco por lo tanto para que funcione y meta el cursor Así tanto
cuando yo pulso el botón como cuando escribo aquí aparte de esto le voy a
decir que vaya a mi input elemento y aquí haga un Focus meta el cursor en su
interior la manera que yo aquí vengo le digo que me llamo Laura hago clic en el
botón lo borra y mete el cursor en su interior perfecto maravilloso genial
pero problema problema es el siguiente Yo vengo aquí yo que soy muy listo pulso
un espacio hago clic en el botón aceptar o bien en la tecla enter y me dice hola
Eliminar los espacios innecesarios con trim
espacio y claro me interesa también que los espacios los elimine que si alguien
se pone el nombre y pone múltiples espacios y le da al botón Bueno pues solo se elimine y para ello lo que puedo
utilizar es método que se llama trim que lo que hace es eliminar los espacios inútiles los espacios inútiles son los
que hay antes y después de un contenido no os los que hay dentro se han impone aquí por ejemplo yo que suscríbete
espacio espacio espacio espacio espacio espacio mi canal aquí pongo muchos
espacios y delante pongo los espacios el trim eliminará los espacios que hay
delante y también eliminará los espacios que hay al final pero nunca nunca nunca
eliminará los que hay aquí y los que hay aquí vale Y el trim lo puedo poner donde
yo quiero en un principio pero como yo quiero que cuando lo lea pues ya me elimine los espacios aquí dentro de la
asignación le digo que lea el Bali y le puedo poner aquí el trim que se escribe
de esta manera con los paréntesis abiertos y cerrados de esta manera cuando lea el contenido lo siguiente Que
hará antes de hacer la asignación antes lo que hará será quitarle los espacios
inútiles que hay adelante y detrás y después cuando haya hecho esto lo asignará dentro del hombre Qué quiere
decir que si vengo aquí ahora y Pongo aquí un millón de espacios o uno da igual y hago clic en el botón o bien
pongo uno y le doy al enter no hay ningún tipo de ola porque los ha
limpiado vale por lo tanto el trim cuando utilizamos algún tipo de lectura de un input siempre es bueno ponerlo por
si acaso otro tipo de métodos que puedo utilizar para limpiar o para modificar
este valor un valor que ha escrito el usuario antes de asignarle un valor yo
puedo utilizar para explicarlo aquí puedo utilizar dos que son muy útiles que es el tú uppercase que escribe así y
Uso de toUpperCase y toLowerCase (MAYÚSCULAS y minúsculas)
otro que es el tú lo que se escribe así bien estos dos
métodos lo que me permiten es al utilizar texto Eso sí convertir el valor
todo el valor en mayúsculas o convertir todo en minúsculas todo es todo No solo
la primera letra sino todo si yo por ejemplo aquí dentro del trim o después de igual lo que hago es poner tú
coopercase lo que haré estoy haciendo ahora es primero leer lo que he escrito
dentro del input perfecto luego le quita los espacios innecesarios que hubiera
adelante o detrás y después lo convierte todo a mayúsculas y lo introduce dentro
de nombre quiere decir que aunque yo venga aquí y le ponga Hub en minúsculas al hacer clic en el botón me lo
convierte todo en mayúsculas y con el lower Case también una idea alguien que puede estar
pensando y decir Bueno sí Y si yo quiero únicamente poner en mayúsculas la primera decir la primera y las otras ya
en minúscula Pues para eso debería combinar estas dos la primera letra con
mayúsculas y el resto con minúsculas bien pero hemos dicho que el problema
que hay Es que esto convierte todo en mayúsculas o todo en minúsculas entonces
para poder obtener un trozo del texto de un carácter tengo que utilizar otro
método hay dos uno que se llama subtro y otro que se llama substream bien tanto
uno como el otro lo que hacen es y yo les doy un texto y le digo Mira pues obtén del carácter tal al carácter cual
y de un texto por ejemplo este de aquí puedo obtener un trocito puedo obtener
otro puedo obtener lo que yo quiera perfecto qué ocurre que el Surf que yo
utilizaba siempre hace años está declarado como casi obsoleto bueno poco recomendable funciona perfectamente y no
hay ningún tipo de problema pero resulta mucho más claro utilizar substine que es el que haremos funciona de la siguiente
manera aquí ponemos desde hasta por ejemplo si tenemos aquí Hub tenemos en
cuenta que Hub tiene una parte el carácter cero el carácter 1 y el carácter 2 bien Si nosotros queremos por
ejemplo seleccionar las dos primeras letras le decimos que desde la letra 0
queremos hasta la letra 2 sin tener en cuenta las dos es decir que cogería el acero y luego la 1 la 2 nunca si ponemos
del acero a la 3 cogemos la 0 la 1 y la 2 la 3 no Si queremos por ejemplo
seleccionar la a y la B Le pondríamos desde la 1 hasta la 3 es decir la cero
no sería la 1 la 2 y luego la 3 ya no si quisiéramos la primera desde la 0 hasta
la 1 y si no ponemos nada en la última escoger desde cero hasta el final el
número de caracteres que hubiera por lo tanto utilizando super String indicando aquí qué caracteres quieres seleccionar
y utilizándolo conjuntamente con tu percate para que los caracteres que tú
selecciones únicamente esto se pongan en mayúsculas o bien los caracteres que tú quieras se pongan en minúsculas esto lo
podríamos hacer pero te lo voy a dejar para que lo pienses para que lo hagas tú en una actividad que vendrá al final de
este contenido otra cosa que tenemos que tener muy en cuenta es que el Valley No únicamente sirve para leer inputs sino
Aplicable también a textarea y select
que también podemos por ejemplo leer elementos como un text área que nos
permite escribir una gran cantidad de información una poesía una queja vamos un libro entero o bien Por ejemplo
también desplegables de tipo Select en el que podemos encontrar diferentes
opciones por ejemplo pues riack por ejemplo para que alguien seleccion aquí Bueno pues diferentes
opciones que podemos tener Bueno pues como seleccionamos una acción también el
value es el contenido que nosotros hemos seleccionado en este caso por ejemplo dentro del Index O Nuestro de aquí lo
puedo eliminar Yo podría aquí acceder a otro elemento por ejemplo acceder a un
Select que es el elemento que da una manera contiene todos los options aquí a
la hora de acceder no seleccionaría dentro de campo sino que también sería el Select no el option porque tengo
diferentes luego aquí pues tampoco sería campo sino que sería Select si lo voy a
probar estoy aquí no tengo ningún tipo de información hacer clic en uno de ellos y hacer clic en el botón me pone
el elemento que yo he hecho clic también evidentemente yo podría Añadir en
cualquier sitio por ejemplo lo podía Añadir aquí me podría ir otra vez a este elemento esto lo haréis en la actividad
y Añadir aquí un nuevo opcion html ya que estamos creando contenido
html añadiéndole al Select otro options de cualquier tipo de información que
podía ser o bien texto o bien lo podría obtener de un input que en este ejemplo
no lo tengo si yo lo hago de esta manera a la hora de probarlo a que aparece uno
nuevo que funcionaría Exactamente igual entonces para practicar todo esto y
sobre todo para practicar todos aquellos contenidos que hemos visto en temas anteriores te voy a proponer dos
actividades que ya sabes después de proponer la actividad Puedes parar el vídeo y después está la solución
explicada paso a paso y con todo lujo de detalles para que te puedas concentrar únicamente la parte de javascript te
ACTIVIDAD 1* : ¿Qué es lo que tienes que hacer?
puedes descargar este archivo comprimido en el que por una parte en el body tenemos una etiqueta un input un botón
todo preparado luego el css lo mínimo alguna bueno para que quede todo mucho
mejor y Bueno un poquito de propiedades y nuestro javascript totalmente vacío
que será lo que tú tengas que escribir para conseguir que tengamos una parte toda la estructura que hemos creado en
el body aquí no está el Select todavía Ya que se crea dinámicamente el usuario si no escribe nada no pasa nada pero
cuando escribe cualquier tipo de nombre en mayúsculas en minúsculas o como queramos y pulse el botón o bien pulse
la tecla enter como es mi caso se crea el Select y aparece aquí el contenido también se borra el input mete el cursor
en su interior el Focus y aquí puede escribir cualquier otro nombre por
ejemplo el vídeo le da y se añade aquí pero tenemos que tener en cuenta que lo
convierte para poder la primera en mayúsculas y el resto en minúsculas da igual como lo escribamos siempre se va a
poner con la primera en mayúsculas y mayúsculas y además el Select que se
crea dinámicamente y solo una vez a la hora de hacer clic en uno de ellos clic se coloca en el input es decir lee el
value del Select y lo coloca en el value del input detén aquí el vídeo para
intentar hacer la actividad o sigue viéndolo para acceder a la solución Esta
es una manera de solucionar cada uno de los puntos de la actividad pero evidentemente Hay muchísimas más maneras
vamos a empezar con el html que puede descargarte como he dicho antes a través
ACTIVIDAD 1* : SOLUCIÓN. Explicación paso a paso
de este zip donde tenemos ya toda la parte de html toda la parte de css y nos
falta la parte de javascript inicialmente esto lo tenemos así pero evidentemente aquí no hace nada cuando
hago clic en el botón debería empezar a funcionar por lo tanto lo que tengo que empezar a hacer lo primero sería que al
hacer clic en este botón empezará todo el proceso este botón es este de aquí
este botón se llama botón vamos a hacerlo vamos a hacer el evento
selector se llama punto botón y aquí haremos un evento con addlist tener o
también lo podemos hacer con el onclick vamos a hacerlo esto más grande ya aquí
le vamos a decir el evento que será al hacer clic y la función a la que tiene
que ir que se va a llamar por ejemplo leer porque es lo que tiene que hacer leer y hacer más cosas vale esta función
la vamos a poner por aquí por ejemplo sabéis que el orden de las funciones no importa y aquí vale Y aquí lo que
tenemos que hacer son varias cosas primero leer lo que el usuario ha escrito dentro del input eliminar los
espacios innecesarios Y si ha escrito algo nos iríamos a la función donde ya
haríamos más cosas y luego lo que haríamos sería Vaciar el input para que el usuario pueda escribir mejor Entonces
lo primero que tenemos que hacer aquí es la lectura para hacer la lectura tenemos que leer el value de nuestro input que
como lo estoy input se llama nombre Bueno pues aquí aquí le decimos que vaya al documento me busque un elemento
llamado en este caso nombre y aquí Bueno pues acceda a su valor a lo que hay
escrito ya de paso ya que estamos aquí lo que voy a hacer es quitar los espacios innecesarios que pudiera haber
delante detrás o sea Alguien ha sido muy listo y ha escrito un único espacio pues que lo elimine y esto todo esto lo tiene
que guardar en algún lugar en alguna variable esta variable no hace falta que sea global tampoco va a cambiar porque
la leo una vez ya está con lo cual voy a crear una constante le voy a poner aquí por ejemplo nombre y lo almacenaré aquí
que tener en cuenta que esta variable de const está constante en la línea 5 se elimina Pero antes de que se elimine la
voy a utilizar entonces aquí lo que tenemos que hacer es detectar si el usuario ha escrito algo dentro de nombre
o no se ha escrito algo lo voy a enviar a una función que se va a llamar función
puesto que invertir porque lo que tiene que hacer es convertirlo con la primera en mayúsculas y el resto no con lo cual
aquí vendrá a convertir que ahora mismo no voy a hacer nada bien y si no pues no
hará nada entonces voy a utilizar un If Sí pero lo veremos más adelante no hace falta podía utilizar un ternario lo
podía utilizar pero un ternario no me sirve no me va bien porque un ternario tiene dos opciones cuando Sí y cuando no
y aquí quiero que vaya a convertir cuando aquí hay algo si aquí no hay nada pues que no haga nada por lo tanto voy a
utilizar una expresión mucho más corta que me va a permitir bueno poner aquí
una condición y si esta condición se cumple Bueno pues aquí le pondré algo bien Es como un If pero muchísimo más
más corto y muy utilizado por lo tanto en otro tipo de frames como etcétera bien con lo cual irá a convertir cuando
aquí haga algo entonces una opción que no voy a hacer pero la voy a explicar Yo lo que puede poner aquí la condición es
cuando nombre no sea igual a comillas esto funcionaría perfectamente muy bien
genial pero lo que voy a hacer es acortarlo y lo voy a poder así hay que
tener en cuenta que si yo lo pongo así bueno falta la negación Pero si yo lo pongo así esto es como si yo pusiera
aquí esto Bien y tú me dirás Bueno sí pero que existo el nombre y aquí estoy
comparando mi nombre o lo que yo he escrito con true pero resulta que cuando yo estoy comparando con un booleano lo
que hace es convertir un valor convertirlo en booleano y Como ya
comenté también las opciones que hay para la conversión es que cuando el
valor es cero menos cero es null es un Define y es comillas comillas será falso
en todo el resto de casos esto por lo tanto esto Tal y como está ahora significaría que he escrito algo porque
ya os digo únicamente cuando aquí fuera Cuando aquí hubiera algún valor de los
que he dicho y uno de ellos es las comillas el valor boleano sería falso por lo tanto si yo lo pongo así vacío es
cuando sea igual a true esto quiere decir que si nombre hay algo escrito Bueno pues Entonces irá a convertir
cuando no haya nada o hay un cero este vacío pues no irá a convertir perfecto maravilloso genial muy bien luego lo
siguiente que tiene que hacer es vaciarlo porque si no el nombre se quedaría escrito dentro del input y
tendría que borrarlo yo y hombre javascript está para eso Por lo tanto lo que voy a hacer es vaciarlo una función
que se encargue de vaciarlo y de poner el cursor dentro para que el usuario pueda escribir por lo tanto aquí le digo
sabes qué input recordamos el input es este de aquí sabes que input voy a hacer
cosas contigo en realidad el input es este de aquí como lo voy a repetir muchas veces por lo que estoy viendo en
vez de repetirlo copiarlo de aquí y pegarlo aquí e ir pegándolo por aquí abajo que va a salir muchas veces lo que
voy a hacer es crear una constante que lo voy a llamar por ejemplo input por
ejemplo y aquí le voy a dar la ruta con lo cual siempre que diga input Bueno
pues será esto aquí por lo tanto aquí este alias lo puedo sustituir por input
y esto de aquí también lo puedo sustituir si te preguntas Oye por qué Ja
pone las constantes todas en mayúsculas bueno son buenas prácticas con javascript que luego Cuando entras en
otros frames se eliminan por completo pero ahora Estamos en javascript por lo tanto bueno como no me cuesta tampoco
nada ponerlo en mayúsculas se pone en mayúsculas para distinguirlo de las variables normales Perfecto entonces
aquí lo único que voy a hacer es que vaya al input que el input es el nombre y le voy a decir que su valor es igual a
comillas con ellos con esto lo que hago es borrarlo y luego le digo otra vez input por eso he ahorrado ponerlo y le
digo focos y con Focus lo que hago es meter el cursor en su interior si yo vengo aquí que escribo cualquier cosa y
le doy al botón clic Entonces lo ha borrado ha metido el cursor dentro y lo
almacenado dentro de nombre vale Lo que pasa es que Bueno aquí me irá a
convertir y en convertir no hay absolutamente nada qué será lo siguiente que vayamos a hacer convertir bien aquí
Convertir (sólo) la primera letra en Mayúsculas
lo que tiene que hacer es recibir lo que escrito el usuario y convertirlo de la manera correcta es decir poner la
primera letra en mayúsculas y las siguientes en minúsculas qué ocurre que esto viene desde esta línea y resulta
que almaceno dentro de esta constante lo que ha escrito el usuario dentro de mí y
en la línea 8 se borra vale Bueno pues todo lo que voy a hacer es enviárselo a convertir y le digo sabes convertir te
voy a enviar un valor que en este caso va a ser nombre te lo envío y la función
lo guarda aquí y le puedo poner cualquier tipo de valor valor no tiene por qué ser nombres Exactamente igual
con lo cual valor será el nombre que le ha enviado la línea 6 y es una variable
local que únicamente tiene validez dentro de Aquí pues bien lo que tengo que hacer es devolver el valor correcto
Entonces aunque yo lo podría poner aquí el valor y ningún problema bueno para verlo más fácilmente lo voy a poner en
una en una variable led o bien con que me gusta más en este caso que será el
nombre correcto será igual a algo y este nombre correcto será el que yo devuelva
para que vuelva aquí devolveré nombre correcto entonces nombre correcto será
el valor y decir el nombre con la primera mayúsculas y luego la siguiente en minúsculas entonces lo que voy a
hacer es poner comillas invertidas porque voy a hacer aquí una mezcla de cosas vale aquí Pondré la primera letra
y aquí pondré el resto de letras que Pondré la primera letra en mayúsculas y
aquí pondré las siguientes pero en minús es decir aquí pondré algo tú uppercase
y aquí pondré algo con tu lowells Vale
entonces como no quiero convertir todo aquí tengo que poner la primera letra y como vimos para obtener la primera letra
ponemos valor que será el nombre el nombre que sea y luego con substream le
digo que vaya desde la primera de decir la cero todo empieza en el cero a partir
del acero hasta la 1 hay que tener en cuenta que irá del acero a la 1 pero sin
cogerla uno únicamente obtendrá una de ellas la primera letra vale Y luego Aquí lo mismo pero diferente vamos a decir
que coja el nombre y luego con substream aquí es un pelín diferente porque no sé
cuántos caracteres hay aquí no hay ningún problema es una letra La primera
cero aquí tiene que ser desde la segunda hasta el final Vale entonces la segunda
letra no es la 2 si lo que es la 1 porque como empieza por la cero si pusiera dos cogería a partir la letra
entonces una opción incorrecta pudiera ser aquí poder una cantidad muy larga funcionaría bien pero es muy cutre
evidentemente lo que voy a poner es ningún tipo de valor cuando no le pongo ningún tipo de valor él es selecciona
desde la segunda la letra 1 la 0 la 1 desde la 1 hasta el final y hasta el
final y sin importar Cuántos cuántos caracteres hay y lo que sea lo convierte en minúsculas bien Por lo tanto la
primera en mayúsculas y la siguiente en minúsculas esto lo almacena dentro de un
hombre correcto y nombre correcto lo devuelve Perfecto aquí se lo devuelve
Bueno pues se lo devuelve a estar aquí y resulta que esto es pobre expresión no
hay ningún igual no hay nada con lo cual aquí Bueno pues Se perdería de manera
total entonces una vez yo convierta el nombre en un nombre correcto lo que
tengo que hacer es enviarlo a alguna función donde lo escriba donde lo escriba dentro de mi Select etcétera
etcétera bien esta función no existe la función que yo crearé pues yo que sé por
ejemplo aquí función escribir por ejemplo Vale
entonces lo que voy a hacer es decirle que escribir
tenga dentro la función y esto Cómo se ve bien cuando nosotros tenemos una expresión como esta con muchos
paréntesis los paréntesis es el operador con mayor grado de precedencia estilo
que hace Primero lo primero primero primero es Nombre nombre que lo que hacéis obtener el valor Bueno luego va a
convertir a convertir nombre con lo cual viene a convertir convierte todo y cuando lo devuelve vuelve al siguiente
viene aquí y hace lo que bueno lo siguiente que sería el escribir por lo
tanto como el escribir es lo que está fuera de cualquier paréntesis es lo que hace al final escribir obtiene el nombre
ya correctamente escrito y se va a la función de escribir y aquí Viene otro
problema vale una vez el usuario ya ha escrito un nombre lo ha convertido ya ha
puesto Hub y ha puesto la J en mayúscula etcétera y se lo envía a escribir que de
alguna manera lo tiene que recibir el escribir no recibe nada por lo tanto si el escribir ha obtenido de este reto ha
obtenido algo aquí es como si hubiera puesto Hub con la J mayúscula el escribirlo tiene que recibir de alguna manera este valor vale lo vamos a poner
aquí le ponemos nombre aquí recibe el nombre ya correcto con la primera mayúsculas etcétera bien y este nombre
lo tiene que almacenar lo tiene que Añadir a un Select que no existe el
Select no está aquí no está aquí vale Por qué no está aquí porque si no
saldría de inicio y yo lo quiero crear dentro de resultado Por qué puesto aquí una caja una etiqueta para Añadir aquí
el Select que diríais bueno pues que el spam casi que ni existe bueno porque a
la hora de crear cualquier tipo de contenido utilizando el Inner html
todavía veremos que hay un error problema si lo meto dentro de una caja
Bueno pues no hay ningún tipo de problema no afecta al resto de elementos pero yo aquí no pongo una caja y lo
añado al Body el líder html cuando añada contenido lo veremos en un vídeo más
adelante lo que hace es cargarse cualquier tipo de interacción que
pudiera ver aquí es decir que el un clic de este botón se lo carga si aquí
hubiera algún código de javascript se lo cargaría y subir aquí alguno Que no lo hay lo cargaría es decir que se cargaría
por lo tanto al escribir se cargaría este ad everytner de aquí ya no
existiría Por lo tanto lo que hago para evitar esto es o bien utilizar el insert html que no lo voy a hacer porque
todavía no lo he explicado o bien la mejor manera en este caso html limpia sería crear una caja solo para eso y de
esta manera no habrá ningún tipo de problema como no hay nada no se puede cargar nada perfecto maravilloso genial
muy bien muy bien como decía javascript lo que tiene que venir a resultado es
Creación dinámica de un select con sus options
crear un Select y luego crear diferentes opciones para
cada una de las opciones Pero qué pasa como veremos esto este Select solo lo
tiene que hacer una vez si yo escribo más de un nombre lo tiene que hacer con el primer nombre con el segundo no va a
crear un nuevo Select sino que lo que tiene que crear son diferentes opciones con el siguiente nombre que yo ponga
tiene que crear una opción nuevo pero no tiene que crear otros Select vale por lo
tanto el Select solo solo no tiene que crear la primera vez bien pero vamos por
partes lo primero que tiene que hacer al ir a mi función escribir es ir a
resultado document selector resultado que recuerdo que es
este de aquí que es un spam una caja y aquí crearía contenido html por lo tanto
le digo Inner html le pongo un más y un igual para que lo añada lo veremos que
hay que cambiarlo Pero bueno de momento lo así y luego Aquí le ponemos un Select con el cierre vale con esto crea un
Select totalmente vacío bien y ahora lo siguiente aunque lo podría hacer en esta misma línea pero es mejor hacerlo en dos
para ir por partes aquí le digo que vaya a mi Select como no le he puesto un
nombre y solo hay uno le pongo Select subirá más de uno podía ponerle aquí un Class y me haría referencias pero bueno
como todo tengo uno y quiero que se entienda perfectamente le digo que vaya al Select que ya existe y le digo que
tiene que Añadir Aquí sí que el más igual está totalmente justificado tiene
que crear un opción y dentro dentro de la opción voy a poner el nombre que ya
está correctamente modificado si lo pongo aquí veo que si aquí pongo Hub
todo en mayúsculas hago clic en el botón todavía no vale enter aquí lo pone correctamente Ay qué bien vale vengo
aquí y le digo el vicio da igual como lo ponga porque lo va a poner bien bien aquí y me está creando otro Select aquí
lo ha hecho correctamente pero lo está creando otros Select y cada vez que yo haga algo me creará un Select nuevo
porque porque en esta línea de aquí le estoy diciendo que añade Y si yo digo
Bueno pues le quito el igual Entonces tampoco va a funcionar correctamente Porque si yo pongo Hub perfecto
maravilloso le pongo ahora el vicio y me elimina uno que por el otro siempre hay
uno por lo tanto esta línea de aquí la tiene que hacer únicamente si no existe
si no existe ningún tipo de Select si existe no lo tiene que hacer cómo lo voy
a hacer esto Bueno pues con otra expresión como la que he hecho arriba un condicional bien Entonces le voy a decir
primero el Select lo que tengo que ver es si no existe si existe pues no lo
tiene que crear si no existe Pues sí Entonces cuando yo a javascript le pregunto Oye document selector Select si
no lo encuentra no da error simplemente me devuelve null no la he encontrado Perfecto Bueno pues la condición que yo
haría voy a ponerlo entre paréntesis para que me entienda mejor es si esto de
aquí que no lo he copiado es igual igual igual a null lo que tienes que hacer es
ir a una función que no existe que se va a encargar de crear el Select Entonces
esto estaría bien Pero lo puedo mejorar un poquito antes hemos dicho que cuando
convierte algo en booleano si es null lo convertiría el valor a false por lo
tanto en vez de poner aquí esto que también estaría correcto lo puedo resumir un poquito poniéndolo aquí que cuando esto no sea
true es decir que cuando lo dejamos así estamos asumiendo que queremos el Igual
igual a estamos asumiendo vale pero cuando yo quiero Igual igual a false
puedo poner o bien esto o bien el null o bien En vez de poner esto aquí puedo
poner aquí el operador de la negación para que no sea el valor por defecto que es true si nuestro serás Bueno pues
cuando el elemento no sea true decir cuando no exista cuando sea null en este
caso irá a crear el Select es decir que estoy aquí en vez de ponerlo aquí en
este momento lo voy a poner en una función aparte función crear Select
con lo cual Únicamente lo creará cuando lo haga vale Pero tengo otra cosa que es
que a la hora de crear un Select si yo quiero que al hacer clic en la flechita me haga algo como por evento si no no lo
va a hacer por lo tanto ya que he creado aquí el Select debajo voy a darle algún
tipo de evento aquí para ir más rápido me voy a la parte de abajo y una vez ya
ha creado el Select ya está creado está ahí ningún problema pues ya le puede decir Hey te voy a Añadir un evento
el evento lo normal es que fuera el evento change para que cuando un se le cambiara de valor lo hiciera pero en
este caso voy a poner un clic el evento click para que aunque escoja el primer
el primero de los input también funcione porque al principio ya se rellena automático ahora lo veremos Entonces
cuando haga clic irá a una función que se llama saludo Pero cuidado cuando yo
hago referencia a una función para que no me dé error esa función tiene que existir al menos vale ahora existe vale
Por qué decía el clic y la exchange Porque yo vengo aquí yo aquí le pongo Hub hace clic ya lo tiene bien si yo
pongo un Select y selecciono el mismo no lo haría el change solo funciona cuando yo escojo un valor diferente con lo cual
yo haría clic Hub que es el mismo ignoraría como le he puesto un click lo hace con un clic es decir yo hago aquí
clic en cap y accedería a saludo Vale ahora no hace nada porque evidentemente
que tengo aquí pero si yo me voy al input y quiero escribir aquí algo Cómo
escribo dentro de un input con value aquí le digo lo que quiero que escriba qué tiene que escribir pues tiene que
Acceder al Select y seleccionar lo que haya escrito es decir el value por lo
tanto aquí le digo que vaya al Select esto no lo tengo como alias con lo cual lo tengo que escribir Sí o sí Select
vale Y una vez ha ido al Select le digo Hey escribe tu value el value es lo que
hay aquí escrito decir que si hay Hub el value será Hub pero si el momento de
hacer clic Bueno pues pico en Eva esto es el value Por lo cual el value que haya lo coloca en el input Pero por qué
no lo ha puesto al principio Porque si al principio yo aquí pongo hervigio da igual como lo ponga hago clic y le pongo
un change al hacer clic aquí en un change no lo haría porque no ha cambiado y poner vicio y yo he selecciona
prodigio pero como le he puesto con un clic a la hora de hacer un clic automáticamente aunque yo no le haya
seleccionado automáticamente me lo pone Qué problema tiene esto El problema es que si yo añado dos cuando yo hago clic
para abrirlo se selecciona y luego a la hora de hacer clic se pone el definitivo no lo veo incorrecto me parece hasta
bien y todo ahora el siguiente paso Es que esto funcione también evidentemente con el teclado si yo pongo aquí Hub Y le
Añadir funcionalidad con el teclado
doy al enter debería funcionar también bien Esto simplemente es en la parte superior poner otro evento y en este
caso se lo pondría a mi input como aquí hemos puesto la referencia la voy a poner en la parte de arriba vale para
colocarlo mejor y aquí en vez de poner documento etcétera le pongo input el
input luego add Evening listener porque quiero ponerle un evento aquí de los que
hay que ya comenté en el vídeo anterior que Idaho que ya y keypress puede ir
bien más de uno pero bueno voy a poner el que se pone siempre por defecto que irá aún para que me detecte todas las
teclas cuando la tecla se hunda ya que el app y el keypress Bueno pues funcionan cuando la tecla es soltada en
este caso me daría igual y tiene que ir a la función teclado por ejemplo que lo
voy a poner aquí teclado aquí le pongo el evento que guarda todas las
información que guarda toda la información que yo quiero y le voy a decir que cuando de e la propiedad que
indica la tecla que he pulsado sea igual igual que la tecla enter que es la que
yo quiero que esté pendiente cuando esto se produzca Bueno pues que vaya a una
función que se llama leer y que la tengo aquí por lo tanto el teclado ya
funcionaría si lo pruebo accedo aquí pongo un nombre con la tecla enter funciona escojo otro otro con la tecla y
aquí aparecen cada uno de ellos hacer clic aparece el primero porque a una manera lo puedo dejar así pero si hago
clic en otro aparece el que yo le he comentado cada uno de ellos aparece escrito en el input superior Esta es la
actividad que tienes que intentar hacer la actividad 2 también es muy interesante en el html ya sabes que en
ACTIVIDAD 2* : ¿Qué es lo que tienes que hacer?
el archivo comprimido tienes todo montado todo funcionando lo único que falta la parte de javascript para que te
concentres en ella aquí dentro del dip tenemos un Select con diferentes descuentos luego tenemos un input con su
etiqueta para escribir el precio únicamente valores numéricos y luego tenemos dos inputs ya creados uno donde
javascript Bueno pues mostrará el descuento y otro donde mostrará el precio total como son dos propiedades
red only el usuario No puede escribir solo son para que javascript los escriba
Bien dentro del css pues tenemos un poquito de características gráficas Pero
hay selector que es este de aquí que lo que nos permite es que el input de tipo
number que hemos creado dentro del index.html no muestre los botones de
arriba de abajo como sería lo habitual el resto de opciones son totalmente opcionales bien cómo funciona tenemos
por una parte esta estructura que es la que hemos creado dentro del html el código que tenéis que crear es hacer
clic en el input aparece el aquí todas las opciones ningún problema aquí escribo un precio y no hay botón nada
más escribir cualquier tipo de cantidad me hace el descuento del 1% y aquí me
hace pues el resumen 45 menos el descuento tendría que pagar
44.55 teniendo en cuenta que si yo ahora selecciono cualquier otro descuento todo
se modifica sin ningún tipo de problema 25% lo mismo y además cuando yo elimino
la parte de arriba el valor de arriba todo se vuelve a vaciar y cuando yo selecciono aquí
cualquiera como no hay nada escrito tampoco lo hace esto es lo que tienes que hacer detén aquí el vídeo para
intentar hacer la actividad o sigue viéndolo para acceder a la solución para esta segunda actividad el body es un
poquito más grande Tenemos aquí un Select con los diferentes descuentos ya creado dentro de para que esté toda una
ACTIVIDAD 2* : SOLUCIÓN. Explicación paso a paso
cosa debajo de la otra luego Tenemos aquí el input donde escribiremos el precio Time number y autofocus para que
el cursor se meta dentro inicialmente al menos luego otro input donde el usuario reator y no podrá escribir y donde será
javascript el que lea y luego al final otro input que también es de solo lectura para que Java escribe el total
del precio menos el descuento y aquí pondrá toda la bueno toda la Línea bien
es real only y todo está dentro de cajas de ti para que esté una cosa debajo de
la otra y ya veremos que en el css es un poquito Bueno más complejo tema de
fuentes aquí le pongo el display Line block para que cada una de las etiquetas pueda mantener un ancho si no le podemos
display Line blog como son de elementos de tipo online el with no va a funcionar todo lo demás bueno es para que sean más
bonitos tipo de letra Fuentes espaciado etcétera este es para que el total el
input sea más grande y esto aquí abajo no lo voy a explicar porque un input de
tipo number como es este de aquí no aparezcan las flechitas arriba abajo
dentro del input a nivel de css se puede eliminar y el Index js como siempre lo
tenemos totalmente vacío perfecto y esto luce de esta manera aquí tenemos el
Select y aquí lo que tenemos que hacer ahora que funcione es a la hora de escribir algo aquí no puedo escribir
aquí tampoco puedo escribir a la hora de escribir aquí algo ir a rellenando el
descuento y en total perfecto por lo tanto lo primero que serían los eventos
pero aquí no hay botón no hay ningún tipo de botón con lo cual lo tiene que ir haciendo mientras yo escriba escribo
el 3 y ya hace las operaciones vale por lo tanto el evento será de teclado no
será el de tipo clip como es habitualmente por lo tanto el primer evento lo va a tener nuestro input
llamado precio vale me voy aquí y le digo document esto lo hago más grande
con control B le digo que vaya a el elemento llamado almohadilla precio vale
Y aquí le voy a Añadir un evento Vale entonces Qué evento le voy a utilizar
Aquí no hay un clic porque no hay que utilizar ningún tipo de Clip Bueno aquí hay que obtener el teclado por lo tanto
le puedo poner que down que ya o bien keypress a ver si yo le pongo key down
vamos a tener un problema y el problema de la serie cuando yo acceda al para
saber qué ha escrito el usuario es decir si yo pongo aquí un key down y yo pulso
la tecla 5 elementos ejecuta antes de que javascript escriba el 5 Es decir yo
escribo un 5 y javascript lee el input dice no hay nada porque como lo he puesto key down cuando la tecla baja
todavía no la ha escrito con lo cual con key down lo leería antes de la
actualización del input no me sirve en absoluto por lo tanto me interesa o bien cuando ya lo haya escrito ahora que eso
sería o bien cuando mi dedo sube que sería el key up o bien el keypress el
keypress no me hace la mínima gracia porque tiene sus características y Bueno
Entonces voy a utilizar el que ella que es cuando ya lo ha escrito y la tecla
sube vale por lo tanto es muy importante que no sea que ya bien cuando ya haya
escrito todo irá a llamar por ejemplo leer Por qué no bien me voy a la función
leer qué tiene que hacer aquí pues eso tiene que leer tiene que leer lo que el
usuario ha escrito bien y aquí pues lo voy a utilizar es un value normal de
invento una una variable Aunque lo podría hacer todo en la misma línea pero es mejor utilizar aquí una variable Aquí
tengo que ir a mi querido input llamado precio que si lo utilizo
muchas veces igual es mejor poner un alias como he hecho en la actividad anterior precio vale Y aquí le voy a
decir que acceda a su valor lo que he escrito pero resulta que aunque este
input sea de tipo number y no se pueda escribir nada que no sea número lo va a
como texto Igualmente lo va a como texto yo quiero que esto tenga un valor numérico por lo tanto le
voy a poner aquí un number para que me lo convierta de texto siempre va a ser texto a numérico con lo cual lo lee y lo
convierte en numérico bien ahora con lo que escriba tiene que calcular el
descuento vale voy a ponerlo en una variable y después lo aplicaré lo
escribiré primero lo calculo el descuento y después de calcularlo lo escribiré dentro del bien cómo lo
haríamos Pues bien lo que tiene que hacer es de la cantidad que hemos escrito que lo ha leído en la línea de
arriba 100 200 124 etcétera lo tiene que multiplicar por el descuento bien pero
resulta que el descuento lo tenemos aquí arriba Pues el 1% 5% 10 o 25
inicialmente es 1% pero como tiene que ir variando este valor tiene que ser una
variable y como tiene que ir variando tiene que ser global y lo tenemos que
colocar arriba Esto vale con led porque puede ir variando lo por ejemplo dto de
descuento es cortito y esto tiene que ir al Select documento
y aquí le pongo mi Select y para saber lo que he escrito le voy a poner Bali
Qué problema hay El problema es que aquí hay un porcentaje un porciento 1% 5% 10%
y 25%. el por ciento es lo que me da problemas porque Bueno es un String el
porciento el simbolito del porciento me sirve el 1 el 5 el 10 y el 25 vale con
lo cual yo capturo 1% y el 1% se tiene que convertir en uno el porciento lo
tengo que eliminar entonces para ello no puedo utilizar el number como he hecho aquí porque el number lo intenta
convertir en numérico tal cual y si no lo puedo hacer no lo hace entonces para ello hay otra opción que es el pars in
Uso de parseInt (vs Number)
que lo que hace es convertir algo en un número entero el number gana pero el pars in lo que
hace es un poquito más inteligente y coge el valor y le pone más ganas Y si
dice 1% Bueno si lo puedo convertir en número quitándole alguna cosilla lo hace es decir que lo convierte haciendo algún
pequeño ajuste cuando el numberg no hace ningún tipo de ajuste number lo que hace es lo intenta convertir y ahí se acaba
por lo tanto el descuento va al Select mira lo que he escrito y lo intenta
convertir quitándole símbolos extraños strings que hay al final y el 1% lo
convierte en uno y en un número entero no decimal claro vale por lo tanto me interesa bien con lo cual aquí cómo lo
hago el descuento que hay que puede ser uno 10 o lo que sea lo divido entre 100
una operación normalísima bien qué ocurre que esto puede dar decimales y
como veremos en un vídeo posterior pero ya lo explico porque va a salir ahora cuando javascript utiliza decimales
algunos casos puede arrojar valores un poquito extraños prefiero no hacerlo
para que salga vale lo arreglaremos cuando veamos el problema si ahora lo explico y lo arreglo nunca aparecerá
evidentemente pues no no lo podremos tener en cuenta cuando de error lo haremos bien y este descuento lo tiene
que escribir donde donde toca que es aquí dentro de este input es really el
usuario No puede escribir pero javascript sí que puede vale me vengo aquí le digo que vaya al documento
qeris elector aquí le digo descuento que es como se llama mi input y aquí para
escribir dentro de un input le pongo valium que tiene que escribir Bueno pues
descuento vale Si alguien me dice hoy que descuento y descuentos mucho lío bueno Esto es un String porque es el
nombre del input Y esto es una variable se puede llamar igual sí son de mundos diferentes como si tu perro y tu padre
se llaman igual ninguno de los dos creo yo que se va a enfadar vale no hay ningún problema Entonces ahora mismo
cuando yo venga aquí y ponga un 5 me lo hace correctamente cuando ponga un 3 me
lo hace correctamente 33 correctamente etcétera me lo hace bien Ahora falta que
también lo haga con el total que aquí ponga 331 menos
3.31 igual a el resultado que no tengo ganas de calcular mentalmente para esto
está javascript entonces creo otra variable Total que lo va a calcular él
para que ya lo tenga esto lo que va a escribir dentro del input primero tiene que escribir lo que haya escrito en la
parte de arriba o sea este 3 lo tiene que poner aquí luego un símbolo de menos esto de aquí vale Y luego todo lo demás
vale por lo tanto como son texto voy a ponerlo de esta manera primero hemos
dicho que tiene que poner la cantidad que es lo que el usuario ha escrito luego el símbolo del menos luego un
espacio para que quede mejor luego Aquí tiene que poner el descuento que calculado en la línea de arriba luego
Aquí tiene poder un igual y luego Aquí tiene que poner el resultado de la resta
que básicamente será cantidad menos descuento vale este texto que es un
texto lo tiene que escribir en el otro imperio en qué input bueno pues en el
que está en la parte inferior que se llama total simplemente aquí le pongo
que el input se llama total y que el valor que tiene que escribir se llama total y de esta manera cuando yo vengo
aquí y le pongo 55 me lo pone correctamente hasta aquí ningún tipo de problema pero resulta que cuando yo
selecciono algo del Select y hago 25 debería modificar esto y aplicar el 25%
de descuento con lo cual debería modificar esto aquí y debería modificar esto de aquí de manera automática pero
únicamente cuando yo seleccione un elemento de aquí en este caso este este
Select lo haré con un change para que si está el 25% y yo vuelvo a seleccionar el
25% no haga la operación solo haga cuando escoja un elemento diferente bien
esto quiere decir que tengo que tener un evento de tipo change a nuestro Select
vamos a colocar aquí los eventos como siempre le digo que vaya al documento que me busque un Select
si no hubiera más de uno le pondría aquí el nombre del Select y aquí le añado un
evento Qué evento Bueno pues podía ser el clic pero voy a utilizar como he
dicho hace un momento el change para que solo lo haga cuando cambie el valor el shein es mucho mejor la mayoría de casos
funciona mejor que el clic porque quiero que él va cuando cambie bien y esto pues tiene que ir a una función donde haga
todo el cambio Mira voy a ponerle que la función se llame cambio y esta función
de cambio pues la voy a poner ahí el cambio lo que tiene que hacer es ver el
value es decir ver lo que he escrito y con el pars in eliminar lo que sería el
simbolito el porciento y volver a rellenar el descuento y el total bien
Por lo tanto la variable se llama deto en realidad lo que tiene que hacer es
esto mismo de aquí lo copio y lo pego pero aparte tiene que hacer más cosas sino aquí haría una
referencia a la función vale tiene que hacer más cosas que es ir a leer decir
obtiene el porcentaje y va a leer con lo cual a leer hace todo lo que ha hecho
antes si ya lo pruebo aquí pongo 34 funciona perfectamente cuando yo hago un
change lo hace De esta manera pero ya vemos que hay problemillas de decimales
Solución al problema de los decimales de JavaScript
con el 5% y un 34 aquí me da más ceros de los deseados y aquí me da más bueno
Me da bueno increíble entonces lo que tengo que hacer es intentar limpiar el
tema de los decimales pero ya menos que funciona correctamente Aunque hay que arreglar esto funciona bastante mal con
algunos porcentajes Entonces cómo lo hago pues bien hay un truco del almendruco esto lo explicaré en un vídeo
específico muy cortito de esto pero cuando Yo calculo en en este caso el
descuento aquí lo que tengo que hacer es hacer varias cosas primero voy a decirle
que esto de aquí decir todo el resultado que puede tener muchísimos decimales a
veces todo esto pues le ponga un máximo de dos decimales pero no me falta algo
porque si esto lo hago de esta manera a la hora de yo poner aquí Cualquier tipo
de cantidad funciona bien pero aquí por ejemplo yo no quiero que haya un cero
tiene que ser 3.4 no tres punto 40 es
decir que si yo le pongo tu fidget 2 lo que hace es ponerme dos decimales Sí o sí aunque no haga falta y si esto fuera
3.00 pues también y hombre en cero este debería quitarse esto que me hace ver
esto me hace ver que cuando pongo un tufiche 2 el valor no es un número es un texto porque es totalmente imposible que
un número acabe en cero con un decimal de cero debería
cómo lo hago Bueno pues convirtiendo esto a numérico si esto lo convierto a
numérico al convertirlo numérico quita los ceros que haya de los decimales que
sean inútiles por lo tanto aquí le pongo un number para que haga todo esto y esto
se lo pongo para que haga al final decir primero que haga esta operación es el
porcentaje luego hará esto de aquí luego lo convertirá a texto y le pondrá dos
decimales y lo último será convertirlo a numérico si vengo a probarlo pongo 34 a
la hora de hacer clic en 5% me lo pone correctamente Pero cuidado me falta algo Porque si por ejemplo pongo un decimal y
le pongo por ejemplo el 25% aquí lo hace correctamente pero aquí no es decir
también tengo que hacerlo en la suma esto es una cosa que hay que arreglar y la otra es que si hago esto Bueno pues
no puedo poner 00 porque debería vaciar tanto esto como esto Solo debería hacer cuando hubiera una cantidad válida Pero
lo primero es que haga correctamente este tipo de sumas esto lo tengo aquí
Esta es la suma Bueno pues arriba he hecho lo del number Aquí también lo
podría hacer lo podría hacer con una función que lo hiciera siempre o lo podría hacer aquí directamente si lo
hiciera aquí repitiéndolo dos veces para verlo mejor Aquí le pondría number luego le diría
que hiciera primero la resta después de hacer la resta lo convertiría tu fixe 2
en como máximo 2 decimales y después lo
último que haría sería hacer el number o sea lo pruebo vengo por aquí 3,1 le
pongo 25% y me lo hace correctamente Vale y lo siguiente como he dicho es que
cuando esto lo dejo vacío bueno no puedo hacer ningún tipo de resultado lo que tiene que hacer es eliminar esto de aquí
que no lo puedo eliminar yo porque es un real only y eliminar también esto de Aquí vamos a ello a ver aquí en la parte
superior le hemos dicho que al escribir cualquier tipo de tecla vaya a leer aquí
dentro de leer realiza el cálculo y también cuando Bueno pues seleccionamos
un porcentaje también podría ser que seleccionamos el porcentaje sin haber nada escrito Bueno también tenía que
hacer lo mismo entonces hay que hacer un paso previo porque él leer suponemos que la gente es buena y que la gente va a
hacer lo correcto Entonces tenemos que decirle que cuando vaya a leer lo compruebe y esto Pues que haga el
cálculo calcular esto en realidad calcular y nos haría falta una función
de leer que lo que haría sería leer y ver si es correcto o no Es correcto bien
entonces la lectura no la podemos convertir en numérico Porque si la
convertimos en numérico cuando lo dejamos vacío Pues sería cero y cero es numérico que podría ser correcto decir
esto es la lectura Pues bien le vamos a decir que cuando esto sea true es decir
cuando haya algo escrito cualquier tipo de dato que no sea cero ni menos cero ni
null ni nada por el estilo tampoco vacío cuando eso se cumpla pues tiene que
hacer lo que le digamos aquí y cuando no lo que le digamos aquí son unos
ternarios de toda la vida vale cuando haya escrito algo cuando el válido arriba exista con un valor tú lo que
tiene que ir es a calcular qué calcular lo tenemos en la parte inferior es esto
el cálculo y cuando no cuando el valor sea o bien nulo o bien un defined o bien
cero o bien menos cero o bien sea comillas comillas cuando sea uno de estos valores Entonces esto aquí no se
cumplirá vale Y tendrá que ir al otro este punto y coma Aquí no aquí nos
faltaría el Force Vale cuando no tiene que hacer es vaciarlo con lo cual voy a decir que vaya una función que se vaya a
vaciar aquí ya puedo poner el punto y coma Vale y la función vaciar se va a
encargar Pues eso de vaciar los dos inputs es decir voy a copiar y pegar voy a copiar estos dos de aquí los voy a
pegar pero en vez de escribir descuento y total voy a decir que escriba en ambos
casos comilla comilla cuando accedo aquí Si cambio esto no hay ningún tipo de cálculo lo que hace es vaciarlo si
escribo si cree un cálculo pero cuando lo borro desaparecen todos los anteriores con lo cual funciona
Consejo Personal de JAB
correctamente te aconsejo que mires este vídeo accedas
a este completo curso y te suscribas al Canal para estar al tanto de todas las novedades [Música]
