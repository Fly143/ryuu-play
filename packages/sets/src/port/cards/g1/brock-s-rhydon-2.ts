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

export class BrockSRhydon_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Brock's Rhyhorn";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bench Guard", powerType: PowerType.ABILITY, text: "As long as Brock's Rhydon is Benched, whenever 1 of your Benched Pokémon is damaged, you may do 10 of that damage to Brock's Rhydon instead. (If more than 1 of your Benched Pokémon is damaged at the same time, you may use this power once for each of them.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lariat", cost: [], damage: "70", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "G1";
  public name: string = "Brock's Rhydon";
  public fullName: string = "Brock's Rhydon G1 2";
  public text: string = "Brock's Rhydon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    return state;
  }
}
