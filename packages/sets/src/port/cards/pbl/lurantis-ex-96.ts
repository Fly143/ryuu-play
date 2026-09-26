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

export class LurantisEx_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fomantis";
  public hp: number = 260;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lively Cutter", cost: [], damage: "60+", text: "If this Pokémon was healed during this turn, this attack does 200 more damage." },
      { name: "Leaf Guard", cost: [], damage: "140", text: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "PBL";
  public name: string = "Lurantis ex";
  public fullName: string = "Lurantis ex PBL 96";
  public text: string = "Lurantis ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 200, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
