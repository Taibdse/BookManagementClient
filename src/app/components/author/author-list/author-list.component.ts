import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  arrAuthors: any;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.showAuthors();
  }

  async showAuthors(){
    let data = await this.authorService.getAuthors();
    console.log(data);
    this.arrAuthors = Object.values(data);
  }

}
