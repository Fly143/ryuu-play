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

export class Lunatone_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Premonition", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put them back on top of your deck in any order.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rock Throw", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PLB";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone PLB 73";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* pokedex */ state;
    }
    return state;
  }
}
