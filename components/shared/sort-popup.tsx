"use client";

import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  onChange?: (value: string) => void;
}

const SORT_OPTIONS = [
  { label: "Популярное", value: "rating" },
  { label: "Дешевле", value: "cheap" },
  { label: "Дороже", value: "expensive" },
];

export const SortPopup: React.FC<Props> = ({ className, onChange }) => {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useState("rating");
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedSort(value);
    router.push(`?sortBy=${value}`);
    setOpen(false);
  };

  const selectedLabel = SORT_OPTIONS.find((opt) => opt.value === selectedSort)?.label || "";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "inline-flex items-center gap-1 bg-gray-50 px-3 h-[52px] rounded-2xl cursor-pointer w-full",
            className
          )}
        >
          <ArrowUpDown size={16} />
          <b>Сортировка:</b>
          <b className="text-primary">{selectedLabel}</b>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2">
        {SORT_OPTIONS.map((option) => (
          <Button
            key={option.value}
            variant={selectedSort === option.value ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};
