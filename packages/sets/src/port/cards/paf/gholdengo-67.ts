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

export class Gholdengo_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gimmighoul";
  public hp: number = 130;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lavish Hospitality", cost: [], damage: "", text: "You may attach any number of Basic Metal Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Scintillating Surfing", cost: [], damage: "80×", text: "Flip a coin for each Metal Energy attached to this Pokémon. This attack does 80 damage for each heads." }
  ];
  public set: string = "PAF";
  public name: string = "Gholdengo";
  public fullName: string = "Gholdengo PAF 67";
  public text: string = "Gholdengo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 80);
    }
    return state;
  }
}
