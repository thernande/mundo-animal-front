export class News{
	constructor(
		public _id: string,
		public title: string,
        public description: string,
        public date_begin: Date,
        public date_end: Date,
		public image: string,
		public autor: string


	){

	}
}
