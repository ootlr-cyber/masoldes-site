#!/bin/bash
# Script pour organiser les images OSKAB téléchargées
# Exécuter depuis le dossier Téléchargements de votre Mac :
# cd ~/Downloads && bash "/chemin/vers/OSKAB_Archives/organiser_images.sh"

DEST_BASE="$(dirname "$0")"

# Créer les dossiers
mkdir -p "$DEST_BASE/01_Accueil"
mkdir -p "$DEST_BASE/02_Gammes_Cuisine"
mkdir -p "$DEST_BASE/03_Produits_Cuisine"
mkdir -p "$DEST_BASE/04_Salle_de_Bain"
mkdir -p "$DEST_BASE/05_Accessoires"
mkdir -p "$DEST_BASE/06_Plans_Travail"
mkdir -p "$DEST_BASE/07_Eviers_Robinets"
mkdir -p "$DEST_BASE/08_Inspirations"
mkdir -p "$DEST_BASE/09_Categories"

echo "=== Organisation des images OSKAB ==="
echo "Dossier destination: $DEST_BASE"

# Accueil
count=0
for f in accueil_* OSKAB_accueil_*; do
    [ -f "$f" ] && mv "$f" "$DEST_BASE/01_Accueil/" && ((count++))
done
echo "Accueil: $count fichiers"

# Gammes cuisine
count=0
for f in gammes_* IPOMA_* HELIA_* GINKO_* BORA_* STATIC_* LUPI_* OKA_* IVIA_* HOSTA_* KERIA_* FILIPEN_* IKORO_*; do
    [ -f "$f" ] && mv "$f" "$DEST_BASE/02_Gammes_Cuisine/" && ((count++))
done
echo "Gammes cuisine: $count fichiers"

# Salle de bain
count=0
for f in SDB_* sdb_*; do
    [ -f "$f" ] && mv "$f" "$DEST_BASE/04_Salle_de_Bain/" && ((count++))
done
echo "Salle de bain: $count fichiers"

# Accessoires (poignées, caissons, éclairage)
count=0
for f in ACCESSOIRES_* POIGNEES_* CAISSONS_* ECLAIRAGE_*; do
    [ -f "$f" ] && mv "$f" "$DEST_BASE/05_Accessoires/" && ((count++))
done
echo "Accessoires: $count fichiers"

# Plans de travail & crédences
count=0
for f in PDT_* CREDENCE_*; do
    [ -f "$f" ] && mv "$f" "$DEST_BASE/06_Plans_Travail/" && ((count++))
done
echo "Plans de travail: $count fichiers"

# Éviers & robinets
count=0
for f in ROBINETS_* EVIERS_*; do
    [ -f "$f" ] && mv "$f" "$DEST_BASE/07_Eviers_Robinets/" && ((count++))
done
echo "Éviers & robinets: $count fichiers"

# Inspirations & réalisations
count=0
for f in INSPI_* REALISATIONS_*; do
    [ -f "$f" ] && mv "$f" "$DEST_BASE/08_Inspirations/" && ((count++))
done
echo "Inspirations: $count fichiers"

# Catégories CDX
count=0
for f in OSKAB_cat_*; do
    [ -f "$f" ] && mv "$f" "$DEST_BASE/09_Categories/" && ((count++))
done
echo "Catégories: $count fichiers"

echo ""
echo "=== Résumé ==="
for d in "$DEST_BASE"/0*; do
    name=$(basename "$d")
    nb=$(find "$d" -type f | wc -l)
    echo "  $name: $nb fichiers"
done

echo ""
echo "Organisation terminée !"
