# Portfolio

Portfolio personnel de **Nermine Khadhraoui** — data analyst en alternance, étudiante en Bachelor Data & IA à HETIC.

Site statique, sans dépendance ni build. Tout est en HTML, CSS et JavaScript natif.

## Structure

```
.
├── index.html              Page unique, découpée en sections commentées
├── assets/
│   ├── css/
│   │   ├── tokens.css      Couleurs, polices, rayons, reset — à modifier en premier
│   │   └── style.css       Mise en page des panneaux et composants
│   ├── js/
│   │   └── main.js         Défilement fluide, compteurs animés, copie de l'email
│   └── img/
│       ├── favicon.svg     Icône d'onglet
│       └── README.md       Formats attendus pour la photo et l'aperçu social
├── .nojekyll               Désactive Jekyll sur GitHub Pages
└── .gitignore
```

## Personnaliser

| Je veux changer… | Fichier | Où |
|---|---|---|
| Les couleurs | `assets/css/tokens.css` | bloc `:root` en haut |
| Les polices | `assets/css/tokens.css` + `index.html` | variables `--sans` / `--script` et le `<link>` Google Fonts |
| Les textes, chiffres, projets | `index.html` | chaque section porte un commentaire |
| Les animations | `assets/css/style.css` | section `motion` en bas |
| La photo | `assets/img/` | voir le README du dossier |

Les couleurs sont toutes définies dans `tokens.css` : changer `--blue` suffit à changer l'accent de tout le site.

## Prévisualiser en local

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000

## Mettre en ligne

Le site est publié sur GitHub Pages à l'adresse https://nerminekh4.github.io/Portfolio/

Settings → Pages → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
Chaque `git push` sur `main` met le site à jour en une à deux minutes.

## À compléter

- [ ] Ajouter `assets/img/nermine.jpg` et activer la balise `<img>` du hero
- [ ] Vérifier les quatre chiffres du panneau « En chiffres »
- [ ] Remplacer le lien LinkedIn
- [ ] Remplacer les trois mini-graphiques par de vraies données
- [ ] Ajouter les projets personnels du GitHub
