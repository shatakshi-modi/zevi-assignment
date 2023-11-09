import { faker } from "@faker-js/faker";

export const generateFakeData = (count) => {
  const fakeData = [];
  for (let i = 0; i < count; i++) {
    const imageUrl = faker.image.url({ category: "fashion" });
    const caption = faker.commerce.productName(2);
    fakeData.push({ imageUrl, caption });
  }
  return fakeData;
};
