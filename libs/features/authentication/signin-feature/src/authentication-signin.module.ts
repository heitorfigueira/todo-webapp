import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { SigninRoutingModule } from './signin-routing.module';
import { AuthenticationSigninComponent } from './authentication-signin.component';
import { CredentialsComponent } from './credentials/credentials.component';

@NgModule({
  declarations: [
    AuthenticationSigninComponent,
    CredentialsComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AuthenticationSigninComponent]
})
export class AuthenticationSigninModule {}
