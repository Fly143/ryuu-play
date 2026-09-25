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

export class Absol_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drawareness", cost: [], damage: "", text: "You may discard any number of cards from your hand until you have 4 or fewer. Draw cards until you have 5 cards in your hand." },
      { name: "Enhanced Blade", cost: [], damage: "20+", text: "If this Pokémon has a Pokémon Tool attached, this attack does 60 more damage." }
  ];
  public set: string = "PAR";
  public name: string = "Absol";
  public fullName: string = "Absol PAR 113";
  public text: string = "Absol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:5");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    return state;
  }
}
