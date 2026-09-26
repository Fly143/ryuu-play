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

export class PolitoedH23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwhirl";
  public hp: number = 110;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sudden Growth", cost: [], damage: "", text: "Attach any number of basic Energy cards from your hand to Politoed." },
      { name: "Frog Hop", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage." },
      { name: "Energy Splash", cost: [], damage: "70", text: "Move 2 Water Energy cards attached to Politoed to 1 or 2 of your Benched Pokémon. (You may put both on the same Pokémon or 1 each on 2 different Pokémon.) If you have no Benched Pokémon, ignore this effect." }
  ];
  public set: string = "SK";
  public name: string = "Politoed";
  public fullName: string = "Politoed SK H23";
  public text: string = "Politoed";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
