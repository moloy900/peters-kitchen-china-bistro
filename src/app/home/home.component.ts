import { Component, Input, OnInit } from '@angular/core';
import { FoodservicesService } from '../services/food/foodservices.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];

  constructor(
    private foodService: FoodservicesService,
    private ActiveteRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ActiveteRoute.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.foodService
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      } else if (params['tag']) {
        this.foods = this.foodService.getAllFoodByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
