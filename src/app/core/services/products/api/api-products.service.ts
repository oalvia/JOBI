import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.models';
import { ApiProduct } from './models/api-product.models';

const API_PRODUCT_URL = "https://project-jobi-api.vercel.app/products"

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiProducts(): Observable<ApiProduct[]> {
    return this.http.get<ApiProduct[]>(`${API_PRODUCT_URL}`)
  }

  public getApiDetailProduct(id: string): Observable<ApiProduct> {
    return this.http.get<ApiProduct>(`${API_PRODUCT_URL}/${id}`)
  }

  public getApiCategoryBookProduct(): Observable<ApiProduct[]> {
    return this.http.get<ApiProduct[]>(`${API_PRODUCT_URL}/category/libros`)
  }

  public getApiCategoryGarmentProduct(): Observable<ApiProduct[]> {
    return this.http.get<ApiProduct[]>(`${API_PRODUCT_URL}/category/ropa`)
  }

  public getApiCategoryToysProduct(): Observable<ApiProduct[]> {
    return this.http.get<ApiProduct[]>(`${API_PRODUCT_URL}/category/juguetes`)
  }

  public getApiCategoryVideogamesProduct(): Observable<ApiProduct[]> {
    return this.http.get<ApiProduct[]>(`${API_PRODUCT_URL}/category/videojuegos`)
  }
}
