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

export class AshSPikachuSM108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "I Choose You!", cost: [], damage: "", text: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Thunderbolt", cost: [], damage: "100", text: "Discard all Energy from this Pokémon." }
  ];
  public set: string = "PR-SM";
  public name: string = "Ash's Pikachu";
  public fullName: string = "Ash's Pikachu PR-SM SM108";
  public text: string = "Ash's Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
