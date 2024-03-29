import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent {
  @Input()
  name!: string;
  @Input()
  placeholder!: string;
  @Input()
  type!: string;
  @Input()
  disabled!: boolean;

  public value!: string;

  onChange: any = () => {
  }
  onTouch: any = () => {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  itemChange($event:any) {
    this.onTouch();
    this.onChange($event.currentTarget.value);
    this.writeValue($event.currentTarget.value);
  }
}