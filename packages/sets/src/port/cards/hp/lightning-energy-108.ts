import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_1082 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HP";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy HP 108";
  public text: string = "";
}
