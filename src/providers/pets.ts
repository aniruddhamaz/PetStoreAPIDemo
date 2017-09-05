import { Injectable } from '@angular/core';

import { Api } from './api';
import { Http } from '@angular/http';

import { Pet } from '../models/pet';

declare var apigClientFactory : any;

@Injectable()
export class Pets {

  constructor(public http: Http, public api: Api) {
  }

  fetch(then: (response) => void) {

    var apiClient = apigClientFactory.newClient();

    var params, body, additionalParams;

    params = {type : '', page:0};

    var t = apiClient.petsGet(params, body, additionalParams)
    .then(function (response) {

      var pets = response.data.map((item, index) => {

        var itemObj = {"name" : item.type, "price" : item.price};
        var petItem = new Pet(itemObj);
        return petItem;

      });

      then(pets);

    }).catch( function (result) {
      console.log("Error " + JSON.stringify(result));
    });

  }

  add(pet: Pet) {
  }

  delete(pet: Pet) {
  }

}
