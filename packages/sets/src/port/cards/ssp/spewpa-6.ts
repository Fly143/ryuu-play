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

export class Spewpa_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Scatterbug";
  public hp: number = 80;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wander About", cost: [], damage: "", text: "Switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Tackle", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Spewpa";
  public fullName: string = "Spewpa SSP 6";
  public text: string = "Spewpa";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
