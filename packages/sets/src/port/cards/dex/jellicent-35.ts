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

export class Jellicent_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frillish";
  public hp: number = 120;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vengeful Wish", cost: [], damage: "", text: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to the Defending Pokémon." },
      { name: "Absorb Life", cost: [], damage: "30", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "DEX";
  public name: string = "Jellicent";
  public fullName: string = "Jellicent DEX 35";
  public text: string = "Jellicent";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
