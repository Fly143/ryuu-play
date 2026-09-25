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

export class Marshadow_802 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rapid Hunt", cost: [], damage: "", text: "Search your deck for up to 2 Rapid Strike cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Shadow Flicker", cost: [], damage: "10", text: "If the Defending Pokémon is Knocked Out during your next turn, take 1 more Prize card." }
  ];
  public set: string = "CRE";
  public name: string = "Marshadow";
  public fullName: string = "Marshadow CRE 80";
  public text: string = "Marshadow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchAnyToHand:2 */ state;
    }
    return state;
  }
}
