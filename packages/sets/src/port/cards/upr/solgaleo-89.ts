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

export class Solgaleo_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Radiant Star", cost: [], damage: "", text: "For each of your opponent's Pokémon in play, attach a Metal Energy card from your discard pile to your Pokémon in any way you like." },
      { name: "Corona Impact", cost: [], damage: "160", text: "This Pokémon can't attack during your next turn." }
  ];
  public set: string = "UPR";
  public name: string = "Solgaleo ◇";
  public fullName: string = "Solgaleo ◇ UPR 89";
  public text: string = "Solgaleo ◇";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
