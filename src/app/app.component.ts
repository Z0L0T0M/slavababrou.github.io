import { Component, OnInit} from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  posts: Post[] = []

  title: string = ''
  text: string = ''

  constructor(){}
  ngOnInit(): void {
      this.posts = [
        new Post('Текст', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit illo fuga libero aperiam voluptates deserunt soluta nulla illum atque iusto explicabo modi nesciunt, repellat facilis aspernatur exercitationem delectus non.Mollitia odio dicta incidunt odit eum quas dolorum magnam soluta ea quia provident, tempora facere reprehenderit distinctio velit neque earum ipsa quisquam. Odio voluptatum eveniet expedita, quisquam eius temporibus! Obcaecati!Recusandae officia maxime eligendi voluptatibus veritatis cumque'),
        new Post('текст', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit illo fuga libero aperiam voluptates deserunt soluta nulla illum atque iusto explicabo modi nesciunt, repellat facilis aspernatur exercitationem delectus non.Mollitia odio dicta incidunt odit eum quas dolorum magnam soluta ea quia provident, tempora facere reprehenderit distinctio velit neque earum ipsa quisquam.'),
      ]
  }

  addPost():void{
    if(this.text.trim() === '' || this.title.trim() ==='') 
    return alert('nigadiay!!!');

    this.posts.push(new Post(this.title, this.text));
    this.title = ''
    this.text = ''   
  }

  clearPosts():void{
    this.posts = [];
  }
}
