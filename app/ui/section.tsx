import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const Section = (
  props: PropsWithChildren<{ className?: string; id?: string }>
) => {
  return (
    <section className={cn("mt-6", props.className)} id={props.id}>
      {props.children}
    </section>
  );
};
