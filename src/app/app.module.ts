import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './service/usuario.service';
import { EstadoService } from './service/estado.service';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [UsuarioService, EstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
