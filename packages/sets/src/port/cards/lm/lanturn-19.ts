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

export class Lanturn_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chinchou";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Armor", powerType: PowerType.ABILITY, text: "As long as Lanturn has any Water Energy attached to it, Lanturn is both Water and Lightning type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Razor Fin", cost: [], damage: "30", text: "" },
      { name: "Water Gun", cost: [], damage: "40+", text: "Does 40 damage plus 20 more damage for each Water Energy attached to Lanturn but not used to pay for this attack's Energy cost. You can't add more then 40 damage in this way." }
  ];
  public set: string = "LM";
  public name: string = "Lanturn";
  public fullName: string = "Lanturn LM 19";
  public text: string = "Lanturn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
