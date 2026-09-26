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

export class HearthflameMaskOgerponEx_212 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wrathful Hearth", cost: [], damage: "20×", text: "This attack does 20 damage for each damage counter on this Pokémon." },
      { name: "Dynamic Blaze", cost: [], damage: "140+", text: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 140 more damage, and discard all Energy from this Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Hearthflame Mask Ogerpon ex";
  public fullName: string = "Hearthflame Mask Ogerpon ex TWM 212";
  public text: string = "Hearthflame Mask Ogerpon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
