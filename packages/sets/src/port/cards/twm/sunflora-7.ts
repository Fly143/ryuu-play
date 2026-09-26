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

export class Sunflora_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sunkern";
  public hp: number = 100;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Redirected Sunlight", cost: [], damage: "60×", text: "This attack does 60 damage for each Fire Energy attached to all of your opponent's Pokémon." },
      { name: "Mega Drain", cost: [], damage: "50", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Sunflora";
  public fullName: string = "Sunflora TWM 7";
  public text: string = "Sunflora";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
