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

export class DarkTyranitar_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Pupitar";
  public hp: number = 120;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sand Damage", powerType: PowerType.ABILITY, text: "As long as Dark Tyranitar is your Active Pokémon, put 1 damage counter on each of your opponent's Benched Basic Pokémon between turns. You can't use more than 1 Sand Damage Poké-Body between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Second Strike", cost: [], damage: "50+", text: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "TRR";
  public name: string = "Dark Tyranitar";
  public fullName: string = "Dark Tyranitar TRR 20";
  public text: string = "Dark Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
