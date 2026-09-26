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

export class PalkiaEX_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 5.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Strafe", cost: [], damage: "50", text: "You may switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Dimension Heal", cost: [], damage: "80", text: "Heal from this Pokémon 20 damage for each Plasma Energy attached to this Pokémon." }
  ];
  public set: string = "FFI";
  public name: string = "Palkia-EX";
  public fullName: string = "Palkia-EX FFI 100";
  public text: string = "Palkia-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "healPerEnergySelf:20");
    }
    return state;
  }
}
