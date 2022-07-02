import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos";
  exibeProduto = false

  produtos: Array<Product> =[
    {
      id: 1,
      descricao: "Playstation 5 1TB",
      preco: 5000,
      quantidade: 3,
      imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
      disponivel: true
    },
    {
      id: 2,
      descricao: "Playstation 5",
      preco: 4600,
      quantidade: 1,
      imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
      disponivel: true
    },
    {
      id: 3,
      descricao: "Playstation 4",
      preco: 300,
      quantidade: 0,
      imagem: "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-and-pro-image-block-01-en-23jul20?$native--t$",
      disponivel: false
    },
    {
      id: 4,
      descricao: "PC Gamer",
      preco: 5500,
      quantidade: 1,
      imagem: "https://www.oficinadanet.com.br/imagens/post/24973/pc-gamer.jpg",
      disponivel: true
    },
    {
      id: 5,
      descricao: "Xbox Serie X 1TB",
      preco: 5000,
      quantidade: 1,
      imagem: "https://s2.glbimg.com/YPK0KIw9LwoH5qoKppaEONrG8s4=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/7/CcPZpzQu2zZWQnhpIKSw/xbox-series-x-s-one-dez-jogos-aguardados-2022-lista.jpg",
      disponivel: true
    },
  ]

  
  constructor() { }

  ngOnInit(): void {
    console.log("teste");
  }

  precoComDesconto (preco: number) {
    return preco * 0.90;
  }

  obterPrecoDesconto() {
    //this.produto.preco = this.produto.preco * 0.90;
  }

  comprar() {
    alert("Produto comprado com sucesso!");
  }

  clicouTag() {
    alert("Você clicou em uma tag");
  }

  passouMouse() {
    alert("Você passou o mouse em cima de uma tag");
  }

  pressinouTecla(event: any) {
    console.log(event.target.value);
  }

  exibeProdutoSimNao(id: number){
    //var objIndex = this.produtos.findIndex((p => p.id == id));
    this.produtos[id].disponivel = !this.produtos[id].disponivel 
  }
}
