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

export class VolcaronaBW40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Larvesta";
  public hp: number = 110;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scorching Scales", powerType: PowerType.ABILITY, text: "Put 4 damage counters instead of 2 on your opponent's Burned Pokémon between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Burning Wind", cost: [], damage: "70", text: "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Burned." }
  ];
  public set: string = "PR-BLW";
  public name: string = "Volcarona";
  public fullName: string = "Volcarona PR-BLW BW40";
  public text: string = "Volcarona";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
