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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Regice_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ice Beam", cost: [], damage: "30", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." },
      { name: "Resistance Blizzard", cost: [], damage: "70", text: "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX." }
  ];
  public set: string = "BKT";
  public name: string = "Regice";
  public fullName: string = "Regice BKT 24";
  public text: string = "Regice";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    return state;
  }
}
