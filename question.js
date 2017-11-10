'use strict';
class Question {
  constructor(content){
    this.content = content
    this.save()
  }

  static All(){
    return this._All
  }

  save(){
    this.constructor._All.push(this)
  }
  static Find(id){
    return this._All().filter(function(x){
      return x.id===id
    })
  }



}
Question._All=[]
