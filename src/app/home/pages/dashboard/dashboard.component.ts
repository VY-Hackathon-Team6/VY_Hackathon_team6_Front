import { Component, OnInit, ViewChild } from '@angular/core';

import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { FileSaverService } from 'ngx-filesaver';

import { Data } from '../../interfaces/data.interface';
import { DataService } from '../../services/data.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dataArray!: Data[];

  statuses!: any[];

  loading: boolean = true;

  exportColumns = [  { title: "hour", dataKey: "hour" },  { title: "Full-time Employees", dataKey: "fullTimeEmployees" },  { title: "Part-time Employees", dataKey: "partTimeEmployees" },  { title: "Total Employees", dataKey: "totalEmployees" },  { title: "Full-time Employees cost", dataKey: "fullTimeEmployeesCost" },  { title: "Part-time Employees cost", dataKey: "partTimeEmployeesCost" },  { title: "day", dataKey: "day" },  { title: "handlingFuncion", dataKey: "handlingFuncion" },  { title: "totalCost", dataKey: "totalCost" }];


  @ViewChild('dt') table!: Table;

  constructor(
    private dataService: DataService,
    private fileSaverService: FileSaverService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.dataService.getDataArray().subscribe((array) => {
      this.dataArray = array;
      this.loading = false;
    });

    this.statuses = [
      { label: 'Equipajes', value: 'EQUIPAJES' },
      { label: 'Coordinador', value: 'COORDINADOR' },
      { label: 'Jardinera', value: 'JARDINERA' },
    ];
    this.primengConfig.ripple = true;
  }

  onActivityChange(event: any) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'day', 'equals');
  }

  formatDate(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  applyFilterGlobal($event: Event, stringVal: string) {
    this.table.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }

  applyFilter($event: Event, stringCol: string, stringVal: string) {
    this.table.filter(
      ($event.target as HTMLInputElement).value,
      stringCol,
      stringVal
    );
  }

  clickcsv() {
    this.table.exportCSV()
  }

  /* exportPdf() {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
            const doc = new jsPDF.default(0,0);
            doc.autoTable(this.exportColumns, this.dataArray);
            doc.save('dataArray.pdf');
        })
    })
  }
   */

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.dataArray);
        const headers = this.exportColumns.map(column => column.title);
        worksheet["A1"] = { t: "s", v: headers };
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "dataArray");
    });
  }



  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    this.fileSaverService.save(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
