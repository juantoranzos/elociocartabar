 import ginpuff from "@/public/ginpuff.webp";
 import gintonic from "@/public/gintonic.jpeg";
 import daikiri from "@/public/daikiri.jpeg";
 import arcoiris from "@/public/arcoiris.jpeg";
 import kaipiroshka from "@/public/kaipiroshka.jpeg";
 import ginpicodulce from "@/public/ginpicodulce.jpeg";
 import malibu from "@/public/malibu.jpeg";
 import patalager from "@/public/amberlager.webp";
 import corona from "@/public/corona.jpg";
 import ipa from "@/public/ipa.jpg";
 import green from "@/public/green.jpeg";
const tragos = [
  {
    id: 1,
    titulo: "Fernet",
    descripcion: "Fernet con Coca-Cola.",
    precio: "$5000",
    imagen: "https://dcdn-us.mitiendanube.com/stores/001/551/869/products/729-combo-ferne-cola1-20f910c11aa97cae3716514174036365-1024-1024.jpg",
    descripcionLarga: "El fernet es una bebida alcohólica amarga y aromática, originaria de Italia, que se ha convertido en un ícono cultural en Argentina. Se elabora a partir de una mezcla de hierbas, raíces y especias, y se suele consumir con cola."
  },
  {
    id: 2,
    titulo: "Vodka",
    descripcion: "Podes elegir Vodka con Speed, Energizante o Sprite",
    precio: "$5000",
    imagen: "https://acdn-us.mitiendanube.com/stores/001/163/250/products/smirnoff-700ml-d_nq_np_999875-mla28027345993_082018-f1-5a728f265c33c1e48715878393030676-1024-1024.jpg",
    descripcionLarga: "El vodka con speed es una combinación popular en fiestas y eventos sociales, que mezcla vodka con una bebida energética. Esta mezcla es conocida por su capacidad para proporcionar un impulso de energía junto con los efectos eufóricos del alcohol, aunque se debe consumir con precaución debido a los riesgos asociados."
  },
  {
    id: 3,
    titulo: "Gin Tonic",
    descripcion: "Podes elegir Limon o Frutos Rojos",
    precio: "$5000",
    imagen: gintonic,
    descripcionLarga: "El Gin Tonic es un cóctel clásico que combina ginebra y agua tónica, conocido por su sabor refrescante y versatilidad. Se puede personalizar con diferentes guarniciones como rodajas de limón, pepino o frutos rojos, lo que lo convierte en una opción popular en bares y reuniones sociales. Su equilibrio entre la amargura de la tónica y los matices botánicos de la ginebra lo hacen ideal para disfrutar en cualquier ocasión."
  },
  {
    id: 4,
    titulo: "Daiquiri",
    descripcion: "Podes elegir de Maracuya o Frutilla",
    precio: "$5000",
    imagen: daikiri,
    descripcionLarga: "El Daiquiri es un cóctel tropical originario de Cuba, que se prepara con ron blanco, jugo de lima y azúcar. Es conocido por su sabor refrescante y equilibrado, y se puede servir en varias versiones, incluyendo el clásico, fresa o mango, siendo una opción popular en climas cálidos y en bares de playa."
  },
  {
    id: 5,
    titulo: "Tequila Sunrise",
    descripcion: "Cóctel colorido.",
    precio: "$5000",
    imagen: "https://img.freepik.com/fotos-premium/coctel-tequila-sunrise-aislado-blanco_311158-3622.jpg",
    descripcionLarga: "El Tequila Sunrise es un cóctel vibrante y colorido que combina tequila, jugo de naranja y granadina. Su nombre proviene del efecto visual que crea, similar a un amanecer, con los colores rojo y naranja. Es una bebida popular en fiestas y eventos sociales, conocida por su sabor dulce y afrutado, ideal para disfrutar en climas cálidos."
  },
  {
    id: 6,
    titulo: "Mojito",
    descripcion: "Cóctel cubano.",
    precio: "$5000",
    imagen: "https://img.freepik.com/fotos-premium/mojito-coctel-alcohol-limon-menta-aislado-sobre-fondo-blanco_188533-408.jpg",
    descripcionLarga: "El Mojito es un cóctel cubano clásico que combina ron blanco, azúcar, jugo de lima, agua con gas y hojas de menta fresca. Es conocido por su sabor refrescante y equilibrado, siendo una opción popular en climas cálidos y en reuniones sociales. El Mojito es apreciado por su mezcla de sabores cítricos y herbales, que lo hacen ideal para disfrutar en cualquier ocasión."
  },
  {
    id: 7,
    titulo: "Cuba Libre",
    descripcion: "Cóctel con historia.",
    precio: "$5000",
    imagen: "https://images.eatsmarter.com/sites/default/files/styles/max_size/public/cuba-libre-with-mint-626296.jpg",
    descripcionLarga: "El Cuba Libre es un cóctel clásico que combina ron, cola y jugo de lima, conocido por su sabor refrescante y ligeramente cítrico. Originario de Cuba, este cóctel tiene una rica historia vinculada a la independencia del país y se ha convertido en una bebida popular en todo el mundo, especialmente en celebraciones y eventos sociales." 
  },
  {
    id: 8,
    titulo: "Kaipiroska",
    descripcion: "Cóctel brasileño.",
    precio: "$5000",
    imagen: kaipiroshka,
    descripcionLarga: "La Caipiroska es una variante del cóctel brasileño Caipirinha, que se prepara con vodka en lugar de cachaça. Este refrescante cóctel combina vodka, azúcar, jugo de lima y hielo triturado, y es conocido por su sabor equilibrado entre lo dulce y lo ácido. La Caipiroska es una opción popular en bares y fiestas, especialmente en climas cálidos."
  },
  {
    id: 9,
    titulo: "Caipirinha",
    descripcion: "Cóctel nacional de Brasil.",
    precio: "$5000",
    imagen: "https://thumbs.dreamstime.com/b/c%C3%B3ctel-de-caipirinha-en-vidrio-el-fondo-blanco-110007901.jpg",
    descripcionLarga: "La Caipirinha es el cóctel nacional de Brasil, elaborado con cachaça (un licor de caña de azúcar), azúcar, jugo de lima y hielo. Es conocido por su sabor refrescante y equilibrado, siendo una bebida popular en todo el país y en eventos sociales. La Caipirinha es apreciada por su simplicidad y su capacidad para capturar la esencia del espíritu brasileño."
  },
  {
    id: 10,
    titulo: "Arcoiris",
    descripcion: "Cóctel multicolor.",
    precio: "$5000",
    imagen: arcoiris,
    descripcionLarga: "El cóctel Arcoiris es una bebida visualmente impresionante que presenta capas de diferentes colores, creando un efecto similar al de un arcoíris. Se prepara utilizando varios licores y jugos con diferentes densidades, que se vierten cuidadosamente para mantener las capas separadas. Este cóctel es popular en fiestas y eventos especiales debido a su apariencia llamativa y su sabor dulce y frutal."
  },
  {
    id: 11,
    titulo: "Green Space",
    descripcion: "Cóctel Verde",
    precio: "$5000",
    imagen: green,
    descripcionLarga: "El cóctel Green Space es una bebida vibrante y refrescante que combina ingredientes verdes como menta, pepino y jugo de lima, creando un sabor fresco y revitalizante. Es ideal para climas cálidos y se presenta a menudo con hielo y una rodaja de pepino o una ramita de menta como decoración."
  },
  {
    id: 12,
    titulo: "Gin Puff",
    descripcion: "Cóctel especial de la casa",
    precio: "$5000",
    imagen: ginpuff,
    descripcionLarga: "El Gin Puff es un cóctel exclusivo de nuestra casa, que combina ginebra premium con un toque Caramelo FlimPuff, creando una experiencia única y refrescante. Este trago se sirve con hielo y se adorna con una rodaja de limón, ofreciendo un equilibrio perfecto entre los sabores botánicos de la ginebra y la dulzura del caramelo. Ideal para aquellos que buscan algo especial y diferente."
  },
  {
    id: 13,
    titulo: "Gin Pico Dulce",
    descripcion: "Cóctel especial de la casa",
    precio: "$5000",
    imagen: ginpicodulce,
    descripcionLarga: "El Gin Pico Dulce es un cóctel exclusivo de nuestra casa, que combina ginebra premium con un toque agua tónica y un toque de dulce, creando una experiencia única y refrescante. Este trago se sirve con hielo y se adorna con una rodaja de limón, ofreciendo un equilibrio perfecto entre los sabores botánicos de la ginebra y la dulzura del caramelo. Ideal para aquellos que buscan algo especial y diferente."
  },
  {
    id: 14,
    titulo: "Malibú",
    descripcion: "Malibú de coco con jugo de Naranja",
    precio: "$5000",
    imagen: malibu,
    descripcionLarga: "El Malibú es un cóctel tropical que combina el licor de coco Malibú con jugo de naranja, creando una bebida dulce y refrescante. Este trago es ideal para climas cálidos y se sirve con hielo, a menudo adornado con una rodaja de naranja o una cereza. El Malibú es perfecto para quienes buscan un sabor exótico y veraniego en su cóctel."
  },
  {
    id: 15,
    titulo: "Heineken 1 L",
    descripcion: "Cerveza",
    precio: "$6000",
    imagen: "https://arjosimarprod.vtexassets.com/arquivos/ids/170587/Cerveza-Heineken-1-lt-1-5804.jpg?v=638617737641170000",
    descripcionLarga: "Heineken es una cerveza lager de origen holandés, conocida por su sabor suave y refrescante. Se elabora con ingredientes de alta calidad, incluyendo lúpulo, cebada malteada y agua pura, lo que le confiere un perfil de sabor equilibrado y ligeramente amargo. Heineken es una de las cervezas más reconocidas a nivel mundial, apreciada por su consistencia y calidad en cada sorbo."
  },
  {
    id: 16,
    titulo: "Imperial Golden | Lager 1 L",
    descripcion: "Cerveza",
    precio: "$5000",
    imagen: "https://1e37e7bf72.clvaw-cdnwnd.com/52332f24dfa5395a5d55fb2392e2f620/200001181-d8ebad8ebc/Imperial-rubia-1000-ml.png?ph=1e37e7bf72",
    descripcionLarga: "Imperial Golden es una cerveza lager de origen costarricense, conocida por su sabor ligero y refrescante. Elaborada con ingredientes de alta calidad, esta cerveza ofrece un perfil de sabor suave con notas de malta y lúpulo, lo que la convierte en una opción popular para disfrutar en climas cálidos y en reuniones sociales. Su color dorado y su textura ligera la hacen ideal para acompañar una variedad de comidas."
  },
  {
    id: 17,
    titulo: "Quilmes 1 L",
    descripcion: "Cerveza",
    precio: "$4000",
    imagen: "https://masonlineprod.vtexassets.com/arquivos/ids/272997/Cerveza-Clasica-Quilmes-Retornable-1-L-2-5504.jpg?v=638875152644030000",
    descripcionLarga: "Quilmes es una cerveza argentina icónica, conocida por su sabor equilibrado y refrescante. Elaborada con ingredientes de alta calidad, Quilmes ofrece un perfil de sabor suave con un ligero amargor, lo que la convierte en una opción popular entre los amantes de la cerveza en Argentina y más allá. Su color dorado y su textura ligera la hacen ideal para disfrutar en cualquier ocasión, desde reuniones informales hasta celebraciones especiales."
  },
  {
    id: 18,
    titulo: "Brhama 1 L",
    descripcion: "Cerveza",
    precio: "4000",
    imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/588355/Cerveza-Rubia-Brahma-Chopp-1-L-Botella-Retornable-1-18524.jpg?v=637280467046370000",
    descripcionLarga: "Brahma es una cerveza brasileña reconocida por su sabor ligero y refrescante. Elaborada con ingredientes de alta calidad, Brahma ofrece un perfil de sabor suave con notas de malta y lúpulo, lo que la convierte en una opción popular para disfrutar en climas cálidos y en eventos sociales. Su color dorado y su textura ligera la hacen ideal para acompañar una variedad de comidas y celebraciones."
  },
  {
    id: 19,
    titulo: "Miller 1 L",
    descripcion: "Cerveza",
    precio: "$5500",
    imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/801634/Cerveza-Miller-Lager-Ed-1lt-1-1000810.jpg?v=638373335147600000",
    descripcionLarga: "Miller es una marca de cerveza estadounidense conocida por su sabor ligero y refrescante. Elaborada con ingredientes de alta calidad, Miller ofrece un perfil de sabor suave con un ligero amargor, lo que la convierte en una opción popular entre los amantes de la cerveza. Su color dorado y su textura ligera la hacen ideal para disfrutar en cualquier ocasión, desde reuniones informales hasta celebraciones especiales."
  },
  {
    id: 20,
    titulo: "1890 Quilmes 1 L",
    descripcion: "Cerveza",
    precio: "$4000",
    imagen: "https://masonlineprod.vtexassets.com/arquivos/ids/343062/Cerveza-Quilmes-1890-Retornable-1-L-0779279801393-2.jpg?v=638702267390030000",
    descripcionLarga: "1890 Quilmes es una cerveza argentina clásica, conocida por su sabor auténtico y su rica historia. Elaborada con ingredientes de alta calidad, esta cerveza ofrece un perfil de sabor equilibrado con notas de malta y lúpulo, lo que la convierte en una opción popular entre los amantes de la cerveza en Argentina. Su color dorado y su textura ligera la hacen ideal para disfrutar en cualquier ocasión, desde reuniones informales hasta celebraciones especiales."
  },
  {
    id: 21,
    titulo: "Salta Negra 1 L",
    descripcion: "Cerveza",
    precio: "$4500",
    imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/180511/Cerveza-Salta-Negra-Cerveza-Salta-Negra-970-Ml-1-12496.jpg?v=636383396831030000",
    descripcionLarga: "Salta Negra es una cerveza argentina de estilo stout, conocida por su sabor intenso y robusto. Elaborada con maltas oscuras, esta cerveza ofrece un perfil de sabor rico con notas de chocolate, café y caramelo. Su color oscuro y su cuerpo completo la hacen ideal para aquellos que disfrutan de cervezas con carácter, siendo una opción popular en el norte de Argentina y entre los amantes de las cervezas artesanales."
  },
  {
    id: 22,
    titulo: "Patagonia IPA 710 ml",
    descripcion: "Cerveza",
    precio: "$6000",
    imagen: ipa,
    descripcionLarga: "Patagonia IPA es una cerveza artesanal argentina de estilo India Pale Ale, conocida por su sabor intenso y lupulado. Esta cerveza ofrece un perfil de sabor complejo con notas cítricas y florales, equilibradas por un amargor característico del estilo IPA. Patagonia IPA es una opción popular entre los amantes de las cervezas artesanales que buscan una experiencia de sabor audaz y distintiva."
  },
   {
    id: 23,
    titulo: "Patagonia Amber Lager 710 ml",
    descripcion: "Cerveza",
    precio: "$6000",
    imagen: patalager,
    descripcionLarga: "Patagonia Amber Lager es una cerveza artesanal argentina de estilo Amber Lager, conocida por su sabor equilibrado y maltoso. Esta cerveza ofrece un perfil de sabor rico con notas de caramelo y toffee, complementadas por un amargor suave que la hace fácil de beber. Patagonia Amber Lager es una opción popular entre los amantes de las cervezas artesanales que buscan una experiencia de sabor completa y satisfactoria."
  },
     {
    id: 24,
    titulo: "Corona 710 ml",
    descripcion: "Cerveza",
    precio: "$6000",
    imagen: corona,
    descripcionLarga: "Corona es una cerveza lager mexicana conocida por su sabor ligero y refrescante. Elaborada con ingredientes de alta calidad, Corona ofrece un perfil de sabor suave con un toque cítrico, lo que la convierte en una opción popular para disfrutar en climas cálidos y en eventos sociales. Su color dorado y su textura ligera la hacen ideal para acompañar una variedad de comidas, especialmente mariscos y platos frescos."
  },
       {
    id: 25,
    titulo: "Stella Artois 1 L",
    descripcion: "Cerveza",
    precio: "$6000",
    imagen: "https://static.wixstatic.com/media/d2b1c5_62629d96d63a4ceaaf92481bb25ef628~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    descripcionLarga: "Stella Artois es una cerveza lager belga reconocida por su sabor equilibrado y refinado. Elaborada con ingredientes de alta calidad, Stella Artois ofrece un perfil de sabor suave con notas de malta y lúpulo, lo que la convierte en una opción popular entre los amantes de la cerveza en todo el mundo. Su color dorado y su textura ligera la hacen ideal para disfrutar en cualquier ocasión, desde reuniones informales hasta celebraciones especiales."
  },
  
];

export default tragos;