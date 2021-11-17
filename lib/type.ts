// https://github.com/nestjs/nest/blob/master/packages/common/interfaces/type.interface.ts

export interface Type<T = any> extends Function {
	new(...args: any[]): T;
}
