import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DrawEnergy_271 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CEC";
  public name: string = "Draw Energy";
  public fullName: string = "Draw Energy CEC 271";
  public text: string = "This card provides Colorless Energy. When you attach this card from your hand to a Pokémon, draw a card.";
}
