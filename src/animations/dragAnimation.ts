import { Inertia } from "framer-motion";

export const dragTransition: Partial<Omit<Inertia, "type" | "velocity">> = {
  bounceStiffness: 600,
  bounceDamping: 20,
};
