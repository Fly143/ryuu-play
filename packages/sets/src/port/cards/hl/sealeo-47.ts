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

export class Sealeo_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spheal";
  public hp: number = 70;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Super Icy Wind", cost: [], damage: "", text: "Does 10 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance." },
      { name: "Skull Bash", cost: [], damage: "50", text: "" }
  ];
  public set: string = "HL";
  public name: string = "Sealeo";
  public fullName: string = "Sealeo HL 47";
  public text: string = "Sealeo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
