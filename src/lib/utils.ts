import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeDate(dateString: string): string {
  const now = new Date();
  const postDate = new Date(dateString);
  const diffInMs = now.getTime() - postDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (diffInHours === 0) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      return diffInMinutes <= 1 ? "Just now" : `${diffInMinutes}m ago`;
    }
    return `${diffInHours}h ago`;
  } else if (diffInDays <= 7) {
    return `${diffInDays}d ago`;
  } else {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      ...(postDate.getFullYear() !== now.getFullYear() && { year: "numeric" }),
    };
    return postDate.toLocaleDateString("en-US", options);
  }
}
