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

export class Espeon_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sunlight Veil", powerType: PowerType.ABILITY, text: "Each of your Pokémon that evolves from Eevee gets +20 HP. You can't use more than 1 Sunlight Veil Poké-Body each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Morning Sun", cost: [], damage: "60", text: "You may move an Energy card attached to Espeon to 1 of your Benched Pokémon." }
  ];
  public set: string = "LA";
  public name: string = "Espeon";
  public fullName: string = "Espeon LA 18";
  public text: string = "Espeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
