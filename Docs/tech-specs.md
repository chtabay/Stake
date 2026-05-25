# Exigences techniques — Le coût d’avoir raison

> Document d'exigences techniques et architecturales.

---

# Objectifs techniques du projet

La plateforme doit permettre :

- le dépôt structuré de takes ;
- le stockage durable des engagements ;
- la définition de protocoles de résolution ;
- la gestion de preuves ;
- la gestion d'engagements économiques limités ;
- la résolution traçable des takes ;
- l'archivage long terme ;
- l'auditabilité des décisions et événements.

Le système doit privilégier :
- la traçabilité ;
- l'intégrité ;
- la résilience ;
- l'explicabilité ;
- la stabilité des données dans le temps.

---

# Principes architecturaux

## 1. La take est l'objet central

Toute l'architecture doit être organisée autour de la take.

Une take constitue :
- un document ;
- un protocole ;
- un contrat logique ;
- un objet d'archivage.

Les autres composants gravitent autour :
- preuves ;
- parties ;
- engagements ;
- résolutions ;
- arbitrages ;
- redistributions.

---

## 2. Une take doit être immutable après scellement

Avant scellement :
- négociation possible ;
- modifications possibles ;
- amendements possibles.

Après scellement :
- les éléments critiques deviennent immuables ;
- toute modification doit produire une nouvelle version traçable.

Les éléments concernés incluent notamment :
- protocole ;
- échéance ;
- preuves ;
- règles de résolution ;
- montants ;
- parties engagées.

---

## 3. Tout événement doit être historisé

Le système doit conserver :
- l'historique des modifications ;
- les validations ;
- les refus ;
- les résolutions ;
- les arbitrages ;
- les redistributions ;
- les décisions automatiques.

Les journaux doivent être :
- auditables ;
- horodatés ;
- non destructifs.

---

# Architecture fonctionnelle

---

# Module : gestion des takes

## Fonctionnalités minimales

Création :
- titre ;
- description ;
- échéance ;
- type de résolution ;
- preuves attendues ;
- montants ;
- causes bénéficiaires ;
- parties engagées.

Fonctionnalités :
- brouillon ;
- négociation ;
- scellement ;
- archivage ;
- résolution ;
- suspension ;
- invalidation.

---

# Module : protocoles de résolution

Le système doit supporter plusieurs types de résolution.

## Résolutions automatiques

Sources possibles :
- APIs ;
- données publiques ;
- cours financiers ;
- statistiques officielles ;
- résultats électoraux ;
- données horodatées.

---

## Résolutions documentaires

Le système doit permettre :
- upload de documents ;
- stockage de preuves ;
- attestations ;
- constats ;
- audits ;
- preuves notariales.

---

## Résolutions complexes

Le système doit permettre :
- protocoles personnalisés ;
- workflows manuels ;
- validation multi-parties ;
- arbitrage externe.

---

# Module : gestion des preuves

Les preuves doivent être :
- stockées durablement ;
- horodatées ;
- versionnées ;
- liées à une take ;
- consultables selon permissions.

Le système doit permettre :
- documents ;
- images ;
- liens externes ;
- signatures ;
- attestations ;
- références API ;
- preuves notariales.

---

# Module : validation des takes

Le système doit pouvoir :
- détecter les takes trop vagues ;
- détecter les contradictions ;
- détecter les protocoles incomplets ;
- suspendre une take ;
- demander des corrections.

Les validations peuvent être :
- automatiques ;
- hybrides ;
- humaines.

Les décisions doivent être :
- explicables ;
- motivées ;
- historisées.

---

# Module : négociation

Avant scellement :
- les parties doivent pouvoir discuter ;
- proposer des amendements ;
- contester des preuves ;
- modifier les critères ;
- accepter explicitement les protocoles.

Le système doit tracer :
- les propositions ;
- les refus ;
- les validations ;
- les versions successives.

---

# Module : engagement économique

Le système doit permettre :
- dépôt de fonds ;
- immobilisation temporaire ;
- restitution ;
- redistribution ;
- traçabilité des mouvements.

Le système doit éviter :
- les comportements assimilables à du trading ;
- les transferts compétitifs agressifs ;
- les mécanismes spéculatifs.

---

# Contraintes financières

Les montants :
- sont publics ;
- doivent être horodatés ;
- doivent être associés à une identité ou pseudonyme.

Les mouvements doivent être :
- auditables ;
- historisés ;
- non ambiguës.

---

# Module : causes bénéficiaires

Le système doit permettre :
- listes de causes ;
- redistributions composites ;
- pourcentages ;
- gouvernance des causes ;
- validation des bénéficiaires.

Les causes doivent pouvoir être :
- activées ;
- suspendues ;
- archivées.

---

# Module : identité et conformité

Le système doit supporter :
- pseudonymat ;
- comptes vérifiés ;
- conformité réglementaire ;
- séparation identité publique / identité légale.

Le système doit pouvoir intégrer :
- KYC ;
- AML ;
- obligations légales locales ;
- limitations géographiques.

---

# Module : archivage

Le projet doit être conçu comme un système d'archivage durable.

Le système doit permettre :
- export ;
- consultation historique ;
- versionnage ;
- reconstruction temporelle ;
- preuve d'antériorité.

---

# Exigences de traçabilité

Chaque événement doit posséder :
- un horodatage ;
- un auteur ;
- un contexte ;
- un identifiant unique ;
- un historique consultable.

---

# Exigences de sécurité

Le système doit protéger :
- les fonds ;
- les preuves ;
- les identités réelles ;
- les historiques ;
- les protocoles.

---

# Exigences de résilience

Le système doit résister :
- aux suppressions accidentelles ;
- aux contestations ;
- aux incohérences ;
- aux conflits de version ;
- aux litiges de résolution.

---

# Exigences UX

Le système doit privilégier :
- la lisibilité ;
- la stabilité ;
- la compréhension des protocoles ;
- la consultation historique ;
- l'explicabilité.

Le système doit éviter :
- les mécaniques de feed ;
- les logiques de dopamine rapide ;
- les interactions impulsives.

---

# Exigences de transparence

Les utilisateurs doivent pouvoir consulter :
- l'état d'une take ;
- les règles ;
- les preuves ;
- les événements ;
- les montants ;
- les redistributions ;
- les décisions de validation.

---

# États possibles d'une take

Exemples d'états :

- brouillon ;
- en négociation ;
- en attente de validation ;
- scellée ;
- suspendue ;
- en résolution ;
- résolue ;
- invalidée ;
- archivée.

---

# Exigences réglementaires

Le système devra anticiper :
- AML/KYC ;
- réglementation financière ;
- conservation légale ;
- responsabilité des arbitrages ;
- fiscalité ;
- conformité internationale.

---

# Questions techniques ouvertes

- Architecture monolithique ou modulaire ?
- Besoin de blockchain ou non ?
- Type de stockage long terme ?
- Besoin de signatures cryptographiques ?
- Système de preuve externe ?
- Gestion des arbitrages humains ?
- Workflow de résolution complexe ?
- Politique de suppression ?
- Gestion des forks de takes ?
- API publique ?
- Moteur de recherche temporel ?
- Compatibilité juridique internationale ?