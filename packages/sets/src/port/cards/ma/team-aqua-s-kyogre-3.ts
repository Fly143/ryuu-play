import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class TeamAquaSKyogre_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Saver", powerType: PowerType.ABILITY, text: "As long as the number of Pokémon in play (both yours and your opponent's) that has Team Aqua in its name is 3 or less, Team Aqua's Kyogre can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aqua Trip", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep." },
      { name: "Aqua Smash", cost: [], damage: "50+", text: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Kyogre";
  public fullName: string = "Team Aqua's Kyogre MA 3";
  public text: string = "Team Aqua's Kyogre";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
