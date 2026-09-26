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

export class Appletun_121 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Applin";
  public hp: number = 90;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Thick Mucus", cost: [], damage: "70×", text: "This attack does 70 damage for each Special Energy card attached to your opponent's Pokémon." },
      { name: "Fighting Tackle", cost: [], damage: "80+", text: "If your opponent's Active Pokémon is a Pokémon V, this attack does 80 more damage." }
  ];
  public set: string = "CRE";
  public name: string = "Appletun";
  public fullName: string = "Appletun CRE 121";
  public text: string = "Appletun";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
