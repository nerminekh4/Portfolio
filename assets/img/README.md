# Images

Déposer ici :

| Fichier | Usage | Format conseillé |
|---|---|---|
| `nermine.jpg` | Photo du hero | portrait 4:5, ~1200 x 1500 px, < 300 Ko |
| `og.jpg` | Aperçu au partage (LinkedIn, WhatsApp) | 1200 x 630 px |
| `favicon.svg` | Icône d'onglet | déjà fourni |

Après avoir ajouté `nermine.jpg`, remplacer dans `index.html` :

```html
<div class="frame"><span class="ph">Ta photo ici<br>portrait 4:5</span></div>
```

par :

```html
<div class="frame"><img src="assets/img/nermine.jpg" alt="Nermine Khadhraoui"></div>
```
