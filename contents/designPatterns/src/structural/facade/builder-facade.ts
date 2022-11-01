import { MainDishBuilder } from "../../creational/builder/classes/main-dish-builder";
import { VeganDishBuilder } from "../../creational/builder/classes/vegan-dish-builder";

export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal(): void {
    this.mainDishBuilder.makeMeal().makeDessert();
    console.log(this.mainDishBuilder.getMeal());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
    console.log(meal2);
  }

  makeMeal3(): void {
    console.log(this.veganDishBuilder.makeMeal().getMeal());
  }
}