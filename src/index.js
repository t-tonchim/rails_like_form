import BaseForm from './BaseForm.js'

class Form extends BaseForm {
  errors = {}

  constructor(params, validator) {
    super(params)
    this.validator = validator
  }

  toJSON() {
    return JSON.stringify({ ...this })
  }

  callIf({ if: func }) {
    return (func && typeof func === 'function') ? func(this) : true
  }

  isValid() {
    Object.entries(this._validator).forEach(([field, validateStrategy]) => {
      if (Array.isArray(validateStrategy)) {
        return validateStrategy.every(strategy => this.doValidate(field, strategy))
      } else {
        return this.doValidate(field, validateStrategy)
      }
    })
  }

  doValidate(field, strategy) {
    const [funcName, options] = Object.entries(strategy)
    if(this[funcName]){
      const param = this.params[field]
      return this[funcName](param, options)
    } else {
      throw `${funcName} validator is not defined.`
    }
  }

  presense(field) {
    const param = this.params[field]
    if(param) return true
    this.errors[field] = 'is required.'
  }

  numericarity(param, options) {
    if(!this.callIF(options)) return true
  }
}

export default validator => form => new Form(form, validator)
