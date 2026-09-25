import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_94 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVO";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy EVO 94";
  public text: string = "";
}
