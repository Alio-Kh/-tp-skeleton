import { Component } from '@angular/core';
import {AppService, Foo} from './app.service'

@Component({
  selector: 'foo-details',
  providers: [AppService],
  template: `<div class="container">
    <h1 class="col-sm-12">Foo Details</h1>
    <div class="col-sm-12">
        <label class="col-sm-3">ID</label> <span>{{foo.id}}</span>
    </div>
    <div class="col-sm-12">
        <label class="col-sm-3">Name</label> <span>{{foo.name}}</span>
    </div>
    <div class="col-sm-12">
        <button class="btn btn-primary" (click)="getFoo()" type="submit">New Foo</button>
    </div>
</div>`
})

export class FooComponent {
    private foosUrl = 'http://localhost:8081/resource-server/api/foos/';
    public foo=new Foo(0,'sample foo');
    constructor(private _service:AppService) {}

    getFoo(){

    var rnum = Math.floor(Math.random() * ((4))+1);
    this.foo = new Foo(rnum,'sample foo');
        this._service.getResource(this.foosUrl+this.foo.id)
         .subscribe(
                     data => this.foo = data,
                     error =>  this.foo.name = 'Error');
    }
}
