import { faker } from "@faker-js/faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const brandValues = [
  "Kemmer, Bashirian and Quitzon",
  "Rohan Inc",
  "Hyatt Group",
  "Gislason - Bernier",
];

export const generateFakeData = (count: number) => {
  const fakeData = [];
  for (let i = 0; i < count; i++) {
    const imageUrl = faker.image.urlLoremFlickr({ category: "people" });
    const caption = faker.commerce.productName();
    const oldPrice = faker.number.int({ min: 100, max: 5000 });
    const newPrice = faker.number.int({ min: 100, max: 5000 });
    const starRating = faker.number.int({ min: 1, max: 5 }).toString();
    const brand = brandValues[faker.number.int({ min: 0, max: 3 })];
    const count = faker.number.int({ min: 5, max: 200 });

    fakeData.push({
      imageUrl,
      caption,
      oldPrice,
      newPrice,
      starRating,
      brand,
      count,
    });
  }
  return fakeData;
};

export const renderStars = (starRating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= starRating) {
      stars.push(
        <span key={i}>
          <FontAwesomeIcon
            icon={faStar}
            size="2xs"
            style={{ color: "#ffd700" }}
          />{" "}
        </span>
      );
    } else {
      stars.push(
        <span key={i}>
          <FontAwesomeIcon
            icon={faStar}
            size="2xs"
            style={{ color: "#CDCCC8" }}
          />{" "}
        </span>
      );
    }
  }
  return stars;
};

export const acc = [
  {
    name: "BRAND",
    key: "brand",
    options: [
      {
        name: "Kemmer, Bashirian and Quitzon",
        key: "Kemmer, Bashirian and Quitzon",
      },
      { name: "Rohan Inc", key: "Rohan Inc" },
      { name: "Hyatt Group", key: "Hyatt Group" },
      { name: "Gislason - Bernier", key: "Gislason - Bernier" },
    ],
  },
  {
    name: "PRICE RANGE",
    key: "price",
    options: [
      {
        name: "Under 500",
        key: "price_Under_500",
      },
      { name: "500 - 1000", key: "price_500_1000" },
    ],
  },
  {
    name: "RATINGS",
    key: "rating",
    options: [
      {
        name: renderStars(1),
        key: "1",
      },
      {
        name: renderStars(2),
        key: "2",
      },
      {
        name: renderStars(3),
        key: "3",
      },
      {
        name: renderStars(4),
        key: "4",
      },
      {
        name: renderStars(5),
        key: "5",
      },
    ],
  },
];

export interface DataInterface {
  caption: string;
  imageUrl: string;
  oldPrice: number;
  newPrice: number;
  starRating: string;
  brand: string;
  count?: number;
}

export interface AccordianItem {
  name: string;
  key: string;
  options: { name: string | JSX.Element[]; key: string }[];
}
