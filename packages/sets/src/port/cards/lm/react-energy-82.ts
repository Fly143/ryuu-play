import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class ReactEnergy_82 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "LM";
  public name: string = "React Energy";
  public fullName: string = "React Energy LM 82";
  public text: string = "React Energy provides Colorless Energy.";
}
