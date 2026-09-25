import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Nidorina_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidoran ♀";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fetch Family", cost: [], damage: "", text: "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Sharp Fang", cost: [], damage: "50", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Nidorina";
  public fullName: string = "Nidorina MEW 30";
  public text: string = "Nidorina";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchPokemonToHand:1 */ state;
    }
    return state;
  }
}
