import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class AuroraEnergy_186 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SSH";
  public name: string = "Aurora Energy";
  public fullName: string = "Aurora Energy SSH 186";
  public text: string = "You can attach this card to 1 of your Pokémon only if you discard another card from your hand. As long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time.";
}
