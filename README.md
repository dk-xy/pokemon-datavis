# Visualisation de donnée | Pokémon
## Context
### [The Complete Pokémon Database](https://www.kaggle.com/rounakbanik/pokemon)

Un premier dataset sera utilisé contenant les caractéristiques principales des Pokémon, tels que leur taille, poids, et statistiques. Il a été trouvé sur Kaggle et crée par [Rounak Balik](https://www.linkedin.com/in/rounakbanik/), data scientist à McKinsy. En plus d’avoir un bon parcours professionnel, il participe à des projets open source et à publier plusieurs dataset très complets.

### [Smogon 6v6 Tier list](https://www.kaggle.com/notgibs/smogon-6v6-stats-analysis/data)

Un deuxième dataset sera utilisé pour observer le classement des tiers en combats compétitifs. Ces statistiques sont recueillies sur la base de la liste pseudo-officiel de [Smogon University](https://www.smogon.com/), une académie établissant des règles pour les affrontements.
Des statistiques de Pokémon Showdown seront utilisé si elles peuvent être trouvée au format voulu. Elles sont autrement disponibles au format .txt

### Description
Le premier set me permettra de récupérer les information principales suivante

| ID | Nom  |Génération| Types 1 & 2 | Statistiques | Taille | Poids | Sexe |
| -- | --   | --       | --          | --           | --     | --    | --   |

Le deuxième set est la liste des Pokémon triés par popularité d’utilisation. Ici les informations sont redondantes, mais l’ordre de la liste ainsi que le classement des tiers me sera utile.

Si le temps le permet, il est possible que j'utilise [les données des matches de Pokémon Showdown](https://www.smogon.com/stats/),un simulateur de batail en ligne très populaire utilisé partout dans le monde.

### But
#### Exploration

The Pokémon Company sort, en moyenne, une 100aine de Pokémons par génération. Mais combien sont utilisés vraiment ? favorisent-ils un type plutôt qu’un autre ?
Dans le dessin animé, c’est toujours Pikachu qui est montré comme grand combattant, mais est-ce que la taille et le poids des Pokémons utilisé en combats compétitifs reflètent bien ce qui se passe dans les jeux ? 

### Références
#### Reddit - r/dataisbeautiful
- [Combinaision de type](https://plotapi.com/gallery/posts/showcase/pokemon-types-with-plotapi-chord/)
- [Heatmap des types](https://www.reddit.com/r/dataisbeautiful/comments/raxwax/oc_pok%C3%A9mon_type_combinations_heatmap/)

#### Medium
 Ces graphes sont accompagnés de textes pour raconter une histoire mais sont moins impréssionants...
 - [Visualisations basiques des stats](https://medium.com/analytics-vidhya/data-visualization-pok%C3%A9mon-dataset-48e57690830d)
 - [Heatmaps des stats faits en R](https://medium.com/@hanahshih46/pokemon-data-visualization-and-analysis-with-r-60970c8e37f4)