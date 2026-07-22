"use client";

import type { ReactNode } from "react";

interface DisclosureItemProps {
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  trigger: ReactNode;
  icon: ReactNode;
  children: ReactNode;
}

export function DisclosureItem({ id, isOpen, onToggle, trigger, icon, children }: DisclosureItemProps) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-trigger`;

  return (
    <li>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          data-cursor="clickable"
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-6 text-left"
        >
          {trigger}
          {icon}
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-350 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </li>
  );
}