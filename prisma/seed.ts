import { Prisma } from "@prisma/client";
import { categories, _ingredients, products, pizzasNames } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({ productId }: { productId: number }) => {
  return {
    productId,
    price: randomDecimalNumber(80, 350),
  } as Prisma.ProductItemUncheckedCreateInput;
};

const generatePizzaItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(200, 1000),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

const generatePizzaItemTraditionAll = ({ productId }: { productId: number }) => {
  return [
    generatePizzaItem({ productId: productId, pizzaType: 1, size: 20 }),
    generatePizzaItem({ productId: productId, pizzaType: 1, size: 30 }),
    generatePizzaItem({ productId: productId, pizzaType: 1, size: 40 }),
  ];
};

const generatePizzaItemThinAll = ({ productId }: { productId: number }) => {
  return [
    generatePizzaItem({ productId: productId, pizzaType: 2, size: 20 }),
    generatePizzaItem({ productId: productId, pizzaType: 2, size: 30 }),
    generatePizzaItem({ productId: productId, pizzaType: 2, size: 40 }),
  ];
};

const generatePizzaItemTraditionPlus = ({ productId }: { productId: number }) => {
  return [
    ...generatePizzaItemTraditionAll({ productId: productId }),
    generatePizzaItem({ productId: productId, pizzaType: 2, size: 40 }),
  ];
};

const generatePizzaItemThinPlus = ({ productId }: { productId: number }) => {
  return [
    generatePizzaItem({ productId: productId, pizzaType: 1, size: 30 }),
    ...generatePizzaItemThinAll({ productId: productId }),
  ];
};

const generatePizzaItemSome = ({ productId }: { productId: number }) => {
  return [
    generatePizzaItem({ productId: productId, pizzaType: 1, size: 20 }),
    generatePizzaItem({ productId: productId, pizzaType: 1, size: 30 }),
    generatePizzaItem({ productId: productId, pizzaType: 2, size: 30 }),
    generatePizzaItem({ productId: productId, pizzaType: 2, size: 40 }),
  ];
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const allProductItems = [];

  for (let i = 1; i < products.length + 1; i++) {
    allProductItems.push(generatePizzaItem({ productId: i }));
  }

  await prisma.productItem.createMany({
    data: allProductItems,
  });

  const createdPizzas = [];

  for (const pizza of pizzasNames) {
    const product = await prisma.product.create({
      data: {
        name: pizza.name,
        imageUrl: pizza.imageUrl,
        categoryId: 1,
        ingredients: {
          connect: _ingredients.slice(randomDecimalNumber(0, 10), randomDecimalNumber(10, 17)),
        },
      },
    });

    createdPizzas.push(product);
  }

  const allPizzaItems = [];

  for (const pizza of createdPizzas) {
    const random = Math.floor(Math.random() * 3);
    let items;
    switch (random) {
      case 0:
        items = generatePizzaItemTraditionPlus({ productId: pizza.id });
        break;
      case 1:
        items = generatePizzaItemThinPlus({ productId: pizza.id });
        break;
      case 2:
        items = [
          ...generatePizzaItemTraditionAll({ productId: pizza.id }),
          ...generatePizzaItemThinAll({ productId: pizza.id }),
        ];
        break;
      default:
        items = generatePizzaItemSome({ productId: pizza.id });
    }

    allPizzaItems.push(...items);
  }

  await prisma.productItem.createMany({
    data: allPizzaItems,
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "222222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
