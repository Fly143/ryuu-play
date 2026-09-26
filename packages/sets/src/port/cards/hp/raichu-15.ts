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

export class Raichu_152 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pikachu";
  public hp: number = 70;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Zzzap", cost: [], damage: "", text: "Does 20 damage to each Pokémon that has any Poké-Powers or Poké-Bodies (both yours and your opponent's). Don't apply Weakness or Resistance." },
      { name: "Metallic Thunder", cost: [], damage: "50", text: "You may discard 2 Metal Energy attached to Raichu. If you do, this attack's base damage is 90 instead of 50." }
  ];
  public set: string = "HP";
  public name: string = "Raichu δ";
  public fullName: string = "Raichu δ HP 15";
  public text: string = "Raichu δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
