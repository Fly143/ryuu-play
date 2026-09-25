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

export class Purugly_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Glameow";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Own the Place", cost: [], damage: "20", text: "If your opponent has a Stadium card in play, discard it. If you do, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn." },
      { name: "Toss Aside", cost: [], damage: "60", text: "Discard random cards from your opponent's hand until they have 3 cards in their hand." }
  ];
  public set: string = "UPR";
  public name: string = "Purugly";
  public fullName: string = "Purugly UPR 109";
  public text: string = "Purugly";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
