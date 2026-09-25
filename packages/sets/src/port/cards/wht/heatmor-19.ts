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

export class Heatmor_192 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Licking Catch", cost: [], damage: "", text: "Search your deck for up to 3 in any combination of Fire Pokémon and Basic Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Fire Claws", cost: [], damage: "60", text: "" }
  ];
  public set: string = "WHT";
  public name: string = "Heatmor";
  public fullName: string = "Heatmor WHT 19";
  public text: string = "Heatmor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchAnyToHand:3 */ state;
    }
    return state;
  }
}
