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

export class Golduck_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 120;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Damp", powerType: PowerType.ABILITY, text: "Pokémon in play (both yours and your opponent's) lose any Ability that requires the Pokémon using it to Knock Out itself.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hydro Pump", cost: [], damage: "60+", text: "This attack does 20 more damage for each Water Energy attached to this Pokémon." }
  ];
  public set: string = "ASC";
  public name: string = "Golduck";
  public fullName: string = "Golduck ASC 40";
  public text: string = "Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
