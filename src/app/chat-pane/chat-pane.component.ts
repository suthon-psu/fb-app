import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import ChatItem from '../ChatItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-pane',
  templateUrl: './chat-pane.component.html',
  styleUrls: ['./chat-pane.component.css']
})
export class ChatPaneComponent implements OnInit {
  items: Observable<ChatItem[]>

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.db.collection<ChatItem>("lobby").valueChanges()
  }

}
