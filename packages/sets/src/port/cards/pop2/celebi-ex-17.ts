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

export class CelebiEx_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Time Reversal", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Celebi ex from your hand onto your Bench, you may search your discard pile for a card, show it to your opponent, and put it on top of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Shield", cost: [], damage: "30", text: "Prevent all effects of attacks, including damage, done to Celebi ex by your opponent's Pokémon-ex during your opponent's next turn." }
  ];
  public set: string = "POP2";
  public name: string = "Celebi ex";
  public fullName: string = "Celebi ex POP2 17";
  public text: string = "Celebi ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
