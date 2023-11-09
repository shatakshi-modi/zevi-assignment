import { faker } from "@faker-js/faker";

export const generateFakeData = (count: number) => {
  const fakeData = [];
  for (let i = 0; i < count; i++) {
    const imageUrl = faker.image.urlLoremFlickr({ category: "people" });
    const caption = faker.commerce.productName();
    const oldPrice = faker.number.int({ min: 100, max: 5000 });
    const newPrice = faker.number.int({ min: 100, max: 5000 });
    const starRating = faker.number.int({ min: 1, max: 5 });
    const brand = faker.company.name();
    fakeData.push({ imageUrl, caption, oldPrice, newPrice, starRating, brand });
  }
  return fakeData;
};

export interface DataInterface {
  caption: string;
  imageUrl: string;
  oldPrice: number;
  newPrice: number;
  starRating: number;
  brand: string;
}
