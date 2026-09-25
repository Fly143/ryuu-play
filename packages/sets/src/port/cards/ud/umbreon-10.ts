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

export class Umbreon_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Moonlight Fang", cost: [], damage: "30", text: "During your opponent's next turn, prevent all effects, including damage, done to Umbreon by attacks from your opponent's Pokémon that has any Poké-Powers or Poké-Bodies." },
      { name: "Quick Blow", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 30 damage." }
  ];
  public set: string = "UD";
  public name: string = "Umbreon";
  public fullName: string = "Umbreon UD 10";
  public text: string = "Umbreon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
