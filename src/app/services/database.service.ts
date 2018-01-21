import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DatabaseService {

  private items: Observable<any[]>;
  private itemCollection: AngularFirestoreCollection<any>;

  public result: Object;

  constructor( private afs:AngularFirestore ) {
    this.itemCollection = afs.collection<any>('sections/headline/EN');
  }

  checkCollection () {
    this.items = this.itemCollection.valueChanges();
    return this.items.map( (mensaje:any[]) => {
        this.result = mensaje[0];
    });
  }

}
