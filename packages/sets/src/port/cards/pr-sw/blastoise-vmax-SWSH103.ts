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

export class BlastoiseVMAXSWSH103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blastoise V";
  public hp: number = 330;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Grand Falls", cost: [], damage: "120", text: "Search your deck for up to 3 Water Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck." },
      { name: "G-Max Bombard", cost: [], damage: "220", text: "This attack also does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PR-SW";
  public name: string = "Blastoise VMAX";
  public fullName: string = "Blastoise VMAX PR-SW SWSH103";
  public text: string = "Blastoise VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTwoOpponentBench(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
