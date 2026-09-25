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

export class Solgaleo_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cosmoem";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Armor of the Sunne", powerType: PowerType.ABILITY, text: "If you have Lunala in play, your Solgaleo and Lunala take 50 less damage from your opponent's attacks (after applying Weakness and Resistance). You can't apply more than 1 Armor of the Sunne Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sol Fangs", cost: [], damage: "180", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Solgaleo";
  public fullName: string = "Solgaleo CEC 142";
  public text: string = "Solgaleo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 50);
    }
    return state;
  }
}
