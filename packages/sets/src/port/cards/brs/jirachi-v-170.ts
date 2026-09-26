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

export class JirachiV_170 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wish Connector", powerType: PowerType.ABILITY, text: "When 1 of your Basic Pokémon V is Knocked Out by damage from an attack from your opponent's Pokémon, you may move a basic Energy card from that Pokémon to another of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypnostrike", cost: [], damage: "60", text: "Both Active Pokémon are now Asleep." }
  ];
  public set: string = "BRS";
  public name: string = "Jirachi V";
  public fullName: string = "Jirachi V BRS 170";
  public text: string = "Jirachi V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialBoth(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
