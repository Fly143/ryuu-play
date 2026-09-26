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

export class AlcremieSV058 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Milcery";
  public hp: number = 110;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Decorate", cost: [], damage: "", text: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Draining Kiss", cost: [], damage: "50", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "SHF";
  public name: string = "Alcremie";
  public fullName: string = "Alcremie SHF SV058";
  public text: string = "Alcremie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
