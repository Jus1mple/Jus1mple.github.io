import React from "react";
import { cn } from "../lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  statsText,
  className,
}) {
  return (
    <div className={cn("mb-14", className)}>
      <div className="mb-5 flex items-center gap-4">
        <div className="h-8 w-1 bg-blue-700" />
        <h2 className="heading text-2xl font-semibold text-gray-900">{title}</h2>
      </div>
      {subtitle ? (
        <p className="max-w-3xl text-lg font-medium leading-relaxed text-gray-600">
          {subtitle}
        </p>
      ) : null}
      {statsText ? (
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{statsText}</p>
      ) : null}
    </div>
  );
}

