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

export class Slowking_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 80;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mind Games", powerType: PowerType.ABILITY, text: "Whenever your opponent plays a Trainer card, you may flip a coin. If heads, that card does nothing. Put it on top of your opponent's deck. This power can't be used if Slowking is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Blast", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage." }
  ];
  public set: string = "N1";
  public name: string = "Slowking";
  public fullName: string = "Slowking N1 14";
  public text: string = "Slowking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
