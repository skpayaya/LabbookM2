import { BooklistService } from './../booklist.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[];
  bookSearchList:Book[];
  searchID:string;
  searchYear:string;
  searchTitle:string;
  searchAuthor:string;
  searchText;


  constructor(private booklistservice: BooklistService) { }

  ngOnInit() {
   this.booklistservice.getJSON().subscribe((booksData)=>{this.books=booksData;
    this.bookSearchList=this.books;});
  }
 searchByTitle(searchKey) {
   console.log(searchKey);
   this.bookSearchList=this.books.filter(book => book.title.toLowerCase().includes(searchKey.toLowerCase()))
 }
 searchByYear(searchKey) {
  console.log(searchKey);
  this.bookSearchList=this.books.filter(book => book.year.toString().toLowerCase().includes(searchKey))
}
searchByAuthor(searchKey) {
  console.log(searchKey);
  this.bookSearchList=this.books.filter(book => book.author.toLowerCase().includes(searchKey.toLowerCase()))
}
searchById(searchKey) {
  console.log(searchKey);
  this.bookSearchList=this.books.filter(book => book.id.toString().toLowerCase().includes(searchKey))
}


}
