import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MistEnergy_161 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TEF";
  public name: string = "Mist Energy";
  public fullName: string = "Mist Energy TEF 161";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. Prevent all effects of attacks used by your opponent's Pokémon done to the Pokémon this card is attached to. (Existing effects are not removed. Damage is not an effect.)";
}
