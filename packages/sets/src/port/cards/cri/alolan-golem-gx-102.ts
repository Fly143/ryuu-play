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

export class AlolanGolemGX_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Graveler";
  public hp: number = 250;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hammer In", cost: [], damage: "80", text: "" },
      { name: "Super Electromagnetic Tackle", cost: [], damage: "200", text: "This Pokémon does 50 damage to itself." },
      { name: "Heavy Rock-GX", cost: [], damage: "100", text: "Your opponent can't play any cards from their hand during their next turn. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CRI";
  public name: string = "Alolan Golem-GX";
  public fullName: string = "Alolan Golem-GX CRI 102";
  public text: string = "Alolan Golem-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 50);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
