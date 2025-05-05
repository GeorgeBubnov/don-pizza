"use client";

import React from "react";
import Image from "next/image";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PizzaSize, PizzaType } from "@/constants/pizza";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/lib";

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const totalAmount = 593;
  const items = [
    {
      id: 18,
      name: "Пепперони фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
      categoryId: 1,
      createdAt: "2025-05-05T06:31:08.578Z",
      updatedAt: "2025-05-05T06:31:08.578Z",
      ingredients: [
        {
          id: 1,
          name: "Сырный бортик",
          price: 179,
          imageUrl:
            "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
          createdAt: "2025-05-05T06:31:08.562Z",
          updatedAt: "2025-05-05T06:31:08.562Z",
        },
        {
          id: 2,
          name: "Сливочная моцарелла",
          price: 79,
          imageUrl:
            "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
          createdAt: "2025-05-05T06:31:08.562Z",
          updatedAt: "2025-05-05T06:31:08.562Z",
        },
        {
          id: 3,
          name: "Сыры чеддер и пармезан",
          price: 79,
          imageUrl:
            "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
          createdAt: "2025-05-05T06:31:08.562Z",
          updatedAt: "2025-05-05T06:31:08.562Z",
        },
      ],
      items: [
        {
          id: 1,
          price: 406,
          size: 20,
          pizzaType: 1,
          productId: 18,
        },
        {
          id: 2,
          price: 272,
          size: 30,
          pizzaType: 2,
          productId: 18,
        },
        {
          id: 3,
          price: 470,
          size: 40,
          pizzaType: 2,
          productId: 18,
        },
      ],
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div className={cn("flex flex-col h-full", !totalAmount && "justify-center")}>
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                В корзине <span className="font-bold">{items.length} товара</span>
              </SheetTitle>
            </SheetHeader>
          )}

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <Image src="/assets/images/empty-box.png" alt="Empty cart" width={120} height={120} />
              <Title size="sm" text="Корзина пустая" className="text-center font-bold my-2" />
              <p className="text-center text-neutral-500 mb-5">
                Добавьте хотя бы одну пиццу, чтобы совершить заказ
              </p>

              <SheetClose>
                <Button className="w-56 h-12 text-base" size="lg">
                  <ArrowLeft className="w-5 mr-2" />
                  Вернуться назад
                </Button>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="-mx-6 mt-5 overflow-auto flex-1">
                {items.map((item) => (
                  <div key={item.id} className="mb-2">
                    <CartDrawerItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      details={getCartItemDetails(
                        [
                          {
                            id: 4,
                            name: "Острый перец халапеньо",
                            price: 59,
                            imageUrl:
                              "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
                            createdAt: new Date("2025-05-05T06:31:08.562Z"),
                            updatedAt: new Date("2025-05-05T06:31:08.562Z"),
                          },
                          {
                            id: 5,
                            name: "Нежный цыпленок",
                            price: 79,
                            imageUrl:
                              "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
                            createdAt: new Date("2025-05-05T06:31:08.562Z"),
                            updatedAt: new Date("2025-05-05T06:31:08.562Z"),
                          },
                        ],
                        1 as PizzaType,
                        20 as PizzaSize
                      )}
                      name={item.name}
                      price={totalAmount}
                      quantity={2}
                    />
                  </div>
                ))}
              </div>

              <SheetFooter className="-mx-6 bg-white p-8">
                <div className="w-full">
                  <div className="flex mb-4">
                    <span className="flex flex-1 text-lg text-neutral-500">
                      Итого
                      <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                    </span>

                    <span className="font-bold text-lg">{totalAmount} ₽</span>
                  </div>

                  <Link href="/checkout">
                    <Button type="submit" className="w-full h-12 text-base">
                      Оформить заказ
                      <ArrowRight className="w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
