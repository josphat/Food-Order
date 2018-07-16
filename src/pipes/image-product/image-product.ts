import { Pipe, PipeTransform } from '@angular/core';
import { ENV } from '@app/env';

@Pipe({
  name: 'imageProduct',
})
export class ImageProductPipe implements PipeTransform {

  transform(value: string, ...args) {
      if (value && /\S/.test(value)) {
        return ENV.IMAGE_URL + "product/" + value;
      } 
      return '../../assets/imgs/no-image-available-product.png';
  }
}
