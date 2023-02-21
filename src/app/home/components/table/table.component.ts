import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, SortEvent } from 'primeng/api';

import { DataService } from '../../services/data.service';
import { Data } from '../../interfaces/data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  pepe: Data[] = [
    {
      "day": "02/02/2023",
      "hour": 6,
      "handlingFuncion": "Jardinera",
      "fullTimeEmployees": 1,
      "partTimeEmployees": 0,
      "totalEmployees": 1,
      "fullTimeEmployeesCost": 203,
      "partTimeEmployeesCost": 0,
      "totalCost": 203
    },
    {
      "day": "02/02/2023",
      "hour": 6,
      "handlingFuncion": "Jardinera",
      "fullTimeEmployees": 1,
      "partTimeEmployees": 0,
      "totalEmployees": 1,
      "fullTimeEmployeesCost": 203,
      "partTimeEmployeesCost": 0,
      "totalCost": 203
    },
    {
      "day": "02/02/2023",
      "hour": 6,
      "handlingFuncion": "Jardinera",
      "fullTimeEmployees": 1,
      "partTimeEmployees": 0,
      "totalEmployees": 1,
      "fullTimeEmployeesCost": 203,
      "partTimeEmployeesCost": 0,
      "totalCost": 203
    },
    {
      "day": "02/02/2023",
      "hour": 6,
      "handlingFuncion": "Jardinera",
      "fullTimeEmployees": 1,
      "partTimeEmployees": 0,
      "totalEmployees": 1,
      "fullTimeEmployeesCost": 203,
      "partTimeEmployeesCost": 0,
      "totalCost": 203
    }
  ]

  dataArray: Data[] = []

  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    // this.dataService.getDataArray().subscribe(array => this.dataArray = array)
    this.dataArray = this.pepe
  }

  /* loadData(event: LazyLoadEvent) {
    // Utiliza tu servicio para obtener los datos de la API
    this.dataService.getData(event.first, event.rows, event.sortField, event.sortOrder).subscribe((response) => {
      this.data = response.data;
      this.totalRecords = response.totalRecords;
    });
  }

  onSort(event: SortEvent) {
    this.loadData({ first: 0, rows: 10, sortField: event.field, sortOrder: event.order });
  } */

}
