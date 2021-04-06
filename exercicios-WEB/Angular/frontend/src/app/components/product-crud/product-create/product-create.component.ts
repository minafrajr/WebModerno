import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
	product: Product = {
		name: '',
		price: 0,
	};

	constructor(private productService: ProductService, private router: Router) {}

	ngOnInit(): void {}

	OnSave(): void {
		this.productService.create(this.product).subscribe(() => {
			this.productService.showMessage('Salvo com sucesso!');
			this.router.navigate(['/products']);
		});
	}

	OnCancel(): void {
		this.router.navigate(['/products']);
	}
}
