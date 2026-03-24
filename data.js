// data.js
const IMAGES = {
  location: "https://www.un-code-postal.com/images/la%20chapelle-sur-loire_37140.jpg",
  usse: "https://montjoye.net/images/Centre-Val-de-Loire/indre-et-loire-37/usse/chateau-usse.webp",
  langeais: "https://www.parcsetjardins.fr/data/cache/GardenPicture/picture/main/5/9/859.1606316631.jpg",
  saumur: "https://www.ot-saumur.fr/wp-content/uploads/apidae/8db026651014c195df8070f2533b7642-35937807-1600x900.jpg",
  closLuce: "https://woody.cloudly.space/app/uploads/adt-touraine/2024/11/thumbs/Chateau_du_Clos_Luce_Amboise_Credit_ADT_Touraine-Loic_Lagarde_2030_03-1-1920x960-crop-1732285009.webp",
  fontevraud: "https://www.360images.fr/images/stories/645/fontevraud_salon2.jpg",
  azayRideau: "https://www.jardins-de-france.com/sites/default/files/public/styles/visuel-fiche-jardin/public/06112020-lrdrones-azay-le-rideau-1.jpg?itok=QFtdAQPp",
  chenonceau: "https://www.valdeloire-france.com/app/uploads/2023/05/chenonceau-0772-credit-lezbroz-teddy-verneuil-1024x682.webp",
  chambord: "https://www.val-de-loire-41.travel/wp-content/uploads/2024/07/chambord-septembre-2023-dnc-olivier-marchant-1-1600par900-1600x900.jpg",
  villandry: "https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2020/07/cda20_villandry_jardin_chateau_main-tt-width-1200-height-900-fill-0-crop-1-bgcolor-ffffff.jpg",
  zoo: "https://api.cloudly.space/resize/cropratio/640/640/75/aHR0cDovL21lZGlhcy50b3VyaXNtLXN5c3RlbS5jb20vNS81LzYyMDM0MV9kb21lLWVxdWF0b3JpYWwuanBn/image.webp",
  LR: "https://www.trace-ta-route.com/wp-content/uploads/2023/01/La-Rochelle-Vieux-Port-Tours-1-blog-voyage-Trace-Ta-Route.jpg",
  canoe: "https://autourdechenonceaux.fr/tourinsoft/photoannonce/CanoeCherChenonceaux057.JPG",
  magie: "https://www.france-voyage.com/visuals/communes/blois-14520-34_w600.webp",
  fluxus: "https://www.cnap.fr/sites/default/files/styles/mobile/public/drawing/image/2024/08/FDD_mur-paysage.jpg",
  mini: "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/T5SN6DXJORHABDZ7METFCQ6RMY.jpg",
  cccod: "https://cccod.fr/wp-content/uploads/2025/08/LDB-event.png",
  gouin: "https://www.hotelgouin.fr/wp-content/uploads/2026/01/image_sacrebleu.jpg",
  mongolfiere: "https://media.sport-decouverte.com/images/productcard/t365x365/8853/0/vol-en-montgolfiere-a-chenonceau--chateaux-de-la-loire.webp",
  aquarium: "https://www.aquariumdetouraine.com/fileadmin/_processed_/9/7/csm_Tom_Bess%C3%A9-2025-69_b1ec0bcf0e.jpg",
  retro: "https://www.azay-chinon-valdeloire.com/wp-content/uploads/2024/09/3-musee-maurice-dufresne-jean-christophe-coutand-2031-12-31-medium-300x200.jpeg",
  troglodyte: "https://i.familiscope.fr/2000x1125/smart/2022/04/25/rochemenier-village-troglodytique.jpg",
  fleche: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMz5ftufapWFx3EFVRnUVhMC4pZo1JLfFF9g&s"
};

window.VOYAGE_DATA = {
  "config": {
    "homeCoords": [47.243, 0.222],
    "homeAddr": "37140 La Chapelle-sur-Loire"
  },
  "days": [
    { "id": 0, "dayName": "Samedi", "color": "#10b981", "title": "Arrivée", "route": ["LR", "location"] },
    { "id": 1, "dayName": "Dimanche", "color": "#3b82f6", "title": "Le Cœur du Val", "route": ["location", "usse", "langeais", "villandry"] },
    { "id": 2, "dayName": "Lundi", "color": "#f97316", "title": "Anjou & Tradition", "route": ["location", "saumur", "fontevraud"] },
    { "id": 3, "dayName": "Mardi", "color": "#8b5cf6", "title": "Léonard & les Minis", "route": ["location", "closLuce", "mini"] },
    { "id": 4, "dayName": "Mercredi", "color": "#ec4899", "title": "Cher & Chenonceau", "route": ["location", "chenonceau", "canoe"] },
    { "id": 5, "dayName": "Jeudi", "color": "#06b6d4", "title": "Blois & Chambord", "route": ["location", "doute", "magie", "chambord"] },
    { "id": 6, "dayName": "Vendredi", "color": "#6366f1", "title": "Azay & rétro-tech", "route": ["location", "azayRideau", "retro"] }
  ],
  "points_of_interest": [
    { "id": "location", "name": "La Chapelle-sur-Loire", "addr": "37140 La Chapelle-sur-Loire", "coords": [47.243, 0.222], "dist": "0 km", "dur": "0 min", "img": IMAGES.location },
    { "id": "usse", "name": "Château d'Ussé", "addr": "37420 Rigny-Ussé", "coords": [47.250, 0.291], "dist": "6 km", "dur": "10 min", "img": IMAGES.usse },
    { "id": "langeais", "name": "Château de Langeais", "addr": "37130 Langeais", "coords": [47.325, 0.406], "dist": "15 km", "dur": "20 min", "img": IMAGES.langeais },
    { "id": "saumur", "name": "Château de Saumur", "addr": "49400 Saumur", "coords": [47.256, -0.072], "dist": "18 km", "dur": "22 min", "img": IMAGES.saumur },
    { "id": "closLuce", "name": "Le Clos Lucé", "addr": "37400 Amboise", "coords": [47.410, 0.992], "dist": "58 km", "dur": "55 min", "img": IMAGES.closLuce, "bookingTips": "Billet coupe-file recommandé." },
    { "id": "fontevraud", "name": "Abbaye Fontevraud", "addr": "49590 Fontevraud", "coords": [47.181, 0.050], "dist": "18 km", "dur": "25 min", "img": IMAGES.fontevraud },
    { "id": "azayRideau", "name": "Azay-le-Rideau", "addr": "37190 Azay-le-Rideau", "coords": [47.259, 0.465], "dist": "22 km", "dur": "28 min", "img": IMAGES.azayRideau },
    { "id": "chenonceau", "name": "Chenonceau", "addr": "37150 Chenonceaux", "coords": [47.325, 1.070], "dist": "65 km", "dur": "1h05", "img": IMAGES.chenonceau, "bookingTips": "RÉSERVATION OBLIGATOIRE." },
    { "id": "chambord", "name": "Château de Chambord", "addr": "41250 Chambord", "coords": [47.616, 1.517], "dist": "105 km", "dur": "1h20", "img": IMAGES.chambord },
    { "id": "villandry", "name": "Château de Villandry", "addr": "37510 Villandry", "coords": [47.340, 0.512], "dist": "30 km", "dur": "35 min", "img": IMAGES.villandry },
    { "id": "LR", "name": "Aytré", "addr": "17440 Aytré", "coords": [46.1356, -1.1230], "dist": "203 km", "dur": "2h56", "img": IMAGES.LR },
    { "id": "canoe", "name": "Canoë sur le Cher", "addr": "37150 Chisseaux", "coords": [47.3289, 1.0885], "dist": "77 km", "dur": "59 min", "img": IMAGES.canoe, "bookingTips": "Réservation indispensable." },
    { "id": "magie", "name": "Maison de la magie", "addr": "41000 Blois", "coords": [47.5861, 1.3331], "dist": "116 km", "dur": "1h30", "img": IMAGES.magie },
    { "id": "mini", "name": "Mini Châteaux", "addr": "37400 Amboise", "coords": [47.399, 1.001], "dist": "75 km", "dur": "1h", "img": IMAGES.mini },
    { "id": "mongolfiere", "name": "Montgolfière (Chenonceaux)", "addr": "D40, 37150 Chenonceaux", "coords": [47.332, 1.065], "dist": "60 km", "dur": "55 min", "note": "Survol inoubliable des châteaux au lever du soleil.", "img": IMAGES.mongolfiere, "bookingTips": "Très météo-dépendant, réservez tôt !" },
    { "id": "zoo", "name": "Zoo de Beauval", "addr": "41110 Saint-Aignan", "coords": [47.2477, 1.3533], "dist": "90 km", "dur": "1h15", "img": IMAGES.zoo, "bookingTips": "Billets datés fortement conseillés." },
    { "id": "doute", "name": "Fondation du doute", "addr": "41000 Blois", "coords": [47.5896, 1.3284], "dist": "116 km", "dur": "1h30", "img": IMAGES.fluxus },
    { "id": "cccod", "name": "centre de création contemporaine olivier debré", "addr": "1 parvis Jean Germain, 37000 Tours", "coords": [47.395411, 0.686622], "dist": "48 km", "dur": "43 min", "img": IMAGES.cccod },
    { "id": "gouin", "name": "Hôtel Goüin", "addr": "25 Rue du Commerce, 37000 Tours", "coords": [47.395568, 0.684128], "dist": "48 km", "dur": "43 min", "img": IMAGES.gouin },
    { "id": "aquarium", "name": "Grand Aquarium de Touraine", "addr": "Avenue du Parc, 37400 Lussault-sur-Loire", "coords": [47.3877, 0.9231], "dist": "52 km", "dur": "48 min", "img": IMAGES.aquarium },
    { "id": "fleche", "name": "Zoo de la Flèche", "addr": "Le Tertre Rouge, 72200 La Flèche", "coords": [47.6961, -0.0575], "dist": "62 km", "dur": "1h05", "img": IMAGES.fleche },
    { "id": "retro", "name": "Cité de la rétro mécanique (Musée Dufresne)", "addr": "17 route de Marnay, 37190 Azay-le-Rideau", "coords": [47.2447, 0.4072], "dist": "18 km", "dur": "22 min", "img": IMAGES.retro },
    { "id": "troglodyte", "name": "Village Troglodyte (Rochemenier)", "addr": "14 Rue du Musée, 49700 Louresse-Rochemenier", "coords": [47.2348, -0.2974], "dist": "38 km", "dur": "42 min", "img": IMAGES.troglodyte }
  ]
};
