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

export class LtSurgeSElectrode_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lt. Surge's Voltorb";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shock Blast", powerType: PowerType.ABILITY, text: "If Lt. Surge's Electrode is your Active Pokémon and gets damaged (even if it's Knocked Out), flip a coin. If tails, this power does 20 damage to each Active Pokémon. This power works even if Lt. Surge's Electrode is already Asleep, Confused, or Paralyzed when it takes damage.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Ball", cost: [], damage: "30+", text: "Flip 3 coins. This attack does 30 damage plus 10 more damage for each heads." }
  ];
  public set: string = "G2";
  public name: string = "Lt. Surge's Electrode";
  public fullName: string = "Lt. Surge's Electrode G2 52";
  public text: string = "Lt. Surge's Electrode";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
