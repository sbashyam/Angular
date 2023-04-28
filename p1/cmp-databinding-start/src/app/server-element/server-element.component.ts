import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';
import { log } from 'console';
import { stat } from 'fs';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
 @Input('srvElement') element:{type:string,name:string,content:string};
 @Input() name:string;
 @ViewChild('heading',{static:true}) header:ElementRef;
 @ContentChild('contentParagraph',{static:true}) paragraph:ElementRef;
  constructor() {
    console.log('constructor called');
   }
  ngOnChanges(changes:SimpleChanges){
   console.log('ngOnChanges called');
   console.log(changes);
  }
  ngOnInit(){
    console.log('noOnInit called');
    console.log('Text Content: '+this.header.nativeElement.textContent);
    console.log('Paragraph Content: '+this.paragraph.nativeElement.textContent)
  }
  ngDoCheck(){
    console.log('Do Check called')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentOnitCalled')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit called')
    console.log('Text Content: '+this.header.nativeElement.textContent);
    console.log('Paragraph Content: '+this.paragraph.nativeElement.textContent)
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked Called')
  }
  ngOnDestroy(): void {
    console.log('Destroy Called');
  }
}
