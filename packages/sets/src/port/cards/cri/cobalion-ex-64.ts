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

export class CobalionEx_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metal Road", powerType: PowerType.ABILITY, text: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may use this Ability. Move any amount of Metal Energy from your other Pokémon to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Tackle", cost: [], damage: "200", text: "During your next turn, this Pokémon can't use attacks." }
  ];
  public set: string = "CRI";
  public name: string = "Cobalion ex";
  public fullName: string = "Cobalion ex CRI 64";
  public text: string = "Cobalion ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
