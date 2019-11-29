import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import ChatItem from './ChatItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textMessage = ""
  private itemsCollection: AngularFirestoreCollection<ChatItem>;

  constructor(private afs: AngularFirestore){
    this.itemsCollection = afs.collection<ChatItem>('lobby');
  }

  doIt(){
    console.log(this.textMessage)
    //send to firestore
    this.itemsCollection.add({
      sender: "Suthon",
      message: this.textMessage
    })
    this.textMessage = ""
  }
}
