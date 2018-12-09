export default class BaseForm {
  protected params: object

  protected constructor(form) {
    if(form instanceof HTMLFormElement) {
      const data = new FormData(form)
      this.params = {}
      for (let [k, v] of Object.entries(data)) {
        this.params[k] = v
      }
    } else if(typeof form === 'object') {
      this.params = form
    } else {
      throw `${form} is must be instance of 'form tags Eelement' or 'Object'.`
    }
  }
}
