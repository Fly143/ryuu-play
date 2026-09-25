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

export class WashRotomRT5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wash Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Wash Rotom's type is Water until the end of your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cleanse Away", cost: [], damage: "", text: "Remove 3 damage counters from each of your Benched Pokémon." },
      { name: "Drain Wash", cost: [], damage: "30", text: "Flip a coin until you get tails. For each heads, choose 1 card from your opponent's hand without looking and discard it." }
  ];
  public set: string = "RR";
  public name: string = "Wash Rotom";
  public fullName: string = "Wash Rotom RR RT5";
  public text: string = "Wash Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
