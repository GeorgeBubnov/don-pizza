"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store";
import { Category } from "@prisma/client";
import React from "react";
import { addAction } from "@/services/action";

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  const handleCategoryClick = async (id: string, name: string) => {
    await addAction({
      action: "ui",
      label: "click_category",
      data: {
        categoryId: id,
        categoryName: name,
      },
    });

    // Скролл к нужному якорю
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
      {items.map(({ name, id }, index) => (
        <button
          type="button"
          onClick={() => handleCategoryClick(String(id), name)}
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id && "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
