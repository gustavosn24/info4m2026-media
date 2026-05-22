import { Component } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  imports: [],
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.scss',
})
export class CalculaMedia {

  protected mediaParcial: number | undefined = undefined;
  protected mediaFinal: number | undefined = undefined;
  protected situacao: string | undefined = undefined;

  calcularMediaParcial(b1: number, b2: number,
                       b3: number, b4: number): void {
    this.mediaParcial = (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10;
    this.mediaFinal = undefined;
    this.situacao = undefined;

    // Já define situação se não precisar de AF
    if (this.mediaParcial >= 7) {
      this.situacao = 'Aprovado';
    }
  }

  calcularMediaFinal(af: number): void {
    if (this.mediaParcial !== undefined) {
      this.mediaFinal = (this.mediaParcial + af) / 2;
      this.situacao = this.mediaFinal >= 6 ? 'Aprovado' : 'Reprovado';
    }
  }
}