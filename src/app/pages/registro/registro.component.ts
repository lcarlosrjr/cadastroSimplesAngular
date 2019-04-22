import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { EstadoService } from 'src/app/service/estado.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  estados: any;
  usuario: Usuario;
  cpfExiste = false;
  submitted = false;

  constructor(

    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private estadoService: EstadoService

  ) {
    this.listarEstados();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      data_nascimento: [''],
      peso: [''],
      estado: ['']
    });
  }

  async checkCPFExist(cpf: string) {
    try {
      const resp = await this.usuarioService.getByCpf(cpf).toPromise();
      if(resp){
        this.cpfExiste = true;
        return true;
      }else{
        this.cpfExiste = false;
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  listarEstados() {
    this.estadoService.listarEstados().subscribe(dados => this.estados = dados.sort(function (a, b) {
      return (a.sigla > b.sigla) ? 1 : -1;
    }));
  }

  // getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  async onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    if(this.f.estado.value === 'Selecione' || this.f.estado.value === ''){
      alert('Ops! Selecione um estado tambem!');
      return;
    }

    const usuario = new Usuario();
    usuario._nome = this.f.nome.value;
    usuario._cpf = this.f.cpf.value;
    usuario._data_nascimento = this.f.data_nascimento.value;
    usuario._peso = parseFloat(this.f.peso.value);
    usuario._estado = this.f.estado.value;
    try {
      const check = await this.checkCPFExist(usuario._cpf);
      if (!check) {
        alert('Cadastrado com sucesso!');
        this.usuarioService.create(usuario);
        this.cpfExiste = false;
        this.registerForm.reset();
        this.f.estado.setValue('Selecione');
        this.submitted = false;
      }
    } catch (error) {
      alert('Ops! Houve algo errado no seu cadastro, tente novamente!');
      throw error;
    }
  }
}
