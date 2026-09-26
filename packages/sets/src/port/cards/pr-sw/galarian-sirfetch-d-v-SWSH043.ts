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

export class GalarianSirfetchDVSWSH043 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Resolute Spear", powerType: PowerType.ABILITY, text: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of Fighting Energy from your other Pokémon to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Meteor Smash", cost: [], damage: "200", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "PR-SW";
  public name: string = "Galarian Sirfetch'd V";
  public fullName: string = "Galarian Sirfetch'd V PR-SW SWSH043";
  public text: string = "Galarian Sirfetch'd V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
