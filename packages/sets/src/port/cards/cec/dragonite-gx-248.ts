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

export class DragoniteGX_248 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragonair";
  public hp: number = 250;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon Claw", cost: [], damage: "130", text: "" },
      { name: "Sky Judgment", cost: [], damage: "270", text: "Discard 3 Energy from this Pokémon." },
      { name: "Mach Delivery-GX", cost: [], damage: "", text: "You may discard any number of cards from your hand until you have 9 or fewer. Draw cards until you have 10 cards in your hand. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Dragonite-GX";
  public fullName: string = "Dragonite-GX CEC 248";
  public text: string = "Dragonite-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 3);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:10");
    }
    return state;
  }
}
