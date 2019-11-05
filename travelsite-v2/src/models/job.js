export class jobs {
    title
    number
    description
    responsibilities
    qualifications

    constructor(title= '', number= '', description= '', responsibilities = [],
        qualifications=[]){
            this.title = title;
            this.number = number;
            this.description = description;
            this.responsibilities= responsibilities;
            this.qualifications = qualifications;
        }
}