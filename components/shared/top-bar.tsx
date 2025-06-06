import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Category } from "@prisma/client";
import { CartButton } from "./cart-button";

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white/40 backdrop-blur-md py-2 shadow-lg shadow-black/15 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories items={categories} />
        <CartButton />
      </Container>
    </div>
  );
};
