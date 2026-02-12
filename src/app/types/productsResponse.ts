import { Product } from "./product";

export interface ProductsResponse {
    message: string;
    page: number;
    total_items: number;
    limit: number;
    data: Product[];
}