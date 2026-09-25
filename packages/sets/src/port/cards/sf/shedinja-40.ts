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

export class Shedinja_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Resent", powerType: PowerType.ABILITY, text: "Once during your opponent's turn, if Shedinja would be Knocked Out by damage from an attack, you may put 4 damage counters on the Attacking Pokémon and each of the opponent's Pokémon that has the same name as the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Curse and Deceive", cost: [], damage: "", text: "Put 3 damage counters on the Defending Pokémon. If Shedinja has any damage counters on it, the Defending Pokémon is now Confused." }
  ];
  public set: string = "SF";
  public name: string = "Shedinja";
  public fullName: string = "Shedinja SF 40";
  public text: string = "Shedinja";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
