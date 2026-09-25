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

export class Roserade_232 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Roselia";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Signal", powerType: PowerType.ABILITY, text: "When you attach a Grass Energy card or Psychic Energy card from your hand to Roserade during your turn, you may use this power. If you attach a Grass Energy card, the Defending Pokémon is now Confused. If you attach a Psychic Energy card, the Defending Pokémon is now Poisoned. This power can't be used if Roserade is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Blow", cost: [], damage: "20×", text: "Does 20 damage times the amount of Energy attached to Roserade." }
  ];
  public set: string = "UL";
  public name: string = "Roserade";
  public fullName: string = "Roserade UL 23";
  public text: string = "Roserade";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
