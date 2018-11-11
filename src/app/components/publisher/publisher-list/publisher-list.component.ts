import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../../../services/publisher.service';
import { ValidationService } from '../../../services/validation.service';
@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.css']
})
export class PublisherListComponent implements OnInit {

  arrPublishers: any;
  constructor(private publisherService: PublisherService, 
    private validationService: ValidationService) { }

  ngOnInit() {
    this.showPublishers();
  }

  async showPublishers(){
    let data = await this.publisherService.getPublishers();
    if(this.validationService.checkNotEmpty(data)) this.arrPublishers = Object.values(data);
  }

}
