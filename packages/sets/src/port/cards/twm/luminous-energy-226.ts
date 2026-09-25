import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LuminousEnergy_226 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TWM";
  public name: string = "Luminous Energy";
  public fullName: string = "Luminous Energy TWM 226";
  public text: string = "As long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. If the Pokémon this card is attached to has any other Special Energy attached, this card provides Colorless Energy instead.";
}
