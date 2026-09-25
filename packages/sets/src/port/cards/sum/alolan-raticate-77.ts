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

export class AlolanRaticate_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Rattata";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Evil Orders", cost: [], damage: "", text: "Search your deck for a number of cards up to the number of your Benched Pokémon and put them into your hand. Then, shuffle your deck." },
      { name: "Endeavor", cost: [], damage: "60+", text: "Flip 2 coins. This attack does 30 more damage for each heads." }
  ];
  public set: string = "SUM";
  public name: string = "Alolan Raticate";
  public fullName: string = "Alolan Raticate SUM 77";
  public text: string = "Alolan Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
