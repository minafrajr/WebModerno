import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../product/product.service';

@Component({
	selector: 'app-product-delete',
	templateUrl: './product-delete.component.html',
	styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
	product!: Product;

	constructor(
		private productService: ProductService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');

		this.productService.readById(String(id)).subscribe((product) => {
			this.product = product;
		});
	}

	Cancel(): void {
		this.router.navigate(['/products']);
	}

	DeleteProduct(): void {
		this.productService.delete(String(this.product.id)).subscribe(() => {
			this.productService.showMessage('Produto excluído com sucesso!', true);
			this.router.navigate(['/products']);
		});
	}
}
