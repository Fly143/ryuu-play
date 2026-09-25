import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DoubleDragonEnergy_97 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "AOR";
  public name: string = "Double Dragon Energy";
  public fullName: string = "Double Dragon Energy AOR 97";
  public text: string = "This card can only be attached to Dragon Pokémon. This card provides every type of Energy, but provides only 2 Energy at a time, only while this card is attached to a Dragon Pokémon. (If this card is attached to anything other than a Dragon Pokémon, discard this card.)";
}
