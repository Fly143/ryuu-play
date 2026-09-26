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

export class MimikyuSWSH136 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Filch", cost: [], damage: "", text: "Draw 2 cards." },
      { name: "Wet Claw", cost: [], damage: "40", text: "Put an Energy attached to your opponent's Active Pokémon into their hand." }
  ];
  public set: string = "PR-SW";
  public name: string = "Mimikyu δ";
  public fullName: string = "Mimikyu δ PR-SW SWSH136";
  public text: string = "Mimikyu δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
