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

export class DragoniteVSTARSWSH236 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragonite V";
  public hp: number = 280;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Giga Impact", cost: [], damage: "250", text: "During your next turn, this Pokémon can't attack." },
      { name: "Draconic Star", cost: [], damage: "", text: "Look at the top 12 cards of your deck and attach any number of Water or Lightning Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "PR-SW";
  public name: string = "Dragonite VSTAR";
  public fullName: string = "Dragonite VSTAR PR-SW SWSH236";
  public text: string = "Dragonite VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
