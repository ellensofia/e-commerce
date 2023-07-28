export interface Product {
  id: string;
  product_name: string;
  amount: string[];
  product_description: string;
  prices: number[];
  directions: string;
  reviews: {
    average_rating: number;
    total_reviews: number;
  };
  image: string;
}

import image1 from "../src/assets/images/cleanser.png";
import image3 from "../src/assets/images/cleanser2.png";
import image2 from "../src/assets/images/oasis-try-serum.png";
import image4 from "../src/assets/images/tube.png";

export const products: Product[] = [
  {
    id: "1",
    product_name: "Exfoliating Serum 10% Glycolic Acid",
    amount: ["15ml"],
    product_description:
      "A powerful serum containing 10% glycolic acid for gentle exfoliation and skin renewal. Helps to improve skin texture, reduce hyperpigmentation, and minimize the appearance of fine lines and wrinkles.",
    prices: [29.99],
    directions:
      "Apply a small amount of serum to cleansed skin, avoiding the eye area. Gently massage in circular motions until fully absorbed. Use once or twice a week, depending on your skin's tolerance. Always follow with a moisturizer and sunscreen.",
    reviews: {
      average_rating: 4.5,
      total_reviews: 24,
    },
    image: image1,
  },
  {
    id: "2",
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
    },
    image: image2,
  },
  {
    id: "3",
    product_name: "Cleansing Gel with Tea Tree Oil",
    amount: ["15ml", "100ml"],
    product_description:
      "A refreshing cleansing gel that effectively removes impurities, excess oil, and makeup without stripping the skin's natural moisture. Enriched with tea tree oil for its antibacterial properties. Leaves the skin feeling clean, balanced, and refreshed.",
    prices: [9.99, 23.5],
    directions:
      "Apply a small amount of gel to damp skin and massage gently in circular motions. Rinse thoroughly with water. Use morning and evening as part of your skincare routine.",
    reviews: {
      average_rating: 4.7,
      total_reviews: 32,
    },
    image: image3,
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
    },
    image: image4,
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
    },
    image: image2,
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
    },
    image: image3,
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
    },
    image: image1,
  },
  {
    id: "8",
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
    },
    image: image3,
  },
];
