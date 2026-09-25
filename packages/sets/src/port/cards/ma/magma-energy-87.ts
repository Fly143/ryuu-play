import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MagmaEnergy_87 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "MA";
  public name: string = "Magma Energy";
  public fullName: string = "Magma Energy MA 87";
  public text: string = "Magma Energy can be attached only to a Pokémon with Team Magma in its name. Magma Energy provides Fighting and /or Darkness Energy but provides 2 Energy at a time. (Doesn't count as a basic Energy card when not in play and has no other effect than providing Energy.) At the end of your turn, discard Magma Energy.";
}
