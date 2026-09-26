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

export class Aerodactyl_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Old Amber";
  public hp: number = 80;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Primal Claw", powerType: PowerType.ABILITY, text: "After your opponent's Pokémon uses a Poké-Power, put 2 damage counters on that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Supersonic", cost: [], damage: "30", text: "Flip a coin. If heads, the Defending Pokémon is now Confused." }
  ];
  public set: string = "LA";
  public name: string = "Aerodactyl";
  public fullName: string = "Aerodactyl LA 15";
  public text: string = "Aerodactyl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
