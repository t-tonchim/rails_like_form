import BaseForm from './BaseForm'

type FuncName = 'presence'
  | 'numericarity'

class Form extends BaseForm {
  errors = {}
  validator: object

  constructor(form, validator) {
    super(form)
    this.validator = validator
  }

  toJSON() {
    return JSON.stringify({ ...this })
  }

  isValid() {
    Object.entries(this.validator).forEach(([field, validateStrategy]) => {
      if (Array.isArray(validateStrategy)) {
        return validateStrategy.every(strategy => this.doValidate(field, strategy))
      } else {
        return this.doValidate(field, validateStrategy)
      }
    })
  }

  private doValidate(field, strategy) {
    return Object.entries(strategy).every(([funcName, options]: [FuncName, Object]) => {
      if(this[funcName]){
        const param = this.params[field]
        return this[funcName](param, options)
      } else {
        throw `${funcName} validator is not defined.`
      }
    })
  }

  private presence(field) : boolean {
    const param = this.params[field]
    if(param) return true
    this.errors[field] = 'is required.'
    return false
  }

  private numericarity(param, options) : boolean {
    if(!this.callIf(options)) return true
    return false
  }

  private callIf({ if: func }): boolean {
    return (func && typeof func === 'function') ? func(this) : true
  }
}

export default validator => form => new Form(form, validator)
