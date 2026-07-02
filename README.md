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

## 🖼️ Vos photos (déjà intégrées)

Vos 14 photos sont dans `assets/img/` et déjà utilisées :
- **Sablage** → `IMG_0077.jpeg` · **Vaporblasting** → `IMG_9666.jpeg` · **Peinture Époxy** → `IMG_0084.jpeg` · **Diamantage** → `IMG_0359.jpeg`
- **Galerie** : les 14 photos défilent dans le carrousel.

Elles ont été **optimisées pour le web** (redimensionnées à 1800 px, ~35 Mo → ~5 Mo au total) pour un chargement rapide. Les originaux restent sur votre appareil.

**Changer la photo d'une prestation** : dans `assets/css/style.css`, modifiez l'`url(...)` de la classe concernée (`.visual-sablage`, `.visual-vapor`, `.visual-epoxy`, `.visual-diamant`).
**Changer la galerie** : modifiez les `background-image` des `<figure class="slide">` dans `index.html`.

## 🇫🇷 Le logo

Le logo affiché est une version **SVG tricolore** (bleu-blanc-rouge) recréée d'après votre marque. Pour utiliser **votre fichier exact** :
1. Déposez-le dans `assets/img/` (ex. `logo.png`, fond transparent).
2. Signalez-le moi et je l'intègre dans l'en-tête, le hero, le préchargement et le pied de page — ou remplacez les blocs `<svg class="brandmark">` / `<span class="logo__mark">` par `<img src="assets/img/logo.png" alt="TMCustom">`.

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
