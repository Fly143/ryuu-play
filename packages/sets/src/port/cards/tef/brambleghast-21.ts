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

export class Brambleghast_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bramblin";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Resilient Soul", powerType: PowerType.ABILITY, text: "This Pokémon gets +50 HP for each Prize card your opponent has taken.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Powerful Needles", cost: [], damage: "80×", text: "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads." }
  ];
  public set: string = "TEF";
  public name: string = "Brambleghast";
  public fullName: string = "Brambleghast TEF 21";
  public text: string = "Brambleghast";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 80);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
