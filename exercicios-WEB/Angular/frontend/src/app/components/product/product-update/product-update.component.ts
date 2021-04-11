import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-update',
	templateUrl: './product-update.component.html',
	styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
	product!: Product;

	constructor(
		private productService: ProductService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	//para preencher o formulário com o produto escolhido
	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');

		this.productService.readById(String(id)).subscribe((product) => {
			this.product = product;
		});
	}

	UpdateProduct(): void {
		this.productService.update(this.product).subscribe(() => {
			this.productService.showMessage('Produto atualizado com sucesso!');
			this.router.navigate(['/products']);
		});
	}

	Cancel(): void {
		this.router.navigate(['/products']);
	}
}
