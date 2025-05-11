import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React, { useEffect, useRef } from "react";
import { addAction } from "@/services/action";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : [])
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes") ? searchParams.get("pizzaTypes")?.split(",") : []
    )
  );

  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const hasFilters =
      sizes.size > 0 ||
      pizzaTypes.size > 0 ||
      selectedIngredients.size > 0 ||
      prices.priceFrom !== undefined ||
      prices.priceTo !== undefined;

    if (hasFilters) {
      addAction({
        action: "ui",
        label: "filter_applied",
        data: {
          sizes: Array.from(sizes),
          pizzaTypes: Array.from(pizzaTypes),
          ingredients: Array.from(selectedIngredients),
          prices,
        },
      });
    }
  }, [sizes, pizzaTypes, selectedIngredients, prices]);

  return React.useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedIngredients,
      prices,
      setPrices: updatePrice,
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setSelectedIngredients: toggleIngredients,
    }),
    [sizes, pizzaTypes, selectedIngredients, prices]
  );
};
