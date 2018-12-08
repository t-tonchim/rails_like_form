export default class BaseForm {
  constructor(form) {
    if(form instanceof Element && form.tagName === 'FORM') {
      const data = new FormData(form)
      this.params = {}
      for (let [k, v] of data) {
        this.params[k] = v
      }
    } else if(typeof form === 'object') {
      this.params = form
    } else {
      throw `${form} is must be instance of 'form tags Eelement' or 'Object'.`
    }
  }
}
