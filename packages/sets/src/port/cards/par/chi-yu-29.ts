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

export class ChiYu_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flare Bringer", cost: [], damage: "", text: "Attach up to 2 Basic Fire Energy cards from your discard pile to 1 of your Pokémon." },
      { name: "Megafire of Envy", cost: [], damage: "50+", text: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage." }
  ];
  public set: string = "PAR";
  public name: string = "Chi-Yu";
  public fullName: string = "Chi-Yu PAR 29";
  public text: string = "Chi-Yu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
