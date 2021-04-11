import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	baseUrl = 'http://localhost:3001/products';

	constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

	showMessage(msg: string, isError: Boolean = false): void {
		this.snackBar.open(msg, 'x', {
			duration: 1500,
			horizontalPosition: 'end',
			verticalPosition: 'top',
			panelClass: isError ? ['msg-error'] : ['msg-success'],
		});
	}

	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product).pipe(
			map((obj) => obj),
			catchError((e) => this.ErrorHandler(e))
		);
	}

	read(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl).pipe(
			map((obj) => obj),
			catchError((e) => this.ErrorHandler(e))
		);
	}

	readById(id: string): Observable<Product> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<Product>(url).pipe(
			map((obj) => obj),
			catchError((e) => this.ErrorHandler(e))
		);
	}

	update(product: Product): Observable<Product> {
		const url = `${this.baseUrl}/${product.id}`;
		return this.http.put<Product>(url, product);
	}
	delete(id: string): Observable<Product> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.delete<Product>(url).pipe(
			map((obj) => obj),
			catchError((e) => this.ErrorHandler(e))
		);
	}

	ErrorHandler(e: any): Observable<any> {
		this.showMessage('Ocorreu um erro!', true);
		return EMPTY;
	}
}
