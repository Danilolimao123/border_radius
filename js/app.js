import BdRadius from './border_radius.js';
import View from './view.js'

const inputs =  document.querySelectorAll('input');
const box = document.querySelector('.box');
const view = document.querySelector('#view');

inputs.forEach(input=>{ 
	input.addEventListener('input',(event)=>{
		const key = event.target.getAttribute('id');
		//borderRadius.config[key] = event.target.value;

		BdRadius.init(box,key,event.target.value);
		
		View.render(`
			<h1>${getComputedStyle(box).borderRadius}</h1>
		`,document.querySelector('#view'));
	})
})

