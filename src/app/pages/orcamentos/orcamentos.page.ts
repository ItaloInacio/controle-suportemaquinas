import { Component } from '@angular/core';

@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.page.html',
  styleUrls: ['./orcamentos.page.scss'],
})
export class OrcamentosPage {
  items: any[] = [];

  addItem() {
    this.items.push({
      codigo: '',
      descricao: '',
      quantidade: '',
      valorCompra: '',
      custo: '',
      margem: '',
      substituicao: '',
      icms: '',
      valorVenda: '',
      frete: '',
      totalvalorVenda: '',
      fornecedor: '',
      observacao: ''
    });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
