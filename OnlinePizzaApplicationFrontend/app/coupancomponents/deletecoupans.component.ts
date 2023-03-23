import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Coupan } from '../model/coupan.model';
import { CoupanService } from '../service/coupan.service';


@Component({
  selector: 'delete-course',
  template: ` `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;}
    h1 { font-weight: 700;   }`]
},

)


export class DeleteCoupanComponent implements OnInit {


  constructor(private router: Router, private coupanService: CoupanService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let coupanid: number = this.activatedRoute.snapshot.params['cid'];
    console.log(coupanid)
    if(confirm("Are you Sure you want to Delete this Pizza?")){
    this.coupanService.deleteCoupans(coupanid).subscribe(data => console.log(data));
    this.router.navigate(['/coupans/all']);
    }
  }
}

