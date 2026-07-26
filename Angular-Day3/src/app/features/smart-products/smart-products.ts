import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-products',
  imports: [FormsModule],
  templateUrl: './smart-products.html',
  styleUrl: './smart-products.css',
})
export class SmartProducts {
  userSearch:string=''
  pageName:string = 'Smart Products';
  isDeisabled:boolean = false;
  status: 'loading'| 'success' | 'error'|'idle' = 'idle';
 
products = [  
  { id: 1, name: 'Wireless Mouse', price: 250, category: 'Accessories', inStock: true },  
  { id: 2, name: 'Mechanical Keyboard', price: 1200, category: 'Accessories', inStock: true },  
  { id: 3, name: 'USB-C Hub', price: 600, category: 'Accessories', inStock: false },  
  { id: 4, name: '27 Monitor', price: 4500, category: 'Displays', inStock: true }, 
];
localProducts =  this.products;
  handleSearch():void{
    if(this.userSearch===''){
      this.localProducts=this.products;
    } else{
      this.localProducts = this.products.filter(product=>{
      return product.name.trim().toLowerCase() == this.userSearch.trim().toLowerCase()
    })  
    }
     
  }
  setStatus(text:any):void{
    this.status = text
  }
  handleClearProducts(){
    this.isDeisabled=true;
    this.localProducts = []
  }

}
