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

export class VolcanionEx_171 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scalding Steam", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Burned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Scorching Cyclone", cost: [], damage: "160", text: "Move an Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "JTG";
  public name: string = "Volcanion ex";
  public fullName: string = "Volcanion ex JTG 171";
  public text: string = "Volcanion ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
