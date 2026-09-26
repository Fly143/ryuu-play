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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DarkGyarados_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magikarp";
  public hp: number = 80;
    public height?: number = 6.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Scale", powerType: PowerType.ABILITY, text: "If Dark Gyarados is your Active Pokémon and is Knocked Out by an opponent's attack, put 3 damage counters on the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sharp Fang", cost: [], damage: "30", text: "" },
      { name: "Dark Streak", cost: [], damage: "40", text: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "TRR";
  public name: string = "Dark Gyarados";
  public fullName: string = "Dark Gyarados TRR 36";
  public text: string = "Dark Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
