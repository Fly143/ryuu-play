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

export class Brambleghast_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bramblin";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Absorb Life", cost: [], damage: "30", text: "Heal 30 damage from this Pokémon." },
      { name: "Dead Wood Detention", cost: [], damage: "80", text: "During your opponent's next turn, attacks that the Defending Pokémon uses cost ColorlessColorless more." }
  ];
  public set: string = "PAL";
  public name: string = "Brambleghast";
  public fullName: string = "Brambleghast PAL 24";
  public text: string = "Brambleghast";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
