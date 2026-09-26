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

export class Flygon_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vibrava";
  public hp: number = 120;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Shower", cost: [], damage: "", text: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Rainbow Burn", cost: [], damage: "30+", text: "Does 30 damage plus 10 more damage for each type of basic Energy card attached to Flygon." }
  ];
  public set: string = "DR";
  public name: string = "Flygon";
  public fullName: string = "Flygon DR 4";
  public text: string = "Flygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
