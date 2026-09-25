import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Arcanine_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Growlithe";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flare Condition", powerType: PowerType.ABILITY, text: "As long as Arcanine has any Fire Energy attached to it, Arcanine has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Burn Out", cost: [], damage: "30+", text: "You may do 30 damage plus 30 more damage. If you do, Arcanine is now Burned." },
      { name: "Flames of Rage", cost: [], damage: "60+", text: "Discard a Fire Energy attached to Arcanine. This attack does 60 damage plus 10 more damage for each damage counter on Arcanine." }
  ];
  public set: string = "RR";
  public name: string = "Arcanine";
  public fullName: string = "Arcanine RR 1";
  public text: string = "Arcanine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
