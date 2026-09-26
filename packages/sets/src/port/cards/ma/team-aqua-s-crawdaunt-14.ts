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

export class TeamAquaSCrawdaunt_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Corphish";
  public hp: number = 80;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poison Reaction", cost: [], damage: "20+", text: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage." },
      { name: "Double Claw", cost: [], damage: "30+", text: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Crawdaunt";
  public fullName: string = "Team Aqua's Crawdaunt MA 14";
  public text: string = "Team Aqua's Crawdaunt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
