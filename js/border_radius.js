const BdRadius = {
	max: (max,val)=> val < max ? val : max,
	properties: {
		topLeft: 0,
		topRight: 0,
		bottomRight: 0,
		bottomLeft: 0,
		width: 600,
	},
	async init(element,key,val){
		try{
			const styles = BdRadius.insertObject(key,BdRadius.properties,val || 0);
			const maxWidth = BdRadius.max(600,styles.width);

			BdRadius.covertObjctToStyle(styles,'width',`${maxWidth}px`);
		}catch(error){
			console.error(error);
		}
	},
	insertObject(key,obj,val){
		if(typeof obj !== 'object' || key in obj === false)
			return console.error('erro');

		obj[key] = val;

		return obj;
	},
	covertObjctToStyle(obj,compare,val){
		const bodyStyle = document.body.style;

		Object.keys(obj).forEach(key=>{
			if(key == compare)
				return bodyStyle.setProperty(`--${key}`,`${val}`);

			bodyStyle.setProperty(`--${key}`,`${obj[key]}%`);;
		})
	}
}

export default BdRadius;