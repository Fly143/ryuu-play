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

export class SwampertEXXY55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mud Flood", cost: [], damage: "40+", text: "Reveal the top 4 cards of your deck. This attack does 40 more damage for each Water Energy you find there. Shuffle the revealed cards back into your deck." },
      { name: "Hydro Tackle", cost: [], damage: "120", text: "This Pokémon does 20 damage to itself." }
  ];
  public set: string = "PR-XY";
  public name: string = "Swampert-EX";
  public fullName: string = "Swampert-EX PR-XY XY55";
  public text: string = "Swampert-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -20, 1);
    }
    return state;
  }
}
