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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamAquaSManectric_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Electrike";
  public hp: number = 70;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may move any number of basic Energy cards attached to 1 of your Pokémon with Team Aqua in its name to another of your Pokémon. This power can't be used if Team Aqua's Manectric is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thunderspark", cost: [], damage: "50", text: "Does 10 damage to each Benched Pokémon (both yours and your opponent's) that has Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Manectric";
  public fullName: string = "Team Aqua's Manectric MA 4";
  public text: string = "Team Aqua's Manectric";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
