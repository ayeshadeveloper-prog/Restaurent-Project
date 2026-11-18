import {
  CoffeeOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import pizzaImage from "../assets/Category-6.jpg";
import burgerImage from "../assets/Category-5.jpg";
import pastaImage from "../assets/Category-4.jpg";
import fastFoodImage from "../assets/Category-1.jpg";
import healthyFoodImage from "../assets/Category-3.jpg";
import dessertImage from "../assets/Category-2.jpg";
import friesImage from "../assets/Food-1.jpg";
import pizzaDishImage from "../assets/Food-6.jpg";
import burgerDishImage from "../assets/Food-5.jpg";
import pastaDishImage from "../assets/Food-3.jpg";
import chickenImage from "../assets/Category-1.jpg";
import offerBurgerImage from "../assets/Food-5.jpg";
import familyComboImage from "../assets/Family-Combo.jpg";
import chefAhmedImage from "../assets/Chef-1.png";
import chefSaraImage from "../assets/Chef-2.png";
import chefAyeshaImage from "../assets/Chef-3.png";

export const featuresData = [
  {
    id: 1,
    icon: CoffeeOutlined,
    title: "Fresh Ingredients",
    description:
      "We use fresh and high-quality ingredients to prepare delicious meals every day.",
  },
  {
    id: 2,
    icon: RocketOutlined,
    title: "Fast Delivery",
    description:
      "Enjoy your favorite food delivered fresh and hot right to your doorstep.",
  },
  {
    id: 3,
    icon: SafetyCertificateOutlined,
    title: "Best Quality",
    description:
      "We maintain the highest standards of food quality, taste and hygiene.",
  },
  {
    id: 4,
    icon: CustomerServiceOutlined,
    title: "Friendly Service",
    description:
      "Our friendly team is always ready to provide you with the best experience.",
  },
];

export const contactData = [
  {
    id: 1,
    icon: PhoneOutlined,
    title: "Phone Number",
    value: "+92 300 1234567",
    description: "Call us for reservations and orders.",
  },
  {
    id: 2,
    icon: MailOutlined,
    title: "Email Address",
    value: "hello@foodvilla.com",
    description: "Send us your questions and feedback.",
  },
  {
    id: 3,
    icon: EnvironmentOutlined,
    title: "Restaurant Address",
    value: "Main Boulevard, Faisalabad",
    description: "Visit us and enjoy delicious food.",
  },
  {
    id: 4,
    icon: ClockCircleOutlined,
    title: "Opening Hours",
    value: "11:00 AM - 11:00 PM",
    description: "Monday to Sunday, we're here for you.",
  },
];


export const categoriesData = [
  {
    id: 1,
    title: "Pizza",
    description: "Enjoy freshly baked pizzas with delicious toppings and melted cheese.",
    image: pizzaImage,
    category: "pizza",
  },
  {
    id: 2,
    title: "Burgers",
    description: "Taste our juicy burgers made with fresh ingredients and special sauces.",
    image: burgerImage,
    category: "burgers",
  },
  {
    id: 3,
    title: "Pasta",
    description: "Delicious creamy pasta prepared with rich and flavorful sauces.",
    image: pastaImage,
    category: "pasta",
  },
  {
    id: 4,
    title: "Fast Food",
    description: "Crispy, crunchy and tasty bites to satisfy your cravings.",
    image: fastFoodImage,
    category: "fast-food",
  },
  {
    id: 5,
    title: "Healthy Food",
    description: "Fresh salads and healthy meals packed with natural goodness.",
    image: healthyFoodImage,
    category: "healthy-food",
  },
  {
    id: 6,
    title: "Desserts",
    description: "Make your day sweeter with our delicious cakes and desserts.",
    image: dessertImage,
    category: "desserts",
  },
];



export const popularDishesData = [
  {
    id: 1,
    name: "Special Pepperoni Pizza",
    description: "Cheesy pizza with fresh toppings and delicious pepperoni.",
    price: 1299,
    rating: 4.9,
    reviews: 120,
    badge: "Bestseller",
    category: "pizza",
    image: pizzaDishImage,
  },

  {
    id: 2,
    name: "Double Cheese Burger",
    description: "Juicy beef burger loaded with double cheese and special sauce.",
    price: 799,
    rating: 4.8,
    reviews: 98,
    badge: "Popular",
    category: "burgers",
    image: burgerDishImage,
  },

  {
    id: 3,
    name: "Creamy Alfredo Pasta",
    description: "Creamy white sauce pasta with rich and delicious flavors.",
    price: 950,
    rating: 4.7,
    reviews: 85,
    badge: "",
    category: "pasta",
    image: pastaDishImage,
  },

  {
    id: 4,
    name: "Crispy Fried Chicken",
    description: "Golden crispy chicken with a juicy and tender inside.",
    price: 650,
    rating: 4.8,
    reviews: 110,
    badge: "Popular",
    category: "fast-food",
    image: chickenImage,
  },

  {
    id: 5,
    name: "Loaded Cheese Fries",
    description: "Crispy golden fries topped with creamy melted cheese.",
    price: 450,
    rating: 4.6,
    reviews: 76,
    badge: "",
    category: "fast-food",
    image: friesImage,
  },

  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Rich chocolate cake with a delicious molten center.",
    price: 550,
    rating: 4.9,
    reviews: 92,
    badge: "Bestseller",
    category: "desserts",
    image: dessertImage,
  },
];

export const cartItemsData = [
  {
    id: "cart-pepperoni-pizza",
    name: "Pepperoni Pizza",
    description:
      "Deliciously baked pizza topped with mozzarella cheese, spicy pepperoni and fresh herbs.",
    price: 1299,
    quantity: 2,
    image: pizzaDishImage,
  },
  {
    id: "cart-chicken-burger",
    name: "Crispy Chicken Burger",
    description:
      "Juicy crispy chicken fillet with fresh lettuce, cheese and our special house sauce.",
    price: 650,
    quantity: 1,
    image: burgerDishImage,
  },
  {
    id: "cart-loaded-fries",
    name: "Loaded French Fries",
    description:
      "Golden crispy fries loaded with creamy cheese sauce and delicious special toppings.",
    price: 450,
    quantity: 2,
    image: friesImage,
  },
];

export const couponOffersData = [
  {
    code: "FOOD10",
    type: "percentage",
    value: 10,
    description: "10% OFF",
    color: "green",
  },
  {
    code: "SAVE200",
    type: "fixed",
    value: 200,
    description: "Rs. 200 OFF",
    color: "orange",
  },
  {
    code: "WELCOME15",
    type: "percentage",
    value: 15,
    description: "15% OFF",
    color: "blue",
  },
];

export const specialOffersData = [
  {
    id: 1,
    title: "Burger Special Deal",
    subtitle: "Enjoy our juicy double cheese burger.",
    discount: "30% OFF",
    price: "Rs. 559",
    oldPrice: "Rs. 799",
    image: offerBurgerImage,
    buttonText: "Order Now",
  },
  {
    id: 2,
    title: "Family Combo",
    subtitle: "A delicious meal for your whole family.",
    discount: "SPECIAL DEAL",
    price: "Rs. 1,999",
    oldPrice: "Rs. 2,499",
    image: familyComboImage,
    buttonText: "Order Now",
  },
  {
    id: 3,
    title: "Classic Pizza Combo",
    subtitle: "Share a freshly baked pizza and make it a meal.",
    discount: "25% OFF",
    price: "Rs. 1,199",
    oldPrice: "Rs. 1,599",
    image: pizzaDishImage,
    buttonText: "Order Now",
  },
];



export const CHEFS = [
  {
    id: 1,
    name: "Chef Ahmed Khan",
    role: "Head Chef",
    description: "Expert in Italian cuisine and signature dishes.",
    image: chefAhmedImage,
    number: "01",
  },
  {
    id: 2,
    name: "Chef Sara Ali",
    role: "Pizza Specialist",
    description: "Creating delicious handcrafted pizzas.",
    image: chefSaraImage,
    number: "02",
  },
  {
    id: 3,
    name: "Chef Ayesha Noor",
    role: "Dessert Specialist",
    description: "Making every sweet moment memorable.",
    image: chefAyeshaImage,
    number: "03",
  },
];



export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ali Hassan",
    role: "Regular Customer",
    review:
      "Amazing food and excellent service! The pizza was fresh, full of flavor and perfectly prepared. Definitely coming back again!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sara Ahmed",
    role: "Food Lover",
    review:
      "I absolutely loved the taste and quality. The staff was friendly and the atmosphere made our dinner even more special.",
    rating: 5,
  },
  {
    id: 3,
    name: "Usman Malik",
    role: "Happy Customer",
    review:
      "One of the best dining experiences! Fresh ingredients, delicious food and quick service. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Ayesha Noor",
    role: "Regular Customer",
    review:
      "Everything was wonderful, from the food presentation to the taste. I really appreciate their attention to quality.",
    rating: 5,
  },
];



export const exploreMenuData = [

  //  PIZZA 

  {
    id: 1,
    name: "Classic Pepperoni Pizza",
    category: "Pizza",
    description: "Loaded with mozzarella, pepperoni and Italian herbs.",
    price: 1499,
    image: pizzaDishImage,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Pizza",
    description: "Fresh tomatoes, basil and creamy mozzarella.",
    price: 1199,
    image: pizzaDishImage,
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    description: "Smoky BBQ chicken with a cheesy topping.",
    price: 1599,
    image: pizzaDishImage,
  },
  {
    id: 4,
    name: "Veggie Supreme Pizza",
    category: "Pizza",
    description: "A colorful mix of fresh vegetables and cheese.",
    price: 1399,
    image: pizzaDishImage,
  },
  {
    id: 5,
    name: "Four Cheese Pizza",
    category: "Pizza",
    description: "A rich combination of four delicious cheeses.",
    price: 1699,
    image: pizzaDishImage,
  },

  //  BURGERS 

  {
    id: 6,
    name: "Classic Beef Burger",
    category: "Burger",
    description: "Juicy beef patty with lettuce and fresh cheese.",
    price: 899,
    image: burgerDishImage,
  },
  {
    id: 7,
    name: "Crispy Chicken Burger",
    category: "Burger",
    description: "Golden crispy chicken with our special sauce.",
    price: 799,
    image: burgerDishImage,
  },
  {
    id: 8,
    name: "Double Cheese Burger",
    category: "Burger",
    description: "Double beef patty with extra melted cheese.",
    price: 1199,
    image: burgerDishImage,
  },
  {
    id: 9,
    name: "Smoky BBQ Burger",
    category: "Burger",
    description: "Grilled beef with smoky BBQ flavor.",
    price: 999,
    image: burgerDishImage,
  },
  {
    id: 10,
    name: "Spicy Zinger Burger",
    category: "Burger",
    description: "Crunchy spicy chicken with creamy mayo.",
    price: 749,
    image: burgerDishImage,
  },

  //  PASTA

  {
    id: 11,
    name: "Creamy Alfredo Pasta",
    category: "Pasta",
    description: "Pasta tossed in rich creamy white sauce.",
    price: 999,
    image: pastaDishImage,
  },
  {
    id: 12,
    name: "Spaghetti Bolognese",
    category: "Pasta",
    description: "Classic spaghetti with delicious meat sauce.",
    price: 1199,
    image: pastaDishImage,
  },
  {
    id: 13,
    name: "Penne Arrabbiata",
    category: "Pasta",
    description: "Penne pasta with spicy Italian tomato sauce.",
    price: 899,
    image: pastaDishImage,
  },
  {
    id: 14,
    name: "Chicken Macaroni",
    category: "Pasta",
    description: "Tender chicken with creamy macaroni.",
    price: 949,
    image: pastaDishImage,
  },
  {
    id: 15,
    name: "Cheesy Baked Pasta",
    category: "Pasta",
    description: "Oven baked pasta with a golden cheese layer.",
    price: 1099,
    image: pastaDishImage,
  },

  //  FRIES 

  {
    id: 16,
    name: "Classic French Fries",
    category: "Fries",
    description: "Golden crispy potato fries with sea salt.",
    price: 299,
    image: friesImage,
  },
  {
    id: 17,
    name: "Loaded Cheese Fries",
    category: "Fries",
    description: "Crispy fries topped with melted cheese.",
    price: 499,
    image: friesImage,
  },
  {
    id: 18,
    name: "Peri Peri Fries",
    category: "Fries",
    description: "Crispy fries with a spicy peri peri coating.",
    price: 399,
    image: friesImage,
  },
  {
    id: 19,
    name: "Masala Fries",
    category: "Fries",
    description: "Fresh fries tossed in special masala seasoning.",
    price: 349,
    image: friesImage,
  },
  {
    id: 20,
    name: "Garlic Parmesan Fries",
    category: "Fries",
    description: "Fries topped with garlic and parmesan.",
    price: 549,
    image: friesImage,
  },

  //  WINGS 

  {
    id: 21,
    name: "Classic Buffalo Wings",
    category: "Wings",
    description: "Juicy wings tossed in classic buffalo sauce.",
    price: 899,
    image: chickenImage,
  },
  {
    id: 22,
    name: "BBQ Chicken Wings",
    category: "Wings",
    description: "Tender chicken wings with smoky BBQ glaze.",
    price: 949,
    image: chickenImage,
  },
  {
    id: 23,
    name: "Spicy Hot Wings",
    category: "Wings",
    description: "Hot and crispy wings with spicy seasoning.",
    price: 899,
    image: chickenImage,
  },
  {
    id: 24,
    name: "Crispy Fried Wings",
    category: "Wings",
    description: "Crunchy golden wings with a delicious coating.",
    price: 799,
    image: chickenImage,
  },
  {
    id: 25,
    name: "Honey Garlic Wings",
    category: "Wings",
    description: "Sweet honey glaze with a delicious garlic twist.",
    price: 999,
    image: chickenImage,
  },

  //  HEALTHY FOOD 

  {
    id: 26,
    name: "Fresh Garden Salad",
    category: "Healthy Food",
    description: "Fresh lettuce, cucumber, tomatoes and greens.",
    price: 499,
    image: healthyFoodImage,
  },
  {
    id: 27,
    name: "Grilled Chicken Salad",
    category: "Healthy Food",
    description: "Grilled chicken with fresh seasonal vegetables.",
    price: 799,
    image: healthyFoodImage,
  },
  {
    id: 28,
    name: "Healthy Buddha Bowl",
    category: "Healthy Food",
    description: "Nutritious grains, greens and fresh vegetables.",
    price: 699,
    image: healthyFoodImage,
  },
  {
    id: 29,
    name: "Avocado Salad Bowl",
    category: "Healthy Food",
    description: "Fresh avocado with colorful healthy ingredients.",
    price: 749,
    image: healthyFoodImage,
  },
  {
    id: 30,
    name: "Fresh Veggie Bowl",
    category: "Healthy Food",
    description: "A refreshing bowl of seasonal vegetables.",
    price: 599,
    image: healthyFoodImage,
  },
       // DESSERTS

  {
    id: 31,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    description: "Warm chocolate cake with a molten center.",
    price: 599,
    image: dessertImage,
  },
  {
    id: 32,
    name: "Strawberry Cheesecake",
    category: "Desserts",
    description: "Creamy cheesecake topped with fresh strawberries.",
    price: 699,
    image: dessertImage,
  },
  {
    id: 33,
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "Rich chocolate brownie with a soft center.",
    price: 499,
    image: dessertImage,
  },
  {
    id: 34,
    name: "Classic Cream Cake",
    category: "Desserts",
    description: "Soft sponge cake with delicious fresh cream.",
    price: 650,
    image: dessertImage,
  },
  {
    id: 35,
    name: "Chocolate Ice Cream",
    category: "Desserts",
    description: "Rich and creamy chocolate ice cream.",
    price: 399,
    image: dessertImage,
  },

];


const recommendedProducts = [
  {
    id: 1,
    name: "Cheese Burst Pizza",
    description: "Loaded with mozzarella cheese and fresh toppings.",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85",
    category: "Pizza",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "Crispy Chicken Burger",
    description: "Juicy crispy chicken with fresh lettuce and sauce.",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",
    category: "Burger",
    badge: "POPULAR",
  },
  {
    id: 3,
    name: "Creamy Alfredo Pasta",
    description: "Rich creamy sauce with delicious parmesan cheese.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85",
    category: "Pasta",
    badge: "CHEF'S PICK",
  },
  {
    id: 4,
    name: "Loaded French Fries",
    description: "Golden crispy fries topped with special seasoning.",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85",
    category: "Fries",
    badge: "FAVORITE",
  },
];

export default recommendedProducts;





