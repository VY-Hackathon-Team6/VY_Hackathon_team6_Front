import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Validators, FormBuilder, FormControl, FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user = '';
  public password = '';
  public loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    sessionStorage.clear();
    this.loginForm = this.formBuilder.group({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  Login() {
    this.user = this.loginForm.controls['user'].value;
    this.password = this.loginForm.controls['password'].value;
    this.authService.login(this.user, this.password);
  }

  public get logIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
