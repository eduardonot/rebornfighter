import { Attributes } from "@/types/Attributes";
import { Character } from "@/types/Character";
import { faker } from "@faker-js/faker";

export class MockCharacter implements Character {
  attributes: Attributes;
  experience: number;
  level: number;
  name: string;
  isMage: boolean;

  constructor() {
    this.name = faker.person.firstName();
    this.level = faker.number.int({ min: 1, max: 5 });
    this.experience = faker.number.float({ min: 0.0, max: 500.0 });
    this.attributes = {
      constitution: faker.number.int({ min: 5, max: 10 }),
      dexterity: faker.number.int({ min: 5, max: 10 }),
      intelligence: faker.number.int({ min: 5, max: 10 }),
      strength: faker.number.int({ min: 5, max: 10 }),
    };
    this.isMage = faker.datatype.boolean();
  }
}