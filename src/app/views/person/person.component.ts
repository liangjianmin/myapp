import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {mobileValidator} from '../../validator/validators';
import {AppService} from '../../app.service';


@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

    formModel: FormGroup;

    public fb = new FormBuilder();

    constructor(private appService: AppService) {

        this.appService.titleEventEmitter.emit('个人页面');

    }

    ngOnInit() {

        this.formModel = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(6)]],
            mobile: ['', mobileValidator],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

    }

    cancel() {
        this.formModel = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(6)]],
            mobile: ['', mobileValidator],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    save() {
        if (this.formModel.valid) {
            console.log(this.formModel.value);
        }
    }

}
