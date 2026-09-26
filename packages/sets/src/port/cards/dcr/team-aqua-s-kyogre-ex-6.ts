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

export class TeamAquaSKyogreEX_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Saver", powerType: PowerType.ABILITY, text: "If there are 4 or fewer Team Aqua Pokémon in play, this Pokémon can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aqua Impact", cost: [], damage: "80+", text: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "DCR";
  public name: string = "Team Aqua's Kyogre-EX";
  public fullName: string = "Team Aqua's Kyogre-EX DCR 6";
  public text: string = "Team Aqua's Kyogre-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
