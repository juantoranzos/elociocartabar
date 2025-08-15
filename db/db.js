 const tragos = [
  {
    id: 1,
    titulo: "Fernet",
    descripcion: "Fernet con Coca-Cola.",
    imagen: "https://dcdn-us.mitiendanube.com/stores/001/551/869/products/729-combo-ferne-cola1-20f910c11aa97cae3716514174036365-1024-1024.jpg",
    descripcionLarga: "El fernet es una bebida alcohólica amarga y aromática, originaria de Italia, que se ha convertido en un ícono cultural en Argentina. Se elabora a partir de una mezcla de hierbas, raíces y especias, y se suele consumir con cola."
  },
  {
    id: 2,
    titulo: "Vodka con Speed",
    descripcion: "Una mezcla energética.",
    imagen: "https://flaming.ar/wp-content/uploads/2022/07/Combos-Smirnof_Mesa-de-trabajo-1-jpg.webp",
    descripcionLarga: "El vodka con speed es una combinación popular en fiestas y eventos sociales, que mezcla vodka con una bebida energética. Esta mezcla es conocida por su capacidad para proporcionar un impulso de energía junto con los efectos eufóricos del alcohol, aunque se debe consumir con precaución debido a los riesgos asociados."
  },
  {
    id: 3,
    titulo: "Gin Tonic",
    descripcion: "Un clásico refrescante.",
    imagen: "https://img.freepik.com/foto-gratis/coctel-gin-tonic-beber-vaso-aislado-sobre-fondo-blanco_123827-21810.jpg?semt=ais_hybrid&w=740&q=80",
    descripcionLarga: "El Gin Tonic es un cóctel clásico y refrescante que combina ginebra y agua tónica, generalmente servido con hielo y una rodaja de lima o limón. Es conocido por su sabor equilibrado entre lo amargo y lo dulce, y es una opción popular en bares y reuniones sociales en todo el mundo."
  },
  {
    id: 4,
    titulo: "Daiquiri",
    descripcion: "Cóctel tropical.",
    imagen: "https://img.freepik.com/foto-gratis/coctel-martini-gota-limon-aislado-sobre-fondo-blanco_123827-24018.jpg?semt=ais_hybrid&w=740&q=80",
    descripcionLarga: "El Daiquiri es un cóctel tropical originario de Cuba, que se prepara con ron blanco, jugo de lima y azúcar. Es conocido por su sabor refrescante y equilibrado, y se puede servir en varias versiones, incluyendo el clásico, fresa o mango, siendo una opción popular en climas cálidos y en bares de playa."
  },
  {
    id: 5,
    titulo: "Vodka Sunrise",
    descripcion: "Cóctel colorido.",
    imagen: "https://img.freepik.com/fotos-premium/coctel-tequila-sunrise-aislado-blanco_311158-3622.jpg",
    descripcionLarga: "El Vodka Sunrise es un cóctel vibrante y colorido que combina vodka, jugo de naranja y granadina. Su apariencia recuerda a un amanecer, con un degradado de colores que va del rojo al naranja. Es una bebida popular en fiestas y eventos sociales, conocida por su sabor dulce y refrescante."
  },
  {
    id: 6,
    titulo: "Mojito",
    descripcion: "Cóctel cubano.",
    imagen: "https://img.freepik.com/fotos-premium/mojito-coctel-alcohol-limon-menta-aislado-sobre-fondo-blanco_188533-408.jpg",
    descripcionLarga: "El Mojito es un cóctel cubano clásico que combina ron blanco, azúcar, jugo de lima, agua con gas y hojas de menta fresca. Es conocido por su sabor refrescante y equilibrado, siendo una opción popular en climas cálidos y en reuniones sociales. El Mojito es apreciado por su mezcla de sabores cítricos y herbales, que lo hacen ideal para disfrutar en cualquier ocasión."
  },
  {
    id: 7,
    titulo: "Cuba Libre",
    descripcion: "Cóctel con historia.",
    imagen: "https://media.istockphoto.com/id/675268490/es/vector/una-cuba-libre-coctel.jpg?s=612x612&w=0&k=20&c=AjeePspt29of0O4HteksT2tv4xCKoEZzYZyR9NlS_sM=",
    descripcionLarga: "El Cuba Libre es un cóctel clásico que combina ron, cola y jugo de lima, conocido por su sabor refrescante y ligeramente cítrico. Originario de Cuba, este cóctel tiene una rica historia vinculada a la independencia del país y se ha convertido en una bebida popular en todo el mundo, especialmente en celebraciones y eventos sociales." 
  },
  {
    id: 8,
    titulo: "Kaipiroska",
    descripcion: "Cóctel brasileño.",
    imagen: "https://thumbs.dreamstime.com/b/coctel-caipirinha-13310625.jpg",
    descripcionLarga: "La Caipiroska es una variante del cóctel brasileño Caipirinha, que se prepara con vodka en lugar de cachaça. Este refrescante cóctel combina vodka, azúcar, jugo de lima y hielo triturado, y es conocido por su sabor equilibrado entre lo dulce y lo ácido. La Caipiroska es una opción popular en bares y fiestas, especialmente en climas cálidos."
  },
  {
    id: 9,
    titulo: "Caipirinha",
    descripcion: "Cóctel nacional de Brasil.",
    imagen: "https://thumbs.dreamstime.com/b/c%C3%B3ctel-de-caipirinha-en-vidrio-el-fondo-blanco-110007901.jpg",
    descripcionLarga: "La Caipirinha es el cóctel nacional de Brasil, elaborado con cachaça (un licor de caña de azúcar), azúcar, jugo de lima y hielo. Es conocido por su sabor refrescante y equilibrado, siendo una bebida popular en todo el país y en eventos sociales. La Caipirinha es apreciada por su simplicidad y su capacidad para capturar la esencia del espíritu brasileño."
  },
  {
    id: 10,
    titulo: "Arcoiris",
    descripcion: "Cóctel multicolor.",
    imagen: "https://img.freepik.com/fotos-premium/sabroso-postre-gelatina-capas-vidrio-sobre-fondo-blanco_495423-55001.jpg?semt=ais_hybrid&w=740&q=80",
    descripcionLarga: "El cóctel Arcoiris es una bebida visualmente impresionante que presenta capas de diferentes colores, creando un efecto similar al de un arcoíris. Se prepara utilizando varios licores y jugos con diferentes densidades, que se vierten cuidadosamente para mantener las capas separadas. Este cóctel es popular en fiestas y eventos especiales debido a su apariencia llamativa y su sabor dulce y frutal."
  },
    {
    id: 11,
    titulo: "Green Space",
    descripcion: "Cóctel Verde",
    imagen: "https://previews.123rf.com/images/baibaz/baibaz1702/baibaz170200024/71185042-glass-of-green-cocktail-isolated-on-white-background-from-top-view.jpg",
    descripcionLarga: "El cóctel Green Space es una bebida vibrante y refrescante que combina ingredientes verdes como menta, pepino y jugo de lima, creando un sabor fresco y revitalizante. Es ideal para climas cálidos y se presenta a menudo con hielo y una rodaja de pepino o una ramita de menta como decoración."
  },
      {
    id: 13,
    titulo: "Heineken 1 L",
    descripcion: "Cerveza",
    imagen: "https://arjosimarprod.vtexassets.com/arquivos/ids/170587/Cerveza-Heineken-1-lt-1-5804.jpg?v=638617737641170000",
    descripcionLarga: "Heineken es una cerveza lager de origen holandés, conocida por su sabor suave y refrescante. Se elabora con ingredientes de alta calidad, incluyendo lúpulo, cebada malteada y agua pura, lo que le confiere un perfil de sabor equilibrado y ligeramente amargo. Heineken es una de las cervezas más reconocidas a nivel mundial, apreciada por su consistencia y calidad en cada sorbo."
  },
       {
    id: 14,
    titulo: "Imperial Golden 1 L",
    descripcion: "Cerveza",
    imagen: "https://1e37e7bf72.clvaw-cdnwnd.com/52332f24dfa5395a5d55fb2392e2f620/200001181-d8ebad8ebc/Imperial-rubia-1000-ml.png?ph=1e37e7bf72",
    descripcionLarga: "Imperial Golden es una cerveza lager de origen costarricense, conocida por su sabor ligero y refrescante. Elaborada con ingredientes de alta calidad, esta cerveza ofrece un perfil de sabor suave con notas de malta y lúpulo, lo que la convierte en una opción popular para disfrutar en climas cálidos y en reuniones sociales. Su color dorado y su textura ligera la hacen ideal para acompañar una variedad de comidas."
  },
       {
    id: 15,
    titulo: "Quilmes 1 L",
    descripcion: "Cerveza",
    imagen: "https://masonlineprod.vtexassets.com/arquivos/ids/272997/Cerveza-Clasica-Quilmes-Retornable-1-L-2-5504.jpg?v=638875152644030000",
    descripcionLarga: "Quilmes es una cerveza argentina icónica, conocida por su sabor equilibrado y refrescante. Elaborada con ingredientes de alta calidad, Quilmes ofrece un perfil de sabor suave con un ligero amargor, lo que la convierte en una opción popular entre los amantes de la cerveza en Argentina y más allá. Su color dorado y su textura ligera la hacen ideal para disfrutar en cualquier ocasión, desde reuniones informales hasta celebraciones especiales."
  },
       {
    id: 16,
    titulo: "Brhama 1 L",
    descripcion: "Cerveza",
    imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/588355/Cerveza-Rubia-Brahma-Chopp-1-L-Botella-Retornable-1-18524.jpg?v=637280467046370000",
    descripcionLarga: "Brahma es una cerveza brasileña reconocida por su sabor ligero y refrescante. Elaborada con ingredientes de alta calidad, Brahma ofrece un perfil de sabor suave con notas de malta y lúpulo, lo que la convierte en una opción popular para disfrutar en climas cálidos y en eventos sociales. Su color dorado y su textura ligera la hacen ideal para acompañar una variedad de comidas y celebraciones."
  },
       {
    id: 17,
    titulo: "Miller 1 L",
    descripcion: "Cerveza",
    imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/801634/Cerveza-Miller-Lager-Ed-1lt-1-1000810.jpg?v=638373335147600000",
    descripcionLarga: "Miller es una marca de cerveza estadounidense conocida por su sabor ligero y refrescante. Elaborada con ingredientes de alta calidad, Miller ofrece un perfil de sabor suave con un ligero amargor, lo que la convierte en una opción popular entre los amantes de la cerveza. Su color dorado y su textura ligera la hacen ideal para disfrutar en cualquier ocasión, desde reuniones informales hasta celebraciones especiales."
  },
       {
    id: 18,
    titulo: "Salta Negra 1 L",
    descripcion: "Cerveza",
    imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/180511/Cerveza-Salta-Negra-Cerveza-Salta-Negra-970-Ml-1-12496.jpg?v=636383396831030000",
    descripcionLarga: "Salta Negra es una cerveza argentina de estilo stout, conocida por su sabor intenso y robusto. Elaborada con maltas oscuras, esta cerveza ofrece un perfil de sabor rico con notas de chocolate, café y caramelo. Su color oscuro y su cuerpo completo la hacen ideal para aquellos que disfrutan de cervezas con carácter, siendo una opción popular en el norte de Argentina y entre los amantes de las cervezas artesanales."
  },

];
export default tragos;