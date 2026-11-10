# Game Brief: La Última Vela

## In your words
1. Idea: Superviviente de hordas
(Preguntas 4 a 7 sin responder: opción habitual.)

**Pitch:** Un farolero solitario cruza un cementerio maldito durante 10 minutos mientras la oscuridad escupe hordas cada vez mayores; sus armas disparan solas, tú solo decides hacia dónde caminar y qué mejora elegir. *(inferred (strong))*

**Genre:** survivors-like

**Controls:** WASD o flechas para moverte; ratón o teclas 1-3 para elegir mejora; Esc para pausar. *(guessed)*

**Question:** ¿Es divertido pasar de huir a arrasar la multitud durante una partida de 10 minutos? *(guessed)*

**Hooks:** La luz de tu farol es tu arma y tu radio de recogida: cuanto más crece, más pantalla iluminas y más gemas atraes. *(guessed)*

**Intent:** payoff builds (from Vampire Survivors)

## Look and references
- Look: pixel art de fantasía gótica; noche azul-violeta muy oscura, el farol proyecta un círculo cálido ámbar; enemigos en rojo y verde enfermizo, siempre más contrastados que tus efectos pálidos; lápidas, verjas y árboles secos en el suelo; detalle propio: el borde de la luz parpadea y los enemigos solo se ven nítidos al entrar en ella. Cada figura dibujada, nada de emoji ni círculos lisos. *(provisional)*
- References: Vampire Survivors (el bucle de autoataque y la elección al subir de nivel) *(inferred (strong))*.
- View: 2D · Camera: cenital que sigue al jugador, el campo se desplaza, píxeles enteros. *(provisional)*

## First minute
Apareces en el centro con el farol encendido y una sola arma: una chispa que salta sola al enemigo más cercano. A los pocos segundos llegan murciélagos lentos por los bordes; al caminar aprendes que tu arma dispara sola. Los enemigos caídos sueltan gemas que vuelan hacia ti al acercarte. Hacia los 30-40 segundos subes de nivel: el juego se pausa y eliges una de tres mejoras, cada una diciendo qué hace. Eliges, la horda reanuda y ves la nueva arma barrer el grupo que te perseguía: ahí paga el gancho. *(guessed)*

## Challenge
Hacia el minuto 2 llega el primer problema serio: esqueletos más duros que forman un anillo y te cortan el paso. Cada par de minutos se suma un enemigo distinto (rápido, duro o que dispara) y la multitud se espesa; en el minuto 10 aparece un jefe. Si mueres, la partida empieza de cero, pero conservas el oro para mejoras permanentes pequeñas. *(provisional)*

## Core loop
- Muévete para esquivar mientras tus armas atacan solas
- Recoge gemas, sube de nivel, elige una mejora entre tres
- La horda crece y tu construcción también
- Sobrevive 10 minutos y vence al jefe, o muere y vuelve a empezar con oro para mejoras

## Goal & fail state
- Ganas al sobrevivir 10 minutos y derrotar al jefe final; pierdes cuando tu vida llega a cero. *(provisional)*

## Features
- [ ] Partida cronometrada de 10 minutos, reloj y nivel siempre visibles, jefe al final
- [ ] Armas que atacan solas; tú solo te mueves
- [ ] Al subir de nivel: pausa y elección de 1 entre 3 armas o mejoras (un arma repetida sube de nivel), huecos limitados
- [ ] Gemas que vuelan hacia ti dentro del radio de luz; una mejora lo amplía
- [ ] 4 tipos de enemigo, cada uno ataca de forma distinta (lento, rápido, duro, que dispara), más el jefe
- [ ] Cada nivel de arma cambia lo que ves: una cuchilla más, un anillo más ancho
- [ ] Evolución: un arma al máximo más el objeto pasivo correcto evoluciona, con la receta mostrada
- [ ] Oro entre partidas para mejoras permanentes pequeñas, guardado

## Keep
-

## Avoid
-

## Out of scope
- Muchos personajes y escenarios: grow it
- Un libro de evoluciones y desbloqueos: grow it
- Cofre que gira varias recompensas: change it after play
- Protección contra rachas de malas ofertas: change it after play
- Pantalla de colección: change it after play
- Dos jugadores en una pantalla: change it after play
- Partidas diarias y clasificaciones online: needs a server

## Build order
1. La rebanada: una partida de 10 minutos con movimiento, 3-4 armas, subida de nivel, 4 enemigos, jefe y muerte con reinicio
2. Evoluciones y oro permanente
3. Ajuste de dificultad y efectos visuales

---
**Kill condition:** si a los 5 minutos la partida se siente igual que en el minuto 1 tras dos rondas de ajuste. *(guessed)*

**Who it's for / what they feel:** jugadores casuales que quieren sentirse imparables en una partida corta. *(guessed)*

**Games you love / don't:** —
