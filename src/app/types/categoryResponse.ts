import { Category } from "./category";

export interface CategoriesResponse {
    message: string;
    page: number;
    total_items: number;
    limit: number;
    data: Category[];
}
