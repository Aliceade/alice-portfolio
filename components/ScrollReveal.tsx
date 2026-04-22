"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let DOM paint first
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
      const obs = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach(el => obs.observe(el));
      return () => obs.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
