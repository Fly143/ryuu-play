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

export class TinkatonEx_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tinkatuff";
  public hp: number = 300;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Big Hammer", cost: [], damage: "30×", text: "This attack does 30 damage for each card in your hand." },
      { name: "Pulverizing Press", cost: [], damage: "140", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon." }
  ];
  public set: string = "PR-SV";
  public name: string = "Tinkaton ex";
  public fullName: string = "Tinkaton ex PR-SV 31";
  public text: string = "Tinkaton ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesHand:30:self");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
