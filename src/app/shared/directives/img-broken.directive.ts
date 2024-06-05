import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: false
})
export class ImgBrokenDirective {
  @Input() custonImg: string = ''
  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement
    console.log('esta img revento -->',this.elHost);
    elNative.src = '../../../assets/images/ImgBroken.png'
  }

  constructor(private elHost: ElementRef) { 
    console.log(this.elHost);
  }

}
