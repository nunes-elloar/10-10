let codFuncionario, horasTrabalhas, turnoTrabalho, catFuncionario
const salMinimo = 450
let valorHora, salarioInicial, auxiloAlimentacao, salarioTotal

document.write("<h2> Folha de pagamento</h2>")
for (let i = 0; i <= 1; i++) {
    do {
        codFuncionario = Number(prompt(" Digite o código do funcionário"))
        if (codFuncionario <= 0 || isNaN(codFuncionario)) {
            alert("Código Inválido!")
        }
    } while (codFuncionario <= 0 || isNaN(codFuncionario));

    do {
        horasTrabalhas = Number(prompt(" Digite o números de horas trabalhadas"))
        if (horasTrabalhas <= 0 || isNaN(horasTrabalhas)) {
            alert("Números de horas trabalhadas Inválidas!")
        }
    } while (horasTrabalhas <= 0 || isNaN(horasTrabalhas));

    do {
        turnoTrabalho = (prompt(" Digite o turno de trabalho trabalhado \nM - Matutino \nV - Vespertino, \nN - Noturno")).toUpperCase()

        if (turnoTrabalho !== 'M' && turnoTrabalho !== 'V' && turnoTrabalho !== 'N') {
            alert("Turno Inválido!")
        }

    } while (turnoTrabalho !== 'M' && turnoTrabalho !== 'V' && turnoTrabalho !== 'N');


    do {

        catFuncionario = (prompt(" Digite a categoria do funcionário \nO - Operário \nG - Gerente")).toUpperCase()


        if (catFuncionario !== 'O' && catFuncionario !== 'G') {
            alert("Categoria Inválida!")
        }

    } while (catFuncionario !== 'O' && catFuncionario !== 'G');

    

    if (catFuncionario === 'G') {

        if(turnoTrabalho === 'N'){
            valorHora = salMinimo * (18/100)

        }else if(turnoTrabalho === 'M' || turnoTrabalho ==='V'){
         valorHora = salMinimo * (15/100)
        }
        
    }else if (catFuncionario === 'O') {
        
        if(turnoTrabalho === 'N'){
            valorHora = salMinimo * (13/100)
        }else if(turnoTrabalho === 'M' || turnoTrabalho === 'V'){
            valorHora = salMinimo * (10/100)
        }
    }

salarioInicial = horasTrabalhas * valorHora

if(salarioInicial <= 300){
    auxiloAlimentacao - salarioInicial * 1.20
}else if(salarioInicial > 300 && salarioInicial <= 600){
    auxiloAlimentacao = salarioInicial * 1.15
}else{
    auxiloAlimentacao = salarioInicial * 1.05
}
salarioTotal = auxiloAlimentacao + salarioInicial


document.write(`<p> Funcionário: ${codFuncionario}, Horas trabalhadas: ${horasTrabalhas},
     Salário Inicial: ${salarioInicial.toFixed(2)}, Auxilio Alimentação: ${auxiloAlimentacao.toFixed(2)}, 
     Salário a Receber: ${salarioTotal.toFixed(2)}</p>`)
}