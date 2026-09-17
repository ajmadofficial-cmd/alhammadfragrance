/* ============================================================
   AL-HAMMAD — PRODUCT CATALOG
   Edit product data here. Edit look & feel in index.html/style.
   ============================================================ */

const CATEGORIES = ["All", "Attar", "Perfume"];

/* 🧴 PRODUCT VARIATIONS — edit prices here once, applies to all cards */
const ATTAR_VARIANTS = [
  { label: '6ml',  price: 299 },
  { label: '12ml', price: 599 }
];
const SIZE_VARIANTS = [
  { label: '50ml',  price: 799 },
  { label: '100ml', price: 1299 }
];

/* const MINI_VARIANTS=[
  {label:'1ml', price:1},
]; */

const PRODUCTS = [

  /*---------Add Products ---------*/
  { id: 'p1',  name: 'Ambery Nights',           tag: 'Gift Set',    cat: 'Attar',   wt: 0.5,  img: 'images/Ambery Nights.png',            variants: ATTAR_VARIANTS, desc: 'Make every moment memorable with the timeless charm of Premium Attar.' },
  { id: 'p2',  name: 'Shanaya Perfume',         tag: 'New',         cat: 'Perfume', wt: 0.25, img: 'images/Shanaya Perfume.jpg',           variants: SIZE_VARIANTS,  desc: 'Our house fragrance — warm amber, soft florals & musk in a frosted glass flacon.' },
  { id: 'p3',  name: 'Shanaya Attar',           tag: 'Attar',       cat: 'Attar',   wt: 0.15, img: 'images/shanaya-attar.jpg',             variants: ATTAR_VARIANTS, desc: 'Royal golden attar with rich oriental notes. Long‑lasting & alcohol‑free.' },
  { id: 'p4',  name: 'Aqua‑CK',                 tag: 'New',         cat: 'Attar',   wt: 0.25, img: 'images/Aqua-ck.png',                   variants: ATTAR_VARIANTS, desc: 'Vibrant citrus‑aquatic fragrance in artistic crackle glass.' },
  { id: 'p7',  name: 'Choco Oud',               tag: 'Bestseller',  cat: 'Attar',   wt: 0.25, img: 'images/Choco Oud.png',                 variants: ATTAR_VARIANTS, desc: 'Our house fragrance — warm amber, soft florals & musk in a frosted glass flacon.' },
  { id: 'p8',  name: 'Coco Chanel',             tag: 'New',         cat: 'Attar',   wt: 0.02, img: 'images/Coco Chanel.png',               variants: ATTAR_VARIANTS, desc: 'Premium Quality Attar - Without Alcohol' },
  { id: 'p9',  name: 'CR-7',                    tag: 'Premium',     cat: 'Attar',   wt: 0.02, img: 'images/CR-7.png',                      variants: ATTAR_VARIANTS, desc: 'Renaldo Favorite attar - Premium Quality Attar - Without Alcohol' },
  { id: 'p10', name: 'Creed Aventus',           tag: 'Premium',     cat: 'Attar',   wt: 0,    img: 'images/Creed Aventus.png',             variants: ATTAR_VARIANTS, desc: 'Premium Quality Attar - Without Alcohol' },
  { id: 'p11', name: 'Daring Avenue',           tag: 'Limited',     cat: 'Attar',   wt: 0.03, img: 'images/Daring Avenue.png',             variants: ATTAR_VARIANTS, desc: 'Premium Quality Attar - Without Alcohol' },
  { id: 'p12', name: 'Divine Essence',          tag: 'Attar',       cat: 'Attar',   wt: 0.03, img: 'images/Divine Essence.png',            variants: ATTAR_VARIANTS, desc: 'No Alcohol' },
  { id: 'p13', name: 'Gucci Flora',             tag: 'New',         cat: 'Attar',   wt: 0,    img: 'images/Gucci Flora.png',               variants: ATTAR_VARIANTS, desc: 'Alcohol free' },
  { id: 'p14', name: 'Jasmine',                 tag: 'Attar',       cat: 'Attar',   wt: 0.03, img: 'images/Jasmine.png',                   variants: ATTAR_VARIANTS, desc: 'Alcohol free' },
  { id: 'p15', name: 'Lady Macbeth',            tag: 'New',         cat: 'Attar',   wt: 0.03, img: 'images/Lady Macbeth.png',              variants: ATTAR_VARIANTS, desc: 'Alcohol free' },
  { id: 'p16', name: 'Liberated Girl',          tag: 'Attar',       cat: 'Attar',   wt: 0,    img: 'images/Liberated Girl.png',            variants: ATTAR_VARIANTS, desc: 'Liberated Girl' },
  { id: 'p17', name: 'Parisian Lanes',          tag: 'Attar',       cat: 'Attar',   wt: 0,    img: 'images/Parisian Lanes.png',            variants: ATTAR_VARIANTS, desc: 'Parisian Lanes' },
  { id: 'p18', name: 'Silk Fleur',              tag: 'New',         cat: 'Attar',   wt: 0.02, img: 'images/Silk Fleur.png',                variants: ATTAR_VARIANTS, desc: 'Silk Fleur' },
  { id: 'p19', name: 'Vampire Red',             tag: 'New',         cat: 'Attar',   wt: 0,    img: 'images/Vampire Red.png',               variants: ATTAR_VARIANTS, desc: 'Vampire Red' },
  { id: 'p20', name: 'White Oud',               tag: 'Attar',       cat: 'Attar',   wt: 0.01, img: 'images/White Oud.png',                 variants: ATTAR_VARIANTS, desc: 'White Oud' },
  { id: 'p21', name: 'Wild Boulevard',          tag: 'Unisex',      cat: 'Attar',   wt: 0.01, img: 'images/Wild Boulevard.png',            variants: ATTAR_VARIANTS, desc: 'Wild Boulevard' },
  { id: 'p5',  name: 'Cr-7 Perfume',            tag: 'Premium',     cat: 'Perfume', wt: 0,    img: 'images/Cr-7 Perfume.jpg',              variants: SIZE_VARIANTS,  desc: 'A bold, masculine and energetic fragrance inspired by the confidence and sporting spirit of Cristiano Ronaldo. CR7 opens with a fresh blend of bergamot, lavender and spicy cardamom, develops into a warm heart of tobacco, cinnamon, cedarwood and iris, and settles into a smooth base of vanilla, musk, sandalwood and amber.' },
  { id: 'p6',  name: 'Wild Boulevard Perfume',  tag: 'Limited',     cat: 'Perfume', wt: 0,    img: 'images/Wild Boulevard Perfume.jpg',    variants: SIZE_VARIANTS,  desc: 'A powerful blend of fresh citrus, spicy warmth and smooth musk. Wild Boulevard is designed for the confident man who wants to leave a fresh, sophisticated and unforgettable impression.' },
  { id: 'p22', name: 'Vampire Blood Perfume',   tag: 'Bestseller',  cat: 'Perfume', wt: 0,    img: 'images/Vampire Red Perfume.jpg',       variants: SIZE_VARIANTS,  desc: 'A dark and captivating blend of juicy berries, blooming jasmine and luscious plum. Vampire Blood creates a mysterious, sweet and seductive aura that leaves an unforgettable impression.' },
  { id: 'p23', name: 'White Oud Perfume',       tag: 'Premium',     cat: 'Perfume', wt: 0,    img: 'images/White Oud Perfume.jpg',         variants: SIZE_VARIANTS,  desc: 'A luxurious fusion of fresh citrus, elegant florals and rich oud, beautifully balanced with creamy woods, warm amber and soft musk. White Oud leaves a smooth, sophisticated and unforgettable impression.' },
  { id: 'p24', name: 'Coco Chanel Perfume',     tag: 'Unisex',      cat: 'Perfume', wt: 0,    img: 'images/Coco Chanel perfume.jpg',       variants: SIZE_VARIANTS,  desc: 'A timeless and captivating fragrance blending sparkling mandarin with luxurious florals and a warm, sensual base. Coco Chanel creates an elegant, feminine aura with a sophisticated and unforgettable finish.' },
  { id: 'p25', name: 'Choco oud Perfume',       tag: 'Premium',     cat: 'Perfume', wt: 0,    img: 'images/Choco Oud Perfume.jpg',         variants: SIZE_VARIANTS,  desc: 'A luxurious fusion of rich chocolate, creamy vanilla and exotic oud, finished with warm woods and soft musk. Choco Oud is a deep, seductive fragrance made to leave a deliciously unforgettable impression.' },
  { id: 'p26', name: 'Gucci Flora Perfume',     tag: 'Premium',     cat: 'Perfume', wt: 0,    img: 'images/Gucci Flora Perfume.jpg',       variants: SIZE_VARIANTS,  desc: 'A beautiful blend of fresh mandarin, delicate florals and warm vanilla woods. Gucci Flora creates a graceful, feminine and captivating aura with a soft, elegant finish' },
  { id: 'p27', name: 'Creed Aventus Perfume',   tag: 'Bestseller',  cat: 'Perfume', wt: 0,    img: 'images/Creed Aventus Perfume.jpg',     variants: SIZE_VARIANTS,  desc: 'A powerful blend of juicy pineapple, sparkling citrus and aromatic fruits, enriched with smoky birch, patchouli and smooth musk. Creed Aventus is a confident, sophisticated fragrance designed to leave a memorable impression' }

];
