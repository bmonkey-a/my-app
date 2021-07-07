import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector:'[bold]'
})
export class BoldDirective{
  // constructor(private elementRef: ElementRef) {
  // this.elementRef.nativeElement.style.fontWeight = "bold";
  // }
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  //   this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
  // }
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  //   this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
  // }
  // @HostListener("mouseenter") onMouseEnter(){
  //   this.setFontWeight("bold");
  // }
  //
  // @HostListener("mouseleave") onMouseLeave(){
  //   this.setFontWeight("normal");
  // }
  //
  // private setFontWeight(val: string){
  //   this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
  // }
  private fontWeight = "normal";

  @HostBinding("style.fontWeight") get getFontWeight(){
    return this.fontWeight;
  }

  @HostBinding("style.cursor") get getCursor(){
    return "pointer";
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.fontWeight = "bold";
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.fontWeight = "normal";
  }
}
