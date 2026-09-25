import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class MewBW98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psyscan", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent reveal his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Exchange", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw 6 cards." }
  ];
  public set: string = "PR-BLW";
  public name: string = "Mew";
  public fullName: string = "Mew PR-BLW BW98";
  public text: string = "Mew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
