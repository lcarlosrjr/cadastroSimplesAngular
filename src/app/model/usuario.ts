export class Usuario {

    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private peso: number;
    private estado: string;

    
	constructor(){    
	}
    

    /**
     * Getter $nome
     * @return {string}
     */
	public get _nome(): string {
		return this.nome;
	}

    /**
     * Getter $cpf
     * @return {string}
     */
	public get _cpf(): string {
		return this.cpf;
	}

    /**
     * Getter $data_nascimento
     * @return {Date}
     */
	public get _data_nascimento(): Date {
		return this.data_nascimento;
	}

    /**
     * Getter $peso
     * @return {number}
     */
	public get _peso(): number {
		return this.peso;
	}

    /**
     * Getter $estado
     * @return {string}
     */
	public get _estado(): string {
		return this.estado;
	}

    /**
     * Setter $nome
     * @param {string} value
     */
	public set _nome(value: string) {
		this.nome = value;
	}

    /**
     * Setter $cpf
     * @param {string} value
     */
	public set _cpf(value: string) {
		this.cpf = value;
	}

    /**
     * Setter $data_nascimento
     * @param {Date} value
     */
	public set _data_nascimento(value: Date) {
		this.data_nascimento = value;
	}

    /**
     * Setter $peso
     * @param {number} value
     */
	public set _peso(value: number) {
		this.peso = value;
	}

    /**
     * Setter $estado
     * @param {string} value
     */
	public set _estado(value: string) {
		this.estado = value;
	} 
    
}
