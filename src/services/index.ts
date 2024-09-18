import { RequestInit } from "next/dist/server/web/spec-extension/request";
import {
  AddPointsResponse,
  Filter,
  GetPageFilters,
  Product,
  ProductList,
  RedeemHistory,
  RedeemProductResponse,
  Sort,
  User,
} from "./types";
import { filterProducts, sortProducts } from "./utils";

export class RedeemService {
  private static baseUrl = process.env.NEXT_PUBLIC_AEROLAB_API_URL;
  private static AEROLAB_API_KEY = process.env.AEROLAB_API_KEY;

  private static async apiClient<T>(
    url: string,
    options?: RequestInit
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.AEROLAB_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }

  public static async getUser(): Promise<User> {
    try {
      console.log(`[RedeemService] getUser`);
      return await this.apiClient<User>("/user/me");
    } catch (error) {
      console.error(
        `[RedeemService][getUser]: Failed to get user with error ${error}`
      );
      throw error;
    }
  }

  public static async addPoints(
    amount: 1000 | 5000 | 7500
  ): Promise<AddPointsResponse> {
    try {
      console.log(`[RedeemService] addPoints`);
      return await this.apiClient<AddPointsResponse>("/user/points", {
        method: "POST",
        body: JSON.stringify({ amount }),
      });
    } catch (error) {
      console.error(
        `[RedeemService][addPoints]: Failed to add points with error ${error}`
      );
      throw error;
    }
  }

  public static async redeemProduct(
    productId: string
  ): Promise<RedeemProductResponse> {
    try {
      console.log(`[RedeemService] redeemProduct ${productId}`);
      return await this.apiClient<RedeemProductResponse>("/redeem", {
        method: "POST",
        body: JSON.stringify({ productId }),
      });
    } catch (error) {
      console.error(
        `[RedeemService][redeemProduct]: Failed to redeem product with error ${error}`
      );
      throw error;
    }
  }

  public static async getProducts({
    page = 1,
    limit = 16,
    sortBy = Sort.ASC,
    filterBy = Filter.ALL,
  }: GetPageFilters): Promise<ProductList> {
    try {
      console.log(`[RedeemService] getProducts`);
      const products = await this.apiClient<Product[]>("/products");

      const filteredProducts = filterProducts(products, filterBy);

      const sortedProducts = sortProducts(filteredProducts, sortBy);

      const paginatedProducts = sortedProducts.slice(
        (page - 1) * limit,
        page * limit
      );

      return {
        products: paginatedProducts,
        total: products.length,
        page,
        totalPages: products.length / limit,
      };
    } catch (error) {
      console.error(
        `[RedeemService][getProducts]: Failed to get products with error ${error} and filters ${page} ${limit} ${sortBy} ${filterBy}`
      );
      throw error;
    }
  }

  public static async getRedeemHistory(): Promise<RedeemHistory[]> {
    try {
      console.log(`[RedeemService] getRedeemHistory`);
      return await this.apiClient<RedeemHistory[]>("/user/history");
    } catch (error) {
      console.error(
        `[RedeemService][getRedeemHistory]: Failed to get redeem history with error ${error}`
      );
      throw error;
    }
  }
}
