"use client";

import type { Product } from "@/app/generated/prisma/client";
import { Sheet, SheetContent, SheetClose, SheetOverlay } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Close } from "relume-icons";

type CartItemWithProduct = { id: string; quantity: number; product: Product };

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export const CartDrawer = ({
  open,
  onOpenChange,
  items,
  subtotal,
  onRemove,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItemWithProduct[];
  subtotal: number;
  onRemove: (itemId: string) => void;
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetOverlay />
      <SheetContent side="right" className="flex w-full max-w-sm flex-col px-6 py-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-h5 font-bold">Your Cart</h3>
          <SheetClose aria-label="Close" />
        </div>

        {items.length === 0 ? (
          <p className="text-medium text-zylix-grey">Your cart is empty.</p>
        ) : (
          <div className="flex-1 space-y-4 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 rounded-card border border-scheme-border p-3">
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-form text-xl"
                  style={{ background: `linear-gradient(135deg, ${item.product.swatchFrom}, ${item.product.swatchTo})` }}
                >
                  {item.product.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-small font-semibold">{item.product.name}</p>
                  <p className="text-tiny text-zylix-grey">
                    Qty {item.quantity} · {formatNaira(item.product.price)}
                  </p>
                </div>
                <button onClick={() => onRemove(item.id)} aria-label="Remove" className="text-zylix-grey">
                  <Close className="size-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-4 border-t border-scheme-border pt-4">
            <div className="mb-3 flex items-center justify-between text-medium font-bold">
              <span>Subtotal</span>
              <span>{formatNaira(subtotal)}</span>
            </div>
            <Button className="w-full">Checkout</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
