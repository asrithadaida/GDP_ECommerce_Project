import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

@Input() title:any
@Input() product:any

  menShoes:any
  womenShoes:any
  kidsShoes:any
  

  ngOnInit(){
    this.menShoes=this.menShoes.slice(0,5);
  }

  womenShoes:any

  ngOnInit(){
    this.womenShoes=this.womenShoes.slice(0,5);
  }

  kidsShoes:any

  ngOnInit(){
    this.kidsShoes=this.kidsShoes.slice(0,5);
  }
}
