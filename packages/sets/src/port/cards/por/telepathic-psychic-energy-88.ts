import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class TelepathicPsychicEnergy_88 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "POR";
  public name: string = "Telepathic Psychic Energy";
  public fullName: string = "Telepathic Psychic Energy POR 88";
  public text: string = "As long as this card is attached to a Pokémon, it provides Psychic Energy. When you attach this card from your hand to a Psychic Pokémon, search your deck for up to 2 Basic Psychic Pokémon and put them onto your Bench. Then, shuffle your deck.";
}
