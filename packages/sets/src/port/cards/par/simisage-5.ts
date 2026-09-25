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

export class Simisage_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pansage";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Monkey Trio", powerType: PowerType.ABILITY, text: "If you have Simisage, Simisear, and Simipour in play, ignore all Colorless Energy in the costs of attacks used by this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Arm Thrust Needle", cost: [], damage: "100", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability, except any Simisage." }
  ];
  public set: string = "PAR";
  public name: string = "Simisage";
  public fullName: string = "Simisage PAR 5";
  public text: string = "Simisage";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
