import {Injectable, EventEmitter} from '@angular/core';

@Injectable() //标识一个类可以被注入器实例化
//EventEmitter 实现自定义事件
export class AppService {

    titleEventEmitter: EventEmitter<string>;

    constructor() {
        this.titleEventEmitter=new EventEmitter();
    }

}
