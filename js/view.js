const View = {
	render(content,father){
		father.innerHTML = content;
		father.addEventListener('click',(event)=>{
			const input = document.createElement('input');
			
			input.value = father.children[0].innerHTML;
  			father.appendChild(input);

			input.select();
  			input.setSelectionRange(0, 99999)
  			document.execCommand('copy')

  			father.removeChild(input);
		})
	}
}
export default View;