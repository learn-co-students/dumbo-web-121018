class Cat {
  constructor(name) {
    Cat.counter = Cat.counter || 0
    this.id = Cat.counter
    Cat.counter++
    this.name = name

  }

  render() {
    return `
      <li id="cat-${ this.id }" class="kitty">
        ${ this.name }
      </li>
    `
  }

}