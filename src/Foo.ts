import Bar from "./Bar"

export default class Foo {
  bar = new Bar()

  dothing(): void {
    this.bar.doThing()
  }
}
