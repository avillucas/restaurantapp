import { LoginService } from './../../services/login.service';
import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SpinnerService } from 'src/app/services/spinner.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public tester:number;
  public ionicForm: FormGroup;

  constructor(
    private toastService:ToastService,
    public loginService: LoginService,
    private router: Router,
    public formBuilder: FormBuilder,
    public SpinnerService: SpinnerService
  ) {
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  get username() {
    return this.ionicForm.get('username');
  }

  get password() {
    return this.ionicForm.get('password');
  }

  async login() {
    //    
    if (!this.ionicForm.valid) {
      this.toastService.presentSuccess('Por favor revise los datos ingresados.');
      return false;
    } else {      
      this.SpinnerService.mostrarSpinner();
      this.loginService.login(this.ionicForm.value).subscribe(
        async (res) => {
          this.SpinnerService.ocultarSpinner();
          this.router.navigateByUrl('/home', { replaceUrl: true });
        },
        async (res) => {                  
          this.SpinnerService.ocultarSpinner();
          this.toastService.presentDanger('Usuario o password incorrecto.');
        }
      );
    }
  }

  
  selectedTester(selectedUserId:number){
      const loginData = this.loginService.getUsuarioTest(selectedUserId);
      this.ionicForm.get('username').setValue(loginData.username);
      this.ionicForm.get('password').setValue(loginData.password);  
  } 

}
