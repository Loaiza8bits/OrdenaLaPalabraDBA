
const banco={
facil:[
{palabra:"ALERTA",categoria:"Atención",definicion:"Estado de preparación ante estímulos."},
{palabra:"ENFOQUE",categoria:"Atención",definicion:"Dirección de la atención hacia un objetivo."},
{palabra:"ATENTO",categoria:"Atención",definicion:"Capacidad de mantenerse concentrado."},
{palabra:"CUIDADO",categoria:"Atención",definicion:"Atención dedicada a una tarea."},
{palabra:"REPASO",categoria:"Memoria",definicion:"Revisión de información aprendida."},
{palabra:"RECUERDO",categoria:"Memoria",definicion:"Recuperación de información almacenada."},
{palabra:"RETENER",categoria:"Memoria",definicion:"Mantener información en la memoria."},
{palabra:"OLVIDAR",categoria:"Memoria",definicion:"Pérdida de información almacenada."},
{palabra:"VISION",categoria:"Percepción",definicion:"Procesamiento de información visual."},
{palabra:"ESCUCHA",categoria:"Percepción",definicion:"Interpretación de sonidos."},
{palabra:"IMAGEN",categoria:"Percepción",definicion:"Representación visual percibida."},
{palabra:"MIRADA",categoria:"Percepción",definicion:"Dirección de los ojos hacia un estímulo."},
{palabra:"LOGRO",categoria:"Motivación",definicion:"Meta alcanzada mediante esfuerzo."},
{palabra:"INTERES",categoria:"Motivación",definicion:"Atracción hacia una actividad."},
{palabra:"ANIMO",categoria:"Motivación",definicion:"Estado emocional favorable."},
{palabra:"IMPULSO",categoria:"Motivación",definicion:"Fuerza interna para actuar."},
{palabra:"ANALISIS",categoria:"Cognición",definicion:"Estudio detallado de información."},
{palabra:"PENSAR",categoria:"Cognición",definicion:"Procesar información mentalmente."},
{palabra:"LOGICA",categoria:"Cognición",definicion:"Razonamiento basado en reglas."},
{palabra:"DECISION",categoria:"Cognición",definicion:"Elección entre alternativas."},
{palabra:"ESTUDIO",categoria:"Aprendizaje",definicion:"Actividad para adquirir conocimientos."},
{palabra:"SABER",categoria:"Aprendizaje",definicion:"Conjunto de conocimientos adquiridos."},
{palabra:"PRACTICA",categoria:"Aprendizaje",definicion:"Repetición para mejorar habilidades."},
{palabra:"LECCION",categoria:"Aprendizaje",definicion:"Enseñanza obtenida mediante experiencia."},
{palabra:"EJERCICIO",categoria:"Aprendizaje",definicion:"Actividad orientada al aprendizaje."}
],
normal:[
{palabra:"VIGILANCIA",categoria:"Atención",definicion:"Mantenimiento de la atención."},
{palabra:"SEGUIMIENTO",categoria:"Atención",definicion:"Mantener el foco sobre una actividad."},
{palabra:"OBSERVADOR",categoria:"Atención",definicion:"Presta atención a detalles."},
{palabra:"SELECTIVO",categoria:"Atención",definicion:"Prioriza información relevante."},
{palabra:"RETENCION",categoria:"Memoria",definicion:"Conservación de información."},
{palabra:"ASOCIACION",categoria:"Memoria",definicion:"Relación entre conocimientos."},
{palabra:"REMEMORAR",categoria:"Memoria",definicion:"Traer recuerdos a la mente."},
{palabra:"REPETICION",categoria:"Memoria",definicion:"Fortalece el recuerdo."},
{palabra:"DETECCION",categoria:"Percepción",definicion:"Identificación inicial de estímulos."},
{palabra:"ESTIMULO",categoria:"Percepción",definicion:"Elemento que provoca una respuesta."}
],
dificil:[
{palabra:"CONCENTRACION",categoria:"Atención",definicion:"Capacidad de sostener la atención."},
{palabra:"FOCALIZACION",categoria:"Atención",definicion:"Dirección voluntaria de la atención."},
{palabra:"PRIORIZACION",categoria:"Atención",definicion:"Selección de información importante."},
{palabra:"DISTRACCION",categoria:"Atención",definicion:"Desviación de la atención."},
{palabra:"RECUPERACION",categoria:"Memoria",definicion:"Acceso a información almacenada."},
{palabra:"CONSOLIDACION",categoria:"Memoria",definicion:"Estabilización de recuerdos."}
]
};

let palabrasPartida=[],indice=0,puntaje=0,ayudas=0,valor=1;

function mostrarDificultades(){intro.classList.add("hidden");dificultad.classList.remove("hidden");}
function iniciarJuego(n){dificultad.classList.add("hidden");juego.classList.remove("hidden");palabrasPartida=[...banco[n]].sort(()=>Math.random()-0.5).slice(0,10);mostrar();}
function mezclar(t){let a=t.split("");for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a.join(" ");}
function mostrar(){let p=palabrasPartida[indice];progreso.textContent=`Concepto ${indice+1} de ${palabrasPartida.length}`;letras.textContent=mezclar(p.palabra);respuesta.value="";ayuda.textContent="";valor=1;}
function usarAyuda(){let p=palabrasPartida[indice];if(valor===1){ayuda.textContent=p.definicion;valor=.75;}else if(valor===.75){ayuda.textContent+=" | Empieza por: "+p.palabra[0];valor=.5;}valorPuntos.textContent="Valor actual: "+valor;ayudas++;}
function verificarRespuesta(){let p=palabrasPartida[indice];let r=respuesta.value.trim().toUpperCase();if(r===p.palabra){puntaje+=valor;alert("✅ Correcto\n"+p.palabra+"\n"+p.categoria+"\n"+p.definicion);}else{alert("❌ Incorrecto\nRespuesta: "+p.palabra+"\n"+p.categoria+"\n"+p.definicion);}indice++; if(indice>=palabrasPartida.length)fin(); else mostrar();}
function fin(){juego.classList.add("hidden");resultado.classList.remove("hidden");puntajeFinal.textContent="Nivel de reconocimiento: "+puntaje.toFixed(2)+"/10";estadisticas.textContent="Ayudas utilizadas: "+ayudas;}
