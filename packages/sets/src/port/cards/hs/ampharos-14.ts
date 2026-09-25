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

export class Ampharos_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Flaaffy";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Acceleration Bolt", cost: [], damage: "30", text: "Search your deck for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Shuffle your deck afterward." },
      { name: "Thunder", cost: [], damage: "80", text: "Flip a coin. If tails, Ampharos does 20 damage to itself." }
  ];
  public set: string = "HS";
  public name: string = "Ampharos";
  public fullName: string = "Ampharos HS 14";
  public text: string = "Ampharos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
