# Objectif

Votre programme doit détruire les vaisseaux ennemis en tirant sur l'ennemi le plus proche à chaque tour.

# Règles
Les vaisseaux ennemis approchent en ligne droite vers votre canon.

À chaque début d'un tour de jeu (dans la boucle game loop), vous obtenez les informations des deux ennemis les plus proches :

variable enemy1 : le nom de l'ennemi 1.
variable dist1 : la distance à laquelle se trouve l'ennemi 1.
variable enemy2 : le nom de l'ennemi 2.
variable dist2 : la distance à laquelle se trouve l'ennemi 2.

Avant la fin du tour (fin de la boucle), vous devez indiquer en sortie le nom de l'ennemi le plus proche. Pour afficher le nom de l'ennemi le plus proche, vous devez utiliser la variable enemy1 ou enemy2.
