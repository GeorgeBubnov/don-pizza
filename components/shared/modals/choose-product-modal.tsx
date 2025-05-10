"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { ProductForm } from "../product-form";
import { addAction } from "@/services/action";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  const hasTracked = useRef(false);

  useEffect(() => {
    if (product && !hasTracked.current) {
      addAction({
        action: "ui",
        label: "open_product_form",
        data: {
          productId: product.id,
          productName: product.name,
        },
      });
      hasTracked.current = true;
    }
  }, [product]);

  return (
    <Dialog
      open={Boolean(product)}
      onOpenChange={async () => {
        router.back();
        await addAction({
          action: "ui",
          label: "close_product_form",
          data: {
            productId: product.id,
            productName: product.name,
          },
        });
      }}
    >
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <DialogTitle className="hidden"></DialogTitle>
        <ProductForm
          product={product}
          onSubmit={async () => {
            router.back();
            await addAction({
              action: "ui",
              label: "close_product_form_by_cart",
              data: {
                productId: product.id,
                productName: product.name,
              },
            });
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
