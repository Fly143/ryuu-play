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
import { commonEffects } from '../../../common';

export class MorpekoVUNIONSWSH217 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Union Gain", cost: [], damage: "", text: "Attach up to 2 Lightning Energy cards from your discard pile to this Pokémon." },
      { name: "All You Can Eat", cost: [], damage: "", text: "Draw cards until you have 10 cards in your hand." },
      { name: "Burst Wheel", cost: [], damage: "100×", text: "Discard all energy from this Pokémon. This attack does 100 damage for each card you discarded in this way." },
      { name: "Electric Ball", cost: [], damage: "160", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Morpeko V-UNION";
  public fullName: string = "Morpeko V-UNION PR-SW SWSH217";
  public text: string = "Morpeko V-UNION";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:10");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
