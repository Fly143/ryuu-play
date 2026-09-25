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

export class TrevenantDusknoirGXSM217 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Night Watch", cost: [], damage: "150", text: "Choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck." },
      { name: "Pale Moon-GX", cost: [], damage: "", text: "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out. If this Pokémon has at least 1 extra Psychic Energy attached to it (in addition to this attack's cost), discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "PR-SM";
  public name: string = "Trevenant & Dusknoir-GX";
  public fullName: string = "Trevenant & Dusknoir-GX PR-SM SM217";
  public text: string = "Trevenant & Dusknoir-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
