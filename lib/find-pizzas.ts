import { categories } from "./../prisma/constants";
import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
  sort?: "cheap" | "expensive" | "rating";
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export const findPizzas = async (params: GetSearchParams) => {
  const sizes = params.sizes?.split(",").map(Number);
  const pizzaTypes = params.pizzaTypes?.split(",").map(Number);
  const ingredientsIdArr = params.ingredients?.split(",").map(Number);

  const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;

  const sortBy = params.sortBy || "rating";

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        },
        where: {
          ingredients: ingredientsIdArr
            ? {
                some: {
                  id: {
                    in: ingredientsIdArr,
                  },
                },
              }
            : undefined,
          items: {
            some: {
              size: {
                in: sizes,
              },
              pizzaType: {
                in: pizzaTypes,
              },
              price: {
                gte: minPrice, // >=
                lte: maxPrice, // <=
              },
            },
          },
        },
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: "asc",
            },
          },
        },
      },
    },
  });

  const sortedCategories = categories.map((category) => {
    const sortedProducts = category.products
      .map((product) => ({
        ...product,
        minPrice: Math.min(...product.items.map((i) => i.price)),
      }))
      .sort((a, b) => {
        switch (sortBy) {
          case "cheap":
            return a.minPrice - b.minPrice;
          case "expensive":
            return b.minPrice - a.minPrice;
          case "rating":
            return (a.rate || 0) - (b.rate || 0);
          default:
            return 0;
        }
      });

    return {
      ...category,
      products: sortedProducts,
    };
  });

  return sortedCategories;
};
