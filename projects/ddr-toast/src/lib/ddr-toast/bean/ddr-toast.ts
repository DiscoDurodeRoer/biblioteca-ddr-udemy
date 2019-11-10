export class DdrToast {

    title: string;
    message: string;
    status: string;

    constructor(title?: string, message?: string, status?: string){
        this.title = title;
        this.message = message;
        this.status = status;
    }

}
