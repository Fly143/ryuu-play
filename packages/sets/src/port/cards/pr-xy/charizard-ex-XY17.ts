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

export class CharizardEXXY17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mega Ascension", cost: [], damage: "", text: "Search your deck for M Charizard-EX, reveal it, and put it into your hand. Shuffle your deck afterward." },
      { name: "Brave Fire", cost: [], damage: "120", text: "This Pokémon does 30 damage to itself." }
  ];
  public set: string = "PR-XY";
  public name: string = "Charizard-EX";
  public fullName: string = "Charizard-EX PR-XY XY17";
  public text: string = "Charizard-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
