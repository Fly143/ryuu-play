import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class AquaEnergy_86 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "MA";
  public name: string = "Aqua Energy";
  public fullName: string = "Aqua Energy MA 86";
  public text: string = "Aqua Energy can be attached only to a Pokémon with Team Aqua in its name. Aqua Energy provides Water and Darkness Energy but provides 2 Energy at a time. (Doesn't count as a basic Energy card when not in play and has no other effect than providing Energy.) At the end of your turn, discard Aqua Energy.";
}
