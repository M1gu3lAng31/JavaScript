class ClaseVotacion {

    totalFavor = 0;
    totalContra = 0;
    totalAbstencion = 0;

    constructor(totalFavor) {
        this.totalFavor = totalFavor;
        //     this.totalContra = totalContra;
        //     this.totalAbstencion = totalAbstencion;
    }

    votacionesAFavor() {
        this.totalFavor++;
        return this.totalFavor;
    }

    votacionesEnContra() {
        this.totalContra++;
        return this.totalContra;
    }

    votacionAbstencion() {
        this.totalAbstencion++;
        return this.totalAbstencion;
    }

}