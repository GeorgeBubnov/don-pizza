import { prisma } from "@/prisma/prisma-client";

export const findOrCreateCart = async (token: string) => {
  let userCart = await prisma.cart.findFirst({
    where: {
      token,
      paid: false,
    },
  });

  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        token,
        paid: false,
      },
    });
  }

  return userCart;
};
