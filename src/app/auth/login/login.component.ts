import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
	standalone: true,
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
	encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	constructor() { }

	ngOnInit(): void
	{
		this.formGroup.addControl('Email', new FormControl());
		this.formGroup.addControl('Password', new FormControl());
	}

}
