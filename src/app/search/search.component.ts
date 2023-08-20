import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchItem:string='';

    constructor(private ActivateRoute:ActivatedRoute, private route:Router){}

    ngOnInit(): void {

      this.ActivateRoute.params.subscribe(params=>{
        if(params['searchItem']){
          this.searchItem=params['searchItem']
        }
      })
      
    }

    search():void{
      if(this.searchItem){
        this.route.navigateByUrl('/search/'+ this.searchItem)
      }
    }

}
