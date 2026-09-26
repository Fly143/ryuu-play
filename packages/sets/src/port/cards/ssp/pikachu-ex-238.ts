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

export class PikachuEx_238 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Resolute Heart", powerType: PowerType.ABILITY, text: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Topaz Bolt", cost: [], damage: "300", text: "Discard 3 Energy from this Pokémon." }
  ];
  public set: string = "SSP";
  public name: string = "Pikachu ex";
  public fullName: string = "Pikachu ex SSP 238";
  public text: string = "Pikachu ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
