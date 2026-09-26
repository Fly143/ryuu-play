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

export class TeamMagmaSGroudonEX_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Saver", powerType: PowerType.ABILITY, text: "If there are 4 or fewer Team Magma Pokémon in play, this Pokémon can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magma Quake", cost: [], damage: "80+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage." }
  ];
  public set: string = "DCR";
  public name: string = "Team Magma's Groudon-EX";
  public fullName: string = "Team Magma's Groudon-EX DCR 15";
  public text: string = "Team Magma's Groudon-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
