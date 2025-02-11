# Checkpoint 

Réaliser un "checkpoint" animé.

<video width="640" src="assets/GD1-CheckpointDemo2.mp4" muted autoplay></video>

<img width="640" src="assets/GD1-Checkpoint-1.jpg">

<img width="640" src="assets/GD1-Checkpoint-2.jpg">

## ⚡️ Demande 

Réaliser un "checkpoint" animé qui peut être activé ou desactivé.

### 📌 Contraintes : 
- Créer des modèles 3D originaux ("static mesh" via "Modeling Mode")
- Créer des matériaux originaux, animés, dont :
  - certains animés
  - certains transparent
  - (optionel) certains faisant usage de masque 
- Créer une animation simple d'activation incluant :
  - des transformations spatiales (translation, rotation, scale)
  - des animation de matériaux (via "parameter", opacité, couleur, vitesse etc.)
- Méthodes de travail (workflow)
  - Tous les fichiers créés doivent :
    - être préfixés par le préfixe 3 lettres `xxx_`
    - être contenus dans le dossier personnel `Content/Art/xxx`
  - Il est interdit de modifier les fichiers en dehors de son dossier personnel.
  - Le travail doit être publié sur Github 
    - UE Editor: Submit Content
    - VSCode terminal: `git pull` / `git push`

### 🎯 Critères d'évaluation :
- Workflow (préfixe, dossier de travail, git / github) 🔹 7/20
- Implication technique (modélisation, matériaux, animation, blueprint) 🔹 7/20
- Qualité artistique (design, couleur, motion design) 🔹 7/20

## 📚 Notions abordées :

- Concept généraux
  - ✅ Transform Relative / World

- Matériaux
  - ✅ Opaque / transparent
  - ✅ Animations basées sur le temps
  - ✅ Matériaux dynamiques (parameters)
  - ✅ Utiliser les masques, composer (RGBA, Min, Max, Add, Multiply)

- Modélisation
  - ✅ Modélisation basique (translation, extrusion)
  - ✅ Bevel !!!
  - ✅ Opération booléennes

- Figma (Usage basique)
  - ✅ Créer un cadre (frame)
  - ✅ Dessiner / Composer
  - ✅ Exporter PNG

- Animation dans la timeline (Level Sequencer)
  - ✅ Manipulation images clés (création)
  - ✅ Courbes de transition

- Blueprints
  - ✅ Modifications basiques des composants (visibilité, position, rotation)
  - ✅ Différence Event Graph / Construct Script 
  - ✅ La puissance des variables (One Variable To Rule Them All)
  - ✅ Modifier dynamiquement des matériaux
  - ✅ Déclencher une animation (Level Sequence Player)

- Niagara (particle engine)
  - ✅ Mise en place rapide d'un système de particules.
