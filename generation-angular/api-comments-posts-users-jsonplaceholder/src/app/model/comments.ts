export class Comments{
    constructor(
        public userId: number,
        public id: number,
        public name: string,
        public email: string,
        public body: string
    ){}
}