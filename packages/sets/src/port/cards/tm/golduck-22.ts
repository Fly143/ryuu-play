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

export class Golduck_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Natural Remedy", powerType: PowerType.ABILITY, text: "Whenever you attach a Water Energy card from your hand to Golduck, remove 2 damage counters from Golduck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Powerful Splash", cost: [], damage: "30+", text: "Does 30 damage plus 10 more damage for each Water Energy attached to all of your Pokémon." }
  ];
  public set: string = "TM";
  public name: string = "Golduck";
  public fullName: string = "Golduck TM 22";
  public text: string = "Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
