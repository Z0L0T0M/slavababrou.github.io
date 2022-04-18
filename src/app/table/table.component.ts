import { Component, OnInit, Input} from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Input() posts: Post[] = [];

  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    
  }

  deletePost(index: number):void{
    this.posts.splice(index, 1);
  }
}
