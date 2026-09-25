import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicGrassEnergy_278 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PAL";
  public name: string = "Basic Grass Energy";
  public fullName: string = "Basic Grass Energy PAL 278";
  public text: string = "";
}
