import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appProfileImage]'
})
export class ProfileImageDirective implements AfterViewInit {
  @HostBinding('class.user-card-active')
  public isActive: boolean;

  @HostListener('mouseover')
  public onHover() {
    console.log('Hover worked');

    this.elRef.nativeElement.style.border = '5px solid grey';
    this.isActive = true;
  }

  @HostListener('mouseleave')
  public onLeave() {
    console.log('Hover leave worked');

    this.elRef.nativeElement.style.border = 'none';
    this.isActive = false;
  }

  @Input()
  public userImage: string;
  @Input()
  public userGender: string;

  constructor(private  elRef: ElementRef,
              private  elemRender: Renderer2) {
   }

  ngAfterViewInit() {
    const imgPath: string = './assets/images/';

    if (this.userImage) {
      this.elemRender.setAttribute(this.elRef.nativeElement, 'src', `${imgPath}${this.userImage}`);
    } else {
      if (this.userGender === 'male') {
        this.elemRender.setAttribute(this.elRef.nativeElement, 'src', `${imgPath}male.png`);

      } else {
        this.elemRender.setAttribute(this.elRef.nativeElement, 'src', `${imgPath}female.jpg`);

      }
    }
  }

}
