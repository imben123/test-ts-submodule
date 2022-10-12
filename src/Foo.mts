import Bar from "./Bar.mjs"

export default class Foo {
  bar = new Bar()

  dothing(): void {
    this.bar.doThing()
  }
}
