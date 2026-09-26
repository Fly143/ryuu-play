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

export class ScreamTailEx_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scream", cost: [], damage: "", text: "You can use this attack only if you go second, and only during your first turn. Your opponent can't play any Supporter cards from their hand during their next turn." },
      { name: "Crunch", cost: [], damage: "120", text: "Discard an Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Scream Tail ex";
  public fullName: string = "Scream Tail ex TWM 94";
  public text: string = "Scream Tail ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
