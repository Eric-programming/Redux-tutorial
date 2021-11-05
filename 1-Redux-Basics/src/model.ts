let couter = 0;
export class Employee {
  name: string;
  position: string;
  id: number;
  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
    this.id = couter++;
  }
}
