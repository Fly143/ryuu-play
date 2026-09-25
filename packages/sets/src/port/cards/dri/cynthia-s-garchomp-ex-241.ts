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

export class CynthiaSGarchompEx_241 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cynthia's Gabite";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Corkscrew Dive", cost: [], damage: "100", text: "You may draw cards until you have 6 cards in your hand." },
      { name: "Draconic Buster", cost: [], damage: "260", text: "Discard all Energy from this Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Cynthia's Garchomp ex";
  public fullName: string = "Cynthia's Garchomp ex DRI 241";
  public text: string = "Cynthia's Garchomp ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:6");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
