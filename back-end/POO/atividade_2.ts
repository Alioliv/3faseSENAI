/*Atividade Parte 2 

Criar um sistema com diferentes tipos de funcionários ( ex: programador, designer), utilizando herença. 

Criar uma classe funcionario com atributos com nome, salario, e um metodo calcularSalario()

Criar uma classe especifica para cada tipo de funncionario, como programador e designer, que herdam de funcionário e implementam seu próprio cálculo de Salario.*/


// Classe base
class Funcionario {
    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario(): number {
        return this.salario;
    }
}

// Classe Programador (herda de Funcionario)
class Programador extends Funcionario {

    calcularSalario(): number {
        // programador ganha 10% de bônus
        return this.salario + (this.salario * 0.10);
    }
}

// Classe Designer (herda de Funcionario)
class Designer extends Funcionario {

    calcularSalario(): number {
        // designer ganha 5% de bônus
        return this.salario + (this.salario * 0.05);
    }
}

// Criando objetos
const funcionario1 = new Funcionario("João", 3000);
const programador1 = new Programador("Maria", 5000);
const designer1 = new Designer("Ana", 4000);

// Exibindo resultados
console.log(`Funcionário: ${funcionario1.nome} - Salário: R$ ${funcionario1.calcularSalario()}`);
console.log(`Programador: ${programador1.nome} - Salário: R$ ${programador1.calcularSalario()}`);
console.log(`Designer: ${designer1.nome} - Salário: R$ ${designer1.calcularSalario()}`); 