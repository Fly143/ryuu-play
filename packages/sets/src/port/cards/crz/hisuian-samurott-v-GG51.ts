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

export class HisuianSamurottVGG51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Basket Crash", cost: [], damage: "", text: "Discard up to 2 Pokémon Tools from your opponent's Pokémon." },
      { name: "Shadow Slash", cost: [], damage: "180", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "CRZ";
  public name: string = "Hisuian Samurott V";
  public fullName: string = "Hisuian Samurott V CRZ GG51";
  public text: string = "Hisuian Samurott V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
