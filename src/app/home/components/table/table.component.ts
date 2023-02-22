import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { Customer, Representative } from './helps/customer';
import { CustomerService } from './helps/customerservice';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  customers!: Customer[];

    selectedCustomers!: Customer[];

    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = true;

    @ViewChild('dt') table!: Table;

    constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig) {
      // this.table.filterGlobal()
    }

    ngOnInit() {
        this.customerService.getCustomersLarge().subscribe(customers => {
            this.customers = customers;
            this.loading = false;
        });

        this.representatives = [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
            {name: "Asiya Javayant", image: 'asiyajavayant.png'},
            {name: "Bernardo Dominic", image: 'bernardodominic.png'},
            {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
            {name: "Ioni Bowcher", image: 'ionibowcher.png'},
            {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
            {name: "Onyama Limba", image: 'onyamalimba.png'},
            {name: "Stephen Shaw", image: 'stephenshaw.png'},
            {name: "XuXue Feng", image: 'xuxuefeng.png'}
        ];

        this.statuses = [
            {label: 'Unqualified', value: 'unqualified'},
            {label: 'Qualified', value: 'qualified'},
            {label: 'New', value: 'new'},
            {label: 'Negotiation', value: 'negotiation'},
            {label: 'Renewal', value: 'renewal'},
            {label: 'Proposal', value: 'proposal'}
        ]
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
        this.table.filter(this.formatDate(value), 'date', 'equals')
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

    onRepresentativeChange(event: any) {
        this.table.filter(event.value, 'representative', 'in')
    }

    applyFilterGlobal($event: Event, stringVal: string) {
      this.table.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    }

    applyFilter($event: Event, stringCol: string, stringVal: string) {
      this.table.filter(($event.target as HTMLInputElement).value, stringCol, stringVal);
    }

  /* dataArray: Data[] = []

  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.getDataArray().subscribe(array => this.dataArray = array)
  }

  loadData(event: LazyLoadEvent) {
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
