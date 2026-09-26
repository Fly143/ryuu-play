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

export class Mew_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Memories of Dawn", powerType: PowerType.ABILITY, text: "This Pokémon can use the attacks of any of your Basic Pokémon in play. (You still need the necessary Energy to use each attack.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Encounter", cost: [], damage: "", text: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "FAC";
  public name: string = "Mew";
  public fullName: string = "Mew FAC 29";
  public text: string = "Mew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    return state;
  }
}
