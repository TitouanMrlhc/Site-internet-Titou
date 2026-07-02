# TMCustom — Site vitrine

Site vitrine statique, moderne et premium (thème sombre, jeux de lumière, animations) pour **TMCustom** — traitement et revêtement de surface métallique à Brive-la-Gaillarde.

## 🚀 Mettre le site en ligne

Le site est **100 % statique** (HTML / CSS / JS, sans build). Pour le publier, deux options :

**Option simple — hébergeur classique (o2switch, OVH, Hostinger…)**
Envoyez le contenu du dossier par FTP à la racine de votre hébergement (`public_html`).

**Option gratuite — Netlify / Vercel / GitHub Pages**
- Netlify : glissez-déposez le dossier sur [app.netlify.com/drop](https://app.netlify.com/drop).
- GitHub Pages : activez Pages sur la branche du dépôt (dossier racine).

Le point d'entrée est `index.html`.

## 📁 Structure

```
index.html                → page d'accueil (toutes les sections)
assets/
  css/style.css           → thème & styles
  js/main.js              → animations, menu, carrousel
  img/favicon.svg         → icône du site (+ vos photos ici)
legal/
  mentions-legales.html
  confidentialite.html
  cgv.html
  expedition.html
  remboursement.html
```

## 🖼️ Ajouter vos vraies photos

Les visuels des prestations et de la galerie sont pour l'instant des **rendus CSS** (dégradés animés) servant de placeholders premium. Pour les remplacer par vos photos :

1. Déposez vos images dans `assets/img/` (format `.webp` ou `.jpg` recommandé, ~1600 px de large).
2. Dans `assets/css/style.css`, remplacez le fond de la classe concernée par votre image. Exemple pour le vaporblasting :

   ```css
   .visual-vapor{
     background-image: url("../img/vaporblasting.jpg");
     background-size: cover;
     background-position: center;
   }
   ```

3. Pour la galerie, faites de même sur `.slide--1` à `.slide--6`.

Astuce : gardez un rendu sombre/premium et des photos nettes bien cadrées pour l'effet « wow ».

## ✏️ Informations à compléter avant mise en ligne

- **Pages légales** : renseignez SIRET, hébergeur, forme juridique (repères `[à compléter]` dans `legal/`).
- **Réseaux sociaux** : le lien Facebook pointe vers `facebook.com` — remplacez-le par l'URL exacte de votre page dans `index.html` (recherchez `facebook.com`).
- **Avis clients** : 5 avis d'exemple sont fournis. Remplacez-les par vos vrais avis (prénom, ville, texte) dans la section `#avis` de `index.html`.
- **Carte** : centrée sur Brive-la-Gaillarde. Ajustez le marqueur si besoin (paramètre `marker=` de l'iframe OpenStreetMap dans `index.html`).

## 🎨 Personnaliser les couleurs

Toutes les couleurs sont centralisées en haut de `assets/css/style.css` dans le bloc `:root` (variables CSS). Modifiez-les pour ajuster le thème global.

## ⚙️ Contenu inclus

- Accueil avec logo à révélation progressive + menu déroulant Prestations
- Section « Pourquoi TMCustom » (3 piliers)
- Avantages détaillés : Sablage, Vaporblasting (thème eau), Peinture Époxy (couleurs éclatantes), Diamantage (thème chrome/argent) + matériaux
- Notre Histoire · F.A.Q · Galerie (carrousel)
- Avis clients · Contact (coordonnées, horaires, carte)
- Pied de page complet avec toutes les pages légales

---
*Savoir-faire Français · Brive-la-Gaillarde (19)*
