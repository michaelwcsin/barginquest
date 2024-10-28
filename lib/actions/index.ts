"use server";

import { scrapeAmazonPrice } from "../scrape";

export async function scrapeProduct(productURL: string) {
  if (!productURL) return;

  try {
    const scrapedPrice = await scrapeAmazonPrice(productURL);
  } catch (err: any) {
    throw new Error(`Failed to create/update product: ${err.message}`);
  }
}
