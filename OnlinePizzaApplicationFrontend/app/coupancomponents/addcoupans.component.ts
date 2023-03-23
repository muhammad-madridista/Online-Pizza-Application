import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Coupan } from '../model/coupan.model';
import { CoupanService } from '../service/coupan.service';



@Component({
  selector: 'add-coupan',
  template: `
  <div class="col-md-6">
  <div class="container">
  <br>
  <div style="card-align: center;">
           <div class="card" style="width: 40rem;">
          
           <div class="card-body">
           
  <div *ngIf = "alert" class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Coupan Added Successfully</strong> 
  <button (click)="closeAlert()" type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  <div class="col-md-6">
  <form #newCoupanForm="ngForm" autocomplete="off" novalidate (ngSubmit)="addCoupans(newCoupanForm.value)">

  <div class="form-group " >

    <label for="name">Coupan Name:</label>
    <input  id="name" type="text" required minlength="4" class="form-control" name="coupanName"  [(ngModel)]=coupanName placeholder="Enter Coupan Name" #desc1="ngModel">
    <div *ngIf="desc1.invalid && (desc1.dirty ||desc1.touched)"
    class="alert"  style="color:red">
    <em *ngIf="desc1.errors?.required">
    Name is required.
  </em>

  <em *ngIf="desc1.errors?.minlength">
  Coupan Name must be at least 4 characters long.
</em>
</div>
  </div>



  <div class="form-group" >
  <label for="cid">Coupan Id:</label>
  <input  id="cid" type="number" required  [pattern] = "'^[1-9][0-9]*$'" onkeypress="return !(event.charCode == 46)" class="form-control" name="coupanId"   [(ngModel)]=coupanId placeholder="Enter Coupan Id" #idd="ngModel">
  <div *ngIf="idd.invalid && (idd.dirty || idd.touched)"
class="alert" style="color:red">
<em *ngIf="idd.errors?.required">
id is required.
</em>

<em *ngIf="idd.errors?.pattern">Id Cant be negative
</em>

</div>
  </div>

  <div class="form-group" >
    <label for="name">Coupan Description:</label>
    <input  id="description" type="text" required   minlength="5" class="form-control" name="coupanDescription"  [(ngModel)]=coupanDescription placeholder="Enter Description of Pizza" #desc="ngModel">
          <div *ngIf="desc.invalid && (desc.dirty ||desc.touched)"
          class="alert" style="color:red">
          <em *ngIf="desc.errors?.required">
          Description is required.
        </em>

        <em *ngIf="desc.errors?.minlength">
        Description must be at least 5 characters long.
      </em>



      </div>
  </div>

  <div class="form-group" >
  <label for="coupanDiscount">Coupan Discount:</label>
  <input  id="coupanDiscount" type="number" required  [pattern] = "'^[1-9][0-9]*$'" onkeypress="return !(event.charCode == 46)" class="form-control" name="coupanDiscount"   [(ngModel)]=coupanDiscount placeholder="Enter Discount" #idd1="ngModel">
  <div *ngIf="idd1.invalid && (idd1.dirty || idd1.touched)"
class="alert" style="color:red">
<em *ngIf="idd1.errors?.required">
id is required.
</em>
<em *ngIf="idd1.errors?.pattern">Id Cant be negative
</em>
</div>


  </div>
  
  <button type="submit"  [disabled]=newCoupanForm.invalid class="btn btn-primary">Add</button>
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  
  `,
  // styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
  styleUrls: ['./addcoupans.component.css']
},

)


export class AddCoupanComponent {

  coupan: Coupan
  alert: boolean = false
  constructor(private router: Router, private coupanService: CoupanService) {
  }

  addCoupans(newCoupan) {
    console.log(newCoupan)
    this.coupanService.addCoupans(newCoupan).subscribe(coupan => this.coupan = coupan);
    // this.router.navigate(['/adminpage/coupans/all'])
    this.alert = true;

  }

  cancel() {
    this.router.navigate(['/adminpage/coupans/all'])
  }
}

// [pattern]="'^[a-zA-Z]*$'"
// <em *ngIf="desc.errors?.pattern"> Cant be integer
// </em>
