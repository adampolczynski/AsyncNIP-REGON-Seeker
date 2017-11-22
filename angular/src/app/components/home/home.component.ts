import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidateService} from "../../services/validate.service";

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

  constructor(
    private searchService:SearchService,
    private validateService:ValidateService,
    private formBuilder:FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  ngOnInit() {
    // subscribing for form field changes
    this.searchForm.valueChanges.subscribe(data => {
      this.onSearchSubmit();
    });
  }
  onSearchSubmit() { // when form is submitted we display also flashmessages
    let obj = {
      number: this.validateService.stripNonNumerics(this.searchForm.value.search) // stripping non-numerics
    };
    if (this.validateService.validateSearch(obj.number)) {
      //save request attempt to db
      this.searchService.saveRequest(obj).subscribe(data => {
        console.log(data);
      });
      //check for company
      this.searchService.getByNumber(obj).subscribe(data => {
        if (data.success && null != data.company) {

          this.foundCompany = data.company;
          this.alertFeedback("Company details below", true);

        } else {
          this.foundCompany = {name: "", province: "", county: "", city: "", street: "", postal: ""};
          this.alertFeedback("No match found", false);
        }
      });
    } else {
      this.alertFeedback("Check what you wrote", false);
    }
  }
  // alert msg function
  alertFeedback(text, success) {
    if (success) {
      this.alert = "<p class=\"alert alert-success text-center\">\n" + text+ "\n </p>"
    } else {
      this.alert = "<p class=\"alert alert-danger text-center\">\n" + text+ "\n </p>"
    }
    let inst = setTimeout(()=> { // TODO: prevent from vanishing while another message is showing
      this.alert = "";
    },3000);
  }
}
