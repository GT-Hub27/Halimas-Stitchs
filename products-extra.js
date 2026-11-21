/* ✏️ EDIT: extra products and the men/women/unisex setting.
   g = 'F' women, 'M' men, 'U' unisex (unisex clothes show on both the Women and Men pages).
   Accessories use g too: 'M' = Male accessories, 'F' = Female accessories, 'U' = Unisex accessories.
   🖼️ IMAGE: img = up to 4 photo paths, the main photo first. Add new products at the END of the list. */
(function(){
PRODUCTS.forEach(function(x){if(!x.g)x.g=(x.n==='Adire Tote Bag')?'U':'F'});
DESC['Native wear']='Traditional wear, tailored to your measurements with careful finishing and a clean, comfortable fit.';
DESC['Shirts']='A well-cut shirt made to order, easy to dress up or down.';
DESC['Trousers']='Comfortable trousers tailored to your measurements, with a clean line and a relaxed finish.';
DESC['Jackets']='A statement layer made to order, lined and finished by hand.';
PRODUCTS=PRODUCTS.concat([
{n:'Agbada Royal Set',c:'Native wear',g:'M',p:120000,h:35,f:'Brocade',img:[]},
{n:'Senator Suit',c:'Native wear',g:'M',p:85000,h:215,f:'Senator fabric',img:[]},
{n:'Ankara Kaftan',c:'Native wear',g:'M',p:45000,h:18,f:'Ankara',img:[]},
{n:'Dashiki Shirt',c:'Shirts',g:'M',p:28000,h:160,f:'Cotton',img:[]},
{n:'Ankara Short-Sleeve Shirt',c:'Shirts',g:'M',p:24000,h:305,f:'Ankara',img:[]},
{n:'Linen Native Shirt',c:'Shirts',g:'M',p:26000,h:50,f:'Linen',img:[]},
{n:'Tailored Trousers',c:'Trousers',g:'M',p:32000,h:225,f:'Cotton twill',img:[]},
{n:'Drawstring Linen Trousers',c:'Trousers',g:'M',p:27000,h:80,f:'Linen',img:[]},
{n:'Adire Oversized Shirt',c:'Shirts',g:'U',p:30000,h:222,f:'Adire',img:[]},
{n:'Ankara Bomber Jacket',c:'Jackets',g:'U',p:58000,h:8,f:'Ankara',img:[]},
{n:'Beaded Drop Earrings',c:'Accessories',g:'F',p:11000,h:330,f:'Glass beads',img:[]},
{n:'Aso Oke Fila Cap',c:'Accessories',g:'M',p:15000,h:25,f:'Aso Oke',img:[]},
{n:'Ankara Bow Tie',c:'Accessories',g:'M',p:7500,h:290,f:'Ankara',img:[]},
{n:'Pocket Square Set',c:'Accessories',g:'M',p:6000,h:185,f:'Satin',img:[]},
{n:'Beaded Wrist Bracelet',c:'Accessories',g:'M',p:8500,h:60,f:'Beads',img:[]},
{n:'Kente Scarf',c:'Accessories',g:'U',p:14000,h:345,f:'Kente',img:[]},
{n:'Ankara Bucket Hat',c:'Accessories',g:'U',p:12500,h:120,f:'Ankara',img:[]},
{n:'Leather Belt',c:'Accessories',g:'U',p:18000,h:30,f:'Leather',img:[]},
{n:'Cowrie Bracelet',c:'Accessories',g:'U',p:9000,h:45,f:'Cowrie shells',img:[]}
]);
})();
