'use strict'

class LoginUser {  //almost identical to CreateUser.js validator
  get rules () {
    return {
      // validation rules
      'email': 'required|email',
      'password': 'required'
    }
  }

  get messages() {
    return {
      'required': 'waoh now, {{ field }} is required'
    }
  }

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll();
    
    return this.ctx.response.redirect('back');
  }
}

module.exports = LoginUser
