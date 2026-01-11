# Guide d'Ajout de Contenu - Portfolio

Ce guide explique comment ajouter du contenu a ton portfolio sans avoir besoin d'un LLM.

## Structure du Projet

```
portfolio/
└── src/
    └── content/
        ├── projects/           # Tes projets
        │   └── mon-projet/
        │       ├── meta.json   # Donnees du projet
        │       └── index.md    # Description longue
        ├── blog/               # Articles de blog
        │   └── 2025-01-10-mon-article.md
        ├── methodology/        # Contenu methodologie
        └── about/              # Contenu About
```

---

## Ajouter un Nouveau Projet

### Etape 1: Creer le dossier

Cree un nouveau dossier dans `src/content/projects/` avec un nom en minuscules et tirets :

```
src/content/projects/mon-nouveau-projet/
```

### Etape 2: Creer meta.json

Cree un fichier `meta.json` avec cette structure :

```json
{
  "title": "Nom du Projet",
  "slug": "mon-nouveau-projet",
  "tagline": "Une phrase courte qui decrit le projet",
  "description": "Description plus longue du projet (2-3 phrases).",
  "status": "production",
  "featured": false,
  "startDate": "2025-01-01",
  "endDate": "2025-06-01",
  "demoUrl": "https://mon-projet.com",
  "githubUrl": "https://github.com/username/projet",
  "techStack": {
    "frontend": ["React", "TypeScript"],
    "backend": ["Node.js", "Express"],
    "database": ["MongoDB"]
  },
  "metrics": {
    "testsCount": "50+",
    "uptime": "99%"
  }
}
```

**Champs obligatoires :**
- `title` : Nom affiche
- `slug` : Doit correspondre au nom du dossier
- `tagline` : Phrase courte
- `description` : Description plus detaillee
- `status` : `production`, `development`, `archived`, ou `planning`

**Champs optionnels :**
- `featured` : `true` pour mettre en avant sur la homepage
- `demoUrl`, `githubUrl` : Liens
- `techStack` : Technologies par categorie
- `metrics` : Metriques a afficher

### Etape 3: Creer index.md (optionnel)

Pour une description longue :

```markdown
---
title: "Nom du Projet"
description: "Description pour SEO"
---

# Nom du Projet

Ton contenu ici en Markdown...

## Section 1

Texte...

## Section 2

Texte...
```

---

## Ajouter un Article de Blog

### Etape 1: Creer le fichier

Cree un fichier dans `src/content/blog/` avec ce format de nom :

```
YYYY-MM-DD-titre-en-minuscules.md
```

Exemple : `2025-01-15-mon-premier-article.md`

### Etape 2: Ecrire l'article

```markdown
---
title: "Titre de l'Article"
date: "2025-01-15"
description: "Description courte pour les previews et SEO"
tags: ["tag1", "tag2", "tag3"]
featured: false
---

# Titre de l'Article

Ton contenu ici...

## Section

Texte avec **gras** et *italique*.

- Liste item 1
- Liste item 2

### Code

```python
print("Hello World")
```

## Conclusion

Texte final.
```

**Frontmatter obligatoire :**
- `title` : Titre de l'article
- `date` : Date au format YYYY-MM-DD
- `description` : Description courte

**Frontmatter optionnel :**
- `tags` : Liste de tags
- `featured` : `true` pour mettre en avant

---

## Syntaxe Markdown Rapide

| Element | Syntaxe |
|---------|---------|
| Titre 1 | `# Titre` |
| Titre 2 | `## Titre` |
| Titre 3 | `### Titre` |
| Gras | `**texte**` |
| Italique | `*texte*` |
| Lien | `[texte](url)` |
| Image | `![alt](url)` |
| Code inline | `` `code` `` |
| Liste | `- item` |
| Liste numerotee | `1. item` |

---

## Deployer les Changements

Apres avoir ajoute du contenu :

```bash
# 1. Verifier localement
cd portfolio
npm run dev
# Ouvre http://localhost:4321

# 2. Si tout est bon, build
npm run build

# 3. Commit et push
git add .
git commit -m "Add new blog post: titre"
git push

# Netlify deploiera automatiquement
```

---

## Astuces

### Previsualiser localement

```bash
cd portfolio
npm run dev
```

Ouvre http://localhost:4321 - les changements se rafraichissent automatiquement.

### Valider le JSON

Si tu as des erreurs, verifie ton JSON sur https://jsonlint.com/

### Images

Place les images dans `public/images/` et reference-les avec `/images/mon-image.png`

---

## Exemples

### Projet minimal

```json
{
  "title": "Script Python",
  "slug": "script-python",
  "tagline": "Automatisation de taches",
  "description": "Un script qui automatise X, Y, Z.",
  "status": "production"
}
```

### Article minimal

```markdown
---
title: "Titre"
date: "2025-01-15"
description: "Description"
---

Contenu de l'article.
```

---

## Questions?

Si tu as des questions ou veux des fonctionnalites supplementaires, demande simplement dans une session Claude Code!
