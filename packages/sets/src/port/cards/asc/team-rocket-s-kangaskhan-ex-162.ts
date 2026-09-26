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

export class TeamRocketSKangaskhanEx_162 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Comet Punch", cost: [], damage: "30×", text: "Flip 4 coins. This attack does 30 damage for each heads." },
      { name: "Wicked Impact", cost: [], damage: "120+", text: "If you played a Supporter card that has \"Team Rocket\" in its name from your hand during this turn, this attack does 100 more damage." }
  ];
  public set: string = "ASC";
  public name: string = "Team Rocket's Kangaskhan ex";
  public fullName: string = "Team Rocket's Kangaskhan ex ASC 162";
  public text: string = "Team Rocket's Kangaskhan ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    return state;
  }
}
