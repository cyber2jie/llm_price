export namespace main {
	
	export class Provider {
	    id: string;
	    name: string;
	    desc: string;
	    url: string;
	
	    static createFrom(source: any = {}) {
	        return new Provider(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.desc = source["desc"];
	        this.url = source["url"];
	    }
	}

}

