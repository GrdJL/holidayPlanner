// data.js
window.VOYAGE_DATA = {
  "config": {
    "homeCoords": [47.243, 0.222],
    "homeAddr": "37140 La Chapelle-sur-Loire",
    "apiKey": "TON_API_KEY_GEMINI" // Insère ta clé API ici
  },
  "days": [
    { "id": 0, "dayName": "Samedi", "color": "#10b981", "title": "Arrivée", "route": ["LR", "loc"] },
    { "id": 1, "dayName": "Dimanche", "color": "#3b82f6", "title": "Forteresses & Chevaliers", "route": ["loc", "usse", "langeais"] },
    { "id": 2, "dayName": "Lundi", "color": "#f97316", "title": "Amboise & Léonard", "route": ["loc", "saumur", "closLuce"] },
    { "id": 3, "dayName": "Mardi", "color": "#8b5cf6", "title": "L'Abbaye et l'Eau", "route": ["loc", "fontevraud", "azayRideau"] },
    { "id": 4, "dayName": "Mercredi", "color": "#ec4899", "title": "Chenonceau & Canoë", "route": ["loc", "chenonceau", "canoe"] },
    { "id": 5, "dayName": "Jeudi", "color": "#06b6d4", "title": "Pure Chambord & Blois", "route": ["loc", "chambord"] },
    { "id": 6, "dayName": "Vendredi", "color": "#6366f1", "title": "Villandry Nocturne", "route": ["loc", "villandry"] }
  ],
"points_of_interest": [
    { "id": "loc", "type": "plan_a", "name": "La Chapelle-sur-Loire", "addr": "Gîte", "coords": [47.243, 0.222], "dist": "0 km", "dur": "0 min", "img": "https://www.un-code-postal.com/images/la%20chapelle-sur-loire_37140.jpg" },
    { "id": "usse", "type": "plan_a", "name": "Château d'Ussé", "addr": "Rigny-Ussé", "coords": [47.250, 0.291], "dist": "6 km", "dur": "10 min", "note": "La Belle au Bois Dormant.", "img": "https://montjoye.net/images/Centre-Val-de-Loire/indre-et-loire-37/usse/chateau-usse.webp" },
    { "id": "langeais", "type": "plan_a", "name": "Château de Langeais", "addr": "Langeais", "coords": [47.325, 0.406], "dist": "15 km", "dur": "20 min", "note": "Pont-levis en action.", "img": "https://www.parcsetjardins.fr/data/cache/GardenPicture/picture/main/5/9/859.1606316631.jpg" },
    { "id": "saumur", "type": "plan_a", "name": "Château de Saumur", "addr": "Saumur", "coords": [47.256, -0.072], "dist": "18 km", "dur": "22 min", "img": "https://www.ot-saumur.fr/wp-content/uploads/apidae/8db026651014c195df8070f2533b7642-35937807-1600x900.jpg" },
    { "id": "closLuce", "type": "plan_a", "name": "Le Clos Lucé", "addr": "Amboise", "coords": [47.410, 0.992], "dist": "58 km", "dur": "55 min", "note": "Léonard de Vinci.", "img": "https://woody.cloudly.space/app/uploads/adt-touraine/2024/11/thumbs/Chateau_du_Clos_Luce_Amboise_Credit_ADT_Touraine-Loic_Lagarde_2030_03-1-1920x960-crop-1732285009.webp", "bookingTips": "Billet coupe-file recommandé en haute saison." },
    { "id": "fontevraud", "type": "plan_a", "name": "Abbaye Fontevraud", "addr": "Fontevraud", "coords": [47.181, 0.050], "dist": "18 km", "dur": "25 min", "img": "https://www.360images.fr/images/stories/645/fontevraud_salon2.jpg" },
    { "id": "azayRideau", "type": "plan_a", "name": "Azay-le-Rideau", "addr": "Azay-le-Rideau", "coords": [47.259, 0.465], "dist": "22 km", "dur": "28 min", "img": "https://www.jardins-de-france.com/sites/default/files/public/styles/visuel-fiche-jardin/public/06112020-lrdrones-azay-le-rideau-1.jpg?itok=QFtdAQPp" },
    { "id": "chenonceau", "type": "plan_a", "name": "Chenonceau", "addr": "Chenonceaux", "coords": [47.325, 1.070], "dist": "65 km", "dur": "1h05", "img": "https://www.valdeloire-france.com/app/uploads/2023/05/chenonceau-0772-credit-lezbroz-teddy-verneuil-1024x682.webp", "bookingTips": "RÉSERVATION OBLIGATOIRE d'un créneau horaire sur le site officiel." },
    { "id": "chambord", "type": "plan_a", "name": "Château de Chambord", "addr": "Chambord", "coords": [47.616, 1.517], "dist": "105 km", "dur": "1h20", "img": "https://www.val-de-loire-41.travel/wp-content/uploads/2024/07/chambord-septembre-2023-dnc-olivier-marchant-1-1600par900-1600x900.jpg", "bookingTips": "Achetez en ligne pour éviter la file d'attente aux caisses." },
    { "id": "villandry", "type": "plan_a", "name": "Château de Villandry", "addr": "Villandry", "coords": [47.340, 0.512], "dist": "30 km", "dur": "35 min", "img": "https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2020/07/cda20_villandry_jardin_chateau_main-tt-width-1200-height-900-fill-0-crop-1-bgcolor-ffffff.jpg", "bookingTips": "Vérifiez les dates pour les soirées aux chandelles." },
    { "id": "zoo", "type": "plan_b", "name": "Zoo de Beauval", "addr": "Saint-Aignan", "coords": [47.2477, 1.3533], "dist": "90 km", "dur": "1h15", "reason": "L'un des plus beaux zoos du monde.", "img": "https://api.cloudly.space/resize/cropratio/640/640/75/aHR0cDovL21lZGlhcy50b3VyaXNtLXN5c3RlbS5jb20vNS81LzYyMDM0MV9kb21lLWVxdWF0b3JpYWwuanBn/image.webp", "bookingTips": "Billets datés fortement conseillés." },
    { "id": "LR", "type": "plan_a", "name": "Aytré", "addr": "Av. du Commandant Lisiack, 17440 Aytré", "coords": [46.135682, -1.123058], "dist": "203 km", "dur": "2h56", "reason": "", "img": "https://www.trace-ta-route.com/wp-content/uploads/2023/01/La-Rochelle-Vieux-Port-Tours-1-blog-voyage-Trace-Ta-Route.jpg", "bookingTips":"" },
    { "id": "canoe", "type": "plan_a", "name": "Canoë sur le cher", "addr": "Aventure Canoë sur le Cher, Rue de la Plage, 37150 Chisseaux", "coords": [47.328992, 1.088577], "dist": "77 km", "dur": "59 min", "reason": "", "img": "https://autourdechenonceaux.fr/tourinsoft/photoannonce/CanoeCherChenonceaux057.JPG", "bookingTips":"Complet des semaines à l'avance pour le passage sous les arches. Réservation en ligne indispensable." }
  ]
};