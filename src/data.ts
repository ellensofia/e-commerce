export interface IProduct {
  id: string;
  product_name: string;
  amount: string[];
  product_description: string;
  prices: number[];
  directions: string;
  reviews: {
    average_rating: number;
    total_reviews: number;
    text_reviews: { text: string; name: string; date: string }[];
  };
  image: string;
}

import image7 from "../src/assets/images/aloe-vera.png";
import img3 from "../src/assets/images/category-3.jpg";
import img5 from "../src/assets/images/category-5.jpg";
import image1 from "../src/assets/images/cleanser-new.png";
import image3 from "../src/assets/images/eye-cream.png";
import ingredient1 from "../src/assets/images/ingredient1.jpg";
import ingredient10 from "../src/assets/images/ingredient10.jpg";
import ingredient11 from "../src/assets/images/ingredient11.jpg";
import ingredient12 from "../src/assets/images/ingredient12.jpg";
import ingredient2 from "../src/assets/images/ingredient2.jpg";
import ingredient3 from "../src/assets/images/ingredient3.jpg";
import ingredient4 from "../src/assets/images/ingredient4.jpg";
import ingredient5 from "../src/assets/images/ingredient5.jpg";
import ingredient6 from "../src/assets/images/ingredient6.jpg";
import ingredient7 from "../src/assets/images/ingredient7.jpg";
import ingredient8 from "../src/assets/images/ingredient8.jpg";
import ingredient9 from "../src/assets/images/ingredient9.jpg";
import image5 from "../src/assets/images/mist.png";
import image6 from "../src/assets/images/night-cream-logo-on-lid.png";
import image2 from "../src/assets/images/serum.png";
import image4 from "../src/assets/images/tube.png";

function getRandomDate() {
  const start = new Date(2018, 0, 1);
  const end = new Date();
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, "0");
  const day = String(randomDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export const products: IProduct[] = [
  {
    id: "1",
    product_name: "Exfoliating Serum 10% Glycolic Acid",
    amount: ["5ml", "15ml"],
    product_description:
      "A powerful serum containing 10% glycolic acid for gentle exfoliation and skin renewal. Helps to improve skin texture, reduce hyperpigmentation, and minimize the appearance of fine lines and wrinkles.",
    prices: [29.99, 44.99],
    directions:
      "Apply a small amount of serum to cleansed skin, avoiding the eye area. Gently massage in circular motions until fully absorbed. Use once or twice a week, depending on your skin's tolerance. Always follow with a moisturizer and sunscreen.",
    reviews: {
      average_rating: 4.5,
      total_reviews: 24,
      text_reviews: [
        {
          text: "Smooths skin texture.",
          name: "Anna",
          date: getRandomDate().toString(),
        },
        {
          text: "This serum has transformed my skin! It's smoother and more radiant than ever before. Definitely a game-changer for my skincare routine.",
          name: "John",
          date: getRandomDate().toString(),
        },
        {
          text: "Highly recommended.",
          name: "Emily",
          date: getRandomDate().toString(),
        },
      ],
    },
    image: image2,
  },
  {
    id: "2",
    product_name: "Revitalizing Eye Cream",
    amount: ["5ml", "15ml"],
    product_description:
      "A revitalizing eye cream that targets puffiness, dark circles, and fine lines around the delicate eye area. Formulated with peptides and botanical extracts to improve elasticity and brighten the skin.",
    prices: [19.99, 27.99],
    directions:
      "Apply a small amount of cream around the eye area using your ring finger. Gently pat it into the skin until fully absorbed. Use morning and evening for best results.",
    reviews: {
      average_rating: 4.3,
      total_reviews: 16,
      text_reviews: [
        {
          text: "Love it!",
          name: "Emily",
          date: getRandomDate().toString(),
        },
      ],
    },
    image: image3,
  },

  {
    id: "3",
    product_name: "Moisturizing Cream with Hyaluronic Acid",
    amount: ["15ml", "30ml"],
    product_description:
      "An ultra-hydrating cream enriched with nourishing ingredients like hyaluronic acid and vitamins. Provides long-lasting moisture and helps to improve skin elasticity. Suitable for all skin types.",
    prices: [34.99, 49.99],
    directions:
      "After cleansing and applying serum, take a small amount of cream and gently massage it onto the face and neck. Use morning and evening for best results.",
    reviews: {
      average_rating: 3.2,
      total_reviews: 18,
      text_reviews: [
        {
          text: "This cream is lightweight yet incredibly hydrating. My skin feels plump and moisturized throughout the day.",
          name: "Sophia",
          date: getRandomDate().toString(),
        },
        {
          text: "I've noticed a significant improvement in my skin's elasticity since using this cream. Definitely worth the price!",
          name: "David",
          date: getRandomDate().toString(),
        },
        {
          text: "Great for sensitive skin. It doesn't cause any irritation or breakouts.",
          name: "Emma",
          date: getRandomDate().toString(),
        },
      ],
    },

    image: image4,
  },
  {
    id: "4",
    product_name: "Hydrating Face Mist with Rosewater",
    amount: ["30ml", "100ml"],
    product_description:
      "A hydrating face mist enriched with pure rosewater to refresh and revitalize the skin. Provides an instant boost of hydration and helps to set makeup. Can be used throughout the day for a quick pick-me-up.",
    prices: [24.99, 59.99],
    directions:
      "Hold the bottle a few inches away from the face and mist lightly. Allow the mist to dry naturally or gently pat it into the skin. Use whenever your skin needs a hydration boost.",
    reviews: {
      average_rating: 4.8,
      total_reviews: 27,
      text_reviews: [
        {
          text: "I carry this face mist with me everywhere! It's perfect for a quick hydration pick-me-up throughout the day.",
          name: "Sophia",
          date: getRandomDate().toString(),
        },
        {
          text: "This mist has a lovely rose scent and leaves my skin feeling dewy and refreshed.",
          name: "Lucas",
          date: getRandomDate().toString(),
        },
        {
          text: "Great for setting makeup and giving my skin a healthy glow. A must-have!",
          name: "Emily",
          date: getRandomDate().toString(),
        },
      ],
    },
    image: image5,
  },
  {
    id: "5",
    product_name: "Anti-Aging Night Cream",
    amount: ["30ml", "60ml"],
    product_description:
      "A nourishing night cream that targets multiple signs of aging, including fine lines, wrinkles, and dullness. Infused with potent antioxidants and peptides to promote skin renewal and improve elasticity.",
    prices: [39.99, 62.99],
    directions:
      "Apply a small amount of cream to cleansed face and neck before bedtime. Gently massage in upward motions until fully absorbed. Use every night for best results.",
    reviews: {
      average_rating: 4.6,
      total_reviews: 36,
      text_reviews: [
        {
          text: "This night cream has made a noticeable difference in the appearance of my fine lines. I wake up with plump and smooth skin.",
          name: "David",
          date: getRandomDate().toString(),
        },
        {
          text: "The texture of this cream is luxurious and feels great on my skin. Definitely a treat to use every night.",
          name: "Sophie",
          date: getRandomDate().toString(),
        },
        {
          text: "I've been using this cream for a few months now, and my skin looks more youthful and radiant. I'm impressed!",
          name: "Lucas",
          date: getRandomDate().toString(),
        },
      ],
    },
    image: image6,
  },
  {
    id: "6",
    product_name: "Brightening Vitamin C Serum",
    amount: ["30ml"],
    product_description:
      "A brightening serum infused with vitamin C to even out skin tone, reduce dark spots, and enhance radiance. Provides antioxidant protection and boosts collagen production for a youthful complexion.",
    prices: [32.99],
    directions:
      "Apply a small amount of serum to cleansed face and neck. Gently pat it into the skin until fully absorbed. Use morning and evening for maximum brightening benefits.",
    reviews: {
      average_rating: 4.4,
      total_reviews: 22,
      text_reviews: [
        {
          text: "I've been using this serum for a while now, and my dark spots have visibly faded. It's amazing!",
          name: "Anna",
          date: getRandomDate().toString(),
        },
        {
          text: "Great product",
          name: "Sophia",
          date: getRandomDate().toString(),
        },
      ],
    },
    image: image2,
  },
  {
    id: "7",
    product_name: "Soothing Aloe Vera Gel",
    amount: ["150ml"],
    product_description:
      "A soothing gel enriched with aloe vera to calm and hydrate the skin. Helps to relieve redness, irritation, and sunburn. Suitable for sensitive skin.",
    prices: [14.99],
    directions:
      "Apply a generous amount of gel to the affected area and gently massage it into the skin. Reapply as needed. Can be used on the face and body.",
    reviews: {
      average_rating: 3.9,
      total_reviews: 42,
      text_reviews: [],
    },
    image: image7,
  },
  {
    id: "8",
    product_name: "Cleansing Gel with Tea Tree Oil",
    amount: ["50ml", "150ml"],
    product_description:
      "A refreshing cleansing gel that effectively removes impurities, excess oil, and makeup without stripping the skin's natural moisture. Enriched with tea tree oil for its antibacterial properties. Leaves the skin feeling clean, balanced, and refreshed.",
    prices: [9.99, 23.5],
    directions:
      "Apply a small amount of gel to damp skin and massage gently in circular motions. Rinse thoroughly with water. Use morning and evening as part of your skincare routine.",
    reviews: {
      average_rating: 4.7,
      total_reviews: 32,
      text_reviews: [
        {
          text: "I've been using this cleansing gel for a while now, and it's become a staple in my skincare routine. My skin feels clean and refreshed after each use.",
          name: "Sanna",
          date: getRandomDate().toString(),
        },
        {
          text: "The tea tree oil in this gel has helped tremendously with my acne-prone skin. My breakouts have reduced significantly.",
          name: "Sophie",
          date: getRandomDate().toString(),
        },
        {
          text: "Leaves my skin feeling balanced and not overly dry like some other cleansers I've tried. Highly recommended!",
          name: "Johanna",
          date: getRandomDate().toString(),
        },
      ],
    },
    image: image1,
  },
];

export interface Ingredient {
  image: string;
  name: string;
  info: string;
}

export const ingredients: Ingredient[] = [
  {
    image: ingredient1,
    name: "Glycerin",
    info: "A humectant that attracts moisture to the skin, keeping it soft and supple.",
  },
  {
    image: ingredient2,
    name: "Vitamin C",
    info: "An antioxidant that brightens the skin and helps protect against environmental damage.",
  },
  {
    image: ingredient3,
    name: "Hyaluronic Acid",
    info: "Moisturizes and hydrates the skin, reducing the appearance of fine lines.",
  },
  {
    image: ingredient4,
    name: "Centella asiatica",
    info: "Calming and soothing for the skin, reducing redness and irritation.",
  },
  {
    image: ingredient5,
    name: "Niacinamide",
    info: "Minimizes pores, regulates oil production, and improves overall skin texture.",
  },
  {
    image: ingredient6,
    name: "Retinol",
    info: "Stimulates collagen production, reduces wrinkles, and improves skin texture.",
  },
  {
    image: ingredient7,
    name: "Aloe Vera",
    info: "Soothes and hydrates the skin, reducing redness and irritation.",
  },
  {
    image: ingredient8,
    name: "Salicylic Acid",
    info: "Exfoliates the skin, unclogs pores, and helps treat acne and blemishes.",
  },
  {
    image: ingredient9,
    name: "Vitamin E",
    info: "An antioxidant that protects the skin from damage caused by free radicals.",
  },
  {
    image: ingredient10,
    name: "Peptides",
    info: "Stimulate collagen production, promoting firmness and elasticity in the skin.",
  },
  {
    image: ingredient11,
    name: "Azelaic Acid",
    info: "A natural ingredient with anti-inflammatory properties that helps reduce uneven skin tone.",
  },
  {
    image: ingredient12,
    name: "Vitamin B5",
    info: "Hydrates and nourishes the skin, helping to maintain a healthy barrier.",
  },
];

export const skintypes: string[] = [
  "Oily",
  "Dry",
  "Normal",
  "Combination",
  "Acne",
  "Sensitive",
  "Dry",
  "Mature",
];

export interface ICategory {
  name: string;
  image: string;
}

export const categories: ICategory[] = [
  {
    name: "Cleansers",
    image: img5,
  },
  {
    name: "Lip care",
    image: image3,
  },
  {
    name: "Sun protection",
    image: ingredient1,
  },
  {
    name: "Moisturizers",
    image: ingredient1,
  },
  {
    name: "Serum",
    image: ingredient2,
  },
  {
    name: "Lip care",
    image: img3,
  },
  {
    name: "Exfoliators",
    image: ingredient12,
  },

  {
    name: "Eye care",
    image: ingredient1,
  },
  {
    name: "Best sellers",
    image: ingredient10,
  },
  {
    name: "New in",
    image: image3,
  },
  {
    name: "Anti-aging",
    image: ingredient11,
  },
  {
    name: "Body care",
    image: image3,
  },
];
