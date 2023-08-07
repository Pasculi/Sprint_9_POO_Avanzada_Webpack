const items = [
  {
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
    title: "BIOLOID",
    description: "Robot Kit es una popular serie de kits de construcción de robots de la empresa Robotis. La serie incluye varios kits diseñados tanto para principiantes como para usuarios avanzados. En este kit, encontrarás todo lo que necesitas para construir robots únicos y hacer diseños personalizados. El set incluye un software de programación, un mando a distancia, servomotores y mucho más.",
    price: "$999"
  },
  {
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
    title: "BIOLOID Premium kit",
    description: "BIOLOID Premium Kit tiene todo lo necesario para construir robots bípedos e incluye el servomotor Dynamixel Smart y el controlador CM-530. BIOLOID Premium Kit es perfecto para la educación, el entretenimiento y las competiciones de robótica",
    price: "$1800"
  },
  {
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail2.png",
    title: "Airwheel",
    description: "Este modelo de bicicleta permite utilizar tanto el pedal como el motor eléctrico, así como la combinación de ambos. La Airwheel R8 está equipada con un set de baterías desmontables, que garantizan un suministro de energía suficiente y hacen que tus viajes sean más largos.",
    price: "$2000"
  },
];
const cardList = document.querySelector(".card-list__items");
const popupElement = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const defaultCardButton = document.querySelector(".filter__button_type_grid");
const horizontalCardButton = document.querySelector(".filter__button_type_column");

export { items, cardList, popupElement, popupCloseButton, popupImage, popupCaption, defaultCardButton, horizontalCardButton }