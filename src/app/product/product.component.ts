import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"阿萨发的",["电子产品","数码"]),
      new Product(2,"第一个商品",1.99,3.5,"阿萨发的",["电子产品","数码"]),
      new Product(3,"第一个商品",1.99,3.5,"阿萨发的",["电子产品","数码"]),
      new Product(4,"第一个商品",1.99,3.5,"阿萨发的",["电子产品","数码"]),
      new Product(5,"第一个商品",1.99,3.5,"阿萨发的",["电子产品","数码"]),
      new Product(6,"第一个商品",1.99,3.5,"阿萨发的",["电子产品","数码"]),
     
    ]
  }

}


export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public catrgories:Array<string>
  ){}
}