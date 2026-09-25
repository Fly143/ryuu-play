import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_100 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BS";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy BS 100";
  public text: string = "";
}
