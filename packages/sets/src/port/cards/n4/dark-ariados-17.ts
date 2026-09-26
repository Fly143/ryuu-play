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

export class DarkAriados_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spinarak";
  public hp: number = 60;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Entangle", cost: [], damage: "", text: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon, then flip a coin. If heads, the new Defending Pokémon is now Paralyzed." },
      { name: "Poison Bind", cost: [], damage: "30", text: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon can't retreat until the end of your opponent's next turn and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing." }
  ];
  public set: string = "N4";
  public name: string = "Dark Ariados";
  public fullName: string = "Dark Ariados N4 17";
  public text: string = "Dark Ariados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
