import Bar from "./Bar.js"

export default class Foo {
  bar = new Bar()

  dothing(): void {
    this.bar.doThing()
  }
}
