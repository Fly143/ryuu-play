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

export class TeamRocketSArbok_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Ekans";
  public hp: number = 130;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Potent Glare", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your opponent can't play any Pokémon that has an Ability from their hand, except for Team Rocket's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spinning Tail", cost: [], damage: "", text: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Arbok";
  public fullName: string = "Team Rocket's Arbok DRI 113";
  public text: string = "Team Rocket's Arbok";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
