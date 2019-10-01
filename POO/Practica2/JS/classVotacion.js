class ClaseVotacion {

    totalFavor = 0;
    totalContra = 0;
    totalAbstencion = 0;

    constructor() {
        // this.totalFavor = totalFavor;
        //     this.totalContra = totalContra;
        //     this.totalAbstencion = totalAbstencion;
    }

    votacionesAFavor() {
        this.totalFavor++;
        Swal.fire({
            title: 'Voto Registrado',
            text: `Favor = ${this.totalFavor}`
        })
        return this.totalFavor;
    }

    votacionesEnContra() {
        this.totalContra++;
        Swal.fire({
            title: 'Voto Registrado',
            text: `Contra = ${this.totalContra}`
        })
        return this.totalContra;
    }

    votacionAbstencion() {
        this.totalAbstencion++;
        Swal.fire({
            title: 'Voto Registrado',
            text: `Abstenidos = ${this.totalAbstencion}`
        })
        return this.totalAbstencion;
    }

    mostrarResultados(pregunta) {

        if (this.totalContra != this.totalAbstencion || this.totalFavor != this.totalAbstencion) {
            if (this.totalContra > this.totalFavor) {
                Swal.fire({
                    title: `Las votaciones para ${pregunta}`,
                    text: `Favor = ${this.totalFavor}  Contra = ${this.totalContra}  Abstenidos = ${this.totalAbstencion}`,
                    footer: `La votación es en CONTRA`
                })
            } else {
                Swal.fire({
                    title: `Las votaciones para ${pregunta}`,
                    text: `Favor = ${this.totalFavor}  Contra = ${this.totalContra}  Abstenidos = ${this.totalAbstencion}`,
                    footer: `La votación es a FAVOR`
                })
            }
        } else if ((Math.floor(Math.random() * 2) + 1) == 1) {
            Swal.fire({
                title: `Las votaciones para ${pregunta}`,
                text: `Favor = ${this.totalFavor+this.totalAbstencion}  Contra = ${this.totalContra}  Abstenidos = ${this.totalAbstencion}`,
                footer: `Los votos de abstencion fueron sumados a FAVOR`
            })
        } else {
            Swal.fire({
                title: `Las votaciones para ${pregunta}`,
                text: `Favor = ${this.totalFavor}  Contra = ${this.totalContra+this.totalAbstencion}  Abstenidos = ${this.totalAbstencion}`,
                footer: `Los votos de abstencion fueron sumados en CONTRA`
            })
        }
    }

}