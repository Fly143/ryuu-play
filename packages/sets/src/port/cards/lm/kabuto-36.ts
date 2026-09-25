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

export class Kabuto_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mysterious Fossil";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ancient Protection", powerType: PowerType.ABILITY, text: "Each of your Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Granite Head", cost: [], damage: "20", text: "During your opponent's next turn, any damage done to Kabuto by attacks is reduced by 10 (after applying Weakness and Resistance)." }
  ];
  public set: string = "LM";
  public name: string = "Kabuto";
  public fullName: string = "Kabuto LM 36";
  public text: string = "Kabuto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
