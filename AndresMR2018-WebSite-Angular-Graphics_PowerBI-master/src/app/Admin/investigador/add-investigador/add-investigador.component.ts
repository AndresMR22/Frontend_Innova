import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceInvestigadorService } from '../../../services/investigador/service-investigador.service';
import { Investigador } from '../../../Modelos/Investigador';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-investigador',
  templateUrl: './add-investigador.component.html',
  styleUrls: ['./add-investigador.component.css'],
})
export class AddInvestigadorComponent implements OnInit {
  @ViewChild('inputFoto') iFoto!:ElementRef
  investigador: Investigador[] = [];
  nombreinvestigador?: string;
  emailinvestigador?: string;
  cargoinvestigador?: string;
  fotoinvestigador?: string;

  constructor(private serviceI: ServiceInvestigadorService) {}

  ngOnInit(): void {}

  onFileChanges(files: any) {
    this.fotoinvestigador = files[0].base64;
  }

  resetFile(){
    this.iFoto.nativeElement.value=''
  }

  addInvestigador(event: any) {
    event.preventDefault();
    const inv: Investigador = {
      nombreinvestigador: this.nombreinvestigador,
      emailinvestigador: this.emailinvestigador,
      cargoinvestigador: this.cargoinvestigador,
      foto: this.fotoinvestigador,
    };

    this.serviceI.postInvestigador(inv).subscribe((data) => {
      this.investigador.push(data);
    });

    Swal.fire({
      titleText: 'Investigador agregado',
      icon: 'success',
      confirmButtonColor: '#373737',
    });
    (this.nombreinvestigador = ''),
      (this.emailinvestigador = ''),
      (this.cargoinvestigador = ''),
      (this.fotoinvestigador = '');
      this.resetFile();
  }
}
