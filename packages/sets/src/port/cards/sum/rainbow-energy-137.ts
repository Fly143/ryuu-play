import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RainbowEnergy_137 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SUM";
  public name: string = "Rainbow Energy";
  public fullName: string = "Rainbow Energy SUM 137";
  public text: string = "This card provides Colorless Energy. While in play, this card provides every type of Energy but provides only 1 Energy at a time. When you attach this card from your hand to 1 of your Pokémon, put 1 damage counter on that Pokémon.";
}
