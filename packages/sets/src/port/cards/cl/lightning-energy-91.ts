import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_91 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CL";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy CL 91";
  public text: string = "";
}
