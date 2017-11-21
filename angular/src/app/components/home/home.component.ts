import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    searchForm: FormGroup;
    number: String; // search field value binded
    foundCompany = {
      name: "",
      province: "",
      county: "",
      city: "",
      street: "",
      postal: ""
    };

    alert: String = "";
    alertSuccess: Boolean = false;

    constructor(
      private searchService:SearchService,
      private formBuilder:FormBuilder
    ) {
      this.searchForm = this.formBuilder.group({
        search: ['', [Validators.required, Validators.minLength(7)]]
      });
    }

    ngOnInit() {
      this.searchForm.valueChanges.subscribe(data => {
        this.onSearchSubmit();
      });
    }

    alertFeedback(text, success) {
      if (success) {
        this.alert = "<p class=\"alert alert-success text-center\">\n" + text+ "\n </p>"
      } else {
        this.alert = "<p class=\"alert alert-danger text-center\">\n" + text+ "\n </p>"
      }
      setTimeout(()=> {
        this.alert = "";
      },3000);
    }
    onSearchSubmit() { // when form is submitted we display also flashmessages
      let obj = {
        number: this.searchForm.value.search
      };
        this.searchService.getByNumber(obj).subscribe(data => {
            if (data.success && null != data.company) {

              this.foundCompany = data.company;
              this.alertFeedback("Company details below", true);

            } else {
              this.foundCompany = {name: "", province: "", county: "", city: "", street: "", postal: ""};
              this.alertFeedback("No match found", false);
            }
        });
    }
}
