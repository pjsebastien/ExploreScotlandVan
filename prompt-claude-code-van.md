# Prompt Claude Code — Système blog SEO + pages villes pour site de location de van

---

## CONTEXTE DU PROJET

Tu travailles sur un site Next.js de location de van ciblant un pays spécifique. Avant toute action, identifie ce pays en lisant la configuration existante du projet (fichier de config, métadonnées, contenu des pages existantes). Toutes les décisions que tu prends doivent être cohérentes avec ce pays cible.

**Détection automatique :** lis `next.config.js`, `app/layout.tsx`, les pages existantes et le `package.json` pour identifier :
- le pays cible et la langue du site ;
- le mode de rendu (`output: 'export'` = statique, ou mode standard = SSR/SSG hybride) ;
- les composants réutilisables existants ;
- la gestion des images et des données (JSON, MDX, CMS, base de données).

---

## MISSION GLOBALE

Tu dois accomplir deux grandes missions dans cet ordre :

1. Créer un système de blog SEO avec 12 articles (un par mois de l'année) publiés progressivement selon un calendrier
2. Identifier et créer les pages villes manquantes (max 5) en suivant le modèle des pages existantes

---

## ÉTAPE 0 — ANALYSE PRÉLIMINAIRE DU PROJET (obligatoire avant tout)

Avant d'écrire une seule ligne de contenu ou de code, effectue ces analyses dans l'ordre.

### 0.1 — Lecture du projet existant

- Parcoure l'arborescence complète du projet
- Identifie le pays cible, la langue, le ton éditorial des pages existantes
- Repère la structure des pages villes existantes (composants utilisés, champs, format des slugs, images associées)
- Repère comment les métadonnées SEO sont gérées (next/head, metadata API, next-seo, autre)
- Identifie où sont stockées les images et quel nommage est utilisé
- Note la gestion des données (fichiers JSON, MDX, base de données, CMS headless)
- Vérifie si `@tailwindcss/typography` est installé (nécessaire pour le rendu `prose` des articles). Si absent, l'installer et l'ajouter aux plugins dans `tailwind.config.ts`

### 0.2 — Inventaire des villes existantes

- Liste toutes les villes actuellement couvertes dans le site
- Identifie les grandes villes du pays cible qui ne sont pas encore couvertes
- Sélectionne au maximum 5 villes manquantes à fort potentiel de trafic (capitales régionales, villes touristiques majeures, hubs de transport)

### 0.3 — Analyse anti-patterns IA (à appliquer à TOUT le contenu que tu vas produire)

Avant de rédiger quoi que ce soit, intègre ces règles comme des contraintes absolues.

**Mots et formulations interdits** (typiquement surreprésentés dans les textes IA) :
- "incontournable", "essentiel", "indispensable", "crucial", "fondamental"
- "plonger dans", "explorer", "découvrir", "naviguer"
- "dans cet article", "nous allons voir", "il convient de"
- "sans oublier", "n'oublions pas", "il est important de noter"
- "de plus", "par ailleurs", "en outre", "ainsi", "certes"
- "offre", "propose", "permet de" (dans leur usage générique et répétitif)
- Toute formulation qui sonne comme une introduction de dissertation

**Règles typographiques strictement françaises** :
- Tirets longs (—) interdits pour remplacer des virgules ou des parenthèses
- Pas de majuscule à chaque mot dans les titres (style anglais interdit) : "Voyager au Portugal en Janvier : Activités Et Météo" est faux — "Voyager au Portugal en janvier : activités, météo et recommandations" est correct
- Guillemets français : « et » (avec espaces insécables) et non "quotes anglaises"
- Deux points, point-virgule et point d'exclamation précédés d'une espace insécable
- Listes à puces : chaque item commence par une minuscule sauf si c'est un nom propre, se termine par un point-virgule sauf le dernier qui prend un point

**Structure de phrase** :
- Varier la longueur des phrases (courtes et longues alternées)
- Éviter les triades ("X, Y et Z" répété comme pattern systématique)
- Pas de paragraphe qui commence par le même mot que le précédent
- Introduire des questions rhétoriques naturelles, du concret, des anecdotes de terrain

---

## ÉTAPE 1 — RECHERCHE CONCURRENTIELLE (pour chaque article et chaque page ville)

Pour chaque contenu à produire, effectue la séquence suivante avec ton web search natif.

### 1.1 — Analyse du top 5 Google

Lance une recherche sur la requête cible exacte (exemple : "voyager au Portugal en janvier").

Pour chacun des 5 premiers résultats organiques :
- Identifie le plan de l'article (H1, H2, H3)
- Relève les thèmes abordés et ceux absurdement absents
- Note la profondeur des informations (superficiel vs. expert)
- Repère les angles émotionnels ou pratiques utilisés
- Identifie les lacunes : ce que personne ne dit, ce qui manque de précision, ce qui est traité trop génériquement

### 1.2 — Stratégie de différenciation

À partir de l'analyse, construis une liste de points de différenciation :
- Informations concrètes absentes de la concurrence (prix réels, durées précises, alternatives moins connues)
- Angle van/road trip systématiquement intégré là où la concurrence reste générique
- Données météo précises avec leur impact sur le van (routes de montagne fermées, camping praticable, etc.)
- Recommandations de parking van, aires, spots gratuits quand c'est pertinent

---

## ÉTAPE 2 — CRÉATION DU SYSTÈME BLOG

### 2.1 — Structure des fichiers à créer

Crée la structure suivante si elle n'existe pas encore :

```
/app/blog/
  page.tsx                    ← liste des articles
  [slug]/
    page.tsx                  ← article individuel

/content/blog/                ← fichiers JSON (un par article)
  [slug].json

/lib/
  blog.ts                     ← fonctions utilitaires (getAllArticles, getPublishedArticles, etc.)
```

Adapte cette structure si le projet a déjà des conventions établies — ne les casse pas.

**Important — chargement des données :** ne pas utiliser `fs.readdirSync` / `fs.readFileSync` dans `lib/blog.ts`. Sur Vercel en mode serverless, le dossier `content/blog/` n'est pas accessible via le filesystem en runtime. À la place, importer chaque fichier JSON directement avec `import` :

```typescript
import janvier from '@/content/blog/slug-janvier.json'
import fevrier from '@/content/blog/slug-fevrier.json'
// ... etc.

const allArticles: Article[] = [janvier, fevrier, ...] as Article[]
```

Cela inclut les données dans le bundle JavaScript et fonctionne partout (build, SSR, serverless). Le `tsconfig.json` doit avoir `"resolveJsonModule": true` (c'est le cas par défaut dans Next.js).

### 2.2 — Modèle de données d'un article

Chaque article est un fichier JSON avec ces champs :

```typescript
type Article = {
  slug: string               // ex: "pays-en-van-en-janvier" (kebab-case, sans accents)
  title: string              // H1 de l'article
  metaTitle: string          // max 60 caractères
  metaDescription: string    // max 155 caractères
  publishedAt: string        // ISO 8601, date de publication programmée
  isPublished: boolean       // toujours true (la visibilité est contrôlée par publishedAt)
  month: number              // 1 à 12
  country: string            // pays cible du site
  heroImage: {
    src: string              // chemin vers l'image dans /public/images/
    alt: string              // description précise en français
    credit?: string          // crédit si image externe
  }
  tags: string[]
  sections: {
    id: string               // ancre HTML (ex: "meteo", "activites")
    title: string            // titre de la section (H2)
    content: string          // contenu HTML
    image?: {                // image optionnelle affichée en sidebar
      src: string
      alt: string
    }
  }[]
}
```

### 2.3 — Publication progressive par date

**Pas de cron, pas de variables d'environnement.** La publication est gérée uniquement par le champ `publishedAt` :

- Tous les articles ont `isPublished: true`
- La fonction `getPublishedArticles()` filtre par `publishedAt <= now`
- Les pages blog et le sitemap sont en `dynamic = 'force-dynamic'` pour vérifier la date à chaque visite
- Le premier article se publie à J+0 (date de déploiement), chaque suivant 4 jours plus tard

**Conséquence sur le mode Next.js :** ce système nécessite que le site ne soit PAS en `output: 'export'` (statique pur). Si le projet existant utilise `output: 'export'`, le retirer du `next.config.js`. Les pages restent pré-rendues en HTML (Server Components par défaut), seules les pages blog et le sitemap sont dynamiques.

```typescript
// lib/blog.ts — fonctions clés
export function getPublishedArticles(): Article[] {
  const now = new Date()
  return getAllArticles().filter(
    (a) => a.isPublished && new Date(a.publishedAt) <= now
  )
}
```

```typescript
// En haut de app/blog/page.tsx, app/blog/[slug]/page.tsx et app/sitemap.ts
export const dynamic = 'force-dynamic'
```

### 2.4 — Les 12 articles à produire

Pour chaque mois de 1 à 12, crée un article suivant ce modèle de titre :
**"Le [PAYS] en van en [mois] : météo, routes et bons plans"**

Adapte le titre selon l'analyse concurrentielle — si tous les concurrents utilisent ce format exact, différencie-toi.

**Pour chaque article, le contenu doit obligatoirement inclure ces sections :**

1. **Introduction** — accroche directe, concrète, situationnelle. 2-3 paragraphes maximum. Pas de "dans cet article nous allons".

2. **Météo du mois** — températures moyennes jour/nuit, précipitations, ensoleillement. Impact spécifique sur le voyage en van (routes praticables, camping en altitude, chaleur dans le van, etc.)

3. **Ce que tu peux faire ce mois-là** — activités réalistes pour ce mois précis, pas une liste copiée de guide touristique. Inclure ce qui ferme hors-saison, ce qui est bondé vs. tranquille.

4. **Les zones à privilégier en van** — régions, routes, parkings, aires. Concret et actionnable. Spots de nuit fiables avec détails (gratuit/payant, équipements, vue).

5. **Les pièges à éviter** — ce que les autres articles ne disent pas : routes coupées, festivals qui bloquent le stationnement, chaleur excessive pour dormir dans le van, etc.

6. **Louer un van pour ce voyage** — bloc promotionnel naturel, jamais racoleur. Intégrer des arguments spécifiques à ce mois (tarifs basse/haute saison, disponibilité, équipements saisonniers comme le chauffage en hiver).

7. **Conclusion** — courte, sans "j'espère que cet article vous a aidé".

**Longueur cible** : 1 200 à 1 800 mots selon le mois (les mois touristiques majeurs méritent plus de profondeur).

**Images dans les sections** : au moins 4 sections sur 7 doivent avoir une image en sidebar. Utiliser les images existantes du projet dans `/public/images/`. Choisir des images cohérentes avec le contenu de la section.

### 2.5 — Template de page article

La page `app/blog/[slug]/page.tsx` doit inclure :
- un hero pleine largeur avec image, titre, date et badge du mois ;
- un sommaire cliquable (card avec liste numérotée des sections) ;
- les sections avec alternance de fond (blanc/gris), numérotation, images en sidebar quand disponibles ;
- des blocs CTA affiliés insérés entre certaines sections (après section 2 et section 5) ;
- une barre de liens vers les pages villes ;
- les articles reliés en bas de page ;
- le schema JSON-LD Article.

### 2.6 — Sélection des images

Pour chaque article :

1. Parcoure d'abord les dossiers d'images existants du projet (`/public/images/` ou équivalent)
2. Analyse chaque image candidate : sujet principal, saison suggérée, ambiance, présence de van si possible
3. Sélectionne l'image la plus cohérente avec le mois et le contenu de l'article
4. Si aucune image existante ne convient, utilise une image libre de droit (Unsplash, Pexels)
5. Rédige un alt text descriptif, en français, qui décrit l'image réellement (pas le sujet de l'article)

**Ne jamais** utiliser une image de plage pour un article de janvier si le pays est nordique. **Ne jamais** utiliser une image générique de carte ou de drapeau.

### 2.7 — Intégration promotionnelle van (règle à appliquer partout)

Dans chaque article, intègre au minimum 2 mentions naturelles du service de location de van. Ces mentions doivent :
- être contextualisées (liées au mois, à la météo, à l'activité en cours de description) ;
- ne jamais sonner comme un encart publicitaire copié-collé ;
- inclure un lien interne vers la page prix ou la page d'accueil ;
- varier les formulations d'un article à l'autre.

---

## ÉTAPE 3 — SITEMAP DYNAMIQUE

### 3.1 — Règle absolue

Le sitemap ne doit **jamais** référencer un article dont la date `publishedAt` est dans le futur. Un article dont la date n'est pas encore passée n'existe pas pour Google.

### 3.2 — Implémentation

Le sitemap utilise `getPublishedArticles()` qui filtre automatiquement par date. Il doit être en `dynamic = 'force-dynamic'` pour se régénérer à chaque visite.

```typescript
export const dynamic = 'force-dynamic'

import { MetadataRoute } from 'next'
import { getPublishedArticles } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.monsite.com' // adapter au domaine du projet

  const staticRoutes: MetadataRoute.Sitemap = [
    // ... toutes les pages statiques existantes + les nouvelles pages villes
  ]

  const articles = getPublishedArticles()
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}/`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...articleRoutes]
}
```

### 3.3 — Vérification

Après implémentation, vérifie que :
- `/sitemap.xml` retourne uniquement les articles dont la date est passée
- les nouvelles pages villes sont incluses dans le sitemap
- en développement, tu peux tester en modifiant les dates `publishedAt`

---

## ÉTAPE 4 — PAGES VILLES MANQUANTES

### 4.1 — Analyse des pages existantes

Avant de créer quoi que ce soit :
- Ouvre 2 ou 3 pages villes existantes et analyse leur structure exacte
- Identifie les composants réutilisés, les props attendues, le format du contenu
- Repère les champs spécifiques : image hero, description courte, activités, parkings van, distance depuis les autres villes, etc.
- Note le format des slugs (kebab-case, avec ou sans accents, etc.)

### 4.2 — Contenu des pages villes

Pour chacune des max 5 villes manquantes identifiées en étape 0.2 :

1. Lance la recherche concurrentielle (étape 1) sur "location van [ville]" et "[ville] en van"
2. Rédige le contenu en suivant exactement la structure des pages villes existantes
3. Inclure : présentation de la ville depuis la perspective van, quoi voir, où se garer, quand venir, circuit depuis cette ville
4. Intégrer la promotion du service de location de manière contextualisée
5. Sélectionner une image représentative parmi les images existantes du projet
6. Rédiger métadonnées SEO (title, description, og:image)

### 4.3 — Intégration au site

Chaque nouvelle page ville doit :
- être ajoutée au sitemap avec une priorité de 0.8 et `changeFrequency: 'monthly'` ;
- être ajoutée au footer dans la section "Location de van" ;
- être ajoutée au header si un menu de navigation par ville existe ;
- être liée depuis les articles de blog (barre de liens "Points de départ").

---

## ÉTAPE 5 — SEO TECHNIQUE (vérifications finales)

Avant de terminer, vérifie et corrige si nécessaire :

- Toutes les pages blog et villes ont un `<title>` unique et une `<meta description>` unique
- Les balises `og:title`, `og:description`, `og:image` sont présentes
- Les images ont toutes un attribut `alt` non vide et descriptif
- Les slugs sont en kebab-case sans caractères spéciaux ni accents
- Le fichier `robots.txt` autorise l'indexation du blog
- Les liens internes entre articles et pages villes sont présents (maillage interne)
- Pas de page en `noindex` par erreur
- Le schema JSON-LD est présent sur chaque page article (type Article) et sur la page blog (type Blog)
- Le `@tailwindcss/typography` est bien installé et les classes `prose` s'appliquent correctement dans les articles

---

## RÈGLES DE TRAVAIL GÉNÉRALES

- Ne modifie jamais un fichier existant sans l'avoir lu en entier d'abord
- Si tu as un doute sur une convention du projet, lis le code existant avant d'inventer
- Si une dépendance npm est nécessaire, vérifie qu'elle n'est pas déjà installée avant de la rajouter
- Pas de variables d'environnement pour le blog : tout fonctionne avec les fichiers JSON et les dates
- Vérifie que le build passe sans erreur après chaque étape majeure

---

## ORDRE D'EXÉCUTION RECOMMANDÉ

1. Étape 0 — analyse complète du projet
2. Étape 1 — recherche concurrentielle pour le premier article (valider la méthode)
3. Étape 2 — structure blog + premier article complet (pour valider avant de générer les 11 suivants)
4. Étape 3 — sitemap dynamique
5. Générer les 11 articles restants
6. Étape 4 — pages villes manquantes
7. Étape 5 — vérifications SEO finales
