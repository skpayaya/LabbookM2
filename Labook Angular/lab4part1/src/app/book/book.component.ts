import { Component, OnInit } from '@angular/core';
import { BooklistService } from './../booklist.service';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[];

  constructor(private booklistservice: BooklistService) { }

  ngOnInit() {
   this.booklistservice.getJSON().subscribe((booksData)=>this.books=booksData);
  }
}
