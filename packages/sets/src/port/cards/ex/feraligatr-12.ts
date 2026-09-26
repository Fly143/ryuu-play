import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Feraligatr_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croconaw";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Major Tsunami", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Feraligatr is your Active Pokémon and if your opponent has any Benched Pokémon, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon. Either way, if you have any Benched Pokémon, switch Feraligatr with 1 of them. This power can't be used if Feraligatr is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rending Jaws", cost: [], damage: "70", text: "If here are no damage counters on the Defending Pokémon, this attack's base damage is 40 instead of 70." }
  ];
  public set: string = "EX";
  public name: string = "Feraligatr";
  public fullName: string = "Feraligatr EX 12";
  public text: string = "Feraligatr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
