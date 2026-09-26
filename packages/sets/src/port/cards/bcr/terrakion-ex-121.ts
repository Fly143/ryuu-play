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

export class TerrakionEX_121 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Tumble", cost: [], damage: "50", text: "This attack's damage isn't affected by Resistance." },
      { name: "Pump-up Smash", cost: [], damage: "90", text: "Attach 2 basic Energy cards from your hand to your Benched Pokémon in any way you like." }
  ];
  public set: string = "BCR";
  public name: string = "Terrakion-EX";
  public fullName: string = "Terrakion-EX BCR 121";
  public text: string = "Terrakion-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
