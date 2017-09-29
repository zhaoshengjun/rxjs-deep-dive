import { Observable } from "rxjs/Observable";
// import { of } from "rxjs/add/observable/of";
import { from } from "rxjs/add/observable/from";

const log = val => console.log(val + "!");

// of
// Observable.of("React", "Angular 2", "Meteor").subscribe(log);
// React
// Angular 2
// Meteor

// from
Observable.from(["poe", "shlley", "bronte", "eliot"]).subscribe(log);
// poe
// shlley
// bronte
// eliot
