import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  title = 'Ürün  Listesi';
  filterText = '';
  products: Product[] = [];
  
  constructor(
    private alertifyService: AlertifyService,
    private ProductService:ProductService,
    private activatedRoute:ActivatedRoute
   
  ) {}

 

  ngOnInit() {

      this.activatedRoute.params.subscribe(params=>{
        this.ProductService.getProducts(params["categoryId"]).subscribe(data=>{
          this.products = data
        });
      })

   
  }

  addToCart(product: any) {
    this.alertifyService.success(product.name + ' sepete eklendi');
  }
}
