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

export class MegaLucarioEx_160 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Riolu";
  public hp: number = 340;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aura Jab", cost: [], damage: "130", text: "Attach up to 3 Basic Fighting Energy cards from your discard pile to your Benched Pokémon in any way you like." },
      { name: "Mega Brave", cost: [], damage: "270", text: "During your next turn, this Pokémon can't use Mega Brave." }
  ];
  public set: string = "MEG";
  public name: string = "Mega Lucario ex";
  public fullName: string = "Mega Lucario ex MEG 160";
  public text: string = "Mega Lucario ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
