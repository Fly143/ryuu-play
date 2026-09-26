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

export class HopSTrevenant_237 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hop's Phantump";
  public hp: number = 140;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Horrifying Revenge", cost: [], damage: "30+", text: "If any of your Hop's Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 100 more damage." },
      { name: "Corner", cost: [], damage: "90", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "ASC";
  public name: string = "Hop's Trevenant";
  public fullName: string = "Hop's Trevenant ASC 237";
  public text: string = "Hop's Trevenant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
