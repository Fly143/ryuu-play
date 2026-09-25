import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_231 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BST";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy BST 231";
  public text: string = "";
}
