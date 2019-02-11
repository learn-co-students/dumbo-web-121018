class CatList {

  constructor(catNames) {
    this.cats = catNames.map(function(catName){
      return new Cat(catName);
    })
  }

  render() {
    return this.cats.map(function(cat){
      return cat.render()
    }).join("")
  }

}