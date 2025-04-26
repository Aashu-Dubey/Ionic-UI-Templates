import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffleArray',
})
export class ShuffleArrayPipe implements PipeTransform {
  transform(list: number[], ...args: unknown[]): number[] {
    const newList = [...list];
    newList.sort(() => Math.random() - 0.5);

    return newList;
  }
}
