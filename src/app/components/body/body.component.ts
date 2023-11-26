import {Component} from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    producto: any = {
        nombre: 'KipinCargo',
        descripcion: 'Un producto que permite a las empresas tener un seguimiento de sus productos'
    };

    productos: string[] = ['KipinCargo','KipinTrack']
}