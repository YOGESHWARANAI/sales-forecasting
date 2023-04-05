// import { Component } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/compat/storage';

// @Component({
//   selector: 'app-csv-import',
//   templateUrl: './csv-import.component.html',
//   styleUrls: ['./csv-import.component.css']
// })
// export class CsvImportComponent {
//   path :String=''
//   name:String=''

//   constructor(private af:AngularFireStorage){}
//   upload($event:any){
//       this.path=$event.target.files[0]
//       this.name=$event.target.files[0].name
//   }
//   uploadFile(){
//     console.log(this.path)

//     this.af.upload("/file name :"+this.name+this.path,this.path)
//   }
// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csv-import',
    templateUrl: './csv-import.component.html',
    styleUrls: ['./csv-import.component.css']
})
export class CsvImportComponent {
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  file: File|null=null;

  constructor(private http: HttpClient,private router:Router) { }

  getFile(event: any): void {
    this.file = event.target.files[0];
    console.log('file', this.file);
  }

  uploadFile(): void {
    if (!this.file) {
      console.error('No file selected');
      alert("No files selected")
      return;
    }
  
    let formData = new FormData();
    formData.set("file", this.file);
    this.http.post('http://localhost:5000/fileupload', formData).subscribe((response) => {
      alert("Your file Uploded Successfully")
      console.log('Upload response:', response);
    });
  }
}
