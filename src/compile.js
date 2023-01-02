const generate = (template) => {
	template = template.replace(/[\r\n]/g, '')
		.replace(/&lt;%=([\s\S]+?)%&gt;/g, (match, code) => {
			return `' + ${code.trim()} + '`
		})
		.replace(/&lt;%([\s\S]+?)%&gt;/g, (match, code) => {
			return `'; ${code.trim()} str += '`
		})
	return `let str = '';with (data) { str = '${template}'; } return str`
}
    
export const compile = (id, data, reactive = false) => {
	let template = document.getElementById(id)
		.innerHTML
	template = generate(template)
	if (reactive) {
		let res = {
			render: new Function('data', template),
			data: data
		}
		document.getElementById(id)
			.innerHTML = res.render(res.data);
		return new Proxy(res, {
			get(target, key) {
				return target.data[key];
			},
			set(target, key, value) {
				target.data[key] = value;
				document.getElementById(id)
					.innerHTML = target.render(target.data);
			}
		});
	} else {
		let res = new Function('data', template)
		return res
	}
}