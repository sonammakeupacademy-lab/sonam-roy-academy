import { siteUrl } from "../constants/siteData";

export const slugify = (text = "") =>
  text.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "";

export const readingTime = (text = "") =>
  Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));

export const absoluteUrl = (path) => new URL(path, siteUrl).href;