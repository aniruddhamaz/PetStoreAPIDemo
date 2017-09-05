import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pets } from '../../providers/providers';
import { Pet } from '../../models/pet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  petItems: Pet[];

  constructor(public navCtrl: NavController, public pets : Pets) {

    pets.fetch((response) => {
      this.petItems = response;
    });

  }

}
