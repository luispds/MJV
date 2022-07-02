import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Playstation 5"

  produto = {
    descricao: "Playstation 5",
    preco: 4600,
    quantidade: 1,
    imagem: "https://cdn.shopify.com/s/files/1/0376/2320/1930/products/PS5STANDARD_500x.jpg?v=1614465491"
 };

  precoComDesconto(preco: number){
   return preco * 0.9
  }

  comprar(){
   alert("comprado com sucesso!")
  }
  clickTag(){
    alert("vc clicou tag")
  }
  passouMouse(){
    alert("vc passou o mouse em cima da tag")
  }

  pressionouTecla(key: any){
    alert("vc apertou: " + key.target.value)
  }
  obterDesconto(){
    this.produto.preco = this.produto.preco * 0.9;
  }
  constructor() { }

  ngOnInit(): void {
    console.log("teste luis")
  }

}
