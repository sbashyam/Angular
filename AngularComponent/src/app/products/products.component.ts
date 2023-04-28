import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products=[
  {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/watch.jpeg'},
{id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: '/assets/Tv.jpeg'},
{id:3, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: '/assets/Iphone.jpeg'},
{id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'white', available: 'Available', image: '/assets/washing.jpeg'},
{id:5, name: 'LG Refrigerator with Door Cooling', price: '2815', color: 'white', available: 'Not Available', image: '/assets/fridge.jpeg'},
{id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', image: '/assets/Laptop.jpeg'}
];
}
