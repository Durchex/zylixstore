"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetClose, SheetOverlay } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactModal1 = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [form, setForm] = useState({ name: "", email: "", brand: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const isTablet = useMediaQuery("(max-width: 767px)");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/sellers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetOverlay>{!isTablet && <SheetClose aria-label="Close" className="text-white" />}</SheetOverlay>
      <SheetContent
        side="bottom"
        className="mx-auto h-screen w-full px-[5%] pt-16 pb-28 data-[state=closed]:slide-out-to-bottom-[120%] md:h-fit md:max-h-[80vh] md:w-[90%] md:px-12 md:pb-16 lg:w-full lg:max-w-lg lg:px-16"
      >
        {isTablet && <SheetClose aria-label="Close" />}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="mb-3 text-h3 font-bold">Sell on ZylixStore</h2>
          <p className="text-medium text-zylix-grey">Tell us about your brand and we&apos;ll be in touch.</p>
        </div>

        {status === "done" ? (
          <p className="text-center text-medium">
            Thanks{form.name ? `, ${form.name}` : ""}! Your seller application has been received.
          </p>
        ) : (
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid w-full grid-cols-1 items-center">
              <Label htmlFor="name" className="mb-2">Name</Label>
              <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="grid w-full grid-cols-1 items-center">
              <Label htmlFor="email" className="mb-2">Email</Label>
              <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="grid w-full grid-cols-1 items-center">
              <Label htmlFor="brand" className="mb-2">Brand / store name</Label>
              <Input id="brand" required value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} />
            </div>
            <div className="grid w-full grid-cols-1 items-center">
              <Label htmlFor="message" className="mb-2">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about what you sell (optional)"
                className="min-h-[8rem] overflow-auto"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            {error && <p className="text-small text-red-600">{error}</p>}
            <div className="text-center">
              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting..." : "Apply to sell"}
              </Button>
            </div>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
};
