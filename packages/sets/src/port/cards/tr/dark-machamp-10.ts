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

export class DarkMachamp_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Machoke";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mega Punch", cost: [], damage: "30", text: "" },
      { name: "Fling", cost: [], damage: "", text: "Your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck. This attack can't be used if your opponent has no Benched Pokémon." }
  ];
  public set: string = "TR";
  public name: string = "Dark Machamp";
  public fullName: string = "Dark Machamp TR 10";
  public text: string = "Dark Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "scoopUpOpponent");
    }
    return state;
  }
}
