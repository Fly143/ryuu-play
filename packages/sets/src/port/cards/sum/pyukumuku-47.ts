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

export class Pyukumuku_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Innards Out", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, put 6 damage counters on the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Continuous Tumble", cost: [], damage: "30×", text: "Flip a coin until you get tails. This attack does 30 damage for each heads." }
  ];
  public set: string = "SUM";
  public name: string = "Pyukumuku";
  public fullName: string = "Pyukumuku SUM 47";
  public text: string = "Pyukumuku";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 30);
    }
    return state;
  }
}
