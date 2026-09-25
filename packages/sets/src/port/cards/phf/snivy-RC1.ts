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

export class SnivyRC1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Growth", cost: [], damage: "", text: "Attach a Grass Energy from your hand to this Pokémon." },
      { name: "Razor Leaf", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PHF";
  public name: string = "Snivy";
  public fullName: string = "Snivy PHF RC1";
  public text: string = "Snivy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* oncePerTurnAttachFromHand */ state;
    }
    return state;
  }
}
