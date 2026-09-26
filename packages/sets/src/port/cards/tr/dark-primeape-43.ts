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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DarkPrimeape_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mankey";
  public hp: number = 60;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Frenzy", powerType: PowerType.ABILITY, text: "If Dark Primeape does any damage while it's Confused (even to itself), it does 30 more damage.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Frenzied Attack", cost: [], damage: "40", text: "Dark Primeape is now Confused (after doing damage)." }
  ];
  public set: string = "TR";
  public name: string = "Dark Primeape";
  public fullName: string = "Dark Primeape TR 43";
  public text: string = "Dark Primeape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "bonusIfConfused:30");
    }
    return state;
  }
}
