import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodservicesService } from '../services/food/foodservices.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  @Input()
  foodPageTags?:string[]

  @Input()
  justifyContent:string='center'

  tags?:Tag[]=[]
 
  constructor(private foodservice:FoodservicesService){}

  ngOnInit(): void {

    if(!this.foodPageTags)
    this.tags=this.foodservice.getAllTag()
    
  }

}
