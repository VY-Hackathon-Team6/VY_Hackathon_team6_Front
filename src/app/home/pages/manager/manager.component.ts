import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/home/services/data.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  public contractualConditionsForm!: FormGroup;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contractualConditionsForm = this.formBuilder.group({
      jardineraFull: new FormControl(null),
      jardineraPart: new FormControl(null),
      equipajeFull: new FormControl(null),
      equipajePart: new FormControl(null),
      coordFull: new FormControl(null),
      coordPart: new FormControl(null),
    });
  }

  formatData(): any {
    const data = {
    JARDINERA: {
        fullTime: this.contractualConditionsForm.controls['jardineraFull'].value,
        partTime: this.contractualConditionsForm.controls['jardineraPart'].value
    },
    EQUIPAJES: {
        fullTime: this.contractualConditionsForm.controls['equipajeFull'].value,
        partTime: this.contractualConditionsForm.controls['equipajePart'].value
    },
    COORDINADOR: {
        fullTime: this.contractualConditionsForm.controls['coordFull'].value,
        partTime: this.contractualConditionsForm.controls['coordPart'].value,
      },
    };
    return data;
  }

  sendData() {
    const data = this.formatData();
    this.dataService.sendData(data);
  }
}
