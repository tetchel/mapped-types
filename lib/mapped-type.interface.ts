import { Type } from './type';

export interface MappedType<T> extends Type<T> {
  new(): T;
}
