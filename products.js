/* ✏️ EDIT: your products. n = name, c = category (Dresses, Tops, Sets or Accessories), p = price in naira,
   f = fabric, h = colour of the placeholder (0-360), d = description (optional).
   🖼️ IMAGE: img = up to 4 photo paths, the main photo first then 3 more, e.g. img:['images/ada-1.jpg','images/ada-2.jpg','images/ada-3.jpg','images/ada-4.jpg'].
   Leave img:[] to keep the colour blocks. */
var PRODUCTS=[
{n:'Ada Wrap Dress',c:'Dresses',p:48000,h:28,f:'Ankara',img:['images/img-2.jpg']},
{n:'Zuri Maxi Dress',c:'Dresses',p:62000,h:12,f:'Ankara',img:['images/img-1iu.jpg']},
{n:'Kente Crop Top',c:'Tops',p:22000,h:350,f:'Kente',img:[]},
{n:'Ankara Peplum Blouse',c:'Tops',p:26500,h:190,f:'Ankara',img:[]},
{n:'Lagos Two-Piece Set',c:'Sets',p:75000,h:150,f:'Ankara',img:[]},
{n:'Ife Palazzo Set',c:'Sets',p:68000,h:265,f:'Ankara',img:[]},
{n:'Aso Oke Clutch',c:'Accessories',p:18000,h:40,f:'Aso Oke',img:[]},
{n:'Beaded Headwrap',c:'Accessories',p:9500,h:310,f:'Satin and beads',img:[]},
{n:'Sade Midi Dress',c:'Dresses',p:52000,h:200,f:'Satin',img:[]},
{n:'Kemi Shirt Dress',c:'Dresses',p:41000,h:330,f:'Cotton Ankara',img:[]},
{n:'Nia Off-Shoulder Gown',c:'Dresses',p:85000,h:280,f:'Lace',img:[]},
{n:'Folake Puff-Sleeve Top',c:'Tops',p:24000,h:100,f:'Cotton',img:[]},
{n:'Tayo Lace Blouse',c:'Tops',p:29000,h:20,f:'Lace',img:[]},
{n:'Yetunde Wrap Top',c:'Tops',p:21500,h:230,f:'Adire',img:[]},
{n:'Adire Tote Bag',c:'Accessories',p:16500,h:210,f:'Adire',img:[]},
{n:'Cowrie Statement Necklace',c:'Accessories',p:12000,h:45,f:'Cowrie shells',img:[]},
{n:'Ankara Scrunchie Set',c:'Accessories',p:6500,h:15,f:'Ankara',img:[]}
];
/* ✏️ EDIT: default product description for each category (used when a product has no d) */
var DESC={Dresses:'A flattering, made-to-order dress cut to your measurements, lined for comfort with a clean finished hem.',Tops:'A versatile top tailored for an easy fit. Wear it with a skirt, trousers or jeans.',Sets:'A coordinated two-piece set, tailored to your measurements and sewn as a matching pair.',Accessories:'A handcrafted finishing touch that completes any outfit.'};
