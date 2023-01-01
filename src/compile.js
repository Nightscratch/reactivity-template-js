export const compile = (id)=>{
    let template = document.getElementById(id).innerHTML
    template = template.replace(/[\r\n]/g,'')
    template = template.replace(/&lt;%=([\s\S]+?)%&gt;/g, (match, code) => {
      return `' + ${code.trim()} + '`
    })
    template = template.replace(/&lt;%([\s\S]+?)%&gt;/g, (match, code) => {
      return `'; ${code.trim()} str += '`
    })
    template = `let str = ''; with (params) { str = '${template}'; } return str`
    console.log(template)
    return new Function('params', template)
}
