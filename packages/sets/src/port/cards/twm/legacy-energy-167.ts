import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LegacyEnergy_167 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TWM";
  public name: string = "Legacy Energy";
  public fullName: string = "Legacy Energy TWM 167";
  public text: string = "You can't have more than 1 ACE SPEC card in your deck. As long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. If the Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, that player takes 1 fewer Prize card. This effect of your Legacy Energy can't be applied more than once per game. ACE SPEC: You can't have more than 1 ACE SPEC card in your deck.";
}
